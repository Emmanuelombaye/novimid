from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
i = css.find("longevity] .explore-hero-card[data-card=nad]")
while i != -1:
    seg = css[i:i+800]
    if "background-position" in seg or "background-size" in seg:
        Path(r"I:\ceo\novimid\web\_nad_bg.txt").write_text(seg, encoding="utf-8")
        break
    i = css.find("longevity] .explore-hero-card[data-card=nad]", i+1)
else:
    # search all nad background-size
    for term in ["data-card=nad]{", "data-card=nad],"]:
        j = css.find(term)
        if j >= 0:
            Path(r"I:\ceo\novimid\web\_nad_bg.txt").write_text(css[j:j+600], encoding="utf-8")
            break
