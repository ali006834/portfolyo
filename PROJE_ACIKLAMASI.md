# 📝 Portfolyo Projesi - Basit Anlatım Kılavuzu

## 🎯 Projeyi Nasıl Yaptım?

### Kullandığım Teknolojiler
- **Next.js 16** - React framework'ü (SEO için önemli)
- **TypeScript** - Kod hatalarını azalttı
- **Tailwind CSS** - Hızlı ve modern tasarım
- **Resend** - Email gönderimi
- **Vercel** - Hosting (ücretsiz)

---

## 🗂️ Next.js Mantığı - Basit Açıklama

### 1. Klasör = Sayfa (File-based Routing)

Next.js'de **her klasör bir URL'dir**. Kod yazmaya gerek yok!

```
app/
├── page.tsx                → yoursite.com/
├── hakkimda/
│   └── page.tsx           → yoursite.com/hakkimda
├── projeler/
│   └── page.tsx           → yoursite.com/projeler
├── blog/
│   ├── page.tsx           → yoursite.com/blog
│   └── [slug]/
│       └── page.tsx       → yoursite.com/blog/herhangi-yazi
└── iletisim/
    └── page.tsx           → yoursite.com/iletisim
```

**Örnek:**
- `app/hakkimda/page.tsx` dosyası oluştur → `/hakkimda` sayfası otomatik hazır!
- `app/projeler/page.tsx` dosyası oluştur → `/projeler` sayfası otomatik hazır!

**Eski yöntem (React Router) ile karşılaştırma:**
```jsx
// Eski yöntem - React Router (karmaşık)
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/hakkimda" element={<About />} />
  <Route path="/projeler" element={<Projects />} />
</Routes>

// Yeni yöntem - Next.js (basit)
// Sadece klasör oluştur, bitti!
```

---

### 2. Layout Sistemi - Tekrar Yazmadım

**Sorun:** Header ve Footer her sayfada olacak. Her sayfaya mı yazdım?

**Çözüm:** `layout.tsx` dosyası kullandım!

```tsx
// app/layout.tsx - Tüm sayfaları sarar
export default function Layout({ children }) {
  return (
    <>
      <Header />      {/* Bir kere yazdım */}
      {children}      {/* Her sayfa buraya gelir */}
      <Footer />      {/* Bir kere yazdım */}
    </>
  )
}
```

**Sonuç:**
- Header/Footer kodunu sadece **1 kere** yazdım
- Tüm sayfalarda otomatik göründü
- Sayfa değişince Header/Footer yeniden render olmuyor (hızlı!)

---

### 3. Sayfa Yönlendirmeleri (Navigation)

**İki yöntem kullandım:**

#### A) Link Komponenti (Sayfalar arası geçiş)
```tsx
import Link from 'next/link'

<Link href="/projeler">Projelerim</Link>
<Link href="/iletisim">İletişim</Link>
```

**Neden `<a>` etiketi değil?**
- `<a>` etiketi → Sayfa yeniden yüklenir (yavaş)
- `<Link>` → Sadece içerik değişir (hızlı, SPA gibi)

#### B) Dinamik Routing (Blog yazıları için)
```
app/blog/[slug]/page.tsx
```

**Nasıl çalışır?**
```
/blog/nextjs-nedir       → slug = "nextjs-nedir"
/blog/react-hooks        → slug = "react-hooks"
/blog/typescript-giris   → slug = "typescript-giris"
```

```tsx
// Sayfa içinde slug'a erişim
export default function BlogPost({ params }) {
  const { slug } = params  // URL'den slug gelir
  // slug ile veriyi çek
}
```

---

### 4. API Routes (Backend kodları)

**Sorun:** İletişim formundan email göndermem lazım. Ayrı backend yazmam mı gerek?

**Çözüm:** Next.js içinde API yazdım!

```
app/api/contact/route.ts  → yoursite.com/api/contact
```

```tsx
// app/api/contact/route.ts
export async function POST(request) {
  const data = await request.json()
  // Email gönder
  return Response.json({ message: "Başarılı!" })
}
```

**Frontend'den çağırma:**
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

**Avantaj:**
- Ayrı backend server'a gerek yok
- Tek proje (frontend + backend bir arada)
- Vercel'de otomatik çalışır

---

## 🎨 Styling - Tailwind CSS

**Neden Tailwind?**
- CSS dosyası yazmadım
- Classlar ile direkt tasarladım

```tsx
// Eski yöntem
<div className="card">
  <h2 className="title">Başlık</h2>
</div>

// style.css
.card { padding: 20px; background: white; }
.title { font-size: 24px; font-weight: bold; }

// Yeni yöntem - Tailwind
<div className="p-5 bg-white">
  <h2 className="text-2xl font-bold">Başlık</h2>
</div>
```

---

## 🚀 Deployment - Vercel

**Adımlar:**
1. GitHub'a push yap
2. Vercel'e bağla
3. Otomatik deploy oluyor

**Her commit'te:**
- Vercel otomatik build yapar
- Canlıya alır
- URL verir

---

## 📧 Email Entegrasyonu

**Resend API kullandım:**

1. **API Key aldım** (ücretsiz)
2. **Vercel'de Environment Variable ekledim**
3. **API route yazdım** (`/api/contact`)
4. **Form'dan API'yi çağırdım**

```tsx
// İletişim formu
const handleSubmit = async (e) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    // Başarılı mesajı göster
  }
}
```

---

## 🎤 Röportaj Soruları - Hazır Cevaplar

### S1: "Next.js'de routing nasıl çalışır?"
**Cevap:**
> "Next.js'de klasör yapısı routing'i belirler. `app/projeler/page.tsx` dosyası oluşturduğumda, otomatik olarak `/projeler` route'u oluştu. Ek routing konfigürasyonuna gerek kalmadı."

### S2: "Layout sistemi nedir?"
**Cevap:**
> "Layout, tüm sayfaları sarar. Header ve Footer'ı `layout.tsx` dosyasında bir kere tanımladım, tüm sayfalarda otomatik göründü. Bu sayede kod tekrarından kaçındım."

### S3: "API routes nasıl kullandın?"
**Cevap:**
> "İletişim formu için `app/api/contact/route.ts` altında bir API endpoint yazdım. Bu sayede ayrı backend server'a ihtiyaç duymadan, Next.js içinde backend kodları yazdım. Resend API ile email gönderimi gerçekleştirdim."

### S4: "Dinamik routing nasıl yaptın?"
**Cevap:**
> "Blog yazıları için `[slug]` klasörü kullandım. `/blog/[slug]/page.tsx` dosyası, `/blog/nextjs-nedir`, `/blog/react-hooks` gibi tüm URL'leri karşılıyor. URL parametresini `params.slug` ile alıyorum."

### S5: "Neden Tailwind CSS?"
**Cevap:**
> "Tailwind ile direkt HTML içinde class'larla stil verdim. Ayrı CSS dosyası yazmama gerek kalmadı. Özellikle responsive tasarım için `md:`, `lg:` prefix'leri çok pratik."

### S6: "Deployment nasıl yaptın?"
**Cevap:**
> "GitHub'a push attığımda Vercel otomatik build yapıp deploy ediyor. Environment variable'ları Vercel dashboard'dan ekledim. Her commit'te otomatik canlıya alınıyor."

### S7: "TypeScript neden kullandın?"
**Cevap:**
> "TypeScript ile tip güvenliği sağladım. Hataları kod yazarken yakaladım, runtime'da değil. API response'ları için interface'ler tanımlayarak, hangi dataların geleceğini belirledim."

### S8: "SEO için ne yaptın?"
**Cevap:**
> "Next.js server-side rendering yapıyor. Her sayfa için `metadata` export ederek title ve description ekledim. Arama motorları sayfayı tam olarak görüyor."

```tsx
export const metadata = {
  title: "Projelerim | Ali Naci Tüysüz",
  description: "Web development projelerim"
}
```

---

## 🔑 Önemli Kavramlar - Kısaca

| Kavram | Açıklama | Nerede Kullandım |
|--------|----------|------------------|
| **File-based Routing** | Klasör = URL | Tüm sayfalarda |
| **Layout** | Ortak bileşenler | Header, Footer |
| **Dynamic Routes** | [slug] ile dinamik URL | Blog yazıları |
| **API Routes** | Backend endpoint'ler | İletişim formu |
| **Server Components** | Varsayılan, hızlı | Tüm sayfalarda |
| **Client Components** | `"use client"` ile | İletişim formu |
| **Environment Variables** | Gizli bilgiler | Resend API key |

---

## 💡 Projenin Artıları

1. **Hızlı:** Server-side rendering sayesinde
2. **SEO dostu:** Google kolayca indeksliyor
3. **Kolay bakım:** Klasör yapısı düzenli
4. **Ölçeklenebilir:** Yeni sayfa eklemek çok kolay
5. **Modern:** En yeni React özelliklerini kullanıyor
6. **Ücretsiz hosting:** Vercel ile

---

## 📚 Öğrendiğim Şeyler

1. Next.js App Router'ı öğrendim
2. API route'ları öğrendim
3. Email entegrasyonu yaptım
4. Vercel deployment'ı öğrendim
5. Environment variable yönetimi öğrendim
6. TypeScript ile tip güvenliği sağladım

---

## 🎯 Sonuç

**Tek cümle ile:**
> "Next.js'in file-based routing ve layout sistemini kullanarak, tek projede hem frontend hem backend kodları yazdım. Vercel ile otomatik deploy edip, Resend API ile email entegrasyonu ekledim."

**Teknik cümle:**
> "Modern React framework'ü Next.js 16 App Router kullanarak, server-side rendering destekli, SEO-friendly, full-stack bir portfolyo sitesi geliştirdim."
