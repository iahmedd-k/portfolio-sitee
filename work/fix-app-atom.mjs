import fs from "node:fs";
const path = "src/App.jsx";
let content = fs.readFileSync(path, "utf8");
content = content.replace(/import \{([\s\S]*?)resumeUrl,\n([\s\S]*?)\} from "\.\/data";/, 'import {$1$2} from "./data";');
content = content.replace(/const traitCards = \[[\s\S]*?\n  \];/, `const traitCards = [
    {
      urdu: "\\u062c\\u0646\\u0648\\u0646",
      title: "Junoon",
      subtitle: "OBSESSIVE PASSION",
      description:
        "A state of intense devotion where the boundary between the creator and the craft disappears. It is the fuel for greatness.",
    },
    {
      urdu: "\\u0639\\u0632\\u0645",
      title: "Azm",
      subtitle: "STEADFAST RESOLVE",
      description:
        "The quiet discipline to keep moving forward even when progress feels slow. It is the promise you keep to your future self.",
    },
    {
      urdu: "\\u0627\\u0633\\u062a\\u0642\\u0627\\u0645\\u062a",
      title: "Istiqamat",
      subtitle: "CONSISTENT DIRECTION",
      description:
        "The ability to stay aligned with your values, habits, and goals. It turns effort into momentum and momentum into trust.",
    },
    {
      urdu: "\\u062c\\u0647\\u062f",
      title: "Juhd",
      subtitle: "PURPOSEFUL EFFORT",
      description:
        "The willingness to do the hard work with sincerity. It reflects grit, patience, and the desire to leave things better than you found them.",
    },
  ];`);
content = content.replace(/<nav className={`sticky top-0 z-50 transition-all duration-300 \$\{menuOpen \? "bg-background\/80 backdrop-blur-md border-b border-border" : "bg-transparent"\}`}>/, '<nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">');
content = content.replace(/<p className="mb-4 text-muted-foreground">3rd-year CS student [^<]*<\/p>/, '<p className="mb-4 text-muted-foreground">3rd-year CS student • Backend &amp; Full-Stack Developer • 6+ client apps shipped</p>');
content = content.replace(/<div className="flex items-center gap-2">\n                \{heroLinks\.map\(\(link\) => \(\n                  <a key=\{link\.label\} href=\{link\.href\} target="_blank" rel="noreferrer" className="rounded-lg p-2 transition-all duration-200 hover:-translate-y-0\.5 hover:scale-110 hover:bg-muted" aria-label=\{link\.label\}>\n                    <SocialIcon type=\{link\.icon\} className="h-5 w-5 text-foreground" \/>\n                  <\/a>\n                \)\)}\n              <\/div>\n              <div className="mt-3 flex flex-wrap gap-3">[\s\S]*?<\/div>/, `<div className="flex items-center gap-2">
                {heroLinks.map((link) => {
                  const commonClasses = "group relative inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted";
                  const tooltip = (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#d9d9d7] bg-white px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                      {link.label}
                    </span>
                  );
                  if (link.action === "copy") {
                    return (
                      <button key={link.label} type="button" onClick={handleCopyEmail} className={commonClasses} aria-label={link.label}>
                        <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />
                        {tooltip}
                      </button>
                    );
                  }
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={commonClasses} aria-label={link.label}>
                      <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />
                      {tooltip}
                    </a>
                  );
                })}
              </div>`);
fs.writeFileSync(path, content);
