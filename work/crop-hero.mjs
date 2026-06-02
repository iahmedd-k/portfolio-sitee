import sharpModule from "file:///C:/Users/Dell/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/lib/index.js";

const sharp = sharpModule.default ?? sharpModule;

const input = "C:/tmp/affan-target.png";
const output = "assets/hero-word.png";

await sharp(input)
  .extract({ left: 520, top: 85, width: 380, height: 165 })
  .png()
  .toFile(output);
