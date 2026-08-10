from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["weight-loss] .explore-hero-guarantee", "weight-loss] .explore-hero-includes", "weight-loss] .explore-hero-plans"]:
    i = css.find(term)
    if i >= 0:
        with open(r"I:\ceo\novimid\web\_wl_guar_css.txt", "a", encoding="utf-8") as f:
            f.write(f"\n--- {term} ---\n{css[i:i+900]}\n")
