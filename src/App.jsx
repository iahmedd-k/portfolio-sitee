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
      <path d="m4 4 16 16" /><path d="M20 4 4 20" />
    </svg>
  );
}
function IconDoc(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
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
      <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" />
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
      <path d="M15 3h6v6" /><path d="M10 14 21 3" />
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
  if (type === "github")   return <IconGithub {...base} />;
  if (type === "linkedin") return <IconLinkedIn {...base} />;
  if (type === "x")        return <IconX {...base} />;
  if (type === "doc")      return <IconDoc {...base} />;
  if (type === "mail")     return <IconMail {...base} />;
  return null;
}
function SectionDivider() {
  return <div className="my-10 h-3 w-full striped-divider opacity-50" />;
}
function Badge({ children }) {
  return <span className="inline-flex items-center rounded-md bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-foreground">{children}</span>;
}

// ─── GitHub Activity ──────────────────────────────────────────────────────────

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Gray ramp matching GitHub's own contribution graph (light mode)
// dark near-black = most contributions, light gray = empty
const LIGHT_COLORS = ["#ebedf0","#c6cbd1","#959da5","#6a737d","#24292e"];
const DARK_COLORS  = ["#161b22","#0d4429","#006d32","#26a641","#39d353"]; // keep dark as green-ish (GitHub dark style) or use grays:
// Actually match image 1 which shows grays in both modes:
const DARK_GRAY    = ["#21262d","#3d444d","#545d68","#768390","#cdd9e5"];

function getLevel(count) {
  if (!count || count === 0) return 0;
  if (count <= 2)  return 1;
  if (count <= 5)  return 2;
  if (count <= 10) return 3;
  return 4;
}

/**
 * Build a local-timezone date string YYYY-MM-DD without UTC conversion bugs.
 * Using toISOString() shifts to UTC which causes off-by-one in non-UTC timezones.
 */
function localDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Build weeks array for a given year.
 * Each cell: { dateStr, count, inYear }
 * Starts on the Sunday on or before Jan 1, ends after Dec 31.
 * Uses LOCAL date arithmetic (no UTC) to avoid timezone bugs.
 */
function buildWeeks(year, contributionMap) {
  const weeks = [];
  // Start: Jan 1 of year, rewound to Sunday
  const cur = new Date(year, 0, 1, 12, 0, 0); // noon to avoid DST edge cases
  cur.setDate(cur.getDate() - cur.getDay());

  // End: Dec 31 of year
  const yearEnd = new Date(year, 11, 31, 12, 0, 0);

  while (cur <= yearEnd) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const dateStr = localDateStr(cur);
      const inYear  = cur.getFullYear() === year;
      week.push({ dateStr, count: inYear ? (contributionMap[dateStr] || 0) : null, inYear });
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

/**
 * Return week index where each month FIRST appears — only for the selected year.
 * This prevents the "Dedan" bug where Dec (from padding) overlaps Jan label.
 */
function getMonthPositions(weeks, year) {
  const seen = new Set();
  const positions = [];
  weeks.forEach((week, wi) => {
    // Only look at days that are actually in the selected year
    const firstInYear = week.find((d) => d.inYear);
    if (!firstInYear) return;
    // Parse date using local arithmetic, NOT new Date(dateStr) which is UTC
    const parts = firstInYear.dateStr.split("-");
    const month = parseInt(parts[1], 10) - 1; // 0-based month
    const dayYear = parseInt(parts[0], 10);
    if (dayYear !== year) return; // skip padding from adjacent years
    if (!seen.has(month)) {
      seen.add(month);
      positions.push({ month, weekIndex: wi });
    }
  });
  return positions;
}

function ContributionGraph({ weeks, year, themeDark }) {
  // cell=10px gap=3px step=13px — sized to fit ~53 weeks inside the card
  const CELL = 10;
  const GAP  = 3;
  const STEP = CELL + GAP;

  const monthPositions = getMonthPositions(weeks, year);
  const colors = themeDark ? DARK_GRAY : LIGHT_COLORS;

  return (
    <div style={{ width: "100%", minWidth: 0 }}>
      {/* Month labels — absolutely positioned, only for the selected year */}
      <div style={{ position: "relative", height: 18, marginBottom: 4, overflow: "hidden" }}>
        {monthPositions.map(({ month, weekIndex }) => (
          <span
            key={month}
            style={{
              position: "absolute",
              left: weekIndex * STEP,
              fontSize: 11,
              color: "var(--color-muted-foreground, #888)",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              userSelect: "none",
            }}
          >
            {MONTH_NAMES[month]}
          </span>
        ))}
      </div>

      {/* Week columns — no overflow, scales to container */}
      <div style={{ display: "flex", gap: GAP, flexWrap: "nowrap" }}>
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: "flex", flexDirection: "column", gap: GAP, flexShrink: 0 }}>
            {week.map((day, di) => {
              if (!day.inYear) {
                // Padding day — render invisible spacer so column heights stay consistent
                return <div key={di} style={{ width: CELL, height: CELL, flexShrink: 0 }} />;
              }
              const level = getLevel(day.count);
              const bg    = colors[level];
              return (
                <div
                  key={di}
                  title={`${day.dateStr}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                  style={{
                    width: CELL,
                    height: CELL,
                    borderRadius: 2,
                    background: bg,
                    border: "1px solid rgba(0,0,0,0.06)",
                    flexShrink: 0,
                    cursor: "default",
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [themeDark, setThemeDark]           = useState(false);
  const [menuOpen, setMenuOpen]             = useState(false);
  const [skillTab, setSkillTab]             = useState(skillGroups[0].id);
  const [openExperience, setOpenExperience] = useState("emumba");
  const [openEducation, setOpenEducation]   = useState("air");
  const [copyState, setCopyState]           = useState(false);
  const [timeString, setTimeString]         = useState("");
  const [traitIndex, setTraitIndex]         = useState(0);
  const [traitHovered, setTraitHovered]     = useState(false);
  const [traitHasBeenViewed, setTraitHasBeenViewed] = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);
  const [selectedYear, setSelectedYear]     = useState(new Date().getFullYear());

  // GitHub data — keyed by year so we don't re-fetch on year switch
  const [ghData, setGhData]         = useState({}); // { [year]: { [dateStr]: count } }
  const [ghLoading, setGhLoading]   = useState(true);
  const [ghError, setGhError]       = useState(false);

  useEffect(() => {
    const stored   = localStorage.getItem("theme");
    const prefers  = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeDark(stored ? stored === "dark" : prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeDark);
    localStorage.setItem("theme", themeDark ? "dark" : "light");
  }, [themeDark]);

  useEffect(() => {
    const tick = () =>
      setTimeString(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
        })
      );
    tick();
    const t = window.setInterval(tick, 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Fetch contribution data using GitHub GraphQL API.
   * Requires VITE_GITHUB_TOKEN (fine-grained PAT, read-only public data).
   *
   * To create a token:
   *   GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained
   *   Permissions: "Contributions" (read) — or just use a classic token with no scopes.
   *   Add to your .env:  VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxx
   *
   * Without the token, falls back to the events API (last ~90 days only).
   */
  useEffect(() => {
    (async () => {
      try {
        setGhLoading(true);
        setGhError(false);

        const token = import.meta.env.VITE_GITHUB_TOKEN;

        if (token) {
          // ── GraphQL: full contribution calendar, all years ──────────────
          const yearQueries = [2024, 2025, 2026].map((y) => {
            const from = `${y}-01-01T00:00:00Z`;
            const to   = `${y}-12-31T23:59:59Z`;
            return `
              y${y}: user(login: "iahmedd-k") {
                contributionsCollection(from: "${from}", to: "${to}") {
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                      }
                    }
                  }
                }
              }
            `;
          });

          const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ query: `{ ${yearQueries.join("\n")} }` }),
          });

          if (res.ok) {
            const json = await res.json();
            const built = {};
            [2024, 2025, 2026].forEach((y) => {
              const map = {};
              const weeks = json.data?.[`y${y}`]?.contributionsCollection?.contributionCalendar?.weeks ?? [];
              weeks.forEach((w) => {
                w.contributionDays.forEach((d) => {
                  if (d.contributionCount > 0) map[d.date] = d.contributionCount;
                });
              });
              built[y] = map;
            });
            setGhData(built);
            return;
          }
        }

        // ── Fallback: public events API (last ~90 days) ──────────────────
        let all = [];
        for (let page = 1; page <= 10; page++) {
          const res = await fetch(
            `https://api.github.com/users/iahmedd-k/events/public?per_page=100&page=${page}`
          );
          if (!res.ok) break;
          const data = await res.json();
          if (!Array.isArray(data) || data.length === 0) break;
          all = all.concat(data);
          if (data.length < 100) break;
        }

        // Group events by year→date
        const built = {};
        all.forEach((event) => {
          const d = new Date(event.created_at);
          const y = d.getFullYear();
          const dateStr = localDateStr(d);
          if (!built[y]) built[y] = {};
          built[y][dateStr] = (built[y][dateStr] || 0) + 1;
        });
        setGhData(built);

      } catch (err) {
        console.error("GitHub fetch failed:", err);
        setGhError(true);
      } finally {
        setGhLoading(false);
      }
    })();
  }, []);

  const activeSkills = useMemo(
    () => skillGroups.find((g) => g.id === skillTab) ?? skillGroups[0],
    [skillTab]
  );

  // Derive weeks + total for the selected year
  const { weeks, totalContributions } = useMemo(() => {
    const map   = ghData[selectedYear] ?? {};
    const w     = buildWeeks(selectedYear, map);
    const total = Object.values(map).reduce((a, b) => a + b, 0);
    return { weeks: w, totalContributions: total };
  }, [ghData, selectedYear]);

  const traitCards = [
    { urdu: "\u062c\u0646\u0648\u0646", title: "Junoon",     subtitle: "OBSESSIVE PASSION",    description: "A state of intense devotion where the boundary between the creator and the craft disappears. It is the fuel for greatness." },
    { urdu: "\u0639\u0632\u0645",       title: "Azm",        subtitle: "STEADFAST RESOLVE",     description: "The quiet discipline to keep moving forward even when progress feels slow. It is the promise you keep to your future self." },
    { urdu: "\u0627\u0633\u062a\u0642\u0627\u0645\u062a", title: "Istiqamat", subtitle: "CONSISTENT DIRECTION", description: "The ability to stay aligned with your values, habits, and goals. It turns effort into momentum and momentum into trust." },
    { urdu: "\u062c\u0647\u062f",       title: "Juhd",       subtitle: "PURPOSEFUL EFFORT",     description: "The willingness to do the hard work with sincerity. It reflects grit, patience, and the desire to leave things better than you found them." },
  ];
  const activeTrait = traitCards[traitIndex % traitCards.length];

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState(true);
      window.setTimeout(() => setCopyState(false), 1800);
    } catch (e) { console.error(e); }
  };

  const availableYears = [2026, 2025, 2024];
  const legendColors   = themeDark ? DARK_GRAY : LIGHT_COLORS;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 dotted-border-left dotted-border-right sm:px-6 lg:px-8">

        {/* ── Nav ─────────────────────────────────────────────────────────── */}
        <nav className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-200 ${isScrolled ? "border-b border-border" : "border-b border-transparent"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-14 items-center justify-between">
              <button className="p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
                <IconMenu className="h-5 w-5" />
              </button>
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <button key={item} className="px-3 py-1.5 text-sm capitalize text-muted-foreground transition-colors hover:text-foreground" onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>
              <button className="rounded-lg p-2 transition-all duration-200 hover:scale-110 hover:bg-muted" aria-label="Toggle theme" onClick={() => setThemeDark((v) => !v)}>
                <IconMoon className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="absolute left-0 top-14 w-full border-b border-border bg-background/95 p-4 shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button key={item} className="w-full rounded-md px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground" onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="py-5 md:py-6">
          <div className="mb-4 text-center">
            <div
              className="group relative inline-flex min-h-[110px] flex-col items-center justify-center pb-[4.5rem] md:min-h-[125px] md:pb-20"
              onMouseEnter={() => { setTraitHovered(true); setTraitHasBeenViewed(true); }}
              onMouseLeave={() => setTraitHovered(false)}
            >
              <div className="pointer-events-none absolute left-1/2 top-full h-10 w-[min(88vw,390px)] -translate-x-1/2" />
              
              {/* Hover for meaning label - fades on hover and stays hidden after first interaction */}
              <div className={`mb-3 flex flex-col items-center gap-1.5 transition-opacity duration-300 ${traitHovered || traitHasBeenViewed ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">Hover for meaning</span>
                <svg className="h-4 w-4 text-muted-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              <div lang="ur" dir="rtl" className="font-urdu select-none text-[58px] leading-none font-normal tracking-[-0.02em] text-[#7c7c7c] transition-all duration-300 group-hover:-translate-y-1 md:text-[72px]" style={{ unicodeBidi: "plaintext" }}>
                {activeTrait.urdu}
              </div>
              <div className={`absolute left-1/2 top-full z-50 mt-2 w-[min(88vw,350px)] -translate-x-1/2 overflow-hidden rounded-[18px] border border-border bg-card text-left shadow-[0_20px_48px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 ${traitHovered ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`} style={{ backdropFilter: "blur(12px)" }}>
                <div className="px-5 pb-4 pt-4 text-center">
                  <div className="mb-1 text-[20px] font-semibold tracking-tight text-foreground">{activeTrait.title}</div>
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/70">{activeTrait.subtitle}</div>
                  <p className="mx-auto max-w-xs text-[15px] leading-6 text-foreground/80">{activeTrait.description}</p>
                </div>
                <div className="border-t border-border bg-muted/50 px-5 py-2.5">
                  <button type="button" onClick={() => setTraitIndex((v) => v + 1)} className="mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/80 transition-colors hover:text-foreground">
                    <IconLoader className="h-4 w-4" />Show another
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-border transition-all duration-500 ease-out hover:scale-105 hover:border-foreground/50 md:h-40 md:w-40">
              <img src={avatarImage} alt="Ahmed Khan" draggable="false" className="h-full w-full select-none object-cover object-top" />
            </div>
            <div className="flex flex-col">
              <div className="mb-1 flex flex-col items-center gap-2 sm:flex-row sm:items-center md:items-start">
                <h2 className="text-2xl font-semibold text-foreground">Ahmed Khan</h2>
                <div className="mt-1 flex items-center gap-1 text-muted-foreground/80 sm:mt-0 sm:ml-2">
                  <IconMapPin className="h-3.5 w-3.5" />
                  <span className="text-sm font-medium">Islamabad, Pakistan</span>
                </div>
              </div>
              <p className="mb-4 text-center text-muted-foreground md:text-left">{"22 \u2022 Full Stack Software & Infrastructure Engineer \u2022 MLOps / LLMOps"}</p>
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                {heroLinks.map((link) => {
                  const cls = "group relative inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-muted/40";
                  const tip = link.action ? (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                      {link.action === "copy" ? "CLICK TO COPY EMAIL" : "VIEW RESUME"}
                    </span>
                  ) : null;
                  if (link.action === "copy") return (
                    <button key={link.label} type="button" onClick={handleCopyEmail} className={cls} aria-label={link.label}>
                      <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />{tip}
                    </button>
                  );
                  if (link.action === "resume") return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={cls} aria-label={link.label}>
                      <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />{tip}
                    </a>
                  );
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={cls} aria-label={link.label}>
                      <SocialIcon type={link.icon} className="h-5 w-5 text-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── About ───────────────────────────────────────────────────────── */}
        <div id="about">
          <section className="py-6">
            <h2 className="mb-6 text-xl font-semibold text-foreground">About</h2>
            <div className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              <p className="mb-4"><span className="text-foreground">Backend &amp; Full-Stack Developer</span> at Air University Islamabad, focused on building scalable, secure, and high-performance products.</p>
              <p className="mb-4">I've shipped production applications across ecommerce, AI, SaaS, and realtime systems - with hands-on work in <span className="text-foreground">Node.js, React, Next.js, MongoDB, Redis, Stripe, and OpenAI</span>.</p>
              <p>Outside the terminal, you'll usually find me improving systems, iterating on client work, or exploring product ideas that feel useful in the real world.</p>
            </div>
          </section>
        </div>

        {/* ── Skills ──────────────────────────────────────────────────────── */}
        <div id="skills">
          <section className="py-8">
            <h2 className="mb-8 text-xl font-semibold text-foreground">Skills</h2>
            <div className="mb-10 flex flex-wrap gap-2">
              {skillGroups.map((group) => (
                <button key={group.id} onClick={() => setSkillTab(group.id)}
                  className={`rounded-lg border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ${skillTab === group.id ? "border-foreground bg-foreground text-background" : "border-border bg-transparent text-muted-foreground hover:border-foreground/20 hover:text-foreground"}`}>
                  {group.title}
                </button>
              ))}
            </div>
            <div className="min-h-[150px]">
              <div className="flex flex-wrap gap-2 sm:gap-3 animate-in fade-in duration-500">
                {activeSkills.skills.map((skill) => (
                  <div key={skill.name} className="flex cursor-default items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 sm:px-5 sm:py-2.5 transition-colors duration-150 hover:border-border/80 hover:bg-secondary">
                    <img src={skill.icon} alt={skill.name} className={`h-4 w-4 sm:h-5 sm:w-5 object-contain transition-all ${skill.invertInDark ? "dark:invert dark:brightness-200" : ""}`} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    <span className="text-xs sm:text-sm font-medium text-foreground/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <SectionDivider />

        {/* ── Experience ──────────────────────────────────────────────────── */}
        <div id="experience">
          <section className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Work Experience</h2>
            <div className="space-y-1.5 sm:space-y-2">
              {experienceItems.map((item) => {
                const open = openExperience === item.id;
                return (
                  <div key={item.id} className={`rounded-lg border border-border bg-card px-3 py-2 sm:px-4 transition-all duration-200 ${open ? "shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]"}`}>
                    <button className="flex w-full items-center justify-between py-2 sm:py-4 font-medium hover:no-underline" onClick={() => setOpenExperience(openExperience === item.id ? null : item.id)}>
                      <div className="flex w-full items-center gap-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-secondary text-sm font-semibold text-foreground">
                          {item.image ? (
                            <img src={item.image} alt={item.company} className="h-full w-full object-contain" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="text-xs uppercase tracking-[0.22em]">.{item.initials || item.company.slice(0,2)}</span>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                            <span className="font-medium text-foreground text-sm sm:text-base">{item.company}</span>
                            <span className="text-muted-foreground text-xs sm:text-sm">{item.role}</span>
                          </div>
                          <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{item.period}</div>
                        </div>
                      </div>
                      <IconChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && item.points && (
                      <div className="pb-4 pt-0 text-sm">
                        <div className="mb-3 flex gap-2"><Badge>{item.location}</Badge><Badge>{item.type}</Badge></div>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-muted-foreground/50">•</span><span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* ── Education ───────────────────────────────────────────────────── */}
        <div id="education">
          <section className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Education</h2>
            <div className="space-y-1.5 sm:space-y-2">
              {educationItems.map((item) => {
                const open = openEducation === item.id;
                return (
                  <div key={item.id} className={`rounded-lg border border-border bg-card px-3 py-2 sm:px-4 transition-all duration-200 ${open ? "shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]"}`}>
                    <button className="flex w-full items-center justify-between py-2 sm:py-4 font-medium hover:no-underline" onClick={() => setOpenEducation(openEducation === item.id ? null : item.id)}>
                      <div className="flex w-full items-center gap-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-secondary">
                          <img src={item.image} alt={item.school} className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                            <span className="font-medium text-foreground text-sm sm:text-base">{item.school}</span>
                            <span className="text-muted-foreground text-xs sm:text-sm">{item.degree}</span>
                          </div>
                          <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{item.period}</div>
                        </div>
                      </div>
                      <IconChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <div className="pb-4 pt-0 text-sm">
                        <div className="mb-3 flex gap-2"><Badge>{item.location}</Badge><Badge>{item.meta}</Badge></div>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-muted-foreground/50">•</span><span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <SectionDivider />

        {/* ── Projects ────────────────────────────────────────────────────── */}
        <div id="projects">
          <section className="py-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Projects</h2>
            <div className="space-y-3 sm:space-y-4">
              {projectItems.map((project) => (
                <div key={project.id} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-3 transition-all duration-300 hover:shadow-[0_10px_26px_rgba(0,0,0,0.08)] sm:gap-4 sm:p-4 md:flex-row">
                  <div className="flex h-24 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary sm:h-32 md:w-40">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="h-full w-full object-contain p-2 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.accent || "from-slate-950 via-slate-800 to-zinc-700"} text-2xl font-semibold tracking-[0.18em] text-white transition-transform duration-300 group-hover:scale-105`}>
                        {project.mark || project.title.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{project.title}</h3>
                      <div className="flex gap-2 shrink-0">
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-md p-1.5 transition-colors duration-150 hover:bg-muted/50" title="Live"><IconExternal className="h-4 w-4 text-muted-foreground" /></a>}
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-md p-1.5 transition-colors duration-150 hover:bg-muted/50" title="GitHub"><IconGithub className="h-4 w-4 text-muted-foreground" /></a>}
                      </div>
                    </div>
                    <p className="mb-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <SectionDivider />

        {/* ── GitHub Activity ─────────────────────────────────────────────── */}
        <section className="py-8">
          <h2 className="mb-6 text-xl font-semibold text-foreground">GitHub Activity</h2>

          {ghLoading ? (
            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <IconLoader className="h-7 w-7 animate-spin" />
                <p className="text-sm">Loading contribution graph...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Outer row: card (flex-1) + year buttons (responsive) */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">

                {/* Graph card — takes all remaining width, no internal scroll */}
                <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card px-3 pb-4 pt-5 sm:px-5">
                  <div className="overflow-x-auto">
                    <ContributionGraph weeks={weeks} year={selectedYear} themeDark={themeDark} />
                  </div>

                  {/* Footer: total count + legend */}
                  <div className="mt-3 flex flex-col gap-3 items-start justify-between sm:flex-row sm:items-center">
                    <span className="text-xs text-muted-foreground">
                      {totalContributions} activities in {selectedYear}
                      {!import.meta.env.VITE_GITHUB_TOKEN && (
                        <span className="ml-2 opacity-60">(last ~90 days)</span>
                      )}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span>Less</span>
                      {legendColors.map((color, i) => (
                        <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: color, border: "1px solid rgba(0,0,0,0.08)" }} />
                      ))}
                      <span>More</span>
                    </div>
                  </div>
                </div>

                {/* Year buttons — responsive layout */}
                <div className="flex shrink-0 flex-row gap-2 sm:flex-row lg:flex-col lg:pt-1">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-150 sm:flex-none ${
                        selectedYear === year
                          ? "border border-foreground bg-foreground text-background"
                          : "bg-transparent text-foreground hover:bg-muted"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal / Work links */}
              <div className="flex justify-center gap-6 pt-1">
                <a href="https://github.com/iahmedd-k" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <IconGithub className="h-4 w-4" />Personal<IconExternal className="h-3 w-3 opacity-60" />
                </a>
                <a href="https://github.com/iahmedd-k" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <IconGithub className="h-4 w-4" />Work<IconExternal className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          )}
        </section>

        {/* ── Contact ─────────────────────────────────────────────────────── */}
        <section className="py-12 text-center" id="contact">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Let's work together</h2>
          <p className="mb-5 text-muted-foreground">Have a project in mind? Let's create something amazing.</p>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 transition-colors hover:border-foreground/30">
            <IconMail className="h-4 w-4 text-muted-foreground" />
            <span className="select-text text-sm font-medium text-foreground">{email}</span>
            <button className="ml-2 rounded-md p-1.5 transition-colors active:scale-90 hover:bg-muted/50" title="Copy email" onClick={handleCopyEmail}>
              {copyState ? <IconCheck className="h-3.5 w-3.5 text-emerald-500" /> : <IconCopy className="h-3.5 w-3.5 text-muted-foreground transition-colors hover:text-foreground" />}
            </button>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:items-start">
              <p>Built with <span className="font-medium text-foreground">React</span>, <span className="font-medium text-foreground">Shadcn</span> &amp; <span className="font-medium text-foreground">Tailwind</span>.</p>
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