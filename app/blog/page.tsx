import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export const metadata: Metadata = {
  title: "Blog | Ali Naci Tüysüz",
  description: "Yazılım geliştirme hakkında blog yazıları",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <div className="h-1 w-20 bg-blue-600 rounded mb-4"></div>
          <p className="text-gray-600 text-lg">
            Yazılım geliştirme, teknoloji ve öğrendiklerim hakkında yazılar
          </p>
        </div>

        {/* Blog Yazıları */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
                >
                  Devamını Oku →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Henüz blog yazısı bulunmuyor.</p>
          </div>
        )}
      </div>
    </div>
  );
}
