import fs from "node:fs";
const path = "src/App.jsx";
let content = fs.readFileSync(path, "utf8");
content = content.replaceAll('جنون', '????');
content = content.replaceAll('عزم', '???');
content = content.replaceAll('استقامت', '???????');
content = content.replaceAll('جہد', '???');
fs.writeFileSync(path, content);
