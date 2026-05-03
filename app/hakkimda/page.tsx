import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımda | Ali Naci Tüysüz",
  description: "Full-Stack Developer — Node.js, React, Next.js, PostgreSQL ile production sistemler geliştiriyorum.",
};

const skillCategories = [
  {
    title: "Diller",
    color: "indigo",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    color: "blue",
    skills: ["Node.js", "Express.js", "NestJS", "Django", "DRF", "Celery", "Redis"],
  },
  {
    title: "Frontend",
    color: "violet",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Vanilla JS"],
  },
  {
    title: "Mobil & Masaüstü",
    color: "teal",
    skills: ["React Native (Expo)", "Electron"],
  },
  {
    title: "Veritabanları",
    color: "emerald",
    skills: ["PostgreSQL", "Prisma ORM", "TypeORM", "Firebase Firestore"],
  },
  {
    title: "Entegrasyonlar",
    color: "rose",
    skills: ["Shopify API & Liquid", "İkas API", "Instagram Graph API", "Telegram Bot API"],
  },
  {
    title: "E-Ticaret & CMS",
    color: "amber",
    skills: ["Shopify", "İkas", "WordPress", "WooCommerce", "Elementor"],
  },
  {
    title: "DevOps",
    color: "orange",
    skills: ["Docker", "Git", "GitHub"],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-700",  badge: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    badge: "bg-blue-100 text-blue-700 border-blue-200" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  badge: "bg-violet-100 text-violet-700 border-violet-200" },
  teal:    { bg: "bg-teal-50",    text: "text-teal-700",    badge: "bg-teal-100 text-teal-700 border-teal-200" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    badge: "bg-rose-100 text-rose-700 border-rose-200" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   badge: "bg-amber-100 text-amber-700 border-amber-200" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-700",  badge: "bg-orange-100 text-orange-700 border-orange-200" },
  cyan:    { bg: "bg-cyan-50",    text: "text-cyan-700",    badge: "bg-cyan-100 text-cyan-700 border-cyan-200" },
};

const highlights = [
  {
    label: "7+",
    desc: "Production Proje",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Full-Stack",
    desc: "Backend · Frontend · Mobil",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: "Monorepo",
    desc: "API + Panel + Mobil",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    label: "Docker",
    desc: "Konteynerize sistemler",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
];

export default function Hakkimda() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-medium mb-1">Ali Naci Tüysüz</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Hakkımda</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded"></div>
        </div>

        {/* Profil Özeti */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded inline-block"></span>
            Profil Özeti
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            JavaScript/TypeScript ekosisteminde uzmanlaşmış <strong className="text-gray-900">Full Stack Developer</strong>.
            Node.js/NestJS ile ölçeklenebilir backend API&apos;ları, Next.js/React ile modern web arayüzleri ve
            React Native ile çapraz platform mobil uygulamalar geliştiriyorum.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Shopify, İkas ve Meta Graph API başta olmak üzere e-ticaret ve sosyal medya entegrasyonlarında
            profesyonel deneyime sahibim. Freelance geliştirici olarak <strong className="text-gray-900">7+ production sistemi</strong> uçtan
            uca tek başıma teslim ettim.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            İstanbul Kültür Üniversitesi Bilgisayar Mühendisliği mezunuyum (2020–2025). Backend&apos;den mobil uygulamaya,
            masaüstünden tarayıcı uzantısına geniş bir yelpazede çalıştım.
          </p>
        </section>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {highlights.map((h) => (
            <div key={h.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
              <div className="text-blue-600">{h.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{h.label}</div>
              <div className="text-xs text-gray-500">{h.desc}</div>
            </div>
          ))}
        </div>

        {/* Öne Çıkan: Eczane Projesi */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-8 text-white shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wide">Öne Çıkan Proje</span>
              <h2 className="text-2xl font-bold mt-1">Sağlık Profesyonelleri Komisyon Platformu</h2>
              <p className="text-blue-200 text-sm mt-1">Klinik / Eczane Yönetim Sistemi</p>
            </div>
          </div>
          <p className="text-blue-100 leading-relaxed mb-5">
            Diyetisyen, veteriner ve personal trainer'ların dijital reçete oluşturduğu, ürünleri Shopify üzerinden
            önerdiği ve her satıştan otomatik komisyon kazandığı çok rollü bir platform. Eczane/klinik admini
            profesyonelleri, komisyon oranlarını ve kampanyaları tek panelden yönetiyor.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-5">
            {[
              "İmzalı PDF reçete + QR kod + WhatsApp paylaşımı",
              "Shopify OAuth entegrasyonu ve sepet otomasyon linki",
              "Komisyon takip sistemi ve ödeme makbuzu yükleme",
              "iOS/Android/Web destekli Expo mobil uygulama",
              "Kampanya bazlı cron job ve Excel raporlama",
              "Monorepo: Express API · Next.js Panel · Expo App",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-blue-100 text-sm">
                <svg className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "Next.js", "React Native (Expo)", "PostgreSQL", "Prisma ORM", "Shopify API", "PDFKit", "Docker"].map((t) => (
              <span key={t} className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">{t}</span>
            ))}
          </div>
        </section>

        {/* Öne Çıkan: Bitirme Projesi */}
        <section className="bg-gradient-to-br from-violet-600 to-purple-800 rounded-2xl p-8 mb-8 text-white shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <span className="text-purple-200 text-sm font-medium uppercase tracking-wide">Bitirme Projesi</span>
              <h2 className="text-2xl font-bold mt-1">Oyunlaştırılmış Ajan Tabanlı Görev Yönetim Sistemi</h2>
              <p className="text-purple-200 text-sm mt-1">Full-Stack · Django · React · React Native</p>
            </div>
          </div>
          <p className="text-purple-100 leading-relaxed mb-5">
            Django (DRF, Channels) ile RESTful API ve WebSocket tabanlı gerçek zamanlı oyunlaştırma özellikleri.
            Celery ve Redis ile akıllı ajan sistemi, LLM entegrasyonu ve React.js + React Native "Kokpit"
            panelleri. Tüm servisler Docker ile konteynerize edilmiş.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-5">
            {[
              "WebSocket tabanlı gerçek zamanlı liderlik tablosu",
              "Celery + Redis ile asenkron görev kuyrukları",
              "LLM entegrasyonu ile akıllı ajan sistemi",
              "React.js + React Native çapraz platform Kokpit paneli",
              "Docker ile tam konteynerize mimari",
              "DRF + Channels modüler mimari",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-purple-100 text-sm">
                <svg className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Django", "DRF", "Channels", "Celery", "Redis", "React.js", "React Native", "Docker", "LLM"].map((t) => (
              <span key={t} className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">{t}</span>
            ))}
          </div>
        </section>

        {/* Teknik Yetkinlikler */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded inline-block"></span>
            Teknik Yetkinlikler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => {
              const c = colorMap[category.color];
              return (
                <div key={category.title} className={`${c.bg} rounded-xl p-5`}>
                  <h3 className={`font-semibold ${c.text} mb-3 text-sm uppercase tracking-wide`}>{category.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${c.badge} border px-2.5 py-1 rounded-full text-xs font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* İşverenler İçin Neden Ben? */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded inline-block"></span>
            Neden Ben?
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <div className="bg-green-100 text-green-700 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Production&apos;da Kanıtlanmış</h3>
              <p className="text-gray-600 text-sm leading-relaxed">7+ sistemi gerçek müşterilerle production&apos;da çalıştırdım. Tasarımdan deploy&apos;a tüm süreçleri yönettim.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <div className="bg-blue-100 text-blue-700 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Uçtan Uca Yetkinlik</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Backend API tasarımı, React frontend, React Native mobil ve Docker deploy — tek kişiyle tüm stack.</p>
            </div>
            <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
              <div className="bg-violet-100 text-violet-700 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gerçek Sorunları Çözdüm</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Komisyon takibi, gerçek zamanlı eskalasyon, PDF reçete, Shopify entegrasyonu — iş problemlerine yazılım çözümü.</p>
            </div>
          </div>
        </section>

        {/* Eğitim */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded inline-block"></span>
            Eğitim
          </h2>
          <div className="flex items-center gap-5">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-xl flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">İstanbul Kültür Üniversitesi</h3>
              <p className="text-blue-600 font-medium">Bilgisayar Mühendisliği</p>
              <p className="text-gray-500 text-sm mt-1">2020 – 2025 · Mezun</p>
            </div>
          </div>
        </section>

        {/* Kişisel Bilgiler */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded inline-block"></span>
            İletişim
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-gray-200 text-gray-600 p-2 rounded-lg flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Konum</p>
                <p className="text-gray-900 font-medium text-sm">İstanbul / Avcılar</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-gray-200 text-gray-600 p-2 rounded-lg flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">E-posta</p>
                <a href="mailto:alinacituysuz43@gmail.com" className="text-blue-600 hover:underline font-medium text-sm">alinacituysuz43@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-gray-200 text-gray-600 p-2 rounded-lg flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Telefon</p>
                <a href="tel:+905445026900" className="text-gray-900 font-medium text-sm">+90 544 502 69 00</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-gray-200 text-gray-600 p-2 rounded-lg flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">GitHub</p>
                <a href="https://github.com/ali006834" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium text-sm">github.com/ali006834</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ali-naci-t%C3%BCys%C3%BCz-7b31b130b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium text-sm">Ali Naci Tüysüz</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projeler"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center shadow-sm"
          >
            Tüm Projeleri Gör
          </Link>
          <Link
            href="/deneyim"
            className="border border-gray-200 bg-white text-gray-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center shadow-sm"
          >
            Deneyimlerim
          </Link>
          <Link
            href="/iletisim"
            className="border border-blue-600 text-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-center shadow-sm"
          >
            İletişime Geç
          </Link>
        </div>

      </div>
    </div>
  );
}
