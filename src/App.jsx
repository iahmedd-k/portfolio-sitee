import { useEffect, useMemo, useState } from "react";
import {
  educationItems,
  experienceItems,
  footerLinks,
  heroLinks,
  navItems,
  projectItems,
    skillGroups,
} from "./data";
import avatarImage from "./assets/avatar-BVr0HBRe.jpeg";

const email = "ahmedkhanofficials@gmail.com";

function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m4 4 16 16" />
      <path d="M20 4 4 20" />
    </svg>
  );
}

function IconDoc(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconCopy(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function IconMoon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function IconMapPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconExternal(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconLoader(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function SocialIcon({ type, className }) {
  const base = { className };
  if (type === "github") return <IconGithub {...base} />;
  if (type === "linkedin") return <IconLinkedIn {...base} />;
  if (type === "x") return <IconX {...base} />;
  if (type === "doc") return <IconDoc {...base} />;
  if (type === "mail") return <IconMail {...base} />;
  return null;
}

function SectionDivider() {
  return <div className="my-10 h-3 w-full striped-divider opacity-50" />;
}

function Badge({ children }) {
  return <span className="inline-flex items-center rounded-md bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-foreground">{children}</span>;
}

function App() {
  const [themeDark, setThemeDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillTab, setSkillTab] = useState(skillGroups[0].id);
  const [openExperience, setOpenExperience] = useState("freelance");
  const [openEducation, setOpenEducation] = useState("air");
  const [copyState, setCopyState] = useState(false);
  const [timeString, setTimeString] = useState("");
  const [traitIndex, setTraitIndex] = useState(0);
  const [traitHovered, setTraitHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setThemeDark(nextDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeDark);
    localStorage.setItem("theme", themeDark ? "dark" : "light");
  }, [themeDark]);

  useEffect(() => {
    const updateTime = () => {
      setTimeString(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeSkills = useMemo(
    () => skillGroups.find((group) => group.id === skillTab) ?? skillGroups[0],
    [skillTab],
  );

  const traitCards = [
    {
      urdu: "\u062c\u0646\u0648\u0646",
      title: "Junoon",
      subtitle: "OBSESSIVE PASSION",
      description:
        "A state of intense devotion where the boundary between the creator and the craft disappears. It is the fuel for greatness.",
    },
    {
      urdu: "\u0639\u0632\u0645",
      title: "Azm",
      subtitle: "STEADFAST RESOLVE",
      description:
        "The quiet discipline to keep moving forward even when progress feels slow. It is the promise you keep to your future self.",
    },
    {
      urdu: "\u0627\u0633\u062a\u0642\u0627\u0645\u062a",
      title: "Istiqamat",
      subtitle: "CONSISTENT DIRECTION",
      description:
        "The ability to stay aligned with your values, habits, and goals. It turns effort into momentum and momentum into trust.",
    },
    {
      urdu: "\u062c\u0647\u062f",
      title: "Juhd",
      subtitle: "PURPOSEFUL EFFORT",
      description:
        "The willingness to do the hard work with sincerity. It reflects grit, patience, and the desire to leave things better than you found them.",
    },
  ];

  const activeTrait = traitCards[traitIndex % traitCards.length];

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState(true);
      window.setTimeout(() => setCopyState(false), 1800);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 dotted-border-left dotted-border-right sm:px-6 lg:px-8">
        <nav className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-200 ${isScrolled ? "border-b border-border" : "border-b border-transparent"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-14 items-center justify-between">
              <button className="p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>
                <IconMenu className="h-5 w-5" />
              </button>
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <button key={item} className="px-3 py-1.5 text-sm capitalize text-muted-foreground transition-colors hover:text-foreground" onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>
              <button className="rounded-lg p-2 transition-all duration-200 hover:scale-110 hover:bg-muted" aria-label="Toggle theme" onClick={() => setThemeDark((value) => !value)}>
                <IconMoon className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
          {menuOpen ? (
            <div className="absolute left-0 top-14 w-full border-b border-border bg-background/95 p-4 shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button key={item} className="w-full rounded-md px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground" onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </nav>

        <section className="py-5 md:py-6">
          <div className="mb-4 text-center">
            <div
              className="group relative inline-flex min-h-[110px] flex-col items-center justify-center pb-[4.5rem] md:min-h-[125px] md:pb-20"
              onMouseEnter={() => setTraitHovered(true)}
              onMouseLeave={() => setTraitHovered(false)}
            >
              <div className="pointer-events-none absolute left-1/2 top-full h-10 w-[min(88vw,390px)] -translate-x-1/2" />

              <div
                lang="ur"
                dir="rtl"
                className="font-urdu select-none text-[58px] leading-none font-normal tracking-[-0.02em] text-[#7c7c7c] transition-all duration-300 group-hover:-translate-y-1 md:text-[72px]"
                style={{ unicodeBidi: "plaintext" }}
              >
                {activeTrait.urdu}
              </div>

              <div
                className={`absolute left-1/2 top-full z-40 mt-2 w-[min(88vw,350px)] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#d8d8d8] bg-white text-left shadow-[0_16px_36px_rgba(0,0,0,0.11)] transition-all duration-300 dark:bg-[hsl(var(--card))] ${
                  traitHovered ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="px-5 pb-4 pt-4 text-center">
                  <div className="mb-1 text-[20px] font-semibold tracking-tight text-foreground">{activeTrait.title}</div>
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {activeTrait.subtitle}
                  </div>
                  <p className="mx-auto max-w-xs text-[15px] leading-6 text-muted-foreground">
                    {activeTrait.description}
                  </p>
                </div>
                <div className="border-t border-border bg-muted/30 px-5 py-2.5">
                  <button
                    type="button"
                    onClick={() => setTraitIndex((value) => value + 1)}
                    className="mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <IconLoader className="h-4 w-4" />
                    Show another
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-border transition-all duration-500 ease-out hover:scale-105 hover:border-foreground/50">
              <img src={avatarImage} alt="Ahmed Khan" draggable="false" className="h-full w-full select-none object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-center">
                <h2 className="text-2xl font-semibold text-foreground">Ahmed Khan</h2>
                <div className="mt-1 flex items-center gap-1 text-muted-foreground/80 sm:mt-0 sm:ml-2">
                  <IconMapPin className="h-3.5 w-3.5" />
                  <span className="text-sm font-medium">Islamabad, Pakistan</span>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground">{"22 \u2022 Full Stack Software & Infrastructure Engineer \u2022 MLOps / LLMOps"}</p>
              <div className="flex items-center gap-2">
                {heroLinks.map((link) => {
                  const commonClasses = "group relative inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-muted/40";
                  const tooltip = link.action ? (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#d9d9d7] bg-white px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                      {link.action === "copy" ? "CLICK TO COPY EMAIL" : "VIEW RESUME"}
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
            </div>
          </div>
        </section>

        <div id="about">
          <section className="py-6">
            <h2 className="mb-6 text-xl font-semibold text-foreground">About</h2>
            <div className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              <p className="mb-4">
                <span className="text-foreground">Backend &amp; Full-Stack Developer</span> at Air University Islamabad, focused on building scalable, secure, and high-performance products.
              </p>
              <p className="mb-4">
                I've shipped production applications across ecommerce, AI, SaaS, and realtime systems - with hands-on work in <span className="text-foreground">Node.js, React, Next.js, MongoDB, Redis, Stripe, and OpenAI</span>.
              </p>
              <p>Outside the terminal, you'll usually find me improving systems, iterating on client work, or exploring product ideas that feel useful in the real world.</p>
            </div>
          </section>
        </div>

        <div id="skills">
          <section className="py-8">
            <h2 className="mb-8 text-xl font-semibold text-foreground">Skills</h2>
            <div className="mb-10 flex flex-wrap gap-2">
              {skillGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setSkillTab(group.id)}
                  className={`rounded-lg border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
                    skillTab === group.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-transparent text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>
            <div className="min-h-[150px]">
              <div className="flex flex-wrap gap-3 animate-in fade-in duration-500">
                {activeSkills.skills.map((skill) => (
                  <div key={skill.name} className="flex cursor-default items-center gap-3 rounded-full border border-[#e1e1dd] bg-[#fbfaf7] px-5 py-2.5 transition-colors duration-150 hover:border-[#d6d6d1] hover:bg-white">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`h-5 w-5 object-contain transition-all ${skill.invertInDark ? "dark:invert dark:brightness-200" : ""}`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <SectionDivider />

        <div id="experience">
          <section className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Work Experience</h2>
            <div className="space-y-2">
              {experienceItems.map((item) => {
                const open = openExperience === item.id;
                return (
                  <div key={item.id} className={`rounded-lg border border-[#d9d9d7] bg-white px-4 transition-all duration-200 ${open ? "shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]"}`}>
                    <button className="flex w-full items-center justify-between py-4 font-medium hover:no-underline" onClick={() => setOpenExperience((value) => (value === item.id ? item.id : item.id))}>
                      <div className="flex w-full items-center gap-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#f4f4f2]">
                          <img src={item.image} alt={item.company} className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-medium text-foreground">{item.company}</span>
                            <span className="text-muted-foreground">{item.role}</span>
                          </div>
                          <div className="mt-0.5 text-sm text-muted-foreground">{item.period}</div>
                        </div>
                      </div>
                      <IconChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && item.points ? (
                      <div className="pb-4 pt-0 text-sm">
                        <div className="mb-3 flex gap-2">
                          <Badge>{item.location}</Badge>
                          <Badge>{item.type}</Badge>
                        </div>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-muted-foreground/50">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div id="education">
          <section className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Education</h2>
            <div className="space-y-2">
              {educationItems.map((item) => {
                const open = openEducation === item.id;
                return (
                  <div key={item.id} className={`rounded-lg border border-[#d9d9d7] bg-white px-4 transition-all duration-200 ${open ? "shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]"}`}>
                    <button className="flex w-full items-center justify-between py-4 font-medium hover:no-underline" onClick={() => setOpenEducation(item.id)}>
                      <div className="flex w-full items-center gap-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#f4f4f2]">
                          <img src={item.image} alt={item.school} className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-medium text-foreground">{item.school}</span>
                            <span className="text-muted-foreground">{item.degree}</span>
                          </div>
                          <div className="mt-0.5 text-sm text-muted-foreground">{item.period}</div>
                        </div>
                      </div>
                      <IconChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open ? (
                      <div className="pb-4 pt-0 text-sm">
                        <div className="mb-3 flex gap-2">
                          <Badge>{item.location}</Badge>
                          <Badge>{item.meta}</Badge>
                        </div>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-muted-foreground/50">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <SectionDivider />

        <div id="projects">
          <section className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Projects</h2>
            <div className="space-y-4">
              {projectItems.map((project) => (
                <div key={project.id} className="group flex flex-col gap-4 rounded-lg border border-[#d9d9d7] bg-white p-4 transition-all duration-300 hover:shadow-[0_10px_26px_rgba(0,0,0,0.08)] sm:flex-row">
                  <div className="flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e5e5e2] bg-[#f7f6f2] sm:w-48">
                    <img src={project.image} alt={project.title} className="h-full w-full object-contain p-2 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.liveUrl ? (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-md p-1.5 transition-colors duration-150 hover:bg-muted/50" title="Live">
                            <IconExternal className="h-4 w-4 text-muted-foreground" />
                          </a>
                        ) : null}
                        {project.githubUrl ? (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-md p-1.5 transition-colors duration-150 hover:bg-muted/50" title="GitHub">
                            <IconGithub className="h-4 w-4 text-muted-foreground" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <SectionDivider />

        <section className="py-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">GitHub Activity</h2>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex min-h-[180px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-[#d9d9d7] bg-white p-4">
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <IconLoader className="mb-4 h-8 w-8 animate-spin" />
                <p className="text-sm">Syncing GitHub data...</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground">
                <IconGithub className="h-4 w-4" />
                {link.label}
                <IconExternal className="h-3 w-3 opacity-80" />
              </a>
            ))}
          </div>
        </section>

        <section className="py-12 text-center" id="contact">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Let's work together</h2>
          <p className="mb-5 text-muted-foreground">Have a project in mind? Let's create something amazing.</p>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-2 transition-colors hover:border-foreground/30">
            <IconMail className="h-4 w-4 text-muted-foreground" />
            <span className="select-text text-sm font-medium text-foreground">{email}</span>
            <button className="ml-2 rounded-md p-1.5 transition-colors active:scale-90 hover:bg-muted/50" title="Copy email" onClick={handleCopyEmail}>
              {copyState ? <IconCheck className="h-3.5 w-3.5 text-emerald-500" /> : <IconCopy className="h-3.5 w-3.5 text-muted-foreground transition-colors hover:text-foreground" />}
            </button>
          </div>
        </section>

        <footer className="border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:items-start">
              <p>
                Built with <span className="font-medium text-foreground">React</span>, <span className="font-medium text-foreground">Shadcn</span> &amp; <span className="font-medium text-foreground">Tailwind</span>.
              </p>
              <p>Islamabad, Pakistan • {timeString}</p>
            </div>
            <div className="flex flex-col items-center gap-1 sm:items-end">
              <p className="max-w-md text-center text-sm text-muted-foreground sm:text-right">What a privilege it is to be tired of the work you once prayed for.</p>
              <p className="max-w-md text-center text-sm text-muted-foreground sm:text-right">© 2026 Ahmed Khan</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
