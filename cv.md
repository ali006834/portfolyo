# Yazılım Geliştirici — Proje Portföyü

---

## Teknik Yetkinlikler

| Kategori | Teknolojiler |
|---|---|
| **Backend** | Node.js · Express.js · NestJS · Python |
| **Frontend** | React · Next.js · TypeScript · Tailwind CSS · Vanilla JS |
| **Mobil** | React Native · Expo |
| **Masaüstü** | Electron |
| **Veritabanı** | PostgreSQL · Prisma ORM · TypeORM |
| **E-Ticaret** | Shopify API · Shopify Liquid · Shopify CLI |
| **CMS / Tema** | WordPress · WoodMart · Elementor (özel widget geliştirme) |
| **Tarayıcı Uzantısı** | Chrome/Edge · Manifest V3 · Content Script · Service Worker |
| **Görüntü İşleme** | Sharp · Fabric.js · Electron (masaüstü) |
| **Bildirim & Entegrasyon** | Telegram Bot API · Netgsm SMS · Expo Push · Meta Graph API |
| **DevOps & Araçlar** | Docker · Docker Compose · node-cron · Windows Task Scheduler |
| **Döküman & Veri** | PDFKit · ExcelJS · QRCode · fast-xml-parser · BeautifulSoup4 |

---

## Projeler

---

### 1. Sağlık Profesyonelleri Komisyon Platformu

**Amaç**
Diyetisyen, veteriner ve personal trainer'ların hastalarına dijital reçete/antrenman planı oluşturması, ürünleri Shopify sepetiyle önermesi ve her satıştan otomatik komisyon kazanması. Klinik/eczane admini; profesyonelleri, komisyon oranlarını ve kampanyaları tek panelden yönetiyor.

**Teknolojiler**
`Node.js` · `Express.js` · `Next.js 16` · `React Native (Expo)` · `PostgreSQL` · `Prisma ORM` · `JWT` · `Shopify API` · `Netgsm SMS` · `Expo Push Notifications` · `PDFKit` · `ExcelJS` · `Docker`

**Öne Çıkan Özellikler**
- **Çok rollü platform:** Diyetisyen, veteriner, personal trainer ve admin için ayrı iş akışları tek sistemde
- **Dijital reçete motoru:** İmzalı PDF üretimi, QR kod ve WhatsApp paylaşımı — hasta tek tıkla Shopify'a yönlendiriliyor
- **Shopify entegrasyonu:** Ürün katalogu cache'i, rol bazlı kategori filtreleme, hasta e-postası önceden dolu sepet linki otomasyonu
- **Komisyon takip sistemi:** Kampanya bazlı oran yönetimi, aylık hesap kapatma, ödeme makbuzu yükleme, profesyonele push bildirimi
- **Mobil uygulama (Expo):** iOS/Android/Web desteği, güvenli depolama, offline-ready navigasyon
- **Otomasyon:** Cron job tabanlı kampanya yönetimi, Excel raporlama, toplu push gönderimi

**Mimari**
Monorepo: `/backend` (Express REST API) · `/admin` (Next.js dashboard) · `/mobile` (Expo React Native). PostgreSQL şeması Prisma migrations ile yönetiliyor. Shopify OAuth akışı ve webhook'lar backend tarafında işleniyor.

---

### 2. İçerik Onay & Yayınlama Sistemi

**Amaç**
Markaların Instagram içeriklerini taslak → inceleme → onay → zamanlama → yayınlama akışıyla yönetmesi. Onay almadan hiçbir gönderi yayınlanamıyor; revizyon istekleri ve versiyon geçmişi tam denetim sağlıyor.

**Teknolojiler**
`NestJS` · `TypeORM` · `PostgreSQL` · `JWT` · `2FA (OTPLib)` · `bcrypt` · `Instagram Graph API`

**Öne Çıkan Özellikler**
- **Durum makinesi:** `taslak → incelemede → onaylandı → zamanlandı → yayınlandı` — her geçiş loglanıyor
- **Versiyon kontrolü:** Her düzenleme yeni ContentVersion olarak saklanıyor; onaylayıcı daima hangi versiyonu incelediğini biliyor
- **Çok rollü erişim:** İçerik üretici, onaylayıcı, marka admini ve süper admin — rol bazlı yetkilendirme
- **Overdue tespiti:** Zamanı geçen ama yayınlanamamış gönderiler otomatik `overdue` işaretleniyor, ekip uyarılıyor
- **2FA güvenliği:** OTP tabanlı iki faktörlü doğrulama ile hesap güvenliği
- **Yeniden deneme:** Başarısız publish job'ları manuel retry ile tekrar tetiklenebiliyor

**Mimari**
NestJS modüler mimarisi: `Auth · Users · Brands · Contents · Approvals · Publish · Notifications · Dashboard`. TypeORM entity'leri ve migration tabanlı şema yönetimi. Cron job ile zamanlanmış yayın ve overdue kontrolü.

---

### 3. Instagram Gönderi İzleme & Eskalasyon Sistemi

**Amaç**
Zamanlanmış Instagram gönderilerinin gerçekten yayınlanıp yayınlanmadığını Meta Graph API üzerinden dakikada bir kontrol eder. Gönderi tespit edilemezse önce birinci öncelikli kişiye, yanıt gelmezse sırasıyla ikinci ve üçüncü kişiye e-posta + Telegram eskalasyonu gönderir.

**Teknolojiler**
`Node.js` · `Express.js` · `React` · `Vite` · `Tailwind CSS` · `PostgreSQL` · `Prisma ORM` · `Nodemailer` · `Telegram Bot API` · `node-cron` · `Docker`

**Öne Çıkan Özellikler**
- **Gerçek zamanlı izleme:** Dakikada bir çalışan cron; Meta Graph API ile gönderi varlığı doğrulanıyor
- **3 seviyeli eskalasyon zinciri:** 10 dakika yanıt gelmezse otomatik sonraki seviyeye tırmanıyor
- **Çift kanal bildirim:** E-posta (EVET/HAYIR butonlu HTML) ve Telegram inline klavyesi — birlikte çalışıyor
- **Token tabanlı yanıt:** Sadece yetkili kişi onaylayabiliyor; URL token güvenliği
- **Çoklu marka yönetimi:** Her markanın kendi takvimi, kendi iletişim listesi ve eskalasyon sırası
- **30 günlük log temizleme:** Otomatik gece cronjob'u ile veritabanı şişmesi engelleniyor

**Mimari**
Full-stack: `/backend` (Express + Prisma + cron servisleri) · `/frontend` (React SPA, korumalı rotalar). Cron katmanı: gönderi kontrol servisi, eskalasyon servisi ve log temizleme servisi ayrı çalışıyor.

---

### 4. Ürün Görseli Şablon Editörü & Meta Feed Üretici

**Amaç**
E-ticaret markalarının CSV ürün feed'inden gelen görsellere özel logo, fiyat etiketi ve metin katmanı ekleyen sürükle-bırak şablon editörü. Render edilen yeni görsel URL'leriyle Meta Commerce Manager'a hazır CSV feed otomatik üretiyor.

**Teknolojiler**
`Next.js 16` · `TypeScript` · `React 19` · `Tailwind CSS` · `Sharp` · `Fabric.js` · `PostgreSQL` · `@dnd-kit` · `fast-xml-parser`

**Öne Çıkan Özellikler**
- **Dinamik şablon sistemi:** `{{title}}` · `{{price}}` · `{{brand}}` gibi değişkenler her üründe otomatik dolduruluyor
- **Sunucu taraflı render:** Sharp ile yüksek kaliteli görsel üretimi — tarayıcı limitleri yok
- **Feed cache mimarisi:** Binlerce ürünlük CSV sunucuda önbelleğe alınıyor; editör yalnızca tek ürün yüklüyor
- **Meta uyumlu çıktı:** `image_link` sütunu güncellenen CSV Facebook/Instagram Shops'a direkt beslenebiliyor
- **Durum takibi:** Her marka için "Veri Bekleniyor → Render Bekliyor → Feed Hazır" pipeline durumu
- **Sürükle-bırak editör:** Konum, boyut, opaklık, döndürme — @dnd-kit ile katman yönetimi

**Mimari**
Next.js App Router: `/app/page.tsx` (marka dashboard) · `/app/editor/page.tsx` (editör) · `/app/api/brands/` (CRUD + CSV endpoint). Sharp render işlemi API route içinde async çalışıyor.

---

### 5. Pixlite — Toplu Görsel Optimizasyon Masaüstü Uygulaması

**Amaç**
E-ticaret satıcılarının yüzlerce ürün görselini tek tıkla yeniden boyutlandırıp hedef dosya boyutuna akıllıca sıkıştırması. Saatlik manuel işi dakikaya indiriyor.

**Teknolojiler**
`Electron v29` · `Sharp v0.33` · `Vanilla JS/HTML/CSS` · `electron-forge` · `Squirrel.Windows installer` · `Netlify`

**Öne Çıkan Özellikler**
- **4 hazır preset:** E-Ticaret (1600px/750KB) · Küçük Resim (600px/200KB) · Yüksek Kalite (3000px/2MB) · Web (1200px/WebP)
- **Akıllı boyut kontrolü:** Hedef KB'a ulaşmak için kaliteyi 6 adımda iteratif ayarlıyor
- **Gerçek zamanlı log:** Her görsel için önceki/sonraki boyut ve yüzde azalma gösteriliyor
- **Klasör yapısı korunuyor:** `_optimized/` alt klasöründe orijinal hiyerarşi birebir yeniden oluşturuluyor
- **İptal edilebilir toplu işlem:** İşlem ortasında durdurulabiliyor, yarım kalan dosyalar korunuyor
- **Windows installer:** electron-forge + Squirrel ile `.exe` kurulum paketi üretiliyor

**Mimari**
Electron main/renderer mimarisi. `contextBridge` ile güvenli IPC. Sharp işlemleri main process'te, UI renderer'da. Netlify'da tanıtım sitesi.

---

### 6. SEO & Dijital Pazarlama Chrome Uzantı Seti

**Amaç**
SEO uzmanları ve dijital pazarlamacılar için Google SERP analizi, rakip içerik tarama ve Meta reklam yaratıcılarını indirme işlemlerini otomatize eden 4 ayrı Chrome/Edge uzantısı.

**Teknolojiler**
`Vanilla JS` · `Chrome Manifest V3` · `Content Script` · `Service Worker` · `Chrome Storage API` · `Fetch API`

**Araçlar & Özellikler**

**SearchLens Pro**
- Her SERP sonucunun sayfa içeriğini arka planda fetch eder
- Anahtar kelimeye göre sonuçları filtreler/gösterir
- 3 kapsam modu: tam metin · başlık · URL

**Meta Ads Downloader**
- Meta Reklam Kütüphanesi sayfasını tarar, lazy-load scroll yapar
- Tüm görselleri ve videoları otomatik tespit eder (boyut filtreli, yüksek çözünürlük öncelikli)
- Tekli indirme veya ZIP arşivi olarak toplu indirme

**SEO Radar**
- Her rakip sayfayı 15+ SEO sinyaliyle analiz eder: H1/H2 yapısı, meta, kanonik, gizli metin, iç link sayısı
- Türkçe karakter normalleştirme (ç→c, ğ→g vb.) ile doğru anahtar kelime eşleşmesi
- 0-100 SEO puanı ve otorite skoru üretiyor

**SERP Filter**
- Gerçek zamanlı Google sonuç filtreleme (göster/gizle)
- Filtre hafızası — sayfa yenilemede korunuyor

**Mimari**
Her uzantı: `manifest.json` (V3) · `content.js` (DOM manipülasyonu) · `background.js` (service worker) · `popup.html/js` (UI). Sıfır bağımlılık, sıfır sunucu.

---

### 7. B2B Tedarikçi Katalog Takip Botu

**Amaç**
Yasir.com.tr B2B pazaryerini misafir oturumuyla sistematik olarak tarar, tüm ürünleri CSV'ye aktarır ve her çalıştırmada önceki veriyle karşılaştırarak yeni ürün, fiyat değişikliği ve stok güncellemelerini loglar.

**Teknolojiler**
`Python 3.10+` · `requests` · `BeautifulSoup4` · `lxml` · `Windows Task Scheduler`

**Öne Çıkan Özellikler**
- **Misafir oturum yönetimi:** Session cookies ile kimlik doğrulama — hesap gerektirmiyor
- **Değişiklik tespiti:** Eklenen ürün · silinen ürün · fiyat değişimi · stok değişimi ayrı ayrı loglanıyor
- **Excel uyumlu çıktı:** UTF-8 BOM ile CSV — direkt Excel'de açılıyor
- **Nazik tarama:** İstekler arası 0.8 sn gecikme, 20 sn timeout — sunucu aşırı yüklenmesini önlüyor
- **Zamanlayıcı entegrasyonu:** Windows Task Scheduler ile saatlik/günlük otomatik çalıştırma
- **15 alan:** ürün_id · ad · barkod · stok_kodu · kategori (3 seviye) · marka · fiyat · para\_birimi · stok\_durumu · stok\_adedi · resim\_url

**Mimari**
3 script: `yasir_scraper.py` (ana tarayıcı) · `zamanlayici.py` (sürekli döngü) · `gorev_zamanlayici_kur.py` (Task Scheduler kurulumu). Durum dosyası karşılaştırma ile delta tespiti.

---
