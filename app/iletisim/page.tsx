"use client";

import { useState } from "react";

// İletişim bilgileri
const contactInfo = [
  {
    title: "E-posta",
    value: "alinacituysuz43@gmail.com",
    href: "mailto:alinacituysuz43@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Telefon",
    value: "+90 544 502 69 00",
    href: "tel:+905445026900",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  
  {
    title: "LinkedIn",
    value: "Ali Naci Tüysüz",
    href: "https://www.linkedin.com/in/ali-naci-t%C3%BCys%C3%BCz-7b31b130b/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    value: "github.com/ali006834",
    href: "https://github.com/ali006834",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Bir hata oluştu.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 w-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
          <div className="h-1 w-20 bg-blue-600 rounded mb-4"></div>
          <p className="text-gray-600 text-lg">
            Benimle iletişime geçmekten çekinmeyin. Her türlü soru, proje teklifi veya
            iş birliği için ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mesaj Formu */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white placeholder:text-gray-400"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none text-gray-900 bg-white placeholder:text-gray-400"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Mesajınız başarıyla gönderildi!
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Birlikte Çalışalım</h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Yeni projeler, staj fırsatları veya iş teklifleri için her zaman açığım.
            Hemen iletişime geçin!
          </p>
          <a
            href="mailto:alinacituysuz43@gmail.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-sm"
          >
            E-posta Gönder
          </a>
        </div>
      </div>
    </div>
  );
}
