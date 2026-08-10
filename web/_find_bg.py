from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
for term in ["Personalized-GLP", "background-image", "ded8fb", "cfc5f7", "736b94", "c2bbdc"]:
    if term in css:
        i = css.index(term)
        Path(r"I:\ceo\novimid\web\_bg.txt").write_text(css[max(0,i-150):i+400], encoding="utf-8")
        print("found", term)
        break
else:
    print("not in tabs css")
