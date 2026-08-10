from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["muscle-recovery] .explore-hero-card[data-card=sermorelin]", "data-card=sermorelin]{", "sermorelin-vial"]:
    idx = 0
    while True:
        i = css.find(term, idx)
        if i == -1:
            break
        with open(r"I:\ceo\novimid\web\_serm_css.txt", "a", encoding="utf-8") as f:
            f.write(css[i:i+700] + "\n---\n")
        idx = i + len(term)
print("done")
