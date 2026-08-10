from pathlib import Path
import re

html = Path(r"I:/ceo/novimid/web/_yucca_treatments.html").read_text(
    encoding="utf-8", errors="ignore"
)

# Section order inside weight-loss stack
m = re.search(
    r'data-explore-section-stack="weight-loss"[^>]*>(.*?)(?=data-explore-section-stack="longevity"|</div>\s*</div>\s*<script)',
    html,
    re.S,
)
if m:
    chunk = m.group(1)
    for tag in [
        "retro-happy",
        "retro-protocol",
        "retro-calculator",
        "retro-clinical",
        "retro-expect",
        "retro-knowall",
        "designed-section",
        "Why Yucca",
        "Personalized treatments",
    ]:
        print("WL stack", tag, chunk.count(tag))

# explore hero WL product names and tags
prod = re.findall(
    r'explore-hero-product-name[^>]*>(.*?)</(?:div|p|span).*?explore-hero-product-desc[^>]*>(.*?)</(?:div|p|span)',
    html[:120000],
    re.S,
)
for n, d in prod[:4]:
    print("PROD", re.sub(r"<[^>]+>", "", n).strip(), "|", re.sub(r"<[^>]+>", "", d).strip()[:60])

tags = re.findall(r'explore-hero-product-tag[^>]*>(.*?)</span>', html[:120000], re.S)
print("TAGS", [re.sub(r"<[^>]+>", "", t).strip() for t in tags[:8]])

# footer chip text
chips = re.findall(r'explore-hero-chip[^>]*>(.*?)</span>', html[:120000], re.S)
print("CHIPS", [re.sub(r"<[^>]+>", "", c).strip() for c in chips[:6]])

footer = re.findall(r'explore-hero-card-footer.*?</div>', html[:120000], re.S)
if footer:
    t = re.sub(r"<[^>]+>", " ", footer[0])
    t = re.sub(r"\s+", " ", t).strip()
    print("FOOTER", t[:200])

# price row visibility
print("badge-only hidden row", "explore-hero-price-row--badge-only" in html)
print("product tag class count", html.count("explore-hero-product-tag"))

# sections after all stacks (page level)
for pat in [
    "What people love",
    "Why Yucca",
    "Personalized treatments, built",
    "Verified Trustpilot",
    "Choose your treatment",
]:
    print("PAGE", pat, pat in html)

# NAD stack order
m2 = re.search(
    r'data-explore-section-stack="longevity"[^>]*>(.*?)(?=data-explore-section-stack="muscle-recovery")',
    html,
    re.S,
)
if m2:
    chunk = m2.group(1)
    order = []
    for cls in [
        "retro-clinical",
        "retro-protocol",
        "retro-expect",
        "retro-knowall",
        "retro-calculator",
        "retro-happy",
    ]:
        pos = chunk.find(cls)
        if pos >= 0:
            order.append((pos, cls))
    order.sort()
    print("NAD order", [c for _, c in order])

# happy reviews inner
rev = re.search(r'retro-happy__reviews-inner.*?</div>\s*</div>', html, re.S)
if rev:
    print("REVIEWS HTML snippet len", len(rev.group(0)))

Path(r"I:/ceo/novimid/web/_yucca_gap_report.txt").write_text("done", encoding="utf-8")
