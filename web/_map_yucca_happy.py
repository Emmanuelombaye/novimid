from pathlib import Path
import re, json

html = Path(r"I:/ceo/novimid/web/_yucca_treatments.html").read_text(
    encoding="utf-8", errors="ignore"
)

# Extract happy headings
for m in re.finditer(r'retro-happy__heading[^>]*>(.*?)</h2>', html, re.S):
    t = re.sub(r"<[^>]+>", "", m.group(1))
    t = re.sub(r"\s+", " ", t).replace("\u2011", "-").strip()
    print("HAPPY_H2:", t[:160])

# Extract patient cards metrics from WL
metrics = re.findall(
    r'retro-happy__metric-lbs[^>]*>(.*?)</span>.*?retro-happy__metric-time[^>]*>(.*?)</(?:span|div)',
    html,
    re.S,
)
print("metrics sample", len(metrics))
for a, b in metrics[:8]:
    print("  ", re.sub(r"<[^>]+>", "", a).strip(), re.sub(r"<[^>]+>", "", b).strip())

names = re.findall(r'retro-happy__pill-name[^>]*>(.*?)</span>', html, re.S)
print("names", [re.sub(r"<[^>]+>|<[^>]+>", "", n).strip() for n in names[:12]])

imgs = re.findall(r'retro-happy__photo[^>]*src="([^"]+)"', html)
print("happy imgs", sorted(set(imgs))[:30])

# H2 list safe
h2s = re.findall(r"<h2[^>]*>(.*?)</h2>", html, re.S)
seen = []
for h in h2s:
    t = re.sub(r"<[^>]+>", "", h)
    t = re.sub(r"\s+", " ", t).replace("\u2011", "-").replace("\u2019", "'").strip()
    if t and t not in seen:
        seen.append(t)
Path(r"I:/ceo/novimid/web/_yucca_h2s.txt").write_text("\n".join(seen), encoding="utf-8")
print("H2 count", len(seen))
for t in seen:
    print("H2:", t[:140])
