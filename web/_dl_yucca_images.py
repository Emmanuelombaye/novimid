"""Download all Yucca treatment images needed for the clone."""
import urllib.request, os, sys, time

DEST = r"I:\ceo\novimid\web\public\yucca"
os.makedirs(DEST, exist_ok=True)

IMAGES = [
    # Tab images
    ("Weight-Loss-Image-from-TinyPNG.avif", "tab-wl.avif"),
    ("Longevity--Image-.avif", "tab-nad.avif"),
    ("Muscle-Recovery-Image.avif", "tab-sermorelin.avif"),
    # Hero card backgrounds
    ("Personalized-GLP-1-Injections.avif", "product-wl-full.avif"),
    ("Nad-Yucca-Image.avif", "product-nad-alt.avif"),
    ("yucca-health-product-nad.avif", "product-nad.avif"),
    ("expt-sermorelin-vial.png", "product-sermorelin.png"),
    # WL product thumbs
    ("expt-wl-sema.jpg", "thumb-sema.jpg"),
    ("expt-wl-tirz.jpg", "thumb-tirz.jpg"),
    # Price badge
    ("lowest-price-ever-badge-6-mo.png", "badge-price.png"),
    ("lowest-price-ever-badge-3-mo.png", "badge-price-3mo.png"),
    # Vials for below-fold sections
    ("expt-tirz-sema-vials-together.png", "vials-wl.png"),
    ("explore-nad-protocol-vials-figma.png", "vials-nad.png"),
    ("expt-personalized-sermorelin-vial.png", "vial-sermorelin.png"),
    ("expt-personalized-sermorelin-vial-orange.jpg", "vial-sermorelin-orange.jpg"),
    ("lp-lon-retro-4-lc-1.png", "vial-nad-lp.png"),
    # Clinical section vials
    ("personalized-semaglutide-glp-1-injection-vial-yucca-health.avif", "vial-sema.avif"),
    ("personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif", "vial-tirz.avif"),
    # Expect/timeline images - WL
    ("GLP1-Retro/expect-week-1-4.avif", "expect-wl-1.avif"),
    ("GLP1-Retro/expect-week-4-12.avif", "expect-wl-2.avif"),
    ("GLP1-Retro/expect-month-3.avif", "expect-wl-3.avif"),
    # Expect/timeline images - NAD
    ("exp-hiw-lon-week-1.avif", "expect-nad-1.avif"),
    ("exp-hiw-lon-week-2.avif", "expect-nad-2.avif"),
    ("exp-hiw-lon-week-3.avif", "expect-nad-3.avif"),
    # Expect/timeline images - Sermorelin
    ("exp-hiw-mr-week-1.avif", "expect-ser-1.avif"),
    ("exp-hiw-mr-week-2.avif", "expect-ser-2.avif"),
    ("exp-hiw-mr-week-3.avif", "expect-ser-3.avif"),
    # Logo
    ("new-yucca-logo.svg", "logo.svg"),
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Referer": "https://tryyucca.com/",
    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
}

ok = 0
fail = 0
skip = 0

for src_path, dest_name in IMAGES:
    dest_file = os.path.join(DEST, dest_name)
    if os.path.exists(dest_file) and os.path.getsize(dest_file) > 500:
        print(f"SKIP {dest_name}")
        skip += 1
        continue
    url = f"https://tryyucca.com/{src_path}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        with open(dest_file, "wb") as f:
            f.write(data)
        print(f"OK   {dest_name} ({len(data)//1024}KB)")
        ok += 1
        time.sleep(0.3)
    except Exception as e:
        print(f"FAIL {dest_name}: {e}")
        fail += 1

print(f"\nDone: {ok} downloaded, {skip} skipped, {fail} failed")
