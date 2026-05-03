import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler | Ali Naci Tüysüz",
  description: "Ali Naci Tüysüz — Full Stack, AI, mobil, masaüstü ve e-ticaret projeleri",
};

type Project = {
  title: string;
  subtitle?: string;
  category: string;
  categoryColor: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  features: string[];
  technologies: string[];
  architecture?: string;
  liveUrl?: string;
  video?: string;
};

const projects: Project[] = [
  // ── Öne Çıkan ──────────────────────────────────────────────────────
  {
    title: "TaskFlow AI — Oyunlaştırılmış Ajan Tabanlı Görev Yönetim Sistemi",
    subtitle: "Bitirme Projesi · JIRA/Asana Alternatifi",
    category: "Full-Stack · AI",
    categoryColor: "bg-violet-100 text-violet-700",
    badge: "Bitirme Projesi",
    badgeColor: "bg-violet-600 text-white",
    description:
      "JIRA/Asana alternatifi olarak tasarlanmış, görev atama ve yük dengelemeyi otomatikleştiren 6 özel AI agent içeren platform. Puan, rozet, seviye ve liderlik tablosu ile tam gamification mekaniği. Küçük ekipler ve öğrencilere yönelik.",
    features: [
      "6 AI agent ile otomatik görev atama ve yük dengeleme",
      "Puan · rozet · seviye · liderlik tablosu tam gamification mekaniği",
      "Google Gemini LLM entegrasyonu ile akıllı görev önerileri ve darboğaz tespiti",
      "Django Channels + WebSocket ile gerçek zamanlı liderlik tablosu ve bildirimler",
      "Celery + Redis ile asenkron görev kuyrukları ve otomasyon ajanları",
      "React.js + TypeScript ile Kokpit panelleri ve takvim entegrasyonu",
      "React Native ile iOS/Android görev takip mobil uygulaması",
      "Redis cache ile sorgu performansı %83 iyileştirildi",
      "40+ API endpoint, Django REST Framework",
      "Tüm servisler Docker ile konteynerize edildi",
    ],
    technologies: ["Django", "DRF", "Django Channels", "Celery", "Redis", "React.js", "TypeScript", "React Native", "PostgreSQL", "Google Gemini", "Docker", "WebSocket"],
    architecture: "3 kişilik ekipte full stack geliştirme tek başına üstlenildi. Backend: DRF + Channels modüler mimari. Frontend: React.js Kokpit. Mobil: React Native. Tüm servisler Docker Compose ile orchestrate ediliyor.",
    video: "/videos/bitirme2.mp4",
  },
  {
    title: "Sağlık Profesyonelleri Komisyon Platformu",
    subtitle: "Klinik / Eczane Yönetim Sistemi",
    category: "Full-Stack · Monorepo",
    categoryColor: "bg-blue-100 text-blue-700",
    badge: "Öne Çıkan",
    badgeColor: "bg-blue-600 text-white",
    description:
      "Diyetisyen, veteriner ve personal trainer'ların hastalarına dijital reçete/antrenman planı oluşturduğu, ürünleri Shopify sepetiyle önerdiği ve her satıştan otomatik komisyon kazandığı çok rollü platform. Klinik/eczane admini; profesyonelleri, komisyon oranlarını ve kampanyaları tek panelden yönetiyor.",
    features: [
      "İmzalı PDF reçete üretimi, QR kod ve WhatsApp paylaşımı — hasta tek tıkla Shopify'a yönlendiriliyor",
      "Shopify OAuth entegrasyonu, ürün katalogu cache, önceden dolu sepet linki otomasyonu",
      "Kampanya bazlı komisyon oranı yönetimi, aylık hesap kapatma ve ödeme makbuzu yükleme",
      "iOS/Android/Web destekli Expo React Native mobil uygulama",
      "Cron job tabanlı kampanya yönetimi, Excel raporlama ve push bildirimi",
      "Rol bazlı erişim: diyetisyen · veteriner · personal trainer · admin",
    ],
    technologies: ["Node.js", "Express.js", "Next.js 16", "React Native (Expo)", "PostgreSQL", "Prisma ORM", "JWT", "Shopify API", "Netgsm SMS", "Expo Push", "PDFKit", "ExcelJS", "Docker"],
    architecture: "Monorepo: /backend (Express REST API) · /admin (Next.js dashboard) · /mobile (Expo React Native). PostgreSQL şeması Prisma migrations ile yönetiliyor. Shopify OAuth akışı ve webhook'lar backend tarafında işleniyor.",
  },

  // ── Full-Stack Uygulamalar ──────────────────────────────────────────
  {
    title: "Job Tracker — İş Başvuru Takip Platformu",
    subtitle: "Full-Stack SaaS · CI/CD",
    category: "Full-Stack · SaaS",
    categoryColor: "bg-emerald-100 text-emerald-700",
    description:
      "Google OAuth ile kimlik doğrulama, iş başvurularını Başvuruldu → Mülakat → Teklif → Reddedildi pipeline'ında takip eden full stack SaaS uygulama. Redux Toolkit ile state yönetimi, Jest ile test kapsamı, GitHub Actions ile otomatik CI/CD.",
    features: [
      "Google OAuth ile güvenli kimlik doğrulama (NextAuth.js)",
      "Kanban-style başvuru pipeline: Başvuruldu · Mülakat · Teklif · Reddedildi",
      "Redux Toolkit ile global state yönetimi",
      "Jest + React Testing Library ile test kapsamı",
      "GitHub Actions ile CI/CD pipeline",
      "Vercel'e otomatik deploy",
    ],
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "Redux Toolkit", "NextAuth.js", "Jest", "GitHub Actions", "Docker", "Vercel"],
    architecture: "Next.js App Router, NextAuth.js session yönetimi, Prisma ORM ile veritabanı migrasyonları. GitHub Actions CI pipeline test + build + Vercel deploy adımlarını otomatize ediyor.",
  },
  {
    title: "SEO Radar — Rekabetçi SERP Analiz Aracı",
    subtitle: "Chrome Extension + REST API Backend",
    category: "Full-Stack · Chrome Extension",
    categoryColor: "bg-cyan-100 text-cyan-700",
    description:
      "Google arama sonuçlarında rakip sayfaları gerçek zamanlı fetch eden ve SEO skoru (0-100), authority skoru, intent tespiti ve keyword gap analizi yapan Chrome uzantısı + REST API. Backend'de paralel worker pattern ile birden fazla URL eş zamanlı analiz ediliyor.",
    features: [
      "0-100 SEO puanı ve authority skoru üretimi",
      "15+ SEO sinyali: H1/H2 yapısı, meta, kanonik, gizli metin, iç link sayısı",
      "Türkçe NLP: karakter normalizasyonu, token bazlı kapsama, stop word filtreleme",
      "Paralel worker pattern ile eş zamanlı çoklu URL analizi",
      "CSV dışa aktarma ve sayfalama desteği",
      "JWT auth ile kullanıcı ve tarama geçmişi yönetimi",
    ],
    technologies: ["Vanilla JS", "Chrome Manifest V3", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Content Script", "Service Worker"],
    architecture: "Chrome extension (content.js + background.js) backend REST API'ya istek atar. Node.js/Express backend: 7 endpoint, Prisma ORM, JWT auth. Paralel URL analizi async worker pattern ile.",
  },
  {
    title: "İçerik Onay & Yayınlama Sistemi",
    subtitle: "Instagram İçerik Akış Yönetimi",
    category: "Full-Stack · NestJS",
    categoryColor: "bg-rose-100 text-rose-700",
    description:
      "Markaların Instagram içeriklerini taslak → inceleme → onay → zamanlama → yayınlama akışıyla yönettiği; onay almadan hiçbir gönderinin yayınlanamadığı kurumsal içerik yönetim platformu. Versiyon geçmişi ve 2FA güvenliği ile tam denetim.",
    features: [
      "5 aşamalı durum makinesi: taslak → incelemede → onaylandı → zamanlandı → yayınlandı",
      "Her düzenleme yeni ContentVersion olarak saklanıyor — tam versiyon geçmişi",
      "Çok rollü erişim: içerik üretici · onaylayıcı · marka admini · süper admin",
      "Zamanı geçen gönderiler otomatik 'overdue' işaretleniyor, ekip uyarılıyor",
      "OTP tabanlı 2FA güvenliği",
      "Instagram Graph API entegrasyonu",
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "2FA (OTPLib)", "bcrypt", "Instagram Graph API"],
    architecture: "NestJS modüler mimari: Auth · Users · Brands · Contents · Approvals · Publish · Notifications · Dashboard. TypeORM migrations ile şema yönetimi. Cron job ile zamanlanmış yayın ve overdue kontrolü.",
  },
  {
    title: "Instagram Gönderi İzleme & Eskalasyon Sistemi",
    subtitle: "Gerçek Zamanlı Sosyal Medya Monitörü",
    category: "Full-Stack · Otomasyon",
    categoryColor: "bg-orange-100 text-orange-700",
    description:
      "Zamanlanmış Instagram gönderilerinin gerçekten yayınlanıp yayınlanmadığını Meta Graph API üzerinden dakikada bir kontrol eder. Gönderi tespit edilemezse 3 seviyeli e-posta + Telegram eskalasyon zinciri başlar.",
    features: [
      "Dakikada bir çalışan cron — Meta Graph API ile gönderi varlığı doğrulanıyor",
      "3 seviyeli eskalasyon: 10 dk yanıt yoksa otomatik sonraki seviyeye",
      "Çift kanal bildirim: e-posta (EVET/HAYIR butonlu HTML) ve Telegram inline klavyesi",
      "Token tabanlı güvenli yanıt — sadece yetkili kişi onaylayabiliyor",
      "Çoklu marka yönetimi, kendi takvimi ve iletişim listesi",
      "Otomatik 30 günlük log temizleme (gece cron)",
    ],
    technologies: ["Node.js", "Express.js", "React", "Vite", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Nodemailer", "Telegram Bot API", "node-cron", "Docker"],
    architecture: "Full-stack: /backend (Express + Prisma + cron) · /frontend (React SPA, korumalı rotalar). Cron katmanı 3 ayrı servis olarak çalışıyor: gönderi kontrol · eskalasyon · log temizleme.",
  },
  {
    title: "Ürün Görseli Şablon Editörü & Meta Feed Üretici",
    subtitle: "E-Ticaret Görsel Otomasyon",
    category: "Full-Stack · E-Ticaret",
    categoryColor: "bg-amber-100 text-amber-700",
    description:
      "E-ticaret markalarının CSV ürün feed'inden gelen görsellere özel logo, fiyat etiketi ve metin katmanı ekleyen sürükle-bırak şablon editörü. Render edilen görsellerle Meta Commerce Manager'a hazır CSV feed otomatik üretiyor.",
    features: [
      "{{title}} · {{price}} · {{brand}} değişkenleri her üründe otomatik dolduruluyor",
      "Sharp ile sunucu taraflı yüksek kaliteli görsel render",
      "Binlerce ürünlük CSV önbelleğe alınıyor — editör yalnızca tek ürün yüklüyor",
      "Meta uyumlu CSV çıktısı — Facebook/Instagram Shops'a direkt beslenebilir",
      "Veri Bekleniyor → Render Bekliyor → Feed Hazır pipeline durumu",
      "Sürükle-bırak katman yönetimi: konum, boyut, opaklık, döndürme",
    ],
    technologies: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "Sharp", "Fabric.js", "PostgreSQL", "@dnd-kit", "fast-xml-parser"],
    architecture: "Next.js App Router: /app/page.tsx (marka dashboard) · /app/editor/page.tsx (editör) · /app/api/brands/ (CRUD + CSV). Sharp render işlemi API route içinde async çalışıyor.",
  },
  {
    title: "Hastane Yönetim Sistemi",
    subtitle: "Django · DRF · React.js",
    category: "Full-Stack",
    categoryColor: "bg-teal-100 text-teal-700",
    description:
      "Hasta, doktor ve randevu verilerini yöneten RESTful API ile rol bazlı erişim kontrolü (RBAC) sistemi. Modern ve kullanıcı dostu randevu yönetim arayüzü.",
    features: [
      "Hasta, doktor ve randevu CRUD API'ları",
      "Rol bazlı erişim kontrolü (RBAC)",
      "Django REST Framework ile 40+ API endpoint",
      "React.js ile modern randevu yönetim arayüzü",
      "PostgreSQL veri modeli tasarımı",
    ],
    technologies: ["Django", "DRF", "PostgreSQL", "React.js", "Python"],
  },
  {
    title: "Çapraz-Modal Veri Erişim Sistemi",
    subtitle: "Yapay Zeka · Contrastive Learning",
    category: "Yapay Zeka · AI/ML",
    categoryColor: "bg-purple-100 text-purple-700",
    description:
      "Contrastive learning kullanarak metin, görsel ve video gibi farklı veri türlerini eşleştiren yapay zeka modeli. Benzerlik tabanlı çapraz-modal arama yapılabilen React.js arayüzü.",
    features: [
      "Metin, görsel ve video çapraz-modal eşleştirme",
      "Contrastive learning modeli sıfırdan tasarlandı ve eğitildi",
      "Benzerlik tabanlı arama sistemi",
      "React.js ile kullanıcı dostu arayüz",
    ],
    technologies: ["PyTorch", "Contrastive Learning", "NumPy", "React.js", "Python"],
  },

  // ── Masaüstü & Araçlar ─────────────────────────────────────────────
  {
    title: "Pixlite — Toplu Görsel Optimizasyon",
    subtitle: "Masaüstü Uygulaması · Windows",
    category: "Masaüstü · Electron",
    categoryColor: "bg-green-100 text-green-700",
    description:
      "E-ticaret satıcılarının yüzlerce ürün görselini tek tıkla yeniden boyutlandırıp hedef dosya boyutuna akıllıca sıkıştırması. Saatlik manuel işi dakikaya indiriyor. Windows installer ile dağıtılıyor.",
    features: [
      "4 hazır preset: E-Ticaret (1600px/750KB) · Küçük Resim · Yüksek Kalite · Web",
      "Akıllı boyut kontrolü: hedef KB'a ulaşmak için kaliteyi 6 adımda ayarlıyor",
      "Gerçek zamanlı log: önceki/sonraki boyut ve yüzde azalma",
      "Klasör yapısı korunuyor — _optimized/ içinde orijinal hiyerarşi",
      "İptal edilebilir toplu işlem",
      "electron-forge + Squirrel ile .exe kurulum paketi",
    ],
    technologies: ["Electron v29", "Sharp v0.33", "Vanilla JS/HTML/CSS", "electron-forge", "Squirrel.Windows"],
    architecture: "Electron main/renderer mimarisi. contextBridge ile güvenli IPC. Sharp işlemleri main process'te, UI renderer'da. Netlify'da tanıtım sitesi.",
  },
  {
    title: "SEO & Dijital Pazarlama Chrome Uzantı Seti",
    subtitle: "4 Ayrı Chrome/Edge Uzantısı",
    category: "Tarayıcı Uzantısı",
    categoryColor: "bg-sky-100 text-sky-700",
    description:
      "SEO uzmanları ve dijital pazarlamacılar için Google SERP analizi, rakip içerik tarama ve Meta reklam indirmeyi otomatize eden 4 ayrı Chrome/Edge uzantısı. Sıfır bağımlılık, sıfır sunucu.",
    features: [
      "SearchLens Pro: SERP sonuçlarını arka planda fetch eder, 3 kapsam modunda filtreler",
      "Meta Ads Downloader: reklam kütüphanesini tarar, görselleri/videoları ZIP olarak indirir",
      "SEO Radar: 15+ SEO sinyali, 0-100 puan ve otorite skoru",
      "SERP Filter: gerçek zamanlı Google sonuç filtreleme, filtre hafızası",
      "Türkçe karakter normalleştirme desteği",
      "Sıfır bağımlılık, sıfır sunucu — tamamen client-side",
    ],
    technologies: ["Vanilla JS", "Chrome Manifest V3", "Content Script", "Service Worker", "Chrome Storage API", "Fetch API"],
    architecture: "Her uzantı: manifest.json (V3) · content.js (DOM manipülasyonu) · background.js (service worker) · popup.html/js (UI).",
  },
  {
    title: "B2B Tedarikçi Katalog Takip Botu",
    subtitle: "Otomatik Web Scraper · Python",
    category: "Otomasyon · Python",
    categoryColor: "bg-yellow-100 text-yellow-700",
    description:
      "B2B pazaryerini misafir oturumuyla sistematik olarak tarayan, tüm ürünleri CSV'ye aktaran ve her çalıştırmada önceki veriyle karşılaştırarak yeni ürün, fiyat değişikliği ve stok güncellemelerini loglayan Python botu.",
    features: [
      "Misafir oturum yönetimi: session cookies ile kimlik doğrulama",
      "Değişiklik tespiti: yeni ürün · silinen ürün · fiyat değişimi · stok değişimi",
      "UTF-8 BOM ile Excel uyumlu CSV çıktısı",
      "Nazik tarama: 0.8 sn gecikme, 20 sn timeout",
      "Windows Task Scheduler ile saatlik/günlük otomatik çalıştırma",
      "15 alan: ürün_id, ad, barkod, kategori (3 seviye), marka, fiyat, stok, resim_url",
    ],
    technologies: ["Python 3.10+", "requests", "BeautifulSoup4", "lxml", "Windows Task Scheduler"],
    architecture: "3 script: yasir_scraper.py (ana tarayıcı) · zamanlayici.py (sürekli döngü) · gorev_zamanlayici_kur.py (Task Scheduler kurulumu).",
  },

  // ── Daha Fazla Proje ───────────────────────────────────────────────
  {
    title: "Quiz App — İnteraktif Test Uygulaması",
    subtitle: "Next.js · TypeScript · Vercel",
    category: "Frontend",
    categoryColor: "bg-indigo-100 text-indigo-700",
    description:
      "TypeScript tip güvenliği ve React hook'ları kullanarak soru gösterme, cevaplama ve puan hesaplama içeren interaktif quiz uygulaması. Mobile-first responsive tasarım, Vercel'e deploy.",
    features: [
      "TypeScript ile tam tip güvenli uygulama",
      "React hook'ları ile soru akışı ve puan hesaplama",
      "Mobile-first responsive tasarım",
      "Vercel'e deploy edilmiş",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://vercel.com",
  },
  {
    title: "Weather App — Hava Durumu Uygulaması",
    subtitle: "Next.js · OpenWeatherMap API · Vercel",
    category: "Frontend",
    categoryColor: "bg-indigo-100 text-indigo-700",
    description:
      "OpenWeatherMap API entegrasyonu ile şehir bazlı anlık hava durumu sorgulama. Sıcaklık, nem, rüzgar hızı ve 5 günlük tahmin gösterimi. TypeScript ile tip güvenli API modelleme.",
    features: [
      "Şehir bazlı anlık hava durumu sorgulama",
      "5 günlük tahmin, sıcaklık, nem, rüzgar hızı",
      "TypeScript ile tip güvenli API response modelleme",
      "Mobile-first responsive tasarım",
    ],
    technologies: ["Next.js", "TypeScript", "OpenWeatherMap API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://weather-app-gamma-sooty-76.vercel.app",
  },
  {
    title: "Kişisel Portfolyo Sitesi",
    subtitle: "Bu sitenin kendisi · Next.js 16",
    category: "Full-Stack",
    categoryColor: "bg-slate-100 text-slate-700",
    description:
      "Next.js App Router ile SSR/SSG hibrit yapıda kişisel portfolyo ve CV sitesi. Resend API ile çalışan iletişim formu, responsive mobile-first tasarım ve Vercel'de deploy.",
    features: [
      "Next.js App Router ile SSR/SSG hibrit yapı",
      "Resend API entegrasyonu ile e-posta iletişim formu",
      "7 sayfa: Projeler · Deneyim · Hakkımda · E-Ticaret · Blog · İletişim",
      "Responsive mobile-first tasarım — Tailwind CSS v4",
      "TypeScript ile tam tip güvenli codebase",
      "Vercel'de deploy",
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Resend API", "Vercel"],
    liveUrl: "https://portfolyo-ali-nacis-projects.vercel.app",
  },
];

export default function Projeler() {
  const featured = projects.filter((p) => p.badge);
  const rest = projects.filter((p) => !p.badge);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-1">Ali Naci Tüysüz</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Projeler</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded mb-4"></div>
          <p className="text-gray-500 text-lg">
            Full-stack uygulamalar, AI projeleri, masaüstü araçlar ve e-ticaret sistemleri
          </p>
        </div>

        {/* Öne Çıkan Projeler */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">Öne Çıkan</h2>
          <div className="space-y-8">
            {featured.map((project, index) => (
              <ProjectCard key={index} project={project} featured />
            ))}
          </div>
        </div>

        {/* Diğer Projeler */}
        <div className="mt-12">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">Diğer Projeler</h2>
          <div className="space-y-6">
            {rest.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Daha fazla proje için</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            GitHub profilimde daha fazla kod örneği, açık kaynak katkıları ve deneysel projeler bulabilirsiniz.
          </p>
          <a
            href="https://github.com/ali006834"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub&apos;da İncele
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`bg-white rounded-2xl border overflow-hidden transition-shadow hover:shadow-md ${featured ? "border-gray-200 shadow-sm" : "border-gray-100 shadow-sm"}`}>
      {/* Video */}
      {project.video && (
        <div className="bg-slate-900 p-4">
          <video className="w-full rounded-xl" controls preload="metadata">
            <source src={project.video} type="video/mp4" />
          </video>
          <p className="text-center text-slate-400 text-xs mt-2">Demo Video</p>
        </div>
      )}

      <div className="p-7">
        {/* Badges */}
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span className={`${project.categoryColor} px-3 py-1 rounded-full text-xs font-semibold`}>
            {project.category}
          </span>
          {project.badge && (
            <span className={`${project.badgeColor} px-3 py-1 rounded-full text-xs font-bold`}>
              {project.badge}
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-xs font-semibold hover:bg-green-100 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Canlı
            </a>
          )}
        </div>

        {/* Başlık */}
        <h2 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h2>
        {project.subtitle && (
          <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
        )}

        {/* Açıklama */}
        <p className="text-gray-600 mb-5 leading-relaxed text-sm">{project.description}</p>

        {/* Özellikler */}
        {project.features.length > 0 && (
          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-xs uppercase tracking-widest">Özellikler</h3>
            <ul className="grid md:grid-cols-2 gap-1.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mimari */}
        {project.architecture && (
          <div className="bg-slate-50 rounded-xl p-4 mb-5 border border-slate-100">
            <h3 className="font-semibold text-slate-500 mb-1.5 text-xs uppercase tracking-widest">Mimari</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{project.architecture}</p>
          </div>
        )}

        {/* Teknolojiler */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2.5 text-xs uppercase tracking-widest">Teknolojiler</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
