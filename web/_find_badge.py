from pathlib import Path

html = Path(r"I:\ceo\novimid\web\_yucca_treatments.html").read_text(encoding="utf-8", errors="ignore")
out = Path(r"I:\ceo\novimid\web\_badge_snippet.txt")
for pat in ["price-badge", "explore-hero-card-price", "125/mo", "Personalized-GLP-1"]:
    idx = 0
    chunks = []
    while True:
        i = html.lower().find(pat.lower(), idx)
        if i == -1:
            break
        chunks.append(f"--- {pat} @ {i} ---\n" + html[max(0, i - 200) : i + 500])
        idx = i + len(pat)
    if chunks:
        out.write_text("\n\n".join(chunks[:3]), encoding="utf-8")
        break
