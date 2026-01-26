import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "./lib/posts";

// Yetenekler listesi
const skills = [
  { category: "Backend", items: ["Django", "DRF", "Celery", "Redis"] },
  { category: "Frontend", items: ["React.js", "Next.js", "React Native", "Tailwind"] },
  { category: "AI/ML", items: ["PyTorch", "Machine Learning", "Pandas", "NumPy"] },
  { category: "DevOps", items: ["Docker", "Git", "PostgreSQL", "Firebase"] },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Son 3 yazı

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Sol taraf - Metin */}
            <div className="flex-1">
              <p className="text-blue-200 mb-2">Merhaba, ben</p>
              <h1 className="text-5xl font-bold mb-4">Ali Naci Tüysüz</h1>
              <p className="text-xl text-blue-100 mb-6">
                Bilgisayar Mühendisliği öğrencisi & Full-Stack Developer
              </p>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Problem çözme odaklı, takım çalışmasına yatkın bir yazılım geliştirici adayıyım.
                Django, React ve yapay zeka alanlarında projeler geliştiriyorum.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/projeler"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Projelerimi Gör
                </Link>
                <Link
                  href="/iletisim"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
            {/* Sağ taraf - Fotoğraf */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/profil.png"
                  alt="Ali Naci Tüysüz"
                  fill
                  className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yetenekler Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Yeteneklerim</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-600 mb-3">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Projeler */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Öne Çıkan Projeler</h2>
            <Link href="/projeler" className="text-blue-600 hover:text-blue-800 font-medium">
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-sm font-medium mb-2">Yapay Zeka</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Çapraz-Modal Veri Erişim Sistemi</h3>
              <p className="text-gray-600 mb-4">
                Contrastive learning ile metin, görsel ve video eşleştiren AI modeli ve React arayüzü.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">PyTorch</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">React.js</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-sm font-medium mb-2">Full-Stack</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Oyunlaştırılmış Görev Yönetimi</h3>
              <p className="text-gray-600 mb-4">
                Django + React ile gerçek zamanlı oyunlaştırma ve LLM entegrasyonlu görev sistemi.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Django</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">React Native</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Son Blog Yazıları */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Son Yazılar</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Birlikte Çalışalım</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Yeni projeler ve iş fırsatları için her zaman açığım. Benimle iletişime geçmekten çekinmeyin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
