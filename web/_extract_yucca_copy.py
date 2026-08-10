from pathlib import Path
import re, json

html = Path(r"I:\ceo\novimid\web\_yucca_treatments.html").read_text(
    encoding="utf-8", errors="ignore"
)

def strip(t: str) -> str:
    t = re.sub(r"<[^>]+>", "", t)
    return re.sub(r"\s+", " ", t).strip()

titles = [strip(t) for t in re.findall(
    r'explore-hero-card-title[^>]*>(.*?)</h2>', html, re.S
)]
copies = [strip(t) for t in re.findall(
    r'explore-hero-copy[^>]*>(.*?)</p>', html, re.S
)]
prods = [strip(t) for t in re.findall(
    r'explore-hero-product-name[^>]*>(.*?)</(?:div|p|span)', html, re.S
)]
descs = [strip(t) for t in re.findall(
    r'explore-hero-product-desc[^>]*>(.*?)</(?:div|p|span)', html, re.S
)]
tabs = [strip(t) for t in re.findall(
    r'data-tone="[^"]+"[^>]*>.*?<span class="relative z-\[2\]"[^>]*>(.*?)</span>',
    html, re.S,
)]
if not tabs:
    tabs = [strip(t) for t in re.findall(
        r'data-explore-tab-link[^>]*>.*?<span[^>]*z-\[2\][^>]*>(.*?)</span>',
        html, re.S,
    )]
includes = [strip(t) for t in re.findall(
    r'explore-hero-plan-item[^>]*>.*?</svg></div><div[^>]*>(.*?)</div>',
    html, re.S,
)]
guarantee = [strip(t) for t in re.findall(
    r'explore-hero-guarantee-card[^>]*>.*?<p[^>]*>(.*?)</p>',
    html, re.S,
)]
chips = [strip(t) for t in re.findall(
    r'explore-hero-chip[^>]*>(.*?)</(?:span|div)', html, re.S
)][:6]
stocks = [strip(t) for t in re.findall(
    r'explore-hero-stock[^>]*>(.*?)</(?:span|div)', html, re.S
)][:6]

out = {
    "tabs": tabs[:6],
    "titles": titles[:6],
    "copies": copies[:6],
    "products": list(zip(prods[:8], descs[:8])),
    "includes": includes[:12],
    "guarantee": guarantee[:3],
    "chips": chips,
    "stocks": stocks,
}
Path(r"I:\ceo\novimid\web\_yucca_copy.json").write_text(
    json.dumps(out, indent=2), encoding="utf-8"
)
print(json.dumps(out, indent=2)[:4000])
print("yucca assets:")
for p in sorted(Path(r"I:\ceo\novimid\web\public\yucca").glob("*")):
    print(p.name, p.stat().st_size)
