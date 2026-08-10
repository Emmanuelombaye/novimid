from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
start = css.find("@media(min-width:768px)")
# find longevity includes block
idx = css.find("longevity] .explore-hero-includes")
while idx != -1:
    chunk = css[idx:idx+600]
    if "768" in css[max(0,idx-200):idx] or "min-width" in css[max(0,idx-200):idx]:
        Path(r"I:\ceo\novimid\web\_nad_desktop.txt").write_text(chunk, encoding="utf-8")
        break
    idx = css.find("longevity] .explore-hero-includes", idx+1)
else:
    # dump all longevity includes occurrences
    idx = 0
    parts = []
    while len(parts) < 10:
        i = css.find("longevity] .explore-hero-includes", idx)
        if i == -1: break
        parts.append(css[i:i+500])
        idx = i + 1
    Path(r"I:\ceo\novimid\web\_nad_desktop.txt").write_text("\n---\n".join(parts), encoding="utf-8")

# NAD card bg position/size
for term in ["Nad-Yucca-Image", "longevity] .explore-card", "longevity] .explore-hero-card[data-card=nad]"]:
    i = css.find(term)
    if i >= 0:
        with open(r"I:\ceo\novimid\web\_nad_card.txt", "a", encoding="utf-8") as f:
            f.write(f"\n{term}:\n{css[i:i+500]}\n")
