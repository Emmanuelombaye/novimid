from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
i = css.find("longevity] .explore-hero-card[data-card=nad]")
Path(r"I:\ceo\novimid\web\_nad_card.txt").write_text(css[i:i+2000] if i>=0 else "not found", encoding="utf-8")
i2 = css.find("longevity] .explore-hero-includes")
Path(r"I:\ceo\novimid\web\_nad_includes.txt").write_text(css[i2:i2+1500] if i2>=0 else "not found", encoding="utf-8")
