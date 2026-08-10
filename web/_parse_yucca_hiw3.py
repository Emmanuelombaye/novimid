from pathlib import Path
import re

html = Path(r"I:\ceo\novimid\web\_yucca_hiw.html").read_text(encoding="utf-8", errors="ignore")

# Pull embedded style blocks mentioning hiw-step
styles = re.findall(r"<style[^>]*>(.*?)</style>", html, re.S)
hiw_css = []
for s in styles:
    if "hiw-step" in s or "scroll-animate" in s or "data-scroll" in s:
        hiw_css.append(s)

Path(r"I:\ceo\novimid\web\_yucca_hiw_inline.css").write_text(
    "\n\n/* ---- */\n\n".join(hiw_css), encoding="utf-8"
)
print("inline style blocks with hiw", len(hiw_css))
for s in hiw_css:
    # print rules with hiw-step or scale/opacity
    for m in re.finditer(r"[^{}]*\{[^{}]+\}", s):
        rule = re.sub(r"\s+", " ", m.group(0)).strip()
        if any(k in rule for k in ("hiw-step", "scroll", "scale", "opacity", "sticky", "translate")):
            print(rule[:400])
            print("---")

# Extract a full step section HTML
m = re.search(r'<section[^>]*class="[^"]*hiw-step[^"]*"[^>]*>.*?</section>', html, re.S)
if not m:
    # maybe div
    m = re.search(r'<div[^>]*class="[^"]*hiw-step[^"]*"[^>]*>[\s\S]{0,4000}', html)
print("\nFIRST STEP TAG")
if m:
    text = re.sub(r">\s+<", "><", m.group(0))
    # strip long base64/svg
    text = re.sub(r'src="data:[^"]+"', 'src="..."', text)
    text = re.sub(r"<svg[\s\S]*?</svg>", "<svg/>", text)
    Path(r"I:\ceo\novimid\web\_yucca_hiw_step.html").write_text(text[:8000], encoding="utf-8")
    print(text[:3500])

# Find sticky stack parent wrapper
for pat in ["retro-hiw-sbs", "hiw-steps", "steps-wrap", "sticky"]:
    idxs = [m.start() for m in re.finditer(pat, html)]
    print(pat, "count", len(idxs))
