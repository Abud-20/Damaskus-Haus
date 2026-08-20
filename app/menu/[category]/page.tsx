import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, formatPrice, germanDescriptions } from "../../data/menu";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = categories.find((item) => item.id === categoryId);
  if (!category) notFound();

  return (
    <main className="category-page" dir="rtl">
        <header className="category-hero"><Image src={category.image} alt={category.name} fill priority sizes="100vw" /><div className="category-hero-shade" /><div className="category-nav-top"><Link href="/menu" className="menu-back-button"><span className="lang-de">Speisekarte</span><span className="lang-ar">المنيو</span></Link><Link href="/" className="home-nav-button"><span className="lang-de">Startseite</span><span className="lang-ar">الرئيسية</span></Link></div><div className="category-hero-title"><p><span className="lang-de">{category.name}</span><span className="lang-ar">{category.arabic}</span></p><h1><span className="lang-de">{category.items.length} Artikel</span><span className="lang-ar">{category.items.length} صنف</span></h1></div></header>
      <section className="category-items"><div className="category-items-heading"><Link href="/menu"><span className="lang-de">Alle Kategorien</span><span className="lang-ar">كل الأقسام</span></Link><p><span className="lang-de">Frisch zubereitet</span><span className="lang-ar">تحضير طازج</span></p></div><div className="category-item-list">{category.items.map((item) => <article className="category-item-card" key={item.id}><div className="category-item-image" style={{ backgroundImage: `url(${category.image})` }} role="img" aria-label={item.name} /><div className="category-item-copy"><span>#{String(item.id).padStart(2, "0")}</span><h2>{item.name}</h2><p><span className="lang-de">Beschreibung: {germanDescriptions[item.id] || "—"}</span><span className="lang-ar">الوصف: {item.description || "—"}</span></p></div><strong>{formatPrice(item.price)}</strong><button aria-label={`Hinzufügen · إضافة ${item.name}`}>+</button></article>)}</div></section>
    </main>
  );
}
