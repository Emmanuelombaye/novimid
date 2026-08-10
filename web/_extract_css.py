import re, pathlib
out = []
files = list(pathlib.Path(r"I:\ceo\novimid\web").glob("yucca_*.css"))
keys = ["explore", "retro-explore", "tab-pane", "tab-link", "tab-menu", "tab-fill", "tab-border"]
for f in files:
    css = f.read_text(encoding="utf-8", errors="replace")
    out.append(f"=== {f.name} len={len(css)} ===")
    # split roughly by }
    parts = css.split("}")
    for p in parts:
        low = p.lower()
        if any(k in low for k in keys):
            rule = (p + "}").strip()
            if any(prop in rule for prop in ["border-radius", "box-shadow", "gap", "padding", "grid", "flex", "display", "border", "background"]):
                out.append(rule[:800])
                out.append("---")
pathlib.Path(r"I:\ceo\novimid\web\css_explore_rules.txt").write_text("\n".join(out), encoding="utf-8")
print("rules_chars", sum(len(x) for x in out))
print("files", [(f.name, f.stat().st_size) for f in files])
# also print condensed structure from chunk
chunk = pathlib.Path(r"I:\ceo\novimid\web\explore_chunk.html").read_text(encoding="utf-8")
# simplify tags with classes only
tags = re.findall(r"<(section|div|a|button|h[1-6]|p|img|ul|li|span|nav)([^>]*)>", chunk)
depth_info = []
for i, (tag, attrs) in enumerate(tags[:120]):
    cls = re.search(r'class="([^"]*)"', attrs)
    data = re.findall(r'(data-[a-zA-Z0-9_-]+="[^"]*")', attrs)
    c = cls.group(1) if cls else ""
    # keep short meaningful
    interesting = any(k in c for k in ["explore", "retro-explore", "tab", "u-container"]) or data
    if interesting:
        short = " ".join(c.split()[:8])
        depth_info.append(f"{tag} .{short} {' '.join(data)[:120]}")
pathlib.Path(r"I:\ceo\novimid\web\explore_structure.txt").write_text("\n".join(depth_info), encoding="utf-8")
print("STRUCTURE_LINES", len(depth_info))
for line in depth_info[:60]:
    print(line)
