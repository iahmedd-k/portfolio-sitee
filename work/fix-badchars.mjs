import fs from 'node:fs';
const path = 'src/App.jsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace('3rd-year CS student � Backend &amp; Full-Stack Developer � 6+ client apps shipped', '3rd-year CS student | Backend &amp; Full-Stack Developer | 6+ client apps shipped');
content = content.replace('I�ve shipped production applications across ecommerce, AI, SaaS, and realtime systems � with hands-on work in <span className="text-foreground">Node.js, React, Next.js, MongoDB, Redis, Stripe, and OpenAI</span>.', "I've shipped production applications across ecommerce, AI, SaaS, and realtime systems - with hands-on work in <span className=\"text-foreground\">Node.js, React, Next.js, MongoDB, Redis, Stripe, and OpenAI</span>.");
content = content.replace('Outside the terminal, you�ll usually find me improving systems, iterating on client work, or exploring product ideas that feel useful in the real world.', "Outside the terminal, you'll usually find me improving systems, iterating on client work, or exploring product ideas that feel useful in the real world.");
fs.writeFileSync(path, content);
