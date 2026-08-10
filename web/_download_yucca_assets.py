"""Download Yucca treatments assets from tryyucca.com into public/yucca/."""
from __future__ import annotations

import re
import urllib.request
from pathlib import Path

BASE = "https://tryyucca.com"
OUT = Path(__file__).resolve().parent / "public" / "yucca"
HTML = Path(__file__).resolve().parent / "_yucca_treatments.html"
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
)

# Core explore-hero assets (explicit list)
EXPLICIT = [
    "/Personalized-GLP-1-Injections.avif",
    "/yucca-health-product-nad.avif",
    "/expt-sermorelin-vial.png",
    "/expt-wl-sema.jpg",
    "/expt-wl-tirz.jpg",
    "/Weight-Loss-Image-from-TinyPNG.avif",
    "/Longevity--Image-.avif",
    "/Muscle-Recovery-Image.avif",
    "/explore-price-badge.png",
    "/explore-nad-product.avif",
    "/explore-nad-product-alt.avif",
    "/yucca-health-logo.svg",
]


def slug(path: str) -> str:
    name = path.strip("/").replace("/", "-")
    return name or "root"


def download(url_path: str) -> None:
    url = BASE + url_path
    dest = OUT / slug(url_path)
    if dest.exists() and dest.stat().st_size > 0:
        print(f"skip {dest.name}")
        return
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    dest.write_bytes(data)
    print(f"ok   {url_path} -> {dest.name} ({len(data)} bytes)")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    paths: set[str] = set(EXPLICIT)
    if HTML.exists():
        text = HTML.read_text(encoding="utf-8", errors="ignore")
        for m in re.findall(
            r'(?:src|href|url\()["\']?(/[^"\')\s#?]+\.(?:avif|png|jpg|jpeg|svg|webp))',
            text,
            flags=re.I,
        ):
            paths.add(m.split("?")[0])

    # Also try common badge names
    for name in [
        "/explore-lowest-price-badge.png",
        "/explore-price-sticker.png",
        "/expt-price-badge.png",
        "/badge-price.png",
    ]:
        paths.add(name)

    failed: list[str] = []
    for p in sorted(paths):
        try:
            download(p)
        except Exception as e:
            failed.append(f"{p}: {e}")
            print(f"FAIL {p}: {e}")

    if failed:
        print("\n--- FAILED ---")
        for f in failed:
            print(f)


if __name__ == "__main__":
    main()
