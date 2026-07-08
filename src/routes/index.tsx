import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-character.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const SKILLS = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "FastAPI", "LLaMA-3", "LLMs", "Semantic Search", "Embeddings",
  "TensorFlow", "OpenCV", "Computer Vision", "NLP",
  "Docker", "Kubernetes", "AWS", "GitHub Actions",
  "MySQL", "Supabase", "REST APIs", "Flutter",
];

const PROJECTS = [
  {
    n: "01",
    title: "AI-Based Dementia Support System",
    tag: "Final Year Project",
    year: "2025",
    desc: "Full-stack AI application with a CNN model classifying dementia from MRI scans. React (Vite) frontend on Netlify, FastAPI backend, Flutter mobile app sharing the same APIs, Supabase for data.",
    stack: ["React", "FastAPI", "CNN", "Flutter", "Supabase"],
  },
  {
    n: "02",
    title: "AI Chatbot System",
    tag: "Reliance Industries",
    year: "2025",
    desc: "Production chatbot built on LLaMA-3 with semantic search and embeddings. Python vector-search backend, MySQL for embeddings/logs, Node.js APIs for chat and model interaction.",
    stack: ["LLaMA-3", "Python", "Node.js", "MySQL", "Embeddings"],
  },
  {
    n: "03",
    title: "ReKindle — Memory Tracker",
    tag: "Personal Project",
    year: "2024",
    desc: "Full-stack web app for storing and managing multimedia memories with real-time collaboration and secure auth. Built with React.js and Supabase.",
    stack: ["React", "Supabase", "Realtime", "Auth"],
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <SkillsSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl leading-none">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-warm animate-pulse" />
          Ankita<span className="italic text-muted-foreground">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:ankitahaldar90986@gmail.com"
          className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/40" />
            Portfolio / 2026
          </div>
          <h1 className="font-display text-[15vw] md:text-[9vw] lg:text-[7.5rem] xl:text-[9rem] leading-[0.95] text-balance">
            Building <em className="italic text-accent-warm">intelligent</em>
            <br />
            software, one <br className="hidden md:block" />
            <em className="italic">idea</em> at a time.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Ankita Haldar</span> — B.Tech Computer Science (AI/ML) graduate, AI/ML engineer, and full-stack developer passionate about building intelligent software and scalable AI solutions. With experience developing LLM-powered applications and machine learning systems, I enjoy transforming innovative ideas into impactful real-world products.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:gap-4 transition-all"
            >
              View selected work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://github.com/ankitahaldar20"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm hover:bg-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ankita-haldar-a106b3282/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm hover:bg-secondary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-warm/20 via-transparent to-accent-cool/10 blur-3xl" />
            <img
              src={heroImg}
              alt="Illustration of Ankita coding on a laptop with AI elements floating around"
              width={1200}
              height={1200}
              className="relative w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Available for</span>
              <span className="font-medium">Full-time roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Python", "React", "LLaMA-3", "FastAPI", "Docker", "AWS", "Next.js", "Computer Vision", "Supabase", "Kubernetes"];
  const doubled = [...items, ...items];
  return (
    <section className="py-8 border-y border-border overflow-hidden bg-secondary/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="mx-8 font-display text-3xl md:text-4xl text-muted-foreground flex items-center gap-8">
            {t}
            <span className="text-accent-warm">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
      <span className="font-mono text-accent-warm">{n}</span>
      <span className="w-8 h-px bg-foreground/30" />
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionLabel n="/01">About</SectionLabel>
        </div>
        <div className="lg:col-span-8">
          <p className="font-display text-3xl md:text-5xl leading-tight text-balance">
            I turn <em className="italic text-accent-warm">research-grade AI</em> into products people can actually use — grounded in solid engineering, and shipped end-to-end.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-muted-foreground">
            <p>
                B.Tech Computer Science (AI/ML) graduate, AI/ML engineer, and full-stack developer passionate about building intelligent software and scalable AI solutions. With experience developing LLM-powered applications and machine learning systems, I enjoy transforming innovative ideas into impactful real-world products.            </p>
            <p>
              Currently exploring the intersection of <span className="text-foreground">LLMs</span>, <span className="text-foreground">semantic search</span> and <span className="text-foreground">healthcare AI</span> — and seeking entry-level SDE or AI/ML engineering roles for 2026.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["4+", "months at Reliance"],
              ["3+", "shipped projects"],
              ["10+", "core technologies"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-5xl md:text-6xl text-foreground">{k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="/02">Experience</SectionLabel>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl leading-none">
              Where I've <em className="italic">built.</em>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <article className="group relative bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-foreground/30 transition-colors">
              <div className="flex flex-wrap justify-between gap-4 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground">Reliance Industries Ltd. · Mumbai</div>
                  <h3 className="font-display text-3xl md:text-4xl mt-1">Full-Stack & AI Developer Intern</h3>
                </div>
                <div className="font-mono text-sm text-muted-foreground pt-2">
                  Jul 2025 — Oct 2025
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Developed an AI chatbot using LLaMA-3, semantic search and embeddings — improving response accuracy and contextual understanding.",
                  "Built Python backend services for vector search, embedding generation and API integration.",
                  "Designed and optimized MySQL databases for embeddings, logs and system telemetry.",
                  "Shipped Node.js APIs for chat, model interaction and user requests.",
                  "Improved system reliability with structured logging and error handling.",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="text-accent-warm mt-2">—</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <div className="flex flex-wrap justify-between gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Bharati Vidyapeeth DET · Maharashtra</div>
                  <h3 className="font-display text-3xl md:text-4xl mt-1">B.Tech, Computer Science (AI/ML)</h3>
                </div>
                <div className="font-mono text-sm text-muted-foreground pt-2">
                  2022 — 2026
                </div>
              </div>
              <p className="text-muted-foreground">
                Coursework across ML, computer vision, NLP, data structures, DBMS and cloud fundamentals. Complemented by NPTEL DSA and Udemy Java / DBMS certifications.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel n="/03">Selected work</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl leading-none max-w-3xl">
              Things I've <em className="italic text-accent-warm">shipped.</em>
            </h2>
          </div>
          <a
            href="https://github.com/ankitahaldar20"
            target="_blank" rel="noreferrer"
            className="text-sm underline underline-offset-4 hover:text-accent-warm"
          >
            More on GitHub →
          </a>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <article
              key={p.n}
              className="group relative grid md:grid-cols-12 gap-6 border-t border-border pt-8 pb-4 hover:pl-4 transition-all duration-500"
            >
              <div className="md:col-span-1 font-mono text-sm text-muted-foreground">{p.n}</div>
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-widest text-accent-warm mb-2">{p.tag}</div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
              </div>
              <p className="md:col-span-5 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="md:col-span-2 flex md:flex-col md:items-end gap-2 flex-wrap">
                <span className="font-mono text-sm text-muted-foreground">{p.year}</span>
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-1 rounded-full border border-border text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionLabel n="/04">Toolkit</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl leading-none">
            My daily <em className="italic">stack.</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-sm">
            The languages, frameworks and platforms I reach for when building AI-native, full-stack products.
          </p>
        </div>
        <div className="lg:col-span-8 flex flex-wrap gap-2 content-start">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-foreground hover:text-background hover:border-foreground transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <SectionLabel n="/05">
          <span className="mx-auto">Get in touch</span>
        </SectionLabel>
        <h2 className="font-display text-6xl md:text-[10rem] leading-[0.9] text-balance">
          Let's build <em className="italic text-accent-warm">something</em>
          <br />
          together<span className="text-accent-warm">.</span>
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
          Open to entry-level Software Development and AI/ML engineering roles, freelance and collaborations. The fastest way to reach me is email.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ankitahaldar90986@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-base font-medium hover:gap-4 transition-all"
          >
            ankitahaldar90986@gmail.com
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+919892290155"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-base hover:bg-secondary"
          >
            +91 98922 90155
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ankita Haldar. Crafted with care.</div>
        <div className="flex gap-6">
          <a href="https://github.com/ankitahaldar20" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://linkedin.com/in/ankita-haldar-a106b3282/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:ankitahaldar90986@gmail.com" className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
