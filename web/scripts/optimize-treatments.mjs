import sharp from "sharp";
import fs from "fs";
import path from "path";

const assets =
  "C:\\Users\\Administrator\\.cursor\\projects\\i-ceo-novimid\\assets";
const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

const jobs = [
  ["gen-product-glp1.png", "product-glp1.jpg", 1200, 74],
  ["gen-product-peptide.png", "product-peptide.jpg", 1200, 74],
  ["gen-product-trt.png", "product-trt-hero.jpg", 1200, 74],
  ["gen-tab-metabolic.png", "tab-metabolic.jpg", 400, 72],
  ["gen-tab-peptides.png", "tab-peptides.jpg", 400, 72],
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
  console.log("wrote", dest);
}

// hormone tab from existing tool-trt if present
const trt = path.join(out, "tool-trt.jpg");
if (fs.existsSync(trt)) {
  await sharp(trt)
    .resize(400, 400, { fit: "cover" })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(path.join(out, "tab-hormones.jpg"));
  console.log("wrote tab-hormones.jpg");
}
