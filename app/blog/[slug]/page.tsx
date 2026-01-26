import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "../../lib/posts";

// Bu fonksiyon build zamanında hangi sayfaların oluşturulacağını belirler
// Örnek: /blog/nextjs-nedir, /blog/react-hooks, /blog/typescript-temelleri
export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dinamik metadata - her sayfa için farklı title/description
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15+ için params Promise olarak geliyor
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) {
      return { title: "Yazı Bulunamadı" };
    }
    return {
      title: `${post.title} | Benim Blogum`,
      description: post.excerpt,
    };
  });
}

// Sayfa komponenti - [slug] parametresi URL'den gelir
// Örnek: /blog/nextjs-nedir -> slug = "nextjs-nedir"
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 15+ için params'ı await etmemiz gerekiyor
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // Yazı bulunamazsa 404 sayfası göster
  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {/* Geri dön linki */}
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Ana Sayfaya Dön
      </Link>

      {/* Yazı başlığı */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

      {/* Tarih ve yazar */}
      <div className="text-gray-500 mb-8 pb-4 border-b border-gray-200">
        {new Date(post.date).toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • {post.author}
      </div>

      {/* Yazı içeriği */}
      <div className="prose prose-lg max-w-none">
        {/* Basit paragraf render - gerçek projede markdown parser kullanılır */}
        {post.content.split("\n\n").map((paragraph, index) => {
          // Başlık kontrolü
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          // Kod bloğu kontrolü
          if (paragraph.includes("```")) {
            const code = paragraph.replace(/```\w*\n?/g, "");
            return (
              <pre
                key={index}
                className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
              >
                <code>{code}</code>
              </pre>
            );
          }
          // Liste kontrolü
          if (paragraph.includes("1. ") || paragraph.includes("- ")) {
            const items = paragraph.split("\n").filter((item) => item.trim());
            return (
              <ul key={index} className="list-disc list-inside my-4 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-gray-700">
                    {item.replace(/^\d+\.\s|\-\s/, "")}
                  </li>
                ))}
              </ul>
            );
          }
          // Normal paragraf
          if (paragraph.trim()) {
            return (
              <p key={index} className="text-gray-700 leading-relaxed my-4">
                {paragraph}
              </p>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}
