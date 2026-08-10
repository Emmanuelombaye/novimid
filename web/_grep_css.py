from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for key in ["explore-card[data-card=wl]", "explore-hero-cta", "explore-hero-card-footer", "explore-hero-chip"]:
    i = css.find(key)
    if i >= 0:
        print(key, ":", css[i:i+500])
        print()
