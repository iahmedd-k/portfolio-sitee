import fs from 'node:fs';
const path = 'src/App.jsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(`<p className="mb-4 text-muted-foreground">3rd-year CS student ? Backend &amp; Full-Stack Developer ? 6+ client apps shipped</p>`, `<p className="mb-4 text-muted-foreground">3rd-year CS student • Backend &amp; Full-Stack Developer • 6+ client apps shipped</p>`);
content = content.replace(`<p className="mb-4">
                <span className="text-foreground">CS Senior at FAST NUCES</span> and <span className="text-foreground">Software Engineer at Motive</span>, building solutions that help fleets operate in a more <span className="text-foreground">compliant, safe, productive, and profitable way.</span>
              </p>
              <p className="mb-4">
                Actively exploring <span className="text-foreground">cloud systems, MLOps, and LLMOps</span>, learning how modern software and machine learning models are designed, deployed, monitored, and scaled.
              </p>
              <p>Outside the terminal, youâ€™ll usually find me gaming or diving into documentaries.</p>`, `<p className="mb-4">
                <span className="text-foreground">Backend &amp; Full-Stack Developer</span> at Air University Islamabad, focused on building scalable, secure, and high-performance products.
              </p>
              <p className="mb-4">
                I’ve shipped production applications across ecommerce, AI, SaaS, and realtime systems — with hands-on work in <span className="text-foreground">Node.js, React, Next.js, MongoDB, Redis, Stripe, and OpenAI</span>.
              </p>
              <p>Outside the terminal, you’ll usually find me improving systems, iterating on client work, or exploring product ideas that feel useful in the real world.</p>`);
content = content.replace(`href="https://github.com/Affan-Swati?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">`, `href="https://github.com/iahmedd-k?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground">`);
content = content.replace(`              <p className="max-w-md text-center text-sm text-muted-foreground sm:text-right">© 2026 Affan Ahmad</p>`, `              <p className="max-w-md text-center text-sm text-muted-foreground sm:text-right">© 2026 Ahmed Khan</p>`);
fs.writeFileSync(path, content);
