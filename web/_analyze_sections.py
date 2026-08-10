import re, sys, json
sys.stdout.reconfigure(encoding='utf-8')

html = open(r'I:/ceo/novimid/web/_yucca_treatments.html', encoding='utf-8', errors='ignore').read()

# Find each stack and extract ~8000 chars to understand structure
stacks = list(re.finditer(r'data-explore-section-stack="([^"]+)"', html))
print(f"Found {len(stacks)} stacks")
for m in stacks:
    name = m.group(1)
    start = m.start()
    # Find end by looking for next stack or closing ~30000 chars
    end = html.find('data-explore-section-stack=', start+1)
    if end == -1:
        end = start + 60000
    chunk = html[start:end]
    
    # Find all section-like class names
    sections = re.findall(r'class="([^"]*retro-(?:happy|clinical|calculator|knowall|protocol)[^"]*)"', chunk)
    print(f"\n=== STACK: {name} ===")
    for s in sections[:20]:
        print(f"  CLASS: {s[:120]}")
    
    # Find H2s in this chunk
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', chunk, re.S)
    for h in h2s[:10]:
        t = re.sub(r'<[^>]+>', '', h)
        t = re.sub(r'\s+', ' ', t).strip()
        if t:
            print(f"  H2: {t[:120]}")
    
    # Find images
    imgs = re.findall(r'src="(/[^"]+\.(?:avif|png|jpg|webp|svg))"', chunk)
    for img in sorted(set(imgs))[:20]:
        print(f"  IMG: {img}")

# Extract all unique class token patterns for section roots
print("\n\n=== ALL INTERESTING CLASSES ===")
all_classes = re.findall(r'class="([^"]*(?:retro-happy|retro-clinical|retro-calculator|retro-knowall|retro-protocol)[^"]*)"', html)
seen = set()
for c in all_classes:
    tokens = c.split()
    root = next((t for t in tokens if any(t.startswith(k) for k in ['retro-happy','retro-clinical','retro-calculator','retro-knowall','retro-protocol'])), None)
    if root and root not in seen:
        seen.add(root)
        print(f"  {root}")
