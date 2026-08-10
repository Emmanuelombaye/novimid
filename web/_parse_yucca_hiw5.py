from pathlib import Path
import re

script = Path(r"I:\ceo\novimid\web\_yucca_hiw_script.js").read_text(encoding="utf-8", errors="ignore")
html = Path(r"I:\ceo\novimid\web\_yucca_hiw.html").read_text(encoding="utf-8", errors="ignore")

# Find all inline scripts
scripts = re.findall(r"<script[^>]*>([\s\S]*?)</script>", html)
print("script blocks", len(scripts))
for i, s in enumerate(scripts):
    keys = []
    for k in ("hiw-step", "scale(", "transform", "sticky", "IntersectionObserver", "requestAnimationFrame", "scrollY"):
        if k in s:
            keys.append(k)
    if keys:
        Path(rf"I:\ceo\novimid\web\_yucca_script_{i}.js").write_text(s, encoding="utf-8")
        print(i, "len", len(s), "keys", keys)

# Search whole html for scale on cards
for m in re.finditer(r".{0,120}hiw-step-card.{0,200}", html):
    t = re.sub(r"\s+", " ", m.group(0))
    if "scale" in t or "opacity" in t or "transform" in t:
        Path(r"I:\ceo\novimid\web\_yucca_card_ctx.txt").write_text(t, encoding="utf-8")
        print("CARD CTX", t[:500])

# Look for module scripts that might control sticky scale
for m in re.finditer(r"type=\"module\"[^>]*>", html):
    print("module at", m.start(), m.group(0)[:120])
