import fs from "node:fs";
const path = "src/data.js";
let content = fs.readFileSync(path, "utf8");
content = content.replace(/export const heroLinks = \[[\s\S]*?\n\];/, `export const heroLinks = [
  {
    label: "GitHub",
    href: "https://github.com/iahmedd-k",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iahmedd-k/",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/iahmedd-k",
    icon: "x",
  },
  {
    label: "Resume",
    href: "https://example.com/resume.pdf",
    icon: "doc",
  },
  {
    label: "Email",
    href: "mailto:ahmedkhanofficials@gmail.com",
    icon: "mail",
  },
];`);
fs.writeFileSync(path, content);
