import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './temporary screenshots';

const screenshots = [
  { name: 'screenshot-1-hero', selector: '#hero' },
  { name: 'screenshot-2-viewport', fullPage: false },
  { name: 'screenshot-3-stats', selector: '#stats' },
  { name: 'screenshot-4-about', selector: '#about' },
  { name: 'screenshot-5-benefits', selector: '#benefits' },
  { name: 'screenshot-6-testimonials', selector: '#testimonials' },
  { name: 'screenshot-7-cta', selector: '#cta' },
  { name: 'screenshot-8-testimonials', selector: '#testimonials' },
  { name: 'screenshot-9-hero-v2', selector: '#hero' },
  { name: 'screenshot-10-hero-viewport', fullPage: false },
];

async function takeScreenshots() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

  for (const shot of screenshots) {
    const path = `${OUTPUT_DIR}/${shot.name}.png`;
    if (shot.selector) {
      const el = await page.$(shot.selector);
      if (el) {
        await el.screenshot({ path });
      } else {
        await page.screenshot({ path, fullPage: false });
      }
    } else {
      await page.screenshot({ path, fullPage: shot.fullPage ?? true });
    }
    console.log(`Saved: ${path}`);
  }

  await browser.close();
}

takeScreenshots().catch(console.error);
