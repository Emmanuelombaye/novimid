from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
i = css.find("@media(min-width:992px)")
chunk = css[i:i+8000]
# find longevity includes in 992 block
for term in ["longevity] .explore-hero-includes", "longevity] .explore-hero-content", "longevity] .explore-hero-card[data-card=nad]"]:
    j = chunk.find(term)
    if j >= 0:
        with open(r"I:\ceo\novimid\web\_nad_992.txt", "a", encoding="utf-8") as f:
            f.write(f"\n--- {term} ---\n{chunk[j:j+600]}\n")
