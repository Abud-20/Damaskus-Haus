export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type Category = {
  id: string;
  name: string;
  arabic: string;
  emoji: string;
  image: string;
  items: MenuItem[];
};

export const categories: Category[] = [
  { id: "shawarma", name: "Shawarma", arabic: "شاورما", emoji: "🌯", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=80", items: [
    { id: 1, name: "Shawarma Sandwich", description: "دجاج، خبز فلافل، صوص ثوم، مخلل خيار", price: 6 },
    { id: 2, name: "Shawarma Teller", description: "دجاج، خبز فلافل، صوص ثوم، مخلل، سلطة، بطاطا مقلية", price: 9 },
    { id: 3, name: "Shawarma Sandwich (Double)", description: "كمية لحم مضاعفة، دجاج، خبز فلافل، صوص ثوم، مخلل", price: 8 },
    { id: 4, name: "Shawarma Teller (Double)", description: "كمية لحم مضاعفة، سلطة، بطاطا مقلية، صوص ثوم ومخلل", price: 15 },
    { id: 5, name: "Shawarma Maria", description: "دجاج، خبز فلافل، صوص ثوم، موزاريلا، مخلل، بطاطا", price: 18 },
    { id: 6, name: "Shawarma Family", description: "دجاج، خبز فلافل، صوص ثوم، مخلل، سلطة، بطاطا", price: 40 },
  ] },
  { id: "doner", name: "Döner", arabic: "دندر كباب", emoji: "🥙", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80", items: [
    { id: 7, name: "Döner Kebap", description: "خبز فلافل، طماطم، بصل، سلطة، صوص ثوم", price: 6 },
    { id: 8, name: "Döner Kebap (mit Käse)", description: "مع جبن، خبز فلافل، طماطم، بصل، سلطة، صوص ثوم", price: 7 },
    { id: 9, name: "Döner Kebap Teller", description: "طبق مع بطاطا، سلطة، طماطم، بصل، صوص ثوم", price: 12 },
    { id: 10, name: "Döner Kebap Box (Groß)", description: "بوكس كبير مع بطاطا ومقبلات جانبية", price: 8 },
    { id: 11, name: "Döner Kebap Box (Klein)", description: "بوكس صغير مع بطاطا ومقبلات جانبية", price: 6 },
    { id: 12, name: "Dürüm Kebap", description: "ملفوف بعجينة dürüm مع سلطة وصوص", price: 7 },
    { id: 13, name: "Dürüm (mit Käse)", description: "ملفوف بعجينة dürüm مع جبن، سلطة وصوص", price: 8 },
  ] },
  { id: "chicken", name: "Fried Chicken", arabic: "فرايد تشيكن", emoji: "🍗", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80", items: [
    { id: 14, name: "Chicken Nuggets (7 Stück)", description: "بطاطا مقلية، كاتشب", price: 7 },
    { id: 15, name: "½ Fried Chicken (4 Stück)", description: "قطع دجاج مقرمشة، خبز فلافل، صوص ثوم، مخلل، سلطة، بطاطا", price: 10 },
    { id: 16, name: "½ Fried Chicken Scharf (4 Stück)", description: "قطع دجاج مقرمشة حارة مع الخبز والصوص والمخلل والسلطة والبطاطا", price: 10 },
    { id: 17, name: "Fried Chicken (8 Stück)", description: "قطع دجاج مقرمشة طازجة مع الخبز والصوص والمخلل والسلطة والبطاطا", price: 18 },
    { id: 18, name: "Fried Chicken Scharf (8 Stück)", description: "قطع دجاج مقرمشة حارة مع الخبز والصوص والمخلل والسلطة والبطاطا", price: 18 },
    { id: 19, name: "Crispy Chicken (5 Stück)", description: "شرائح صدر دجاج مقرمشة طازجة مع المكونات الجانبية", price: 9 },
    { id: 20, name: "Crispy Chicken Scharf (5 Stück)", description: "شرائح صدر دجاج مقرمشة حارة مع المكونات الجانبية", price: 9 },
    { id: 21, name: "Crispy Chicken Sandwich", description: "شريحة صدر مقرمشة مع خبز فلافل، صوص ثوم، مخلل، سلطة، بطاطا", price: 6 },
  ] },
  { id: "grill", name: "Grill Gerichte", arabic: "أطباق مشوية", emoji: "🔥", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", items: [
    { id: 22, name: "Ganzes gegrilltes Hähnchen", description: "دجاج مشوي، صوص ثوم، مخلل، سلطة، بطاطا", price: 15 },
    { id: 23, name: "Ganzes Hähnchen (nur Knoblauchsoße)", description: "دجاج مشوي فقط مع صوص الثوم", price: 12 },
    { id: 24, name: "Halbes gegrilltes Hähnchen", description: "نصف دجاج مشوي مع الصوص والمخلل والسلطة والبطاطا", price: 8 },
    { id: 25, name: "Halbes Hähnchen (nur Knoblauchsoße)", description: "نصف دجاج مشوي فقط مع صوص الثوم", price: 7 },
  ] },
  { id: "burger", name: "Burger", arabic: "برغر", emoji: "🍔", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80", items: [
    { id: 26, name: "Crispy Chicken Burger", description: "سلطة، صوص ثوم، كاتشب، طماطم", price: 5 },
    { id: 27, name: "Chicken Burger", description: "سلطة، مايونيز، كاتشب، طماطم", price: 5 },
    { id: 28, name: "Double Chicken Burger", description: "سلطة، مايونيز، كاتشب، طماطم", price: 7 },
    { id: 29, name: "Crispy Chicken Burger Menü", description: "بطاطا، سلطة، صوص ثوم، كاتشب، طماطم", price: 7 },
    { id: 30, name: "Chicken Burger Menü", description: "بطاطا، سلطة، مايونيز، كاتشب، طماطم", price: 7 },
    { id: 31, name: "Double Chicken Burger Menü", description: "بطاطا، سلطة، مايونيز، كاتشب، طماطم", price: 9 },
  ] },
  { id: "salad", name: "Salate", arabic: "سلطات", emoji: "🥗", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80", items: [
    { id: 32, name: "Arabischer Salat", description: "سلطة شرقية مشكلة بالطماطم والخيار والأعشاب", price: 4.5 },
    { id: 33, name: "Salat Fattusch", description: "سلطة شرقية بالبقدونس والرمان وdressing الليمون", price: 5 },
  ] },
  { id: "starters", name: "Vorspeisen", arabic: "مقبلات", emoji: "🫓", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80", items: [
    { id: 34, name: "Halloumi Käse", description: "جبنة حلومي مقلية", price: 6 },
    { id: 35, name: "Halloumi Sandwich", description: "حلومي داخل خبز فلافل", price: 6 },
    { id: 36, name: "Halloumi Döner", description: "حلومي بنكهة الدندرة", price: 6 },
    { id: 37, name: "Hummus Teller", description: "حمص كلاسيكي بزيت الزيتون والتوابل", price: 4.5 },
    { id: 38, name: "Mutabbal Teller", description: "باذنجان محمص مع الطحينة", price: 4.5 },
    { id: 39, name: "Pommes Frites Teller", description: "وجبة بطاطا مقلية", price: 4 },
    { id: 40, name: "Falafel Teller", description: "فلافل مع سلطة وصوص", price: 6 },
    { id: 41, name: "Falafel Sandwich", description: "فلافل داخل خبز فلافل", price: 4 },
    { id: 42, name: "Falafel Döner", description: "فلافل-دندرة مع المقبلات", price: 6 },
  ] },
  { id: "kuba", name: "Kuba", arabic: "كبة", emoji: "🧆", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80", items: [
    { id: 43, name: "Kuba Teller (4 Stück)", description: "لحم، برغل، بصل", price: 8 },
    { id: 44, name: "Kuba (1 Stück)", description: "لحم، برغل، بصل", price: 2 },
  ] },
  { id: "extras", name: "Soßen & Brot", arabic: "صلصات وخبز", emoji: "🥣", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=900&q=80", items: [
    { id: 45, name: "Knoblauch Soße", description: "صوص ثوم", price: 1 },
    { id: 46, name: "Mayo", description: "مايونيز", price: 1 },
    { id: 47, name: "Ketchup", description: "كاتشب", price: 1 },
    { id: 48, name: "Fladenbrot", description: "خبز فلافل", price: 1.5 },
  ] },
  { id: "drinks", name: "Alkoholfreie Getränke", arabic: "مشروبات غير كحولية", emoji: "🥤", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80", items: [
    { id: 49, name: "Coca-Cola (0,33l)", description: "", price: 2 },
    { id: 50, name: "Cola Light (0,33l)", description: "", price: 2 },
    { id: 51, name: "Sprite (0,33l)", description: "", price: 2 },
    { id: 52, name: "Fanta (0,33l)", description: "", price: 2 },
    { id: 53, name: "Ayran (0,33l)", description: "", price: 2 },
    { id: 54, name: "Wasser (0,33l)", description: "", price: 2 },
  ] },
];

export function formatPrice(price: number) {
  return `${price.toFixed(2).replace(".", ",")} €`;
}

export const germanDescriptions: Record<number, string> = {
  1: "Hähnchen, Fladenbrot, Knoblauchsoße und Gurken",
  2: "Hähnchen, Fladenbrot, Knoblauchsoße, Gurken, Salat und Pommes",
  3: "Doppelte Fleischportion mit Hähnchen, Fladenbrot, Knoblauchsoße und Gurken",
  4: "Doppelte Fleischportion mit Salat, Pommes, Knoblauchsoße und Gurken",
  5: "Hähnchen, Fladenbrot, Knoblauchsoße, Mozzarella, Gurken und Pommes",
  6: "Hähnchen, Fladenbrot, Knoblauchsoße, Gurken, Salat und Pommes",
  7: "Fladenbrot, Tomaten, Zwiebeln, Salat und Knoblauchsoße",
  8: "Mit Käse, Fladenbrot, Tomaten, Zwiebeln, Salat und Knoblauchsoße",
  9: "Teller mit Pommes, Salat, Tomaten, Zwiebeln und Knoblauchsoße",
  10: "Große Box mit Pommes und Beilagen",
  11: "Kleine Box mit Pommes und Beilagen",
  12: "Dürüm-Teig mit Salat und Soße",
  13: "Dürüm-Teig mit Käse, Salat und Soße",
  14: "Pommes und Ketchup",
  15: "Frisch knusprige Hähnchenteile mit Fladenbrot, Soße, Gurken, Salat und Pommes",
  16: "Scharfe knusprige Hähnchenteile mit Fladenbrot, Soße, Gurken, Salat und Pommes",
  17: "Acht frische knusprige Hähnchenteile mit Beilagen",
  18: "Acht scharfe knusprige Hähnchenteile mit Beilagen",
  19: "Fünf knusprige Hähnchenbruststreifen mit Beilagen",
  20: "Fünf scharfe knusprige Hähnchenbruststreifen mit Beilagen",
  21: "Knusprige Hähnchenbrust mit Fladenbrot, Soße, Gurken, Salat und Pommes",
  22: "Gegrilltes Hähnchen mit Knoblauchsoße, Gurken, Salat und Pommes",
  23: "Gegrilltes Hähnchen nur mit Knoblauchsoße",
  24: "Halbes gegrilltes Hähnchen mit Soße, Gurken, Salat und Pommes",
  25: "Halbes gegrilltes Hähnchen nur mit Knoblauchsoße",
  26: "Salat, Knoblauchsoße, Ketchup und Tomaten",
  27: "Salat, Mayonnaise, Ketchup und Tomaten",
  28: "Salat, Mayonnaise, Ketchup und Tomaten",
  29: "Pommes, Salat, Knoblauchsoße, Ketchup und Tomaten",
  30: "Pommes, Salat, Mayonnaise, Ketchup und Tomaten",
  31: "Pommes, Salat, Mayonnaise, Ketchup und Tomaten",
  32: "Gemischter orientalischer Salat mit Tomaten, Gurken und Kräutern",
  33: "Orientalischer Salat mit Petersilie, Granatapfel und Zitronendressing",
  34: "Frittierter Halloumi-Käse",
  35: "Halloumi im Fladenbrot",
  36: "Halloumi-Döner mit Beilagen",
  37: "Klassischer Hummus mit Olivenöl und Gewürzen",
  38: "Geröstete Aubergine mit Tahini",
  39: "Portion Pommes frites",
  40: "Falafel mit Salat und Soße",
  41: "Falafel im Fladenbrot",
  42: "Falafel-Döner mit Beilagen",
  43: "Kuba mit Fleisch, Bulgur und Zwiebeln",
  44: "Ein Stück Kuba mit Fleisch, Bulgur und Zwiebeln",
  45: "Knoblauchsoße",
  46: "Mayonnaise",
  47: "Ketchup",
  48: "Fladenbrot",
  49: "",
  50: "",
  51: "",
  52: "",
  53: "",
  54: "",
};
