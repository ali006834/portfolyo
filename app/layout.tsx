import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Naci Tüysüz | Yazılım Geliştirici",
  description: "Bilgisayar Mühendisi, Full-Stack Developer. Django, React, Next.js",
};

// Navigasyon linkleri
const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

// Header komponenti
function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          Portfolyo
        </Link>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

// Footer komponenti
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            © 2026 Ali Naci Tüysüz. Next.js ile yapıldı.
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/ali006834"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:alinacituysuz43@gmail.com"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              E-posta
            </a>
            <a
              href="tel:+905445026900"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Telefon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col bg-gray-50`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
