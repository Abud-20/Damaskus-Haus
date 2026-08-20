import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "./components/LanguageToggle";
import { categories } from "./data/menu";

export default function Home() {
  return (
    <main className="restaurant-home" dir="rtl">
      <LanguageToggle />
      <section className="restaurant-hero">
        <Image className="restaurant-hero-image" src="/restaurant-chef.jpg" alt="شيف Damaskus Haus مع شاورما الدجاج" fill priority sizes="100vw" />
        <div className="restaurant-hero-overlay" />
        <div className="restaurant-nav"><Link href="/" className="restaurant-logo"><Image src="/logo.svg" alt="Damaskus Haus" width={42} height={42} /> <span>Damaskus Haus</span></Link></div>
        <div className="restaurant-intro"><p className="hero-kicker"><span className="lang-de">Syrische Küche</span><span className="lang-ar">أكل شامي</span></p><h1>Damaskus<br /><em>Haus</em></h1><p><span className="lang-de">Authentische Aromen aus Damaskus</span><span className="lang-ar">نكهات أصيلة من دمشق</span></p><Link className="primary-home-button" href="/menu"><span className="lang-de">Speisekarte ansehen</span><span className="lang-ar">شاهد المنيو</span></Link></div>
        <div className="restaurant-details"><span>Porschestraße 34 D 38440 Wolfsburg</span><span><span className="lang-de">Abholung & Lieferung</span><span className="lang-ar">استلام وتوصيل</span></span><span><span className="lang-ar">مفتوح من الساعة 11 حتى الساعة 12 بالليل</span><span className="lang-de"> Öffnungszeiten: 11:00 – 00:00 Uhr</span></span></div>
      </section>
      <section className="home-menu-preview"><div className="home-section-heading"><div><p className="section-kicker"><span className="lang-de">Unsere Küche</span><span className="lang-ar">مطبخنا</span></p><h2><span className="lang-de">Von Shawarma<br /><em>bis zum letzten Bissen.</em></span><span className="lang-ar">من الشاورما<br /><em>إلى آخر لقمة.</em></span></h2></div><p><span className="lang-de">Wir kochen mit Zeit, Gewürzen und einer großen Portion Herz.</span><span className="lang-ar">نطبخ بوقت وتوابل وقلب كبير.</span></p></div><div className="home-category-grid">{categories.slice(0, 6).map((category) => <Link className="home-category-card" href={`/menu/${category.id}`} key={category.id}><Image src={category.image} alt={category.name} fill sizes="(max-width: 700px) 50vw, 25vw" /><span className="home-category-shade" /><span className="home-category-label"><strong>{category.name}</strong><small><span className="lang-de">{category.items.length} Artikel</span><span className="lang-ar">{category.arabic} · {category.items.length} أصناف</span></small></span></Link>)}</div><Link className="text-link" href="/menu"><span className="lang-de">Alle Kategorien ansehen</span><span className="lang-ar">كل الأقسام</span></Link></section>
    </main>
  );
}
