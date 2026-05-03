"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/eticaret", label: "E-Ticaret" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 flex-shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AN
          </span>
          <span className="hidden sm:block">Ali Naci Tüysüz</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-1">
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

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium px-4 py-3 rounded-xl"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
