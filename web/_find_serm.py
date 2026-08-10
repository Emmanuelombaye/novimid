from pathlib import Path
html = Path(r"I:\ceo\novimid\web\_yucca_treatments.html").read_text(encoding="utf-8", errors="ignore")
for pat in ["Personalized Sermorelin", "lowest-price-ever-badge"]:
    idx = 0
    n = 0
    while n < 5:
        i = html.find(pat, idx)
        if i == -1:
            break
        Path(r"I:\ceo\novimid\web\_serm_snip.txt").write_text(
            html[i : i + 800], encoding="utf-8"
        ) if pat == "Personalized Sermorelin" else None
        if "badge" in html[i:i+300].lower():
            with open(r"I:\ceo\novimid\web\_badge_all.txt", "a", encoding="utf-8") as f:
                f.write(html[max(0,i-100):i+400] + "\n---\n")
        idx = i + len(pat)
        n += 1
