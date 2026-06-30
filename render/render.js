// Render a card HTML to JPG (quality 95) at the correct size.
// Usage:  node render.js <file.html> [story|carousel|post] [out.jpg]
// Requires: npm i playwright  &&  npx playwright install chromium
const { chromium } = require('playwright');

const SIZES = {
  story:    { width: 1080, height: 1920 },
  carousel: { width: 1080, height: 1350 },
  post:     { width: 1080, height: 1080 },
};

(async () => {
  const file = process.argv[2];
  const fmt  = (process.argv[3] || 'carousel').toLowerCase();
  const out  = process.argv[4] || file.replace(/\.html?$/, '.jpg');
  if (!file) { console.error('Usage: node render.js <file.html> [story|carousel|post] [out.jpg]'); process.exit(1); }
  const vp = SIZES[fmt] || SIZES.carousel;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: vp, deviceScaleFactor: 1 });
  const path = require('path');
  await page.goto('file://' + path.resolve(file));
  await page.waitForTimeout(600); // let fonts/shapes settle
  const el = await page.$('.card');
  await (el || page).screenshot({ path: out, type: 'jpeg', quality: 95 });
  await browser.close();
  console.log('rendered →', out, `(${vp.width}×${vp.height})`);
})();
