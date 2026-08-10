from pathlib import Path
import re
import urllib.request

url = "https://tryyucca.com/treatments/"
out = Path(r"I:\ceo\novimid\web\_yucca_treatments.html")
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=45) as r:
    html = r.read().decode("utf-8", errors="ignore")
out.write_text(html, encoding="utf-8")
print("len", len(html))

classes = set(re.findall(r'class="([^"]+)"', html))
interesting = sorted(
    c
    for c in classes
    if any(
        k in c.lower()
        for k in (
            "treat",
            "tab",
            "plan",
            "glp",
            "product",
            "vial",
            "qualify",
            "guarantee",
            "include",
            "weight",
            "split",
            "hero",
        )
    )
)
print("CLASSES", len(interesting))
for c in interesting[:80]:
    print(c[:240])

print("\nSTYLES")
for s in re.findall(r'href="([^"]+\.css[^"]*)"', html):
    print(s)

# Extract a chunk around Personalized / GLP
for key in ["Personalized", "Weight Loss", "See if I qualify", "All Plans Include", "Guarantee"]:
    i = html.find(key)
    print("\nKEY", key, i)
    if i >= 0:
        chunk = re.sub(r">\s+<", "><", html[max(0, i - 400) : i + 800])
        chunk = re.sub(r"<svg[\s\S]*?</svg>", "<svg/>", chunk)
        print(chunk[:1200])
