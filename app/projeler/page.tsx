import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler | Ali Naci Tüysüz",
  description: "Ali Naci Tüysüz'ün geliştirdiği yazılım projeleri",
};

// Proje tipi tanımı
type Project = {
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  status: string;
  video?: string; // Opsiyonel video alanı
};

// Projeler listesi
const projects: Project[] = [
  {
    title: "Oyunlaştırılmış Ajan Tabanlı Takım ve Görev Yönetim Sistemi",
    category: "Full-Stack",
    description:
      "Django (DRF, Channels) ile projenin RESTful API'ını ve canlı liderlik tabloları gibi gerçek zamanlı oyunlaştırma özelliklerini geliştiriyorum. Celery ve Redis ile görev hatırlatma gibi süreçleri otomatikleştiren akıllı ajanlar ve LLM entegrasyonu geliştiriyorum.",
    features: [
      "React.js ve React Native ile web için dinamik 'Kokpit' panelleri",
      "Mobilde görev takibi için çapraz platform uygulama",
      "Docker ile tüm proje servislerini container haline getirme",
      "LLM entegrasyonu ile akıllı ajan sistemi",
    ],
    technologies: ["Django", "DRF", "Channels", "Celery", "Redis", "React.js", "React Native", "Docker"],
    status: "Devam Ediyor",
    video: "/videos/bitirme2.mp4", // Demo video yolu
  },
  {
    title: "Çapraz-Modal Veri Erişim Sistemi",
    category: "Yapay Zeka",
    description:
      "Contrastive learning yöntemini kullanarak metin, görsel ve video gibi farklı veri türlerini eşleştiren bir yapay zeka modelini sıfırdan tasarladım.",
    features: [
      "Metin, görsel ve video eşleştirme",
      "Benzerlik tabanlı arama sistemi",
      "React.js ile kullanıcı dostu web arayüzü",
      "Sıfırdan tasarlanmış AI modeli",
    ],
    technologies: ["PyTorch", "Contrastive Learning", "React.js", "Python"],
    status: "Tamamlandı",
  },
  {
    title: "Hastane Yönetim Sistemi",
    category: "Backend",
    description:
      "Hasta, doktor ve randevu verilerini yöneten bir RESTful API geliştirdim ve farklı kullanıcılar için rol bazlı erişim kontrolü (RBAC) sistemini hayata geçirdim.",
    features: [
      "RESTful API ile veri yönetimi",
      "Rol bazlı erişim kontrolü (RBAC)",
      "Modern ve kullanıcı dostu arayüz",
      "Randevu yönetim sistemi",
    ],
    technologies: ["Django", "DRF", "PostgreSQL", "React.js"],
    status: "Tamamlandı",
  },
];

export default function Projeler() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projeler</h1>
          <div className="h-1 w-20 bg-blue-600 rounded mb-4"></div>
          <p className="text-gray-600 text-lg">
            Geliştirdiğim ve üzerinde çalıştığım projeler
          </p>
        </div>

        {/* Projeler Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Video bölümü (varsa) */}
              {project.video && (
                <div className="bg-gray-900 p-4">
                  <video
                    className="w-full rounded-lg"
                    controls
                    poster="/videos/thumbnail.jpg"
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                  <p className="text-center text-gray-400 text-sm mt-2">Demo Video</p>
                </div>
              )}
              <div className="p-8">
                {/* Kategori ve Durum */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Devam Ediyor"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Başlık */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>

                {/* Açıklama */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Özellikler */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Özellikler</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teknolojiler */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Kullanılan Teknolojiler</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Daha fazla proje için GitHub profilimi ziyaret edin
          </h3>
          <a
            href="https://github.com/ali006834"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub'da İncele
          </a>
        </div>
      </div>
    </div>
  );
}
