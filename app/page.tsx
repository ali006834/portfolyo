import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    category: "Diller",
    color: "indigo",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    color: "blue",
    items: ["Node.js", "Express.js", "NestJS", "Django", "DRF", "Celery", "Redis"],
  },
  {
    category: "Frontend",
    color: "violet",
    items: ["React.js", "Next.js", "Tailwind CSS", "Fabric.js", "Vanilla JS"],
  },
  {
    category: "Mobil & Masaüstü",
    color: "teal",
    items: ["React Native (Expo)", "Electron"],
  },
  {
    category: "Veritabanları",
    color: "emerald",
    items: ["PostgreSQL", "Prisma ORM", "TypeORM", "TimescaleDB", "Firebase Firestore"],
  },
  {
    category: "Entegrasyonlar",
    color: "rose",
    items: ["Shopify API & Liquid", "İkas API", "Instagram Graph API", "Telegram Bot API", "Meta Ads API"],
  },
  {
    category: "E-Ticaret & CMS",
    color: "amber",
    items: ["Shopify", "İkas", "WordPress", "WooCommerce", "Elementor"],
  },
  {
    category: "DevOps",
    color: "orange",
    items: ["Docker", "Git", "GitHub", "node-cron", "Sharp", "PDFKit"],
  },
];

const colorMap: Record<string, { bg: string; text: string; dot: string }> = {
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-700",  dot: "bg-indigo-400" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    dot: "bg-blue-400" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  dot: "bg-violet-400" },
  teal:    { bg: "bg-teal-50",    text: "text-teal-700",    dot: "bg-teal-400" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-400" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    dot: "bg-rose-400" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   dot: "bg-amber-400" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-700",  dot: "bg-orange-400" },
};

const featuredProjects = [
  {
    badge: "Öne Çıkan",
    category: "Full-Stack · Django · AI",
    title: "TaskFlow AI — Oyunlaştırılmış Görev Yönetimi",
    desc: "JIRA/Asana alternatifi: 6 AI agent ile otomatik görev atama, puan/rozet/seviye gamification mekanizması. Google Gemini entegrasyonu, WebSocket liderlik tabloları, Celery+Redis ile otomasyon. Redis cache ile %83 sorgu iyileştirmesi.",
    tags: ["Django", "DRF", "Channels", "Celery", "Redis", "React.js", "TypeScript", "React Native", "Google Gemini", "Docker"],
    gradient: "from-violet-600 via-purple-700 to-indigo-800",
    link: "/projeler",
  },
  {
    badge: "Production",
    category: "Full-Stack · Monorepo",
    title: "Sağlık Profesyonelleri Komisyon Platformu",
    desc: "Diyetisyen, veteriner ve personal trainer'ların dijital reçete oluşturduğu, Shopify ürünü önerdiği ve satıştan otomatik komisyon kazandığı çok rollü platform. Monorepo: Express API + Next.js Panel + Expo Mobile.",
    tags: ["Node.js", "Next.js", "React Native (Expo)", "Shopify API", "PostgreSQL", "Prisma", "Docker"],
    gradient: "from-blue-600 via-blue-700 to-blue-900",
    link: "/projeler",
  },
];

const stats = [
  { num: "10+", label: "Tamamlanan Proje" },
  { num: "3", label: "İş & Staj Deneyimi" },
  { num: "Full-Stack", label: "Backend · Frontend · Mobil" },
  { num: "End-to-End", label: "Tasarımdan Deploy'a" },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 relative overflow-hidden">
        {/* Dekoratif blur blob'lar */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-8 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 right-8 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-5xl px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              {/* Açık badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-1.5 rounded-full text-green-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                İş fırsatlarına açığım
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                Ali Naci Tüysüz
              </h1>

              <p className="text-xl text-blue-300 font-semibold mb-2">
                Full Stack Developer
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {["JavaScript", "TypeScript", "Node.js", "Next.js", "React", "React Native"].map((t) => (
                  <span key={t} className="bg-white/10 border border-white/20 text-slate-200 px-3 py-1 rounded-full text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed text-base max-w-xl mx-auto md:mx-0">
                JavaScript/TypeScript ekosisteminde uzmanlaşmış Full Stack Developer.
                Node.js/NestJS ile backend API&apos;ları, Next.js/React ile web arayüzleri,
                React Native ile çapraz platform mobil uygulamalar geliştiriyorum.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/projeler"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
                >
                  Projelerimi Gör
                </Link>
                <a
                  href="/Ali_Naci_Tuysuz_CV.pdf"
                  download="Ali_Naci_Tuysuz_CV.pdf"
                  className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  CV İndir
                </a>
                <Link
                  href="/iletisim"
                  className="border border-slate-600 text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  İletişim
                </Link>
              </div>

              {/* Sosyal linkler */}
              <div className="flex gap-5 mt-8 justify-center md:justify-start">
                <a
                  href="https://github.com/ali006834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-naci-t%C3%BCys%C3%BCz-7b31b130b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:alinacituysuz43@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="E-posta"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Profil fotoğrafı */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full opacity-30 blur-sm"></div>
                <Image
                  src="/images/profil.jpg"
                  alt="Ali Naci Tüysüz"
                  fill
                  className="rounded-full object-cover object-[center_15%] border-2 border-white/20 shadow-2xl relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── İstatistikler ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-gray-900">{s.num}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Öne Çıkan Projeler ── */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-blue-600 font-medium text-sm mb-1">Portfolyo</p>
              <h2 className="text-3xl font-bold text-gray-900">Öne Çıkan Projeler</h2>
              <p className="text-gray-500 mt-1 text-sm">Production&apos;da çalışan end-to-end sistemler</p>
            </div>
            <Link href="/projeler" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
              Tümünü Gör
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <Link key={p.title} href={p.link} className="group block">
                <div className={`bg-gradient-to-br ${p.gradient} rounded-2xl p-7 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 h-full`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/25 px-3 py-1 rounded-full text-xs font-bold tracking-wide">{p.badge}</span>
                    <span className="text-white/60 text-xs">{p.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">{p.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-white/15 border border-white/20 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teknoloji Stack ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-medium text-sm mb-1">Yetkinlikler</p>
            <h2 className="text-3xl font-bold text-gray-900">Teknoloji Stack</h2>
            <p className="text-gray-500 mt-1 text-sm">Production projelerinde kullandığım teknolojiler</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => {
              const c = colorMap[skill.color];
              return (
                <div key={skill.category} className={`${c.bg} rounded-xl p-5 border border-transparent`}>
                  <h3 className={`font-bold ${c.text} mb-3 text-xs uppercase tracking-widest`}>{skill.category}</h3>
                  <ul className="space-y-1.5">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-700 text-sm flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 ${c.dot} rounded-full flex-shrink-0`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Deneyim Özeti ── */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-medium text-sm mb-1">Kariyer</p>
            <h2 className="text-3xl font-bold text-gray-900">İş Deneyimi</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                company: "Retodi",
                role: "Full Stack Developer",
                period: "Ocak 2025 – Günümüz",
                type: "Tam Zamanlı",
                typeColor: "bg-blue-100 text-blue-700",
                current: true,
                desc: "E-ticaret, kurumsal yazılım ve dijital pazarlama. İkas/Shopify özel tema geliştirme, React.js/React Native panel ve mobil uygulama.",
              },
              {
                company: "OneEyeSystem",
                role: "Backend Developer",
                period: "Tem 2025 – Eyl 2025",
                type: "Staj",
                typeColor: "bg-orange-100 text-orange-700",
                current: false,
                desc: "Django REST Framework ile Tyrex sipariş platformu API'ı. RabbitMQ + TimescaleDB ile anomali tespit sistemi backend'i.",
              },
              {
                company: "YTÜ / Coach Motion",
                role: "Frontend Developer",
                period: "Tem 2024 – Eyl 2024",
                type: "Staj",
                typeColor: "bg-orange-100 text-orange-700",
                current: false,
                desc: "React.js ile dinamik web arayüzleri, Firebase Authentication ve Firestore gerçek zamanlı veri entegrasyonu.",
              },
            ].map((exp) => (
              <div key={exp.company} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${exp.typeColor} px-2.5 py-0.5 rounded-full text-xs font-semibold`}>{exp.type}</span>
                  {exp.current && (
                    <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      Devam ediyor
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{exp.company}</h3>
                <p className="text-blue-600 font-medium text-sm">{exp.role}</p>
                <p className="text-gray-400 text-xs mt-0.5 mb-3">{exp.period}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/deneyim" className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-1">
              Tüm Deneyimi Gör
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-16 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 left-16 w-48 h-48 bg-violet-500/15 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-5xl px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-4">Birlikte Çalışalım</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Yeni projeler, iş fırsatları ve iş birlikleri için her zaman açığım.
            Backend&apos;den deploy&apos;a, API&apos;dan mobil uygulamaya hazırım.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/iletisim"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              İletişime Geç
            </Link>
            <a
              href="https://github.com/ali006834"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 text-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ali-naci-t%C3%BCys%C3%BCz-7b31b130b/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 text-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
