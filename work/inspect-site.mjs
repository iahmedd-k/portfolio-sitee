import playwright from "file:///C:/Users/Dell/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.js";

const { chromium } = playwright;
import fs from "fs";

const url = "https://affan-ahmad.vercel.app/";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.screenshot({ path: "work/site-full.png", fullPage: true });

const data = await page.evaluate(() => {
  const text = document.body.innerText;
  const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6")).map((el) => ({
    tag: el.tagName.toLowerCase(),
    text: el.textContent.trim(),
  }));
  const links = Array.from(document.querySelectorAll("a")).map((el) => ({
    text: el.textContent.trim(),
    href: el.href,
  }));
  const imgs = Array.from(document.querySelectorAll("img")).map((el) => ({
    alt: el.alt,
    src: el.src,
  }));
  return { text, headings, links, imgs };
});

fs.writeFileSync("work/site-data.json", JSON.stringify(data, null, 2));
await browser.close();
