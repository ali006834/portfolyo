// Blog yazısı için TypeScript tipi tanımlıyoruz
export type Post = {
  slug: string;        // URL'de kullanılacak benzersiz isim
  title: string;       // Yazı başlığı
  excerpt: string;     // Kısa özet
  content: string;     // Tam içerik
  date: string;        // Yayın tarihi
  author: string;      // Yazar adı
};

// Örnek blog yazıları (gerçek projede bunlar veritabanından gelir)
const posts: Post[] = [
  {
    slug: "nextjs-nedir",
    title: "Next.js Nedir ve Neden Kullanmalıyız?",
    excerpt: "Next.js, React üzerine kurulu güçlü bir framework. Bu yazıda temel özelliklerini inceliyoruz.",
    content: `
Next.js, Vercel tarafından geliştirilen ve React üzerine kurulu bir framework'tür.

## Neden Next.js?

1. **Server-Side Rendering (SSR)**: Sayfalar sunucuda render edilir, SEO için mükemmel.
2. **Static Site Generation (SSG)**: Build zamanında statik HTML oluşturur.
3. **File-based Routing**: Dosya yapısı otomatik olarak route oluşturur.
4. **API Routes**: Backend API'leri aynı projede yazabilirsiniz.

## Başlarken

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

Next.js ile modern web uygulamaları geliştirmek çok kolay!
    `,
    date: "2026-01-25",
    author: "Ali Naci Tüysüz",
  },
  {
    slug: "react-hooks",
    title: "React Hooks: useState ve useEffect",
    excerpt: "React'ın en önemli hook'larını örneklerle öğrenin.",
    content: `
React Hooks, fonksiyonel komponentlerde state ve lifecycle özellikleri kullanmamızı sağlar.

## useState

State yönetimi için kullanılır:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

Side effect'ler için kullanılır (API çağrıları, DOM manipülasyonu vb.):

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

Hooks sayesinde class component'lere ihtiyaç duymadan tüm React özelliklerini kullanabilirsiniz.
    `,
    date: "2026-01-20",
    author: "Ali Naci Tüysüz",
  },
  {
    slug: "typescript-temelleri",
    title: "TypeScript'e Giriş",
    excerpt: "JavaScript'e tip güvenliği ekleyen TypeScript'i keşfedin.",
    content: `
TypeScript, JavaScript'in üzerine tip sistemi ekleyen bir programlama dilidir.

## Neden TypeScript?

- **Tip Güvenliği**: Hataları derleme zamanında yakalar
- **Daha İyi IDE Desteği**: Otomatik tamamlama ve hata gösterimi
- **Okunabilir Kod**: Tipler dokümantasyon görevi görür

## Temel Tipler

\`\`\`typescript
let isim: string = "Ali";
let yas: number = 25;
let aktif: boolean = true;
let liste: string[] = ["a", "b", "c"];
\`\`\`

## Interface

\`\`\`typescript
interface Kullanici {
  id: number;
  isim: string;
  email: string;
}
\`\`\`

TypeScript öğrenmek, daha güvenli ve bakımı kolay kod yazmanızı sağlar.
    `,
    date: "2026-01-15",
    author: "Ali Naci Tüysüz",
  },
];

// Tüm yazıları getir (tarihe göre sıralı)
export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Tek bir yazıyı slug'a göre getir
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

// Tüm slug'ları getir (static generation için)
export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug);
}
