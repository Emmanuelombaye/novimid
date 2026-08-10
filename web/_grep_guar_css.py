from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["explore-hero-guarantee", "explore-hero-includes", "explore-hero-plans"]:
    i = 0
    chunks = []
    while len(chunks) < 3:
        i = css.find(term, i)
        if i == -1:
            break
        chunks.append(css[max(0,i-80):i+500])
        i += len(term)
    if chunks:
        Path(r"I:\ceo\novimid\web\_guar_css.txt").write_text("\n\n===\n\n".join(chunks), encoding="utf-8")
        print(term, "found")
