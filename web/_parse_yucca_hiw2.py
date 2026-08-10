from pathlib import Path
import re
import urllib.request

html = Path(r"I:\ceo\novimid\web\_yucca_hiw.html").read_text(encoding="utf-8", errors="ignore")

# Download how-it-works CSS
css_url = "https://tryyucca.com/_astro/how-it-works.D7cmT7eP.css"
css_path = Path(r"I:\ceo\novimid\web\_yucca_hiw.css")
try:
    with urllib.request.urlopen(css_url, timeout=30) as r:
        css = r.read().decode("utf-8", errors="ignore")
    css_path.write_text(css, encoding="utf-8")
    print("css len", len(css))
except Exception as e:
    print("css fetch failed", e)
    css = css_path.read_text(encoding="utf-8") if css_path.exists() else ""

# Extract hiw-related CSS rules (approx)
for key in ["hiw-step", "scroll-animate", "data-scroll", "sticky", "hiw-hero", "retro-hiw"]:
    print("\n===", key, "===")
    for m in re.finditer(rf"[^{{}}]*{key}[^{{}}]*\{{[^{{}}]*\}}", css, re.I):
        snippet = re.sub(r"\s+", " ", m.group(0))[:300]
        print(snippet)

# Extract HTML chunks around hiw-step
print("\n=== HTML STRUCTURE ===")
idxs = [m.start() for m in re.finditer(r"hiw-step", html)]
print("hiw-step count", len(idxs))
if idxs:
    chunk = html[max(0, idxs[0] - 200) : idxs[0] + 2500]
    # simplify
    chunk = re.sub(r">\s+<", "><", chunk)
    print(chunk[:2000])

# scroll animate attributes
attrs = set(re.findall(r'data-scroll-[a-z-]+="[^"]*"', html))
print("\nDATA SCROLL ATTRS", sorted(attrs)[:40])

# Find scrollAnimate script inline
for m in re.finditer(r"scrollAnimate|data-scroll-animate|IntersectionObserver", html):
    start = max(0, m.start() - 100)
    end = min(len(html), m.start() + 400)
    print("\nCTX", re.sub(r"\s+", " ", html[start:end])[:350])
