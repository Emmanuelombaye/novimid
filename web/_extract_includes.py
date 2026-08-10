from pathlib import Path
html = Path(r"I:\ceo\novimid\web\_yucca_treatments.html").read_text(encoding="utf-8", errors="ignore")
start = html.find("explore-hero-includes")
if start >= 0:
    Path(r"I:\ceo\novimid\web\_includes_snip.html").write_text(html[start:start+3500], encoding="utf-8")
