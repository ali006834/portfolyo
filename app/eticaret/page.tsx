import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret Deneyimi | Ali Naci Tüysüz",
  description: "İkas, Shopify ve WooCommerce platformlarında Retodi'de kazanılan özel tema geliştirme ve e-ticaret deneyimi.",
};

// Brand SVG Icons
const IkasIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#F59E0B" />
    <text x="20" y="28" textAnchor="middle" fontSize="22" fontWeight="800" fill="white" fontFamily="Arial, sans-serif">İ</text>
  </svg>
);

const ShopifyIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#96BF48" />
    <path
      d="M27.5 11.2c-.1-.6-.6-1-1.1-1-.5 0-3.2-.2-3.2-.2s-2.1-2.1-2.3-2.3c-.2-.2-.7-.1-.9 0l-1.2.4C18.3 7.4 17.5 7 16.6 7c-3.3 0-4.9 4.1-5.4 6.2l-2.3.7c-.7.2-.7.2-.8.9L7 25l13.5 2.5L27.5 26c.1 0 .5-14.2.5-14.2l-.5-.6zM21.9 10.5l-1.7.5c0-.1 0-.2.1-.3.3-1.5.9-2.2 1.6-2.5v2.3zm-3.1 1l-3.3 1c.5-1.8 1.4-2.7 2.2-3 .3.5.7 1.1 1.1 2zm-2.7-3.2c.2 0 .4.1.6.2-.9.4-1.9 1.5-2.3 3.6l-1.7.5c.5-1.8 1.7-4.3 3.4-4.3z"
      fill="white"
    />
  </svg>
);

const WooIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#3B82F6" />
    <text x="20" y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Arial, sans-serif">WOO</text>
  </svg>
);

const platforms = [
  {
    id: "ikas",
    name: "İkas",
    icon: <IkasIcon />,
    tagline: "Türkiye'nin Yerli E-Ticaret Altyapısı",
    brandColor: "#F59E0B",
    color: {
      gradient: "from-amber-400 to-yellow-500",
      light: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-800",
      dot: "bg-amber-500",
      accent: "text-amber-700",
      tag: "bg-amber-50 text-amber-700 border-amber-200",
      heroRing: "ring-amber-300",
      checkIcon: "text-amber-500",
    },
    description:
      "Retodi bünyesinde İkas platformunda hazır tema kullanmadan sıfırdan özel tema geliştirdim. JavaScript ve İkas API kullanarak ürün listeleme, sepet ve satın alma akışlarını uçtan uca kodladım.",
    highlights: [
      "Sıfırdan custom tema geliştirme — hazır tema kullanılmadı",
      "İkas JavaScript API ile dinamik ürün listeleme ve filtreleme",
      "Sepet ve satın alma akışı (cart & checkout) uçtan uca",
      "Section bazlı modüler tema yapısı",
      "Mobil uyumlu (mobile-first) responsive tasarım",
      "Performans ve Core Web Vitals optimizasyonu",
      "SEO uyumlu sayfa yapısı ve schema markup",
    ],
    learned: [
      {
        title: "İkas Tema Sistemi",
        items: [
          "İkas şablon dili ve tema dosya yapısı",
          "Section ve blok mantığıyla modüler geliştirme",
          "İkas CLI ile tema push/pull ve geliştirme ortamı",
          "Tema ayar paneli (settings_schema) konfigürasyonu",
        ],
      },
      {
        title: "JavaScript & API",
        items: [
          "İkas JS API ile ürün, koleksiyon, sepet veri yönetimi",
          "Async/await ile API çağrıları ve DOM manipülasyonu",
          "Sepet güncelleme, ürün ekleme/çıkarma işlemleri",
          "Dinamik fiyat hesaplama ve stok kontrolü",
        ],
      },
      {
        title: "Cart & Checkout",
        items: [
          "Sepet sayfası (cart) özel tasarım ve mantığı",
          "Satın alma akışı (checkout) özelleştirme",
          "Üye girişi ve adres yönetimi entegrasyonu",
          "Ödeme sayfası UX optimizasyonu",
        ],
      },
    ],
    techs: ["JavaScript (ES6+)", "İkas API", "İkas CLI", "CSS3", "HTML5", "REST API", "JSON"],
  },
  {
    id: "shopify",
    name: "Shopify",
    icon: <ShopifyIcon />,
    tagline: "Dünyanın En Büyük E-Ticaret Platformu",
    brandColor: "#96BF48",
    color: {
      gradient: "from-green-500 to-emerald-600",
      light: "bg-green-50",
      border: "border-green-200",
      badge: "bg-green-100 text-green-800",
      dot: "bg-green-500",
      accent: "text-green-700",
      tag: "bg-green-50 text-green-700 border-green-200",
      heroRing: "ring-green-300",
      checkIcon: "text-green-500",
    },
    description:
      "Shopify Liquid şablon dili ile müşteriye özel temalar sıfırdan geliştirdim. Tüm section'ları, sayfa düzenlerini ve alışveriş deneyimini baştan sona kodladım. Shopify CLI ile profesyonel geliştirme süreci yürüttüm.",
    highlights: [
      "Liquid şablon dili ile sıfırdan custom tema geliştirme",
      "Tüm section ve snippet'lar özel yazım",
      "Shopify CLI ile theme push/pull geliştirme ortamı",
      "Metafield ve app embed entegrasyonu",
      "Sepet (cart) ve ödeme (checkout) akışı özelleştirme",
      "Çoklu dil ve çoklu para birimi desteği",
      "Shopify Admin API ile ürün/sipariş veri yönetimi",
    ],
    learned: [
      {
        title: "Liquid Şablon Dili",
        items: [
          "Liquid objeler, tag'ler ve filter'lar",
          "Layout, template, section, snippet hiyerarşisi",
          "Schema ile section ayar paneli tanımlama",
          "Koşullu render ve döngü yapıları",
        ],
      },
      {
        title: "Shopify Ekosistemi",
        items: [
          "Shopify CLI ile geliştirme ve theme push/pull",
          "Metafield tanımlama ve kullanımı",
          "App embed blocks entegrasyonu",
          "Storefront API ile frontend veri erişimi",
        ],
      },
      {
        title: "Cart & Checkout",
        items: [
          "Ajax Cart API ile sepet yönetimi",
          "Drawer cart (slide-out) geliştirme",
          "Checkout sayfası Liquid özelleştirme",
          "Ödeme yöntemleri ve kargo seçimi UX",
        ],
      },
    ],
    techs: ["Shopify Liquid", "Shopify CLI", "JavaScript", "CSS3", "Ajax Cart API", "Metafields", "Storefront API", "JSON"],
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    icon: <WooIcon />,
    tagline: "WordPress Tabanlı E-Ticaret",
    brandColor: "#3B82F6",
    color: {
      gradient: "from-blue-500 to-blue-700",
      light: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-800",
      dot: "bg-blue-500",
      accent: "text-blue-700",
      tag: "bg-blue-50 text-blue-700 border-blue-200",
      heroRing: "ring-blue-300",
      checkIcon: "text-blue-500",
    },
    description:
      "WordPress/WooCommerce ekosisteminde WoodMart teması üzerinde kapsamlı özelleştirmeler yaptım. Kodun %80'i custom yazım olacak şekilde Elementor widget'ları, PHP hook/filter'lar ve child theme geliştirdim.",
    highlights: [
      "WoodMart teması üzerinde ileri düzey özelleştirme",
      "Child theme ile güvenli ve sürdürülebilir geliştirme",
      "Elementor ile özel widget ve sayfa blokları",
      "PHP ile WooCommerce hook & filter kullanımı",
      "Sepet (cart) ve ödeme (checkout) sayfası özelleştirme",
      "Custom CSS ile piksel hassasiyetinde tasarım",
      "WooCommerce ürün, kategori ve koleksiyon yönetimi",
    ],
    learned: [
      {
        title: "WordPress & PHP",
        items: [
          "WordPress child theme yapısı ve geliştirme süreci",
          "PHP ile functions.php özelleştirmeleri",
          "WordPress action ve filter hook sistemi",
          "Custom post type ve taxonomy yönetimi",
        ],
      },
      {
        title: "WooCommerce",
        items: [
          "WooCommerce hook & filter ile cart/checkout özelleştirme",
          "Ürün, kategori ve varyant yönetimi",
          "WooCommerce template override sistemi",
          "Ödeme ve kargo yöntemi entegrasyonu",
        ],
      },
      {
        title: "Elementor & Tasarım",
        items: [
          "Elementor Pro ile özel widget geliştirme",
          "WoodMart Elementor entegrasyonu",
          "Responsive breakpoint ve mobil uyum",
          "Custom CSS ile tema stilleri üzerine yazma",
        ],
      },
    ],
    techs: ["WordPress", "WooCommerce", "PHP", "WoodMart", "Elementor", "Child Theme", "CSS3", "JavaScript", "MySQL"],
  },
];

export default function Eticaret() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-5xl px-4 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-full text-xs font-medium">
                Retodi Bilişim Teknolojileri A.Ş.
              </span>
              <span className="bg-green-500/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Ocak 2025 – Günümüz
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-5 leading-tight">
              E-Ticaret<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-green-400 to-blue-400">
                Platform Deneyimi
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Retodi bünyesinde İkas, Shopify ve WooCommerce platformlarında
              hazır tema kullanmadan sıfırdan özel tema geliştirdim. Cart, checkout,
              API entegrasyonu ve PHP özelleştirmelerine kadar uçtan uca sorumluluk aldım.
            </p>
          </div>

          {/* Platform kartları — hero içi */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { name: "İkas", color: "from-amber-400 to-yellow-500", id: "ikas" },
              { name: "Shopify", color: "from-green-500 to-emerald-600", id: "shopify" },
              { name: "WooCommerce", color: "from-blue-500 to-blue-700", id: "woocommerce" },
            ].map((p) => (
              <a
                key={p.name}
                href={`#${p.id}`}
                className={`bg-gradient-to-r ${p.color} px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all`}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Bölümleri */}
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-20">
        {platforms.map((platform, idx) => (
          <section key={platform.id} id={platform.id}>

            {/* Platform Başlık */}
            <div className="flex items-start gap-5 mb-8">
              {/* Brand icon */}
              <div className="flex-shrink-0 shadow-lg rounded-xl">
                {platform.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-gray-900">{platform.name}</h2>
                  <span className={`${platform.color.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {platform.tagline}
                  </span>
                </div>
                <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">{platform.description}</p>
              </div>
            </div>

            {/* İçerik Grid */}
            <div className="grid lg:grid-cols-5 gap-6">

              {/* Sol: Yapılanlar + Teknolojiler */}
              <div className="lg:col-span-2 space-y-5">

                {/* Yapılanlar */}
                <div className={`${platform.color.light} border ${platform.color.border} rounded-2xl p-6`}>
                  <h3 className={`font-bold ${platform.color.accent} mb-4 text-xs uppercase tracking-widest`}>
                    Yapılanlar
                  </h3>
                  <ul className="space-y-2.5">
                    {platform.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 ${platform.color.dot} rounded-full mt-1.5 flex-shrink-0`}></div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teknolojiler */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-500 mb-4 text-xs uppercase tracking-widest">
                    Teknolojiler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {platform.techs.map((tech) => (
                      <span
                        key={tech}
                        className={`${platform.color.tag} border px-2.5 py-1 rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sağ: Kazanılan Yetkinlikler */}
              <div className="lg:col-span-3 space-y-4">
                <h3 className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-1">
                  Kazanılan Yetkinlikler
                </h3>
                {platform.learned.map((section) => (
                  <div
                    key={section.title}
                    className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className={`font-bold ${platform.color.accent} mb-3 text-sm flex items-center gap-2`}>
                      <span className={`w-2 h-2 ${platform.color.dot} rounded-full`}></span>
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                          <svg className={`w-4 h-4 ${platform.color.checkIcon} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {idx < platforms.length - 1 && (
              <div className="mt-16 border-b border-gray-200"></div>
            )}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Mağazanız için özel çözüm?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
            İkas, Shopify veya WooCommerce mağazanız için sıfırdan özel tema geliştirme,
            entegrasyon ve teknik destek konularında yardımcı olabilirim.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

    </div>
  );
}
