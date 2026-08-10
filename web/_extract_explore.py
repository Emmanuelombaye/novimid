import re, pathlib
html = pathlib.Path(r"I:\ceo\novimid\web\treatments_page.html").read_text(encoding="utf-8", errors="replace")
idx = html.lower().find("explore our treatments")
print("IDX", idx)
chunk = html[max(0, idx - 1500) : idx + 25000]
pathlib.Path(r"I:\ceo\novimid\web\explore_chunk.html").write_text(chunk, encoding="utf-8")
print("CHUNK_LEN", len(chunk))
classes = sorted(set(re.findall(r'class="([^"]+)"', chunk)))
for c in classes:
    low = c.lower()
    if any(k in low for k in ["explore", "tab", "retro-", "panel", "card", "split", "product", "detail"]):
        print("CLASS:", c[:350])
for a in sorted(set(re.findall(r'(data-[a-zA-Z0-9_-]+="[^"]*")', chunk))):
    low = a.lower()
    if any(k in low for k in ["tab", "explore", "treatment", "panel"]):
        print("DATA:", a[:250])
styles = re.findall(r'style="([^"]+)"', chunk)
print("INLINE_STYLES_COUNT", len(styles))
for s in styles[:40]:
    print("STYLE:", s[:300])
print("CSS_LINKS:")
for h in re.findall(r'href="(/_astro/[^"]+\.css[^"]*)"', html)[:30]:
    print(h)
