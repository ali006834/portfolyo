import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Naci Tüysüz | Full-Stack Developer",
  description: "Full-Stack Developer — Node.js, React, Next.js, PostgreSQL ile production sistemler geliştiriyorum.",
};

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">AN</span>
            <span className="text-gray-600 text-sm">© 2026 Ali Naci Tüysüz</span>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/ali006834" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ali-naci-t%C3%BCys%C3%BCz-7b31b130b/" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
              LinkedIn
            </a>
            <a href="mailto:alinacituysuz43@gmail.com"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
              E-posta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col bg-gray-50 overflow-x-hidden`}>
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
