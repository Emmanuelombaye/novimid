import sharp from "sharp";
import fs from "fs";
import path from "path";

const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

/** Lightweight web masters — Next still serves AVIF/WebP on top */
const jobs = [
  { file: "hero-desktop.jpg", width: 1400, quality: 72 },
  { file: "hero-mobile.jpg", width: 900, quality: 72 },
  { file: "care-woman.jpg", width: 900, quality: 72 },
  { file: "care-man.jpg", width: 900, quality: 72 },
  { file: "care-physician.jpg", width: 1200, quality: 72 },
  { file: "about-california.jpg", width: 1200, quality: 72 },
  { file: "tool-trt.jpg", width: 900, quality: 72 },
  { file: "product-capsule.jpg", width: 900, quality: 72 },
  { file: "product-oral.jpg", width: 900, quality: 72 },
];

for (const { file, width, quality } of jobs) {
  const input = path.join(out, file);
  if (!fs.existsSync(input)) {
    console.log("skip missing", file);
    continue;
  }
  const tmp = path.join(out, `._tmp_${file}`);
  const before = fs.statSync(input).size;
  await sharp(input)
    .rotate()
    .resize(width, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality, mozjpeg: true, progressive: true, chromaSubsampling: "4:2:0" })
    .toFile(tmp);
  fs.renameSync(tmp, input);
  const after = fs.statSync(input).size;
  const meta = await sharp(input).metadata();
  console.log(
    `${file}: ${(before / 1024).toFixed(0)}kb → ${(after / 1024).toFixed(0)}kb (${meta.width}x${meta.height})`,
  );
}
