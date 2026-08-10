from pathlib import Path
import re

html = Path(r"I:\ceo\novimid\web\_yucca_hiw.html").read_text(encoding="utf-8", errors="ignore")
print("len", len(html))

for pat in [
    "how-it",
    "sticky",
    "scroll",
    "parallax",
    "gsap",
    "framer",
    "animate",
    "step",
    "pin",
    "reveal",
    "float",
    "marquee",
    "chip",
    "drift",
    "lenis",
    "motion",
    "retro-how",
    "hiw",
]:
    hits = re.findall(rf"[\w-]*{pat}[\w-]*", html, re.I)
    uniq = sorted(set(hits))[:40]
    if uniq:
        print(pat, "->", uniq)

print("\nSCRIPTS")
for s in re.findall(r'src="([^"]+)"', html):
    if any(x in s for x in ("js", "chunk", "astro", "client", "hoisted")):
        print(s)

print("\nSTYLESHEETS")
for s in re.findall(r'href="([^"]+\.css[^"]*)"', html):
    print(s)

# Extract class names containing how
classes = set(re.findall(r'class="([^"]+)"', html))
interesting = sorted(
    c
    for c in classes
    if any(k in c.lower() for k in ("how", "step", "scroll", "sticky", "anim", "float", "pin", "journey", "process"))
)
print("\nINTERESTING CLASSES")
for c in interesting[:80]:
    print(c[:200])
