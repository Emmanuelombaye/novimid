from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
term = "explore-hero-guarantee-heading"
i = 0
out = []
while True:
    i = css.find(term, i)
    if i == -1:
        break
    out.append(css[max(0,i-100):i+600])
    i += len(term)
Path(r"I:\ceo\novimid\web\_guar_head.txt").write_text("\n---\n".join(out[:5]), encoding="utf-8")
