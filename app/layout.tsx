import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Naci Tüysüz | Full-Stack Developer",
  description: "Full-Stack Developer — Node.js, React, Next.js, PostgreSQL ile production sistemler geliştiriyorum.",
};

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/eticaret", label: "E-Ticaret" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2">
          <span className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">AN</span>
          <span>Ali Naci Tüysüz</span>
        </Link>
        <div className="flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium px-3 py-2 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">AN</span>
            <span className="text-gray-600 text-sm">© 2026 Ali Naci Tüysüz</span>
          </div>
          <div className="flex gap-5">
            <a
              href="https://github.com/ali006834"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ali-naci-t%C3%BCys%C3%BCz-7b31b130b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:alinacituysuz43@gmail.com"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              E-posta
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
