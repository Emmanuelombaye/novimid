from pathlib import Path
html = Path(r"I:\ceo\novimid\web\_yucca_treatments.html").read_text(encoding="utf-8", errors="ignore")
start = html.find('data-explore-tab-pane="longevity"')
end = html.find("retro-happy", start)
Path(r"I:\ceo\novimid\web\_nad_pane.html").write_text(html[start:end][:15000], encoding="utf-8")

css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
chunks = []
for term in ["longevity] .explore-hero", "data-card=nad]", "longevity] .explore-hero-includes"]:
    i = 0
    while True:
        i = css.find(term, i)
        if i == -1:
            break
        chunks.append(css[i:i+700])
        i += len(term)
Path(r"I:\ceo\novimid\web\_nad_css.txt").write_text("\n\n---\n\n".join(chunks[:25]), encoding="utf-8")
