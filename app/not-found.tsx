import Link from "next/link";

// Bu sayfa, bulunamayan URL'ler için otomatik gösterilir
// Next.js "not-found.tsx" dosyasını tanır
export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Sayfa Bulunamadı
      </h2>
      <p className="text-gray-600 mb-8">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
