from pathlib import Path
import re

html = Path(r"I:\ceo\novimid\web\_yucca_hiw.html").read_text(encoding="utf-8", errors="ignore")

# Find script content mentioning hiw-step
for m in re.finditer(r"hiw-step", html):
    start = max(0, m.start() - 80)
    end = min(len(html), m.start() + 120)
    ctx = html[start:end]
    if "querySelector" in ctx or "scale" in ctx or "style" in ctx or "sticky" in ctx:
        print(re.sub(r"\s+", " ", ctx))
        print("---")

# Search for scale transform logic near sticky
patterns = [
    r"scale\([^)]+\)",
    r"\.style\.transform",
    r"hiw-step-card",
    r"top-\[23vh\]",
    r"getBoundingClientRect",
]
for pat in patterns:
    print("\nPAT", pat, "count", len(re.findall(pat, html)))

# Extract large script that contains hiw-step-card
idx = html.find("hiw-step-card")
# find script start before
script_starts = [m.start() for m in re.finditer(r"<script", html)]
script_start = max([s for s in script_starts if s < idx], default=None)
if script_start is not None:
    script_end = html.find("</script>", idx)
    script = html[script_start:script_end]
    Path(r"I:\ceo\novimid\web\_yucca_hiw_script.js").write_text(script, encoding="utf-8")
    print("\nscript len", len(script))
    # print portions with scale/sticky/step
    for key in ["scale", "sticky", "hiw-step", "opacity", "progress", "lerp"]:
        i = script.find(key)
        print(key, "first at", i)
        if i >= 0:
            print(re.sub(r"\s+", " ", script[max(0,i-100):i+300])[:400])
            print("---")
