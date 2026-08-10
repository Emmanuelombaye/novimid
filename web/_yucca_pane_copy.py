from pathlib import Path
import re

html = Path(r"I:/ceo/novimid/web/_yucca_treatments.html").read_text(
    encoding="utf-8", errors="ignore"
)

# split by tab panes
panes = re.split(r'data-explore-tab-pane="([^"]+)"', html)
for i in range(1, len(panes), 2):
    name = panes[i]
    chunk = panes[i + 1][:8000]
    chip = re.search(r'explore-hero-chip[^>]*>([^<]+)', chunk)
    stock = re.search(r'explore-hero-stock[^>]*>.*?>([^<]+)</span>', chunk, re.S)
    footer = re.search(r'explore-hero-card-footer[^>]*>(.*?)</div>', chunk, re.S)
    print("PANE", name)
    if chip:
        print("  chip", chip.group(1).strip())
    if footer:
        t = re.sub(r"<[^>]+>", " ", footer.group(1))
        print("  footer", re.sub(r"\s+", " ", t).strip()[:120])
    prods = re.findall(
        r'explore-hero-product-name[^>]*>(.*?)</.*?explore-hero-product-desc[^>]*>(.*?)</',
        chunk,
        re.S,
    )
    for n, d in prods[:3]:
        print("  prod", re.sub(r"<[^>]+>", "", n).strip(), "|", re.sub(r"<[^>]+>", "", d).strip())

# retro-home-reviews heading
m = re.search(r'retro-home-reviews[^>]*>.*?retro-home-reviews-head.*?<h2[^>]*>(.*?)</h2>', html, re.S)
if m:
    print("REVIEWS H2", re.sub(r"<[^>]+>", "", m.group(1)).strip()[:100])
