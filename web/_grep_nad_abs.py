from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
i = css.find("longevity] .explore-hero-includes{position:absolute")
Path(r"I:\ceo\novimid\web\_nad_abs.txt").write_text(css[i:i+3500], encoding="utf-8")
