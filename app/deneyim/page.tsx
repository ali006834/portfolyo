import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deneyim | Ali Naci Tüysüz",
  description: "Ali Naci Tüysüz'ün staj ve iş deneyimleri",
};

// Deneyimler listesi
const experiences = [
  {
    company: "OneEyeSystem",
    project: "Tyrex - Dijital Sipariş Platformu",
    position: "Backend Developer",
    period: "Temmuz 2025 - Eylül 2025",
    type: "Staj",
    description: [
      "Python ve Django Rest Framework (DRF) kullanarak sipariş, ürün ve kullanıcı yönetimi için RESTful API uç noktaları geliştirdim.",
      "PostgreSQL veritabanı üzerinde platformun veri modellerini tasarladım.",
      "Sistem güvenilirliğini sağlamak için API'ların birim (unit) ve entegrasyon testlerini yazdım.",
    ],
    technologies: ["Python", "Django", "DRF", "PostgreSQL", "Unit Testing"],
  },
  {
    company: "OneEyeSystem",
    project: "OneEye Track - Anomali Tespit Sistemi",
    position: "Backend Developer",
    period: "Temmuz 2025 - Eylül 2025",
    type: "Staj",
    description: [
      "Zaman serisi (time-series) sensör verilerindeki anormallikleri makine öğrenmesi algoritmaları kullanarak tespit eden bir prototip üzerinde çalıştım.",
      "Anomali tespit edildiğinde Django ve RabbitMQ ile gerçek zamanlı bildirim gönderen bir backend sistemi geliştirdim.",
      "Yüksek hacimli zaman serisi verilerini verimli bir şekilde yönetmek için TimescaleDB kullandım.",
      "Tüm sistemi Docker ile konteynerize ettim.",
    ],
    technologies: ["Python", "Django", "RabbitMQ", "TimescaleDB", "Docker", "Machine Learning"],
  },
  {
    company: "Yıldız Teknik Üniversitesi / Coach Motion Yazılım Danışmanlık",
    project: "Web Uygulama Geliştirme",
    position: "Frontend Developer",
    period: "Temmuz 2024 - Eylül 2024",
    type: "Staj",
    description: [
      "React.js kullanarak kullanıcı odaklı, dinamik ve interaktif web arayüzleri geliştirdim.",
      "Firebase Authentication ile e-posta/SMS tabanlı güvenli kimlik doğrulama akışlarını entegre ettim.",
      "Uygulama verilerini yönetmek ve gerçek zamanlı güncellemeler sağlamak için Firebase Firestore kullandım.",
    ],
    technologies: ["React.js", "Firebase Auth", "Firestore", "JavaScript"],
  },
];

export default function Deneyim() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Deneyim</h1>
          <div className="h-1 w-20 bg-blue-600 rounded mb-4"></div>
          <p className="text-gray-600 text-lg">Staj ve iş deneyimlerim</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline çizgisi */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          {/* Deneyimler */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                {/* Timeline noktası */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow hidden md:block"></div>

                {/* İçerik kartı */}
                <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  {/* Üst bilgiler */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>

                  {/* Şirket ve Pozisyon */}
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{exp.company}</h2>
                  <h3 className="text-lg text-blue-600 font-medium mb-2">{exp.position}</h3>
                  <p className="text-gray-500 mb-4">{exp.project}</p>

                  {/* Açıklamalar */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <svg
                          className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Teknolojiler */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Eğitim Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Eğitim</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">İstanbul Kültür Üniversitesi</h3>
                <p className="text-blue-600 font-medium text-lg">Bilgisayar Mühendisliği</p>
                <p className="text-gray-500">2020 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
