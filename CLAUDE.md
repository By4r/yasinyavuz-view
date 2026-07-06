# CLAUDE.md — Yasin Yavuz Kişisel Marka Sitesi (yasinyavuz-view)

> **HER SESSION AÇILIŞINDA İLK İŞ: BU DOSYAYI OKU.** Sonra `tasks/handoff.md`, `tasks/plan.md`,
> `tasks/brief-assets.md`, `tasks/lessons.md`, `tasks/components.md` sırasıyla.

---

## 1. Proje Kimliği

- **Ne:** Yasin Yavuz **kişisel / girişimci marka** web sitesi. Kurumsal dernek DEĞİL, tek bir
  kişinin girişimci kimliğini merkeze alan kişisel marka platformu.
- **Ton:** Kişisel hikâye + uzmanlık + güven + dönüşüm. Sade, güçlü, güven veren, profesyonel.
  "Ben" değil, kanıtlanmış etki anlatan bir dil (girişimcilik, dijital projeler, STK, medya).
- **Teknik:** Vanilla HTML/CSS/JS, buildless (build adımı yok, framework yok). Statik site.
  Çok dilli (TR ana; EN/ES/DE/RU ek), responsive, SEO uyumlu.
- **Pattern kaynağı:** DESİL / Trabzonlular Federasyonu / Dada İstanbul'da kanıtlanmış DESİL
  pattern'ı birebir uygulanır (agent team + öz-denetim loop + token sistemi + pilot kuralı).

## 2. İçerik & Görsel Rejimi — SIFIR UYDURMA

- **Tek doğru kaynak:** metin, görsel ve link referansları **brief'ten** gelir. `tasks/brief-assets.md`
  tek kaynaktır (envanter). Brief özeti `tasks/brief-summary.md`.
- **UYDURMA YASAK:** brief'te olmayan görsel/link/metin İCAT EDİLMEZ. Brief dışı içerik gerekiyorsa
  **Beyar'a sor** — otonom devam etme.
- **KRİTİK GERÇEK:** Brief bir **yapı/mimari brief'idir, içerik brief'i DEĞİL.** İçinde Yasin Yavuz'a
  ait gerçek biyografi metni, şirket adı, proje detayı, iletişim bilgisi (e-posta/telefon/adres),
  sosyal medya hesabı, logo veya portre **YOKTUR**. Gömülü iki görsel numankurtulmus.com'un
  **kompozisyon referans ekran görüntüleridir** — site içeriği DEĞİLDİR, sayfaya KONULMAZ.
- **İletişim / kişisel bilgi HER DURUMDA gerçek kaynaktan.** Gerçek veri yoksa **nötr placeholder**
  kullan (örn. `#` link, `ornek@yasinyavuz.com.tr` DEĞİL — görünür `[İletişim bilgisi — SORULACAK]`
  placeholder) ve `tasks/todo.md` + handoff'ta "SORULACAK" olarak işaretle. Sahte telefon/e-posta/adres
  ASLA yazılmaz.
- Brief'ten çıkan görseller `assets/` altında optimize edilerek kullanılır. `assets/brief-media/`
  gömülü referanslar için (commit'lenir).

## 3. Kalıcı Agent Team

- **Lead:** koordinasyon-only (Opus/Fable — kota ekonomisi). Kod yazmaz; planlar, dağıtır, denetler,
  kanonikleştirir.
- **Frontend teammate'lar:** Sonnet. **Tek-yazar kuralı** — ortak dosyada (tokens.css, shell parçaları)
  **full-file overwrite YASAK**; yalnızca targeted edit. Bir dosyanın tek sahibi olur.
- **QA teammate:** Sonnet. Öz-denetim + rubrik + içerik/görsel sadakati.
- **frontend-design skill'i:** her frontend teammate HER sayfadan ÖNCE okur ve uygular.

## 4. Öz-Denetim Loop

Her sayfa için: **üret → Playwright SS (1440px masaüstü + 390px mobil, `docs/screenshots/` gitignored)
→ öz-değerlendirme (4 eksen: UI/UX, modernlik rubriği `tasks/modernity-rubric.md`, içerik sadakati
brief'e, görsel/kimlik sadakati) → yazılı feedback → iyileştir.**
- **Max 2 revize turu**, sonra DUR.
- SS Beyar'a sunulmaz; kısa yazılı rapor yeterli.

## 5. Pilot Kuralı (KRİTİK)

- **Wave 1 = SADECE `index.html`.** Başka sayfa YOK.
- **"Pilot onaylandı" denmeden Wave 2 YOK.**
- Onayla birlikte **token sistemi (tokens.css) + shell (header/footer/nav)** KANONİK ilan edilir.
- Wave 2 kanonik shell'i **klonlar** — kalite yükseltmek serbest, **redesign yasak.**

## 6. Component Sözlüğü

- `tasks/components.md` tek kaynak. Teammate **desen icat etmez**; yeni desen gerekiyorsa lead'e
  bildirir, lead sözlüğe ekler.

## 7. Token Sistemi

- Renk / tipografi / spacing **tokens.css**'te. **Hardcode YASAK** (hex, px font-size, ad-hoc renk yok).
- Palet & tipografi yönü: `tasks/brand-identity.md` (Beyar onayına tabi).

## 8. Görsel Kuralları

- **Kare/oranlı görsel = `div` + `background-image: cover center`** (img değil).
- **Retina 2x çarpma YOK.**
- **Header logo/foto = sabit kutu:** fixed `width`+`height` + `object-fit: contain`; farklı oranlı
  varyant geldiğinde nav kaymasını önle.
- Görseller taşma yapmaz (responsive; mobilde tek kolon kart).
- Brief'ten çıkan görseller `assets/` altında **optimize** edilir.

## 9. Git Disiplini

- **`git add -A` / `git add .` YASAK.** Dosya tek tek isimle stage.
- Ayrı concern → ayrı commit. Mesaj **İngilizce**, kişisel isim yok.
- **İzinsiz commit/push YOK.** Commit'i **handoff skill'ine bırak** (Beyar "handoff" der).
- `tasks/` ve `docs/screenshots/` commit'lenmez; `assets/brief-media/` commit'lenir.

## 10. Deploy (KEŞİFTE DEĞİL — sonraki faz)

- GitHub Pages, public repo (By4r, **yasinyavuz-view**), **gh CLI ile kurulacak.**
- Pages sonrası **`.nojekyll` şart.**
- **push = canlıda değil.** Hash teyidi olmadan link paylaşılmaz.

---

**Özet çalışma sırası:** CLAUDE.md → handoff → plan → brief-assets → üret → öz-denetim → handoff (commit).
Şüphede kalınca DUR ve Beyar'a sor.
