import re, pathlib
base = pathlib.Path(r"I:\ceo\novimid\web")

# Pull base explore-tab-menu / link / pane / hero-card rules (non huge retro overrides)
needles = [
    ".explore-tab-menu",
    ".explore-tab-link",
    ".explore-tab-pane",
    ".explore-tab-border",
    ".explore-tab-fill",
    ".explore-hero-card",
    ".explore-card",
    ".explore-hero-grid",
    ".explore-hero-content",
    ".retro-explore-tabs-wrap",
    ".explore-tab-link[data-tone=wl]",
    ".explore-card[data-card=wl]",
]

def find_rules(css, needle):
    results = []
    for m in re.finditer(r"([^{}]+)\{([^{}]+)\}", css):
        sel = m.group(1).strip()
        if needle in sel and len(sel) < 220:
            # skip deep retro pane overrides for this dump except tabs-wrap base
            if "[data-explore-tab-pane=" in sel and "guarantee" in sel:
                continue
            body = m.group(2).strip()
            results.append((sel, body))
    return results

lines = []
for fname in ["yucca_website.css", "yucca_index.css", "yucca_Tabs.css"]:
    css = (base/fname).read_text(encoding="utf-8", errors="replace")
    lines.append(f"\n===== {fname} =====")
    for needle in needles:
        rules = find_rules(css, needle)
        # prefer shorter selectors first
        rules.sort(key=lambda x: len(x[0]))
        shown = 0
        for sel, body in rules:
            # focus layout props
            props = [p.strip() for p in body.split(";") if p.strip()]
            keep = [p for p in props if re.search(r"border-radius|box-shadow|gap|padding|margin|grid|display|flex|width|max-width|min-height|background|border[^a-z]|aspect|column|row|overflow|position|top|left|right|bottom|transform", p, re.I)]
            if not keep:
                continue
            # limit noise from media-query heavy duplicates - still include
            lines.append(f"{sel} {{")
            for p in keep[:30]:
                lines.append(f"  {p};")
            lines.append("}")
            shown += 1
            if shown >= 8:
                break

# CSS vars for retro shadow
for fname in ["yucca_retro.css", "yucca_Tabs.css", "yucca_index.css"]:
    css = (base/fname).read_text(encoding="utf-8", errors="replace")
    for m in re.finditer(r"--color-retro-[a-zA-Z0-9-]+:\s*[^;]+;", css):
        lines.append("VAR " + m.group(0))

text = "\n".join(lines)
(base/"css_base_explore.txt").write_text(text, encoding="utf-8")
print(text[:14000])
