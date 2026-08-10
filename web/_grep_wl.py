from pathlib import Path
css = Path(r"I:\ceo\novimid\web\_yucca_tabs.css").read_text(encoding="utf-8")
import re
parts = re.findall(r'\.explore-card\[data-card=wl\][^{]*\{[^}]+\}', css)
Path(r"I:\ceo\novimid\web\_wl_css.txt").write_text("\n".join(parts[:20]), encoding="utf-8")
# CTA colors for wl
for m in re.finditer(r'weight-loss[^}]{0,200}explore-hero-cta[^}]{0,400}', css):
    Path(r"I:\ceo\novimid\web\_wl_cta.txt").write_text(m.group(), encoding="utf-8")
    break
for m in re.finditer(r'explore-hero-cta[^}]{0,400}background[^}]+', css):
    with open(r"I:\ceo\novimid\web\_wl_cta2.txt", "a", encoding="utf-8") as f:
        f.write(m.group() + "\n")
