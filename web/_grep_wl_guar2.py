from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
term = "weight-loss] .explore-hero-guarantee"
i = css.find(term)
Path(r"I:\ceo\novimid\web\_wl_guar_full.txt").write_text(css[i:i+2500] if i>=0 else "none", encoding="utf-8")
