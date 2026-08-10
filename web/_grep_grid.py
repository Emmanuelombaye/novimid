from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["grid-column", "explore-hero-guarantee{", "explore-hero-guarantee "]:
    if term in css:
        i = css.find(term)
        with open(r"I:\ceo\novimid\web\_grid_col.txt", "a", encoding="utf-8") as f:
            f.write(f"{term}: {css[i:i+400]}\n\n")
