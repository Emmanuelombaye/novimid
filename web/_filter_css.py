import re, pathlib

def pretty_rules(css, selectors_substr):
    # extract rules whose selector mentions any substr
    out = []
    # naive: find selector{body}
    for m in re.finditer(r"([^{}]+)\{([^{}]+)\}", css):
        sel, body = m.group(1).strip(), m.group(2).strip()
        if any(s in sel for s in selectors_substr):
            # filter props of interest or keep full short rules
            props = [p.strip() for p in body.split(";") if p.strip()]
            interesting = [p for p in props if re.search(r"border-radius|box-shadow|gap|padding|margin|grid-template|display|flex|background|border|width|max-width|min-height|aspect|overflow|column", p, re.I)]
            if interesting:
                out.append(sel[:200] + " {\n  " + ";\n  ".join(interesting[:25]) + ";\n}")
    return out

base = pathlib.Path(r"I:\ceo\novimid\web")
sels = [
    "explore-tab", "explore-hero", "explore-card", "retro-explore",
    "explore-tab-menu", "explore-tab-link", "explore-tab-pane",
    "explore-tab-border", "explore-tab-fill", "explore-hero-grid",
    "explore-hero-card", "explore-hero-content"
]
all_out = []
for f in ["yucca_Tabs.css", "yucca_website.css", "yucca_index.css", "yucca_retro.css"]:
    css = (base / f).read_text(encoding="utf-8", errors="replace")
    rules = pretty_rules(css, sels)
    all_out.append(f"##### {f} ({len(rules)} rules) #####")
    # dedupe preserve order
    seen = set()
    for r in rules:
        key = r[:120]
        if key in seen: continue
        seen.add(key)
        all_out.append(r)
        all_out.append("")

text = "\n".join(all_out)
(base / "css_explore_filtered.txt").write_text(text, encoding="utf-8")
print(text[:12000])
print("\n...TOTAL_CHARS...", len(text))

# also pull card background / shadow specifics
for f in ["yucca_Tabs.css", "yucca_website.css", "yucca_index.css"]:
    css = (base / f).read_text(encoding="utf-8", errors="replace")
    for term in ["box-shadow", "rounded-3xl", "explore-hero-card", "explore-tab-menu", "explore-tab-link"]:
        if term in css:
            print(f"HAS {term} in {f}")
