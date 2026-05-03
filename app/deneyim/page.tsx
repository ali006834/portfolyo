import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Deneyim | Ali Naci Tüysüz",
  description: "Ali Naci Tüysüz'ün iş ve staj deneyimleri — Retodi, OneEyeSystem, Coach Motion",
};

const IconHealth = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconCheckCircle = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconBell = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconPhoto = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconBolt = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);


const IconCpu = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3H7a2 2 0 00-2 2v2M9 3h6M9 3V1m6 2h2a2 2 0 012 2v2M15 3V1M3 9h2m14 0h2M3 15h2m14 0h2M9 21H7a2 2 0 01-2-2v-2m4 4h6m-6 0v2m6-2v2m0-2h2a2 2 0 002-2v-2M9 9h6v6H9z" />
  </svg>
);

const IconCart = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconActivity = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

type Project = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  description: string;
  bullets: string[];
  tags: string[];
};

type Experience = {
  company: string;
  position: string;
  period: string;
  type: string;
  current: boolean;
  color: {
    dot: string;
    typeBadge: string;
    header: string;
    tag: string;
    iconBg: string;
  };
  summary: string;
  projects: Project[];
};

const experiences: Experience[] = [
  {
    company: "Retodi Bilişim Teknolojileri A.Ş.",
    position: "Full-Stack Developer",
    period: "Ocak 2025 – Günümüz",
    type: "Tam Zamanlı",
    current: true,
    color: {
      dot: "bg-blue-600",
      typeBadge: "bg-blue-100 text-blue-700",
      header: "from-blue-600/8 to-transparent",
      tag: "bg-blue-50 text-blue-700 border-blue-100",
      iconBg: "bg-blue-100 text-blue-600",
    },
    summary:
      "E-ticaret, kurumsal yazılım ve dijital pazarlama alanında faaliyet gösteren teknoloji şirketinde tam zamanlı Full Stack Developer. İkas/Shopify özel tema geliştirme, React.js kurumsal paneller ve React Native mobil uygulama dahil uçtan uca sorumluluk.",
    projects: [
      {
        title: "E-Ticaret Platform Geliştirme",
        subtitle: "İkas · Shopify · WordPress/WooCommerce",
        icon: <IconCart />,
        description: "Farklı e-ticaret platformlarında hazır tema kullanmadan sıfırdan özel tema geliştirme. Tasarımdan yayına kadar uçtan uca sorumluluk.",
        bullets: [
          "İkas e-ticaret platformu için sıfırdan custom tema geliştirdi; JavaScript + İkas API ile ürün listeleme, sepet ve satın alma akışlarını uçtan uca kodladı",
          "Shopify mağazaları için Liquid şablon dili ile custom tema yazdı; tüm section'ları ve alışveriş deneyimini sıfırdan geliştirdi",
          "WordPress/WooCommerce projelerinde Elementor + özel PHP bileşenleriyle, kodun %80'i custom yazım olacak şekilde tam e-ticaret siteleri teslim etti",
          "React.js ile kurumsal web panelleri ve React Native ile müşteri mobil uygulaması geliştirdi",
        ],
        tags: ["İkas API", "Shopify Liquid", "JavaScript", "WordPress", "WooCommerce", "PHP", "Elementor", "React.js", "React Native"],
      },
      {
        title: "Sağlık Profesyonelleri Komisyon Platformu",
        subtitle: "Klinik / Eczane Yönetim Sistemi",
        icon: <IconHealth />,
        description:
          "Diyetisyen, veteriner ve personal trainer'ların Shopify entegrasyonlu dijital reçete düzenleyebildiği, eczane/klinik adminin komisyon oranlarını ve kampanyaları yönettiği çok rollü monorepo sistemi.",
        bullets: [
          "İmzalı PDF reçete üretimi, QR kod ve WhatsApp paylaşımı",
          "Shopify OAuth akışı, ürün katalogu cache ve hasta e-postası önceden dolu sepet linki",
          "Kampanya bazlı komisyon takibi, aylık hesap kapatma ve ödeme makbuzu yükleme",
          "iOS/Android/Web destekli Expo mobil uygulama",
          "Cron job tabanlı kampanya yönetimi, Excel raporlama ve push bildirimi",
          "Monorepo: Express REST API · Next.js Admin Panel · Expo React Native",
        ],
        tags: ["Node.js", "Express.js", "Next.js 16", "React Native (Expo)", "PostgreSQL", "Prisma ORM", "Shopify API", "PDFKit", "Docker"],
      },
    ],
  },
  {
    company: "OneEyeSystem",
    position: "Backend Developer",
    period: "Temmuz 2025 – Eylül 2025",
    type: "Staj",
    current: false,
    color: {
      dot: "bg-slate-400",
      typeBadge: "bg-orange-100 text-orange-700",
      header: "from-gray-50 to-transparent",
      tag: "bg-gray-100 text-gray-700 border-gray-200",
      iconBg: "bg-gray-100 text-gray-600",
    },
    summary: "İki farklı ürün üzerinde backend geliştirme yaptım: dijital sipariş platformu ve anomali tespit sistemi.",
    projects: [
      {
        title: "Tyrex — Dijital Sipariş Platformu",
        subtitle: "RESTful API Geliştirme",
        icon: <IconCart />,
        description: "",
        bullets: [
          "Sipariş, ürün ve kullanıcı yönetimi için Python/DRF RESTful API uç noktaları geliştirdim",
          "PostgreSQL üzerinde platformun veri modellerini tasarladım",
          "Sistem güvenilirliğini sağlamak için API birim ve entegrasyon testleri yazdım",
        ],
        tags: ["Python", "Django", "DRF", "PostgreSQL", "Unit Testing"],
      },
      {
        title: "OneEye Track — Anomali Tespit Sistemi",
        subtitle: "Makine Öğrenmesi & Backend",
        icon: <IconActivity />,
        description: "",
        bullets: [
          "Zaman serisi sensör verilerindeki anormallikleri ML algoritmaları ile tespit eden prototip",
          "Anomali tespit edildiğinde Django ve RabbitMQ ile gerçek zamanlı bildirim sistemi",
          "Yüksek hacimli zaman serisi verisi için TimescaleDB entegrasyonu",
          "Tüm sistemi Docker ile konteynerize ettim",
        ],
        tags: ["Python", "Django", "RabbitMQ", "TimescaleDB", "Docker", "Machine Learning"],
      },
    ],
  },
  {
    company: "Yıldız Teknik Üniversitesi / Coach Motion",
    position: "Frontend Developer",
    period: "Temmuz 2024 – Eylül 2024",
    type: "Staj",
    current: false,
    color: {
      dot: "bg-slate-400",
      typeBadge: "bg-orange-100 text-orange-700",
      header: "from-gray-50 to-transparent",
      tag: "bg-gray-100 text-gray-700 border-gray-200",
      iconBg: "bg-gray-100 text-gray-600",
    },
    summary: "React.js ile web arayüzleri geliştirdim, Firebase Auth ve Firestore entegrasyonları yaptım.",
    projects: [
      {
        title: "Web Uygulama Geliştirme",
        subtitle: "React.js · Firebase",
        icon: <IconGlobe />,
        description: "",
        bullets: [
          "React.js kullanarak kullanıcı odaklı, dinamik ve interaktif web arayüzleri geliştirdim",
          "Firebase Authentication ile e-posta/SMS tabanlı güvenli kimlik doğrulama akışları entegre ettim",
          "Uygulama verilerini yönetmek ve gerçek zamanlı güncellemeler için Firebase Firestore kullandım",
        ],
        tags: ["React.js", "Firebase Auth", "Firestore", "JavaScript"],
      },
    ],
  },
];

export default function Deneyim() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4">

        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-1">Ali Naci Tüysüz</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Deneyim</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-slate-300 to-slate-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="relative md:pl-16">

                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-6 w-5 h-5 rounded-full border-4 border-white shadow-md hidden md:block ${exp.color.dot}`}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50"></span>
                  )}
                </div>

                {/* Kart */}
                <div className={`bg-white rounded-2xl shadow-sm overflow-hidden border-2 ${exp.current ? "border-blue-200" : "border-gray-100"}`}>

                  {/* Kart başlığı */}
                  <div className={`bg-gradient-to-r ${exp.color.header} px-5 md:px-8 pt-6 pb-5 border-b border-gray-100`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`${exp.color.typeBadge} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Devam Ediyor
                        </span>
                      )}
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{exp.company}</h2>
                    <p className={`font-semibold text-lg ${exp.current ? "text-blue-600" : "text-gray-500"}`}>{exp.position}</p>
                    {exp.summary && (
                      <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-2xl">{exp.summary}</p>
                    )}
                  </div>

                  {/* Projeler */}
                  <div className="divide-y divide-gray-50">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="px-5 md:px-8 py-5 md:py-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`${exp.color.iconBg} p-2 rounded-lg flex-shrink-0`}>
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-gray-900 leading-snug">{project.title}</h3>
                            {project.subtitle && (
                              <p className="text-gray-400 text-xs mt-0.5">{project.subtitle}</p>
                            )}
                          </div>
                        </div>

                        {project.description && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 ml-0 md:ml-11">{project.description}</p>
                        )}

                        <ul className="space-y-2 mb-4 ml-0 md:ml-11">
                          {project.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 ml-0 md:ml-11">
                          {project.tags.map((tag) => (
                            <span key={tag} className={`${exp.color.tag} border px-2.5 py-1 rounded-full text-xs font-medium`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Eğitim */}
          <div className="relative md:pl-16 mt-12">
            <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-violet-600 border-4 border-white shadow-md hidden md:block"></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold">Eğitim</span>
                <span className="text-gray-400 text-sm">2020 – 2025</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-violet-100 text-violet-600 p-3 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">İstanbul Kültür Üniversitesi</h3>
                  <p className="text-violet-600 font-semibold">Bilgisayar Mühendisliği · Mezun</p>
                  <p className="text-gray-500 text-sm mt-0.5">Bitirme Projesi: Oyunlaştırılmış Ajan Tabanlı Görev Yönetim Sistemi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
