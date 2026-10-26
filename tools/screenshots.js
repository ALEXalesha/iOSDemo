// Кадры для README: безголовый Chromium, страница по файловому адресу, без сети.
//   node tools/screenshots.js   ->  docs/screens/*.png
const path = require('path');
const fs = require('fs');
const { chromium } = require('@playwright/test');
const { pageUrl, fakePointerLock } = require('../tests/helpers');

const OUT = path.join(__dirname, '..', 'docs', 'screens');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.addInitScript(fakePointerLock);
  await page.route(/^https?:\/\//, (r) => r.abort());
  await page.goto(pageUrl('ios26'));
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(OUT, 'lock.png') });

  // разблокировать: щелчок по экрану блокировки
  await page.locator('#lock-page').click({ position: { x: 190, y: 400 } });
  await page.waitForSelector('#home-page.active');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT, 'home.png') });

  await page.evaluate(() => openCC());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT, 'control-center.png') });
  await browser.close();
  console.log('кадры в', OUT);
})().catch((e) => { console.error(e); process.exit(1); });
