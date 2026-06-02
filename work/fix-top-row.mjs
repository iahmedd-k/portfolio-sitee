import fs from 'node:fs';
const path = 'src/App.jsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/<p className="mb-4 text-muted-foreground">[^<]*<\/p>/, '<p className="mb-4 text-muted-foreground">3rd-year CS student • Backend &amp; Full-Stack Developer • 6+ client apps shipped</p>');
content = content.replace(/<div className="flex items-center gap-2">[\s\S]*?<\/div>\n            <\/div>/, `<div className="flex items-center gap-2">
                {heroLinks.map((link) => {
                  const commonClasses = "group relative inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted";
                  const tooltip = link.action ? (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#d9d9d7] bg-white px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                      {link.label.toUpperCase()}
                    </span>
                  ) : null;
                  if (link.action === 'copy') {
                    return (
                      <button key={link.label} type="button" onClick={handleCopyEmail} className={commonClasses} aria-label={link.label}>
                        <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />
                        {tooltip}
                      </button>
                    );
                  }
                  if (link.action === 'resume') {
                    return (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={commonClasses} aria-label={link.label}>
                        <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />
                        {tooltip}
                      </a>
                    );
                  }
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={commonClasses} aria-label={link.label}>
                      <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>`);
fs.writeFileSync(path, content);
