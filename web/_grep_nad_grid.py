from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["0.75fr", "longevity] .explore-hero-content{position", "longevity] .explore-hero-content{max-width:47"]:
    idx = 0
    while True:
        i = css.find(term, idx)
        if i == -1:
            break
        if "longevity" in css[max(0,i-100):i+50]:
            with open(r"I:\ceo\novimid\web\_nad_grid.txt", "a", encoding="utf-8") as f:
                f.write(css[max(0,i-80):i+400] + "\n---\n")
        idx = i + 1
