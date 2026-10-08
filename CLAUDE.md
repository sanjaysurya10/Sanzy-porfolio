# CLAUDE.md

Guidance for Claude Code when working in this repository (Sanjay Surya's personal portfolio).

## Repository layout

```
Sanzy-porfolio-main/
├── CLAUDE.md
├── README.md
├── .gitignore                    # ignores .agent/, .vscode/
├── my-portfolio-master/          # LEGACY — Java Spring Boot + Thymeleaf (keep, do not delete)
└── my-portfolio-nextjs/          # NEW — Next.js 14 App Router (deploy target: Vercel)
```

---

## 1. Legacy app — `my-portfolio-master/` (Spring Boot 3.4.2, Java 17)

Kept for reference only. Do not delete or modify unless explicitly asked.

```
my-portfolio-master/
├── Dockerfile                    # maven:3.8.4-openjdk-17 build → eclipse-temurin:17-jre, port 8080
├── pom.xml                       # spring-boot-starter-web, -thymeleaf, -devtools, -test
├── mvnw / mvnw.cmd
└── src/main/
    ├── java/in/bushansirgur/portfolio/
    │   ├── PortfolioApplication.java
    │   └── controller/HomeController.java
    └── resources/
        ├── application.properties   # supabase.url=${SUPABASE_URL}, supabase.anon-key=${SUPABASE_ANON_KEY}
        ├── templates/
        │   ├── master.html     # layout: <head>, video bg, menu, page fragment switch on ${title}, footer, scripts
        │   ├── menu.html       # Bootstrap navbar (brand "My Profile")
        │   ├── footer.html     # "Copyright © Sanzy 2024" + Privacy/Terms/Contact links
        │   ├── home.html       # hero: typed-text badge, name, circuit-panel profile, About Me
        │   ├── resume.html     # Education, Experience, Tools/Languages/Skills card
        │   ├── projects.html   # 4 flip cards + "All Projects" grid + CTA, inline IntersectionObserver script
        │   └── contact.html    # glass-panel form (name/email/phone/message), inline fetch script
        └── static/assets/
            ├── css/styles.css        # ~279 KB: Bootstrap 5 theme + all custom styles
            ├── js/scripts.js         # video fade-in, About pull-up observer, typed-text loop
            ├── images/profile.png
            ├── videos/bgg.mp4
            ├── Resume.pdf, Certificate.pdf, Sanjay_JPMorgan_AIML_Resume_compressed.pdf
```

### Legacy routes (`HomeController`)
| Route | Behaviour |
|---|---|
| `GET /`, `/home` | `master` with title `Home` |
| `GET /resume` | `master` with title `Resume` |
| `GET /projects` | `master` with title `Projects` |
| `GET /contact` | `master` with title `Contact` |
| `POST /contact/submit` | form-urlencoded `name,email,phone,message` → POST JSON to `${SUPABASE_URL}/rest/v1/contact_submissions` with `apikey` + `Authorization: Bearer` anon key → `{status:"success"}` / 500 `{status:"error"}` |

### Legacy commands
```bash
cd my-portfolio-master
./mvnw spring-boot:run        # http://localhost:8080 (needs SUPABASE_URL, SUPABASE_ANON_KEY env vars)
docker build -t portfolio .   # container build
```

---

## 2. New app — `my-portfolio-nextjs/` (Next.js 14 App Router, TypeScript, no Tailwind, no ESLint)

### Goal
Port the legacy site 1:1 — **same design, same animations, same CSS, same content** (plus the content
changes listed below). Single Vercel project, no Java.

### Structure
```
my-portfolio-nextjs/
├── app/
│   ├── layout.tsx              # master.html equivalent: <head> links, video bg, Navbar, <main>, Footer, scripts
│   ├── page.tsx                # Home (metadata title "Home")
│   ├── resume/page.tsx         # Resume (metadata title "Resume")
│   ├── projects/page.tsx       # Projects (metadata title "Projects")
│   ├── contact/page.tsx        # Contact (metadata title "Contact") — server wrapper
│   └── api/contact/route.ts    # replaces POST /contact/submit → Supabase insert
├── components/
│   ├── Navbar.tsx              # "use client"; brand "Sanjay Surya"; closes mobile collapse on route change
│   ├── Footer.tsx
│   ├── VideoBackground.tsx
│   ├── PageScripts.tsx         # "use client"; re-runs window.initPortfolio() on client-side navigation
│   ├── ProjectsEffects.tsx     # "use client"; port of projects.html inline script (reveal + tap-to-flip)
│   └── ContactForm.tsx         # "use client"; port of contact.html form + inline script
├── public/assets/
│   ├── css/styles.css          # copied byte-for-byte — NEVER edit CSS values
│   ├── js/scripts.js           # copied, then patched (typed-text array + init wrapper — see below)
│   ├── images/profile.png
│   ├── videos/bgg.mp4
│   └── *.pdf                   # Resume.pdf, Certificate.pdf, Sanjay_JPMorgan_AIML_Resume_compressed.pdf
├── next.config.js              # { output: 'standalone' }
├── package.json
└── .env.local                  # SUPABASE_URL, SUPABASE_ANON_KEY (git-ignored)
```

### Commands
```bash
cd my-portfolio-nextjs
npm run dev       # http://localhost:3000
npm run build     # production build + type check
npm run start
```

### Environment variables
| Var | Source |
|---|---|
| `SUPABASE_URL` | same value the Java app read from env (`supabase.url=${SUPABASE_URL}`) |
| `SUPABASE_ANON_KEY` | same value the Java app read from env (`supabase.anon-key=${SUPABASE_ANON_KEY}`) |

`application.properties` only references env vars — the real values are not in the repo. Fill
`.env.local` locally and set both in Vercel → Project → Settings → Environment Variables.

---

## 3. Migration spec (source of truth)

### Hard rules
1. No Tailwind anywhere — Bootstrap classes exactly as before (Bootstrap is bundled inside `styles.css`; Bootstrap JS 5.2.3 + Bootstrap Icons 1.8.1 via CDN).
2. Do not change any CSS values in `styles.css`.
3. Do not rewrite or simplify the circuit SVG — copy it exactly (only JSX attribute-name conversion).
4. Profile photo uses a plain `<img>`, not `next/image`.
5. Keep all Bootstrap class names identical.
6. Do not delete the legacy Java project.
7. The Next.js project is a new folder alongside the legacy one.

### Layout (`app/layout.tsx`)
- `<head>`: Google Fonts (Plus Jakarta Sans, Space Grotesk, JetBrains Mono, with preconnects), Bootstrap Icons CDN, `/assets/css/styles.css`.
- `<body className="d-flex flex-column h-100">` → video background (`#bgg-video`, `/assets/videos/bgg.mp4`) → `<main className="flex-shrink-0">` containing Navbar + page → Footer.
  - Navbar is rendered **inside** `<main>` to match the legacy DOM exactly.
- Scripts via `next/script` `afterInteractive`: Bootstrap bundle 5.2.3, `/assets/js/scripts.js`.
- Metadata: title template `Sanjay Surya - %s`; description = legacy meta description.

### Content changes applied during the port
| Page | Change |
|---|---|
| Navbar | Brand "My Profile" → "Sanjay Surya"; Home link → `/` |
| Home | "Hope you have a wonderful day, I'm" → "Hi there, I'm" |
| Home | Twitter/X icon href → `https://x.com/sanjaysurya10` (was LinkedIn) |
| Home | About: "am currently pursuing a Master's in Data Science and Analytics at Maynooth University" → "completed my Master's in Data Science and Analytics at Maynooth University (2025–2026)" |
| Resume | Mindenious dates → "Dec 2024 – Aug 2025" |
| Resume | Sutherland title → "Data Analytics Intern", dates → "Oct 2024 – Jul 2025" |
| Resume | Download button → `/assets/Sanjay_JPMorgan_AIML_Resume_compressed.pdf` |
| Resume | New "Skills" section after Experience (same glass-card style): Languages (Python, Java, JavaScript, TypeScript, SQL), Frameworks (Spring Boot, Next.js, React, Node.js, Express), Tools (Docker, Git, GitLab CI/CD, Supabase, MongoDB, MySQL), Other (REST APIs, JWT Auth, Thymeleaf, Maven). The pre-existing Tools/Languages/Skills card is kept below it. |
| Projects | 3 new flip cards: **Sport Mate** (Next.js 14, TypeScript, Node.js, MongoDB, Docker → github.com/sanjaysurya10/Sport-Mate), **Voxyfloo** (Python, NLP, Voice Recognition), **AutoApply AI** (Python, Automation, AI) — both → github.com/sanjaysurya10 |
| Contact | Phone field removed; form POSTs JSON to `/api/contact`; success/error divs unchanged |
| scripts.js | Typed-text array → `["Full Stack Developer", "AI/ML Enthusiast", "Data Science Graduate", "Backend Engineer"]` (rendered uppercase by `.text-uppercase`) |

### API route (`app/api/contact/route.ts`)
POST `{ name, email, message }` → `${SUPABASE_URL}/rest/v1/contact_submissions` with headers
`apikey`, `Authorization: Bearer <anon key>`, `Prefer: return=minimal` → `{ success: true }` or
`{ success: false }` with status 500. No `phone` column value is sent any more — if the Supabase
table has `phone NOT NULL`, make the column nullable.

### Port notes / gotchas (why the code looks the way it does)
- **scripts.js + Next.js**: the legacy file ran on `DOMContentLoaded`, which has usually already fired by the time an `afterInteractive` script loads, and never re-runs on client-side navigation. It is wrapped in `window.initPortfolio()` that runs immediately if the DOM is ready, and `PageScripts.tsx` calls it again on every route change. Guards: the video `load()` runs once (the video lives in the persistent layout), and the typed-text loop runs once per element and stops when the element is detached.
- **Inline `<script>` in Thymeleaf fragments** (projects, contact) were ported to client components (`ProjectsEffects`, `ContactForm`) because React does not execute inline scripts.
- **`"use client"` + `metadata`**: a client component cannot export `metadata`, so `contact/page.tsx` stays a server component and renders `<ContactForm />`.
- **`style="color:#64c8ff!important"`** on the Resume `h2`s: React style objects cannot carry `!important`. Bootstrap's `.text-primary` uses `rgba(var(--bs-primary-rgb), …) !important`, so the headings set `--bs-primary-rgb: 100, 200, 255` (= `#64c8ff`) inline — same rendered colour, no CSS edits.
- **Asset paths**: legacy used relative `assets/...`; Next uses absolute `/assets/...` from `public/`.
- **Flip-card colours**: only `card-cyan`, `card-purple`, `card-amber`, `card-green` exist in CSS; the new cards reuse these (Sport Mate cyan, Voxyfloo purple, AutoApply AI amber). Their tech badges sit on the card front (`.tech-stack` is a global class); the back holds the description + GitHub link.
- **Home `<title>`**: a root layout's `title.template` does not apply to `app/page.tsx` (same segment), so Home uses `title: { absolute: "Sanjay Surya - Home" }`.
- **Thymeleaf wrapper `<div>`s**: `th:insert`/`th:if` left extra `<div>`s around the navbar, each page fragment and the footer. `layout.tsx` reproduces them so flex layout (e.g. footer `mt-auto`) behaves identically.
- **Next 14 advisories**: `npm audit` flags `next@14.2.35` (latest 14.x); fixes only exist in newer majors. Upgrading is a separate decision.
- **Nested git repo**: `create-next-app` ran `git init` inside `my-portfolio-nextjs/` (the parent folder is not a repo).

### Status (2026-10-09)
Migration complete. `tsc --noEmit` and `npm run build` pass; all 4 pages + assets return 200; headless
Chrome confirmed typed text, video fade-in, About pull-up and all flip/other-card reveals.
Supabase project **Portfolio** (`ctshgeeqmjrdtohjrari`) has `public.contact_submissions`
(id, name, email, message, phone nullable, created_at) with RLS on and an anon INSERT-only policy;
an end-to-end insert via `/api/contact` succeeded and the anon key cannot read rows. Use the
**legacy anon** key (JWT), not `sb_publishable_…`. Not yet verified in a real browser: mobile
tap-to-flip, navbar collapse.

### Verify checklist
`npm run build` passes, then `npm run dev` and check `/`, `/resume`, `/projects`, `/contact`:
video background fades in, circuit panel + floating symbols animate, typed text loops, About section
pulls up, flip cards reveal and flip (hover / tap), navbar collapse works on mobile, contact form
validates and posts.

### Deploy (Vercel)
Import the repo, set **Root Directory** to `my-portfolio-nextjs`, framework preset Next.js, add
`SUPABASE_URL` and `SUPABASE_ANON_KEY` env vars.
