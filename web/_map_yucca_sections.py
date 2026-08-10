from pathlib import Path
import re, json

html = Path(r"I:/ceo/novimid/web/_yucca_treatments.html").read_text(
    encoding="utf-8", errors="ignore"
)
print("len", len(html))

for pat in [
    "retro-happy",
    "retro-clinical",
    "retro-calculator",
    "retro-knowall",
    "retro-protocol",
    "designed-section",
    "explore-hero",
    "explore-tab",
    "data-explore-section-stack",
    "before-after",
]:
    print(pat, html.count(pat))

stacks = re.findall(r'data-explore-section-stack="([^"]+)"', html)
print("stacks", stacks)

h2s = re.findall(r"<h2[^>]*>(.*?)</h2>", html, re.S)
seen = []
for h in h2s:
    t = re.sub(r"<[^>]+>", "", h)
    t = re.sub(r"\s+", " ", t).strip()
    if t and t not in seen:
        seen.append(t)
        print("H2:", t[:120])

# class tokens that look like section roots
classes = set(re.findall(r'class="([^"]+)"', html))
interesting = sorted(
    c
    for c in classes
    if any(
        k in c
        for k in (
            "retro-",
            "explore-",
            "designed-",
            "happy",
            "clinical",
            "knowall",
            "protocol",
            "calculator",
        )
    )
)
Path(r"I:/ceo/novimid/web/_yucca_section_classes.txt").write_text(
    "\n".join(interesting[:400]), encoding="utf-8"
)
print("interesting classes", len(interesting))

# Extract image srcs under treatments-like paths
imgs = sorted(set(re.findall(r'(?:src|srcset)="(/[^"\s]+\.(?:avif|png|jpg|jpeg|webp|svg))"', html)))
Path(r"I:/ceo/novimid/web/_yucca_img_list.txt").write_text("\n".join(imgs), encoding="utf-8")
print("imgs", len(imgs))
for i in imgs[:60]:
    print(i)
