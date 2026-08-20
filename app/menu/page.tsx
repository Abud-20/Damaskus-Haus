import Image from "next/image";
import Link from "next/link";
import { categories } from "../data/menu";

export default function MenuIndex() {
  return (
    <main className="menu-directory" dir="rtl">
      <header className="directory-header"><Link href="/" className="back-home"><span className="lang-de">Zur Startseite</span><span className="lang-ar">الصفحة الرئيسية</span></Link><p className="section-kicker"><span className="lang-de">Speisekarte</span><span className="lang-ar">قائمة الطعام</span></p><h1><span className="lang-de">Wähle deine Kategorie</span><span className="lang-ar">اختار قسمك</span></h1><p><span className="lang-de">Alle Gerichte auf einen Blick</span><span className="lang-ar">كل الأطباق أمامك</span></p></header>
      <div className="directory-grid">{categories.map((category) => <Link className="directory-card" href={`/menu/${category.id}`} key={category.id}><Image src={category.image} alt={category.name} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="directory-shade" /><span className="directory-label"><strong>{category.name}</strong><small><span className="lang-de">{category.items.length} Artikel</span><span className="lang-ar">{category.arabic} · {category.items.length} أصناف</span></small></span></Link>)}</div>
    </main>
  );
}
