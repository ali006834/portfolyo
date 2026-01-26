import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımda | Ali Naci Tüysüz",
  description: "Ali Naci Tüysüz - Bilgisayar Mühendisi, Full-Stack Developer",
};

// Yetenekler detaylı liste
const skillCategories = [
  {
    title: "Programlama Dilleri",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django Rest Framework (DRF)", "Celery", "Redis", "RabbitMQ"],
  },
  {
    title: "Frontend & Mobil",
    skills: ["React.js", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Yapay Zeka & Veri",
    skills: ["PyTorch", "Machine Learning", "Contrastive Learning", "NumPy", "Pandas"],
  },
  {
    title: "Veritabanları",
    skills: ["PostgreSQL", "TimescaleDB", "Firebase Firestore"],
  },
  {
    title: "DevOps & Araçlar",
    skills: ["Docker", "Git", "API Test Araçları"],
  },
];

export default function Hakkimda() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hakkımda</h1>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        {/* Profil Özeti */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profil Özeti</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Bilgisayar Mühendisliği öğrencisi olarak problem çözme odaklı ve takım çalışmasına
            yatkın bir yazılım geliştirici adayıyım. Çeşitli projelerde yer almış, staj deneyimleri
            kazanmış ve açık kaynak projelere katkı sağlamış biriyim. Öğrenmeye açık, çözümler
            üretmeyi seven ve teknoloji dünyasındaki gelişmeleri takip eden bir mühendis adayıyım.
          </p>
        </section>

        {/* Eğitim */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Eğitim</h2>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">İstanbul Kültür Üniversitesi</h3>
              <p className="text-blue-600 font-medium">Bilgisayar Mühendisliği</p>
              <p className="text-gray-500">2020 - 2025</p>
            </div>
          </div>
        </section>

        {/* Yetenekler */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Yetenekler</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-blue-600 mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kişisel Bilgiler */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kişisel Bilgiler</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Konum</p>
                <p className="text-gray-900">İstanbul / Avcılar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-posta</p>
                <a href="mailto:alinacituysuz43@gmail.com" className="text-blue-600 hover:underline">
                  alinacituysuz43@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <a href="tel:+905445026900" className="text-gray-900">+90 544 502 69 00</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/ali006834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/ali006834
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/projeler"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Projelerimi Gör
          </Link>
          <Link
            href="/deneyim"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Deneyimlerim
          </Link>
        </div>
      </div>
    </div>
  );
}
