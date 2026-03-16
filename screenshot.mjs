import { chromium } from 'playwright';
import { mkdir, readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = join(__dirname, 'temporary-screenshots');

async function getNextIndex() {
  try {
    const files = await readdir(SCREENSHOT_DIR);
    const indices = files
      .filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
      .map(f => {
        const match = f.match(/^screenshot-(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
      });
    return indices.length > 0 ? Math.max(...indices) + 1 : 1;
  } catch {
    return 1;
  }
}

async function main() {
  const url = process.argv[2] || 'http://localhost:3000';
  const label = process.argv[3] || '';

  await mkdir(SCREENSHOT_DIR, { recursive: true });

  const index = await getNextIndex();
  const filename = label
    ? `screenshot-${index}-${label}.png`
    : `screenshot-${index}.png`;
  const filepath = join(SCREENSHOT_DIR, filename);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for animations/transitions to settle
  await page.waitForTimeout(1000);

  // Take full-page screenshot
  await page.screenshot({ path: filepath, fullPage: true });

  console.log(`Screenshot saved: ${filepath}`);

  await browser.close();
}

main().catch(err => {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
});
