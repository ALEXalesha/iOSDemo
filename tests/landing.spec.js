// Стартовая страница репозитория (index.html в корне) сразу ведёт в телефон ios26/.
const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const { ROOT, fakePointerLock } = require('./helpers');

test('стартовая страница ведёт в ios26/ без ошибок и без сети', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.addInitScript(fakePointerLock);
  await page.route(/^https?:\/\//, (r) => r.abort());
  await page.goto(pathToFileURL(path.join(ROOT, 'index.html')).href);
  await page.waitForURL(/\/ios26\/index\.html$/);
  await expect(page).toHaveTitle(/не связан с Microsoft\/Apple\/Samsung/);
  expect(errors).toEqual([]);
});
