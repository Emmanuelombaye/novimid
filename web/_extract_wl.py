from pathlib import Path
html = Path(r"I:\ceo\novimid\web\_yucca_treatments.html").read_text(encoding="utf-8", errors="ignore")
start = html.find('data-explore-tab-pane="weight-loss"')
if start == -1:
    start = html.find("Personalized GLP")
end = html.find("retro-happy", start)
Path(r"I:\ceo\novimid\web\_wl_pane.html").write_text(html[start:end][:12000], encoding="utf-8")
