"""
Regenerate Novimid card / tab product assets for responsive cards.

- Trim to opaque content
- Fit on a square transparent canvas with safe padding (never edge-flush)
- Emit high-res card heroes + crisp tab thumbs
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

BASE = Path(__file__).resolve().parent / "images"

CARD_SIZE = 1024
TAB_SIZE = 256
SAFE_PAD = 0.12  # 12% margin on all sides inside canvas


def content_bbox(im: Image.Image, alpha_thresh: int = 12) -> tuple[int, int, int, int]:
    """Bounding box of meaningfully opaque pixels."""
    rgba = im.convert("RGBA")
    alpha = rgba.getchannel("A")
    # Slightly dilate by also treating near-black studio leftovers as empty
    pixels = rgba.load()
    w, h = rgba.size
    xs: list[int] = []
    ys: list[int] = []
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a <= alpha_thresh:
                continue
            # Ignore near-black fringe that isn't product glass highlight
            if r <= 18 and g <= 18 and b <= 18 and a < 220:
                continue
            xs.append(x)
            ys.append(y)
    if not xs:
        box = alpha.getbbox()
        if box is None:
            return (0, 0, w, h)
        return box
    return (min(xs), min(ys), max(xs) + 1, max(ys) + 1)


def fit_on_square(src: Image.Image, size: int = CARD_SIZE, pad: float = SAFE_PAD) -> Image.Image:
    src = src.convert("RGBA")
    left, top, right, bottom = content_bbox(src)
    cropped = src.crop((left, top, right, bottom))

    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    inner = int(size * (1 - 2 * pad))
    cw, ch = cropped.size
    scale = min(inner / cw, inner / ch)
    nw = max(1, int(round(cw * scale)))
    nh = max(1, int(round(ch * scale)))
    resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)
    ox = (size - nw) // 2
    oy = (size - nh) // 2
    canvas.paste(resized, (ox, oy), resized)
    return canvas


def save(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, format="PNG", optimize=True)
    print(f"wrote {path.name} ({im.size[0]}x{im.size[1]})")


def main() -> None:
    jobs = [
        ("novimid-card-glp1.png", "novimid-card-glp1.png", "tab-metabolic.png"),
        ("novimid-card-peptide.png", "novimid-card-peptide.png", "tab-peptides.png"),
        ("novimid-card-trt.png", "novimid-card-trt.png", "tab-hormones.png"),
        ("product-glp1-v2.png", "product-glp1-v2.png", None),
        ("product-peptide-v2.png", "product-peptide-v2.png", None),
        ("product-trt-v2.png", "product-trt-v2.png", None),
        ("icon-vial-a-v2.png", "icon-vial-a-v2.png", None),
        ("icon-vial-b-v2.png", "icon-vial-b-v2.png", None),
    ]

    for src_name, out_name, tab_name in jobs:
        src_path = BASE / src_name
        if not src_path.exists():
            print(f"skip missing {src_name}")
            continue
        src = Image.open(src_path)
        card = fit_on_square(src, CARD_SIZE if "icon-vial" not in src_name else 256)
        if "icon-vial" in src_name:
            card = fit_on_square(src, 256, pad=0.10)
        save(card, BASE / out_name)

        if tab_name:
            tab = fit_on_square(src, TAB_SIZE, pad=0.08)
            save(tab, BASE / tab_name)

    # Keep aliases in sync with peptide / glp1 square masters
    for alias, master in [
        ("novimid-vials-pair.png", "product-glp1-v2.png"),
        ("novimid-vial-single.png", "product-peptide-v2.png"),
    ]:
        master_path = BASE / master
        if master_path.exists():
            Image.open(master_path).save(BASE / alias, format="PNG", optimize=True)
            print(f"synced {alias} <- {master}")

    print("done")


if __name__ == "__main__":
    main()
