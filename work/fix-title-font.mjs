import fs from "node:fs";
const appPath = "src/App.jsx";
let app = fs.readFileSync(appPath, "utf8");
app = app.replace(/<p className="mb-4 text-muted-foreground">[\s\S]*?<\/p>/, '<p className="mb-4 text-muted-foreground">22 • Full Stack Software &amp; Infrastructure Engineer • MLOps / LLMOps</p>');
fs.writeFileSync(appPath, app);

const cssPath = "src/index.css";
let css = fs.readFileSync(cssPath, "utf8");
css = css.replace('@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap");', '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap");');
css = css.replace('font-family: "Space Grotesk", sans-serif;', 'font-family: "Inter", sans-serif;');
css = css.replace('font-family: "Space Grotesk", sans-serif;', 'font-family: "Inter", sans-serif;');
css = css.replace('font-family: "Space Grotesk", sans-serif;', 'font-family: "Inter", sans-serif;');
fs.writeFileSync(cssPath, css);
