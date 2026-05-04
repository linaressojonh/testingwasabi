import heroSushi from "@/assets/hero-sushi.jpg";
import mangoRoll from "@/assets/mango-roll.jpg";
import misoSoup from "@/assets/miso-soup.jpg";
import bento from "@/assets/bento.jpg";
import hibachi from "@/assets/hibachi.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Utensils, ShoppingBag, Truck } from "lucide-react";

const menuHighlights = [
  { name: "Mango Roll", jp: "マンゴー", desc: "Fresh mango, crab, avocado wrapped in soy paper", price: "$12", img: mangoRoll, tag: "Popular" },
  { name: "Miso Soup", jp: "味噌汁", desc: "Traditional broth with tofu, seaweed and scallion", price: "$4", img: misoSoup, tag: "Classic" },
  { name: "Bento Box", jp: "弁当", desc: "Teriyaki chicken, rice, salad, dumpling and roll", price: "$15", img: bento, tag: "Lunch" },
  { name: "Hibachi Steak", jp: "鉄板焼", desc: "Grilled steak & shrimp with fried rice & vegetables", price: "$19", img: hibachi, tag: "Signature" },
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

      {/* MENU */}
      <section id="menu" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">お品書き · The Menu</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">Highlights from<br />the kitchen</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              From the sushi bar to the hibachi grill — a tight selection of guest favorites, made fresh to order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuHighlights.map((item) => (
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
                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-2xl font-bold">{item.name}</h3>
                      <span className="font-serif text-primary">{item.jp}</span>
                    </div>
                    <span className="font-serif text-xl text-accent">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-2 py-1">
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="rounded-none h-12 px-10 border-foreground hover:bg-foreground hover:text-background">
              <a href="https://wasabielizabethtown.com" target="_blank" rel="noopener noreferrer">View Full Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
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
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground">Tue – Sun · 11:00 AM – 9:30 PM<br /><span className="text-foreground/60">Closed Mondays</span></p>
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
