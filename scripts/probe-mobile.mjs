// Dev-time layout probe: opens the preview build at phone size in Edge,
// reports horizontal-overflow offenders, and saves section screenshots.
import puppeteer from 'puppeteer-core';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2] ?? '.';
const URL = 'http://localhost:4173/';

const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 2500)); // preloader + reveals

const report = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const offenders = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width > vw + 1 || r.right > vw + 8) {
      const cls = String(el.className?.baseVal ?? el.className ?? '').slice(0, 60);
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls,
        w: Math.round(r.width),
        right: Math.round(r.right),
      });
    }
  }
  const name = document.querySelector('.name');
  const nameCS = name ? getComputedStyle(name) : null;
  return {
    vw,
    docScrollW: document.documentElement.scrollWidth,
    bodyW: document.body.getBoundingClientRect().width,
    name: nameCS
      ? {
          fontSize: nameCS.fontSize,
          whiteSpace: nameCS.whiteSpace,
          width: Math.round(name.getBoundingClientRect().width),
        }
      : null,
    offenders: offenders.slice(0, 25),
  };
});
console.log(JSON.stringify(report, null, 1));

// Section screenshots at real phone size
const sections = ['profile', 'about', 'skills', 'experience', 'writing', 'featured', 'projects', 'certifications', 'milestones', 'contact'];
for (const id of sections) {
  await page.evaluate((secId) => {
    document.getElementById(secId)?.scrollIntoView({ behavior: 'instant' });
  }, id);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/p-${id}.png` });
}
await browser.close();
console.log('screenshots done');
