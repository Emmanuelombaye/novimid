from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["weight-loss] .explore-hero-cta", "b8aeff", "b9a9fe"]:
    i = css.find(term)
    if i >= 0:
        with open(r"I:\ceo\novimid\web\_cta.txt", "a", encoding="utf-8") as f:
            f.write(f"\n--- {term} ---\n{css[max(0,i-50):i+350]}\n")
