"""Regenerate treatment card cutouts and derived tab/icon assets."""
import io
import os
from collections import deque

from PIL import Image

try:
    from rembg import remove as rembg_remove

    HAS_REMBG = True
except ImportError:
    HAS_REMBG = False


def is_background_pixel(r: int, g: int, b: int) -> bool:
    if abs(r - g) > 18 or abs(g - b) > 18:
        return False
    avg = (r + g + b) / 3
    return 130 <= avg <= 225


def flood_fill_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    visited: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.popleft()
        if (x, y) in visited or x < 0 or y < 0 or x >= w or y >= h:
            continue
        visited.add((x, y))
        r, g, b, a = px[x, y]
        if is_background_pixel(r, g, b):
            px[x, y] = (r, g, b, 0)
            queue.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    return img


def convert_to_transparent(input_path: str, output_path: str) -> None:
    if HAS_REMBG:
        data = open(input_path, "rb").read()
        result = rembg_remove(data)
        img = Image.open(io.BytesIO(result)).convert("RGBA")
    else:
        img = flood_fill_background(Image.open(input_path))

    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save(output_path, "PNG", optimize=True)
    print(f"Saved {output_path} ({img.size[0]}x{img.size[1]})")


def make_thumb(src_path: str, output_path: str, size: int = 192) -> None:
    img = Image.open(src_path).convert("RGBA")
    img.thumbnail((size, size), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ox = (size - img.size[0]) // 2
    oy = (size - img.size[1]) // 2
    canvas.paste(img, (ox, oy), img)
    canvas.save(output_path, "PNG", optimize=True)
    print(f"Saved thumb {output_path}")


base = os.path.dirname(os.path.abspath(__file__))
images = os.path.join(base, "images")

convert_to_transparent(
    os.path.join(base, "Metabolic GLP-1.jfif"),
    os.path.join(images, "novimid-card-glp1.png"),
)
convert_to_transparent(
    os.path.join(base, "Peptide Therapy (Single Premium Vial).jfif"),
    os.path.join(images, "novimid-card-peptide.png"),
)
convert_to_transparent(
    os.path.join(base, "TRT.jfif"),
    os.path.join(images, "novimid-card-trt.png"),
)

make_thumb(os.path.join(images, "novimid-card-glp1.png"), os.path.join(images, "product-glp1-v2.png"), 512)
make_thumb(os.path.join(images, "novimid-card-peptide.png"), os.path.join(images, "product-peptide-v2.png"), 512)
make_thumb(os.path.join(images, "novimid-card-trt.png"), os.path.join(images, "product-trt-v2.png"), 512)
make_thumb(os.path.join(images, "novimid-card-glp1.png"), os.path.join(images, "icon-vial-a-v2.png"), 192)
make_thumb(os.path.join(images, "novimid-card-peptide.png"), os.path.join(images, "icon-vial-b-v2.png"), 192)
