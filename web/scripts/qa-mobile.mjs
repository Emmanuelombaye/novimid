import { chromium, devices } from "playwright";

const browser = await chromium.launch();
const context = await browser.newContext({ ...devices["iPhone 14"] });
const page = await context.newPage();

await page.goto("http://localhost:3000", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(2000);
await page.screenshot({ path: "public/qa-mobile-home.png", fullPage: false });

await page.getByRole("button", { name: /open menu/i }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: "public/qa-mobile-nav.png", fullPage: false });

const cta = await page.locator('#mobile-nav a[href="/start"]').innerText();
console.log("nav cta text:", JSON.stringify(cta));

const color = await page
  .locator('#mobile-nav a[href="/start"]')
  .evaluate((el) => {
    const s = getComputedStyle(el);
    return `${s.color} on ${s.backgroundColor}`;
  });
console.log("nav cta style:", color);

await browser.close();
console.log("done");
