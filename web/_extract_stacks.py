import re, sys
sys.stdout.reconfigure(encoding='utf-8')

html = open(r'I:/ceo/novimid/web/_yucca_treatments.html', encoding='utf-8', errors='ignore').read()

stacks = list(re.finditer(r'data-explore-section-stack="([^"]+)"', html))
boundaries = [m.start() for m in stacks] + [len(html)]

for i, m in enumerate(stacks):
    name = m.group(1)
    chunk = html[boundaries[i]:boundaries[i+1]]
    
    # Save full chunk to file
    fname = f'I:/ceo/novimid/web/_stack_{name.replace("-", "_")}.html'
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(chunk)
    print(f"Saved {fname} ({len(chunk)} chars)")
    
    # Print section breakdown (first ~300 chars of each major section class)
    for cls in ['retro-happy', 'retro-protocol', 'retro-calculator', 'retro-clinical', 'retro-knowall']:
        m2 = re.search(rf'class="[^"]*\b{cls}\b[^"]*"', chunk)
        if m2:
            pos = m2.start()
            snippet = chunk[pos:pos+500]
            # Clean for printing
            snippet = re.sub(r'\s+', ' ', snippet)
            print(f"\n  [{cls}] @ {pos}:")
            print(f"  {snippet[:400]}")
    print("\n" + "="*60)
