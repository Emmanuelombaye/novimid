import sharp from "sharp";
import fs from "fs";
import path from "path";

const assets =
  "C:\\Users\\Administrator\\.cursor\\projects\\i-ceo-novimid\\assets";
const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

const jobs = [
  ["gen-result-1.png", "result-1.jpg", 900, 74],
  ["gen-result-2.png", "result-2.jpg", 900, 74],
  ["gen-result-3.png", "result-3.jpg", 900, 74],
  ["gen-timeline-1.png", "timeline-1.jpg", 1100, 74],
  ["gen-timeline-2.png", "timeline-2.jpg", 1100, 74],
  ["gen-timeline-3.png", "timeline-3.jpg", 1100, 74],
  ["gen-why-1.png", "why-1.jpg", 900, 74],
  ["gen-why-2.png", "why-2.jpg", 900, 74],
  ["gen-why-3.png", "why-3.jpg", 900, 74],
  ["gen-icon-vial-a.png", "icon-vial-a.jpg", 192, 78],
  ["gen-icon-vial-b.png", "icon-vial-b.jpg", 192, 78],
  ["gen-cta-portrait.png", "cta-portrait.jpg", 1400, 74],
];

for (const [src, dest, w, q] of jobs) {
  const input = path.join(assets, src);
  if (!fs.existsSync(input)) {
    console.log("missing", src);
    continue;
  }
  await sharp(input)
    .resize(w, null, { withoutEnlargement: true })
    .jpeg({ quality: q, mozjpeg: true, progressive: true })
    .toFile(path.join(out, dest));
  console.log("wrote", dest, (fs.statSync(path.join(out, dest)).size / 1024).toFixed(0) + "kb");
}
