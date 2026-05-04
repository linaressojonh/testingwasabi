import heroSushi from "@/assets/hero-sushi.jpg";
import mangoRoll from "@/assets/mango-roll.jpg";
import misoSoup from "@/assets/miso-soup.jpg";
import bento from "@/assets/bento.jpg";
import hibachi from "@/assets/hibachi.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Utensils, ShoppingBag, Truck } from "lucide-react";

const favorites = [
  { name: "Dragon Roll", desc: "Eel, avocado and cucumber finished with sweet eel sauce.", price: "$13.99", img: mangoRoll, tag: "🐉 Signature" },
  { name: "Spicy Tuna Roll", desc: "Fresh tuna tossed in spicy mayo with a kick of heat.", price: "$7.99", img: mangoRoll, tag: "🔥 Best Seller" },
  { name: "California Roll", desc: "The classic — crab, avocado and cucumber.", price: "$6.99", img: mangoRoll, tag: "⭐ Popular" },
  { name: "Hibachi Chicken", desc: "Grilled chicken with fried rice, vegetables and yum-yum sauce.", price: "$12.99", img: hibachi, tag: "🔥 Best Seller" },
  { name: "Chicken Teriyaki", desc: "Grilled chicken brushed with sweet house teriyaki glaze.", price: "$11.99", img: bento, tag: "⭐ Popular" },
  { name: "Shrimp Tempura", desc: "Lightly battered shrimp fried to a golden crunch.", price: "$7.99", img: misoSoup, tag: "⭐ Popular" },
];

const fullMenu: { category: string; jp: string; items: { name: string; price: string; desc: string }[] }[] = [
  {
    category: "Starters & Appetizers",
    jp: "前菜",
    items: [
      { name: "Edamame", price: "$4.50", desc: "Steamed young soybeans, lightly salted." },
      { name: "Gyoza", price: "$6.50", desc: "Pan-fried pork dumplings with dipping sauce." },
      { name: "Shrimp Tempura", price: "$7.99", desc: "Lightly battered fried shrimp with tempura sauce." },
      { name: "Vegetable Tempura", price: "$6.50", desc: "Fried mixed seasonal vegetables." },
      { name: "Calamari", price: "$7.50", desc: "Crispy fried squid with dipping sauce." },
      { name: "Spring Rolls", price: "$4.99", desc: "Crispy vegetable rolls with sweet chili sauce." },
      { name: "Kani Salad", price: "$6.99", desc: "Crab stick salad with cucumber and mayo dressing." },
      { name: "Spicy Kani Salad", price: "$7.50", desc: "Spicy version of our kani salad." },
    ],
  },
  {
    category: "Soups & Salads",
    jp: "汁・サラダ",
    items: [
      { name: "Miso Soup", price: "$3.50", desc: "Traditional soybean broth with tofu and seaweed." },
      { name: "Clear Soup", price: "$3.50", desc: "Light broth with mushrooms and vegetables." },
      { name: "House Salad", price: "$3.99", desc: "Lettuce, cucumber and tomato with ginger dressing." },
      { name: "Avocado Salad", price: "$5.99", desc: "Fresh avocado over greens with ginger dressing." },
      { name: "Seaweed Salad", price: "$5.99", desc: "Marinated seaweed with sesame flavor." },
    ],
  },
  {
    category: "Popular Sushi Rolls",
    jp: "人気の巻き",
    items: [
      { name: "Dragon Roll", price: "$13.99", desc: "Eel, avocado, cucumber and eel sauce." },
      { name: "Rainbow Roll", price: "$12.99", desc: "Assorted fresh fish over a California roll." },
      { name: "Spicy Tuna Roll", price: "$7.99", desc: "Tuna tossed in spicy mayo." },
      { name: "California Roll", price: "$6.99", desc: "Crab, avocado and cucumber." },
      { name: "Philadelphia Roll", price: "$8.99", desc: "Salmon, cream cheese and cucumber." },
    ],
  },
  {
    category: "Specialty Rolls",
    jp: "特製巻き",
    items: [
      { name: "Caterpillar Roll", price: "$12.99", desc: "Eel and avocado topped roll." },
      { name: "Volcano Roll", price: "$11.99", desc: "Baked seafood topping over a California roll." },
      { name: "Shrimp Tempura Roll", price: "$9.99", desc: "Crispy shrimp with sauce inside." },
      { name: "Spider Roll", price: "$11.50", desc: "Soft shell crab with avocado and cucumber." },
      { name: "Crunchy Roll", price: "$8.99", desc: "Tempura flakes with spicy mayo." },
    ],
  },
  {
    category: "Vegetable Rolls",
    jp: "野菜巻き",
    items: [
      { name: "Avocado Roll", price: "$4.50", desc: "Fresh avocado wrapped in nori and rice." },
      { name: "Cucumber Roll", price: "$4.00", desc: "Crisp cucumber with sushi rice." },
      { name: "Asparagus Roll", price: "$4.50", desc: "Tender asparagus rolled simply." },
      { name: "Sweet Potato Roll", price: "$5.50", desc: "Tempura sweet potato with eel sauce." },
    ],
  },
  {
    category: "Sushi & Sashimi À La Carte",
    jp: "寿司・刺身",
    items: [
      { name: "Tuna (Maguro)", price: "$5.50", desc: "Served as sushi over rice or sashimi slices." },
      { name: "Salmon (Sake)", price: "$5.50", desc: "Served as sushi over rice or sashimi slices." },
      { name: "Yellowtail (Hamachi)", price: "$6.00", desc: "Served as sushi over rice or sashimi slices." },
      { name: "Eel (Unagi)", price: "$6.00", desc: "Grilled freshwater eel with sweet glaze." },
      { name: "Shrimp (Ebi)", price: "$4.50", desc: "Cooked shrimp, sushi or sashimi style." },
      { name: "Octopus (Tako)", price: "$5.00", desc: "Tender sliced octopus." },
      { name: "Crab Stick (Kani)", price: "$4.00", desc: "Sweet crab stick over rice." },
    ],
  },
  {
    category: "Teriyaki Entrées",
    jp: "照り焼き",
    items: [
      { name: "Chicken Teriyaki", price: "$11.99", desc: "Grilled chicken with sweet teriyaki glaze." },
      { name: "Beef Teriyaki", price: "$15.99", desc: "Sliced beef with teriyaki sauce." },
      { name: "Salmon Teriyaki", price: "$15.99", desc: "Grilled salmon brushed with glaze." },
      { name: "Shrimp Teriyaki", price: "$14.99", desc: "Plump shrimp with teriyaki sauce." },
    ],
  },
  {
    category: "Tempura & Katsu",
    jp: "天ぷら・カツ",
    items: [
      { name: "Chicken Tempura", price: "$11.99", desc: "Lightly battered fried chicken." },
      { name: "Shrimp Tempura Plate", price: "$13.99", desc: "Crispy shrimp tempura entrée." },
      { name: "Vegetable Tempura Plate", price: "$10.99", desc: "Assorted fried seasonal vegetables." },
      { name: "Tempura Combo", price: "$14.99", desc: "Mixed shrimp and vegetable tempura." },
      { name: "Chicken Katsu", price: "$11.99", desc: "Breaded fried chicken cutlet." },
      { name: "Pork Katsu", price: "$12.99", desc: "Breaded fried pork cutlet." },
    ],
  },
  {
    category: "Noodles & Fried Rice",
    jp: "麺・炒飯",
    items: [
      { name: "Yakisoba", price: "$10.99", desc: "Stir-fried noodles with vegetables." },
      { name: "Udon", price: "$9.99", desc: "Thick wheat noodles in savory soup." },
      { name: "Fried Rice", price: "$8.99", desc: "Egg, vegetables and soy sauce base." },
      { name: "Seafood Noodles", price: "$13.99", desc: "Noodles tossed with assorted seafood." },
    ],
  },
  {
    category: "Hibachi & Dinner Boxes",
    jp: "鉄板焼き",
    items: [
      { name: "Hibachi Chicken", price: "$12.99", desc: "Grilled chicken with fried rice and vegetables." },
      { name: "Hibachi Steak", price: "$16.99", desc: "Tender steak with fried rice and vegetables." },
      { name: "Hibachi Shrimp", price: "$15.99", desc: "Grilled shrimp with fried rice and vegetables." },
      { name: "Mixed Hibachi", price: "$19.99", desc: "Chicken, steak and shrimp combo." },
      { name: "Dinner Box", price: "$17.99", desc: "Entrée, fried rice, salad, California roll, gyoza & tempura." },
    ],
  },
  {
    category: "Drinks",
    jp: "飲み物",
    items: [
      { name: "Soft Drinks", price: "$2.50", desc: "Coke, Diet Coke, Sprite and more." },
      { name: "Iced Tea", price: "$2.50", desc: "Freshly brewed black tea." },
      { name: "Hot Green Tea", price: "$2.50", desc: "Traditional Japanese sencha." },
      { name: "Lemonade", price: "$2.99", desc: "Sweet, refreshing lemonade." },
      { name: "Ramune", price: "$3.99", desc: "Classic marble-bottle Japanese soda." },
    ],
  },
  {
    category: "Desserts",
    jp: "デザート",
    items: [
      { name: "Fried Cheesecake", price: "$5.99", desc: "Golden-fried cheesecake with drizzle." },
      { name: "Ice Cream", price: "$3.99", desc: "Green tea or vanilla." },
      { name: "Mochi Ice Cream", price: "$4.99", desc: "Sweet rice cake wrapped around ice cream (seasonal)." },
    ],
  },
];

const reviews = [
  { name: "Laurie Swink", quote: "Fast, friendly, fantastic food! Crab Rangoon and chicken fried rice were delicious — generous portions and warm service.", rating: 5 },
  { name: "Corey", quote: "Food was excellent. Cozy little spot, pretty quiet so you can sit and chat. Would highly recommend!", rating: 5 },
  { name: "Google Diner", quote: "Excellent food, great prices, top notch service, and killer sushi 🍣 — every roll had high quality fish.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight">Wasabi</span>
            <span className="font-serif text-sm text-primary">わさび</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 rounded-none">
            <a href="https://wasabielizabethtown.com" target="_blank" rel="noopener noreferrer">Order Online</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroSushi}
          alt="Assorted fresh sushi rolls and sashimi at Wasabi"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute top-1/3 right-8 hidden lg:block vertical-jp font-serif text-7xl text-primary-foreground/20 tracking-widest">
          新鮮 · 本格
        </div>
        <div className="container relative z-10 pb-24 pt-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-6">Elizabethtown, KY · Est. Authentic</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] text-balance">
              Crafted with<br />
              <span className="ink-stroke">precision</span>, served warm.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl">
              A light-filled kitchen serving thoughtfully prepared sushi, bento and hibachi in the heart of Elizabethtown.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-none h-12 px-8">
                <a href="#menu">Explore Menu</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-12 px-8 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <a href="tel:+12709000670">Reserve a Table</a>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <span>4.6 · 289 reviews</span>
              </div>
              <span className="hidden sm:inline">$10–20 per person</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section className="border-b border-border bg-washi" style={{ backgroundColor: 'hsl(var(--washi))' }}>
        <div className="container grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { icon: Utensils, title: "Dine-in", desc: "Cozy & light-filled space" },
            { icon: ShoppingBag, title: "Takeout", desc: "Order ahead, ready fast" },
            { icon: Truck, title: "Delivery", desc: "Brought right to your door" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 py-8 px-6 md:justify-center">
              <Icon className="w-6 h-6 text-primary" />
              <div>
                <p className="font-serif text-lg">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section id="welcome" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-8 vertical-jp font-serif text-[9rem] font-bold text-primary/5 leading-none select-none hidden md:block">
          いらっしゃいませ
        </div>
        <div className="container relative max-w-4xl text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">ようこそ · Welcome</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-10 text-balance">
            Welcome to <span className="ink-stroke">Wasabi</span> Asian Restaurant
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Located at <span className="text-foreground font-medium">1509 N Dixie Hwy, Elizabethtown, KY 42701</span>, our restaurant offers a wide array of authentic Asian food, including Tuna Roll, Hibachi Steak, and General Tso's Chicken.
            </p>
            <p>
              Try our delicious food and service today. Come in for an Asian Lunch Special, or join us in the evening for a memorable dinner.
            </p>
            <p>
              Have a suggestion about our food or service? Visit our customer feedback page and leave us a review — we'll respond as soon as we can.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-none h-12 px-8">
              <a href="#menu">See Our Menu</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none h-12 px-8 border-foreground hover:bg-foreground hover:text-background">
              <a href="#reviews">Leave Feedback</a>
            </Button>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 md:py-32 bg-card">
        <div className="container">
          {/* Section 1: Our Recommendations */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">おすすめ · Our Recommendations</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">Our Favorites</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A handful of guest favorites and best-sellers — the dishes our regulars order again and again.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <article key={item.name} className="group bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                    <span className="font-serif text-lg text-accent whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-2 py-1">
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Section 2: Full Menu */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">お品書き · Full Menu</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">The Full Menu</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                Browse the complete selection — from appetizers to entrées and drinks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
              {fullMenu.map((section) => (
                <div key={section.category}>
                  <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-foreground/20">
                    <h3 className="font-serif text-2xl font-bold">{section.category}</h3>
                    <span className="font-serif text-primary text-sm">{section.jp}</span>
                  </div>
                  <ul className="space-y-5">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-3">
                          <h4 className="font-medium">{item.name}</h4>
                          <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-4px]" />
                          <span className="font-serif text-accent whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild variant="outline" size="lg" className="rounded-none h-12 px-10 border-foreground hover:bg-foreground hover:text-background">
                <a href="https://wasabielizabethtown.com" target="_blank" rel="noopener noreferrer">Order Online</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-24 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 vertical-jp font-serif text-[14rem] font-bold text-primary/10 leading-none select-none hidden lg:block">
          和
        </div>
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">About Wasabi</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-balance">
                A modern take on Japanese tradition.
              </h2>
              <div className="space-y-5 text-secondary-foreground/80 leading-relaxed">
                <p>
                  Wasabi is a light-filled neighborhood restaurant serving up bento boxes, hand-rolled sushi and sizzling hibachi in Elizabethtown, Kentucky.
                </p>
                <p>
                  Our menu balances classic Japanese technique with familiar comfort — high-quality fish, generous portions, and warm hospitality at honest prices.
                </p>
              </div>
              <blockquote className="mt-10 border-l-2 border-primary pl-6 font-serif italic text-xl">
                "Excellent food, great prices, top notch service, and killer sushi."
                <footer className="mt-2 text-sm not-italic text-secondary-foreground/60">— Google Review</footer>
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={misoSoup} alt="Miso soup" loading="lazy" className="aspect-[3/4] object-cover w-full translate-y-8" />
              <img src={hibachi} alt="Hibachi grill" loading="lazy" className="aspect-[3/4] object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">レビュー · Guests Say</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">4.6 from 289 reviews</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border p-8 hover:shadow-[var(--shadow-soft)] transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6">"{r.quote}"</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 md:py-32" style={{ backgroundColor: 'hsl(var(--washi))' }}>
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Visit Us</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-10 text-balance">Come in for lunch or dinner.</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">1509 N Dixie Hwy Ste 109<br />Elizabethtown, KY 42701</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Call</p>
                  <a href="tel:+12709000670" className="text-muted-foreground hover:text-primary transition-colors">(270) 900-0670</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="w-full">
                  <p className="font-medium mb-2">Open Hours</p>
                  <dl className="text-muted-foreground space-y-1.5 text-sm">
                    <div className="flex justify-between gap-6 border-b border-border/60 pb-1.5">
                      <dt>Monday</dt>
                      <dd className="text-primary">Closed</dd>
                    </div>
                    <div className="flex justify-between gap-6 border-b border-border/60 pb-1.5">
                      <dt>Tue – Thu</dt>
                      <dd>11:00 AM – 9:00 PM</dd>
                    </div>
                    <div className="flex justify-between gap-6 border-b border-border/60 pb-1.5">
                      <dt>Fri – Sat</dt>
                      <dd>11:00 AM – 10:00 PM</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt>Sunday</dt>
                      <dd>12:00 PM – 9:00 PM</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-10 bg-primary hover:bg-primary/90 rounded-none h-12 px-8">
              <a href="https://maps.google.com/?q=1509+N+Dixie+Hwy+Elizabethtown+KY" target="_blank" rel="noopener noreferrer">Get Directions</a>
            </Button>
          </div>
          <div className="aspect-square w-full overflow-hidden border border-border">
            <iframe
              title="Wasabi Elizabethtown location"
              src="https://www.google.com/maps?q=1509+N+Dixie+Hwy+Ste+109,+Elizabethtown,+KY+42701&output=embed"
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold">Wasabi</span>
            <span className="font-serif text-primary">わさび</span>
          </div>
          <p className="text-sm text-secondary-foreground/60">© {new Date().getFullYear()} Wasabi Elizabethtown. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
