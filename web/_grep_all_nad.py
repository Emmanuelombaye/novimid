from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
idx = 0
hits = []
while True:
    i = css.find("longevity] .explore-hero-includes", idx)
    if i == -1:
        break
    ctx = css[max(0,i-120):i+400]
    hits.append(ctx)
    idx = i + 1
Path(r"I:\ceo\novimid\web\_nad_all_includes.txt").write_text("\n\n=====\n\n".join(hits), encoding="utf-8")
print(len(hits))
