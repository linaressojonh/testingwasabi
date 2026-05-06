import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, AlertTriangle, Leaf, Flame, X, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  favorites,
  fullMenu,
  ALLERGEN_LABEL,
  DIET_LABEL,
  dietBadgeStyle,
  type AllergenTag,
} from "@/data/menu";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [excludedAllergens, setExcludedAllergens] = useState<AllergenTag[]>([]);

  const categories = ["All", ...fullMenu.map((s) => s.category)];

  const handleAllergenClick = (allergen: AllergenTag, itemName: string) => {
    toast({
      title: `⚠️ ${ALLERGEN_LABEL[allergen]} allergen notice`,
      description: `"${itemName}" contains ${ALLERGEN_LABEL[allergen].toLowerCase()}. Please notify our staff of your allergy before ordering — or add a note in your online order so the kitchen is alerted.`,
    });
  };

  const toggleExcludeAllergen = (a: AllergenTag) => {
    setExcludedAllergens((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  };

  const filteredMenu = useMemo(() => {
    const q = search.trim().toLowerCase();
    return fullMenu
      .filter((s) => activeCategory === "All" || s.category === activeCategory)
      .map((s) => ({
        ...s,
        items: s.items.filter((item) => {
          const matchesSearch =
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q);
          const safe = !excludedAllergens.some((a) => item.allergens?.includes(a));
          return matchesSearch && safe;
        }),
      }))
      .filter((s) => s.items.length > 0);
  }, [search, activeCategory, excludedAllergens]);

  const totalResults = filteredMenu.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight">Wasabi</span>
            <span className="font-serif text-sm text-primary">わさび</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
            <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/#visit" className="hover:text-primary transition-colors">Visit</Link>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 rounded-none">
            <Link to="/order">Order Online</Link>
          </Button>
        </nav>
      </header>

      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-card">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">お品書き · Our Menu</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance max-w-3xl">
            The Wasabi Menu
          </h1>
          <p className="text-muted-foreground max-w-xl mt-4">
            Browse our favorites or the full kitchen — search, filter and check allergen info before you order.
          </p>
        </div>
      </section>

      {/* FAVORITES */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">おすすめ · Our Recommendations</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-balance">Our Favorites</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Guest favorites and best-sellers — the dishes our regulars order again and again.
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
        </div>
      </section>

      {/* FULL MENU */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">お品書き · Full Menu</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-balance">The Full Menu</h2>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="max-w-5xl mx-auto mb-10 space-y-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes, ingredients, descriptions…"
                className="pl-11 h-12 rounded-none border-foreground/20 bg-background"
                aria-label="Search menu"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs tracking-wider uppercase px-3 py-2 border transition-colors ${
                      active
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/60">
              <span className="text-xs tracking-wider uppercase text-muted-foreground mr-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Hide items with:
              </span>
              {(Object.keys(ALLERGEN_LABEL) as AllergenTag[]).map((a) => {
                const excluded = excludedAllergens.includes(a);
                return (
                  <button
                    key={a}
                    onClick={() => toggleExcludeAllergen(a)}
                    className={`text-[11px] tracking-wider uppercase px-2.5 py-1 border transition-colors ${
                      excluded
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border/80 text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {ALLERGEN_LABEL[a]}
                  </button>
                );
              })}
              {excludedAllergens.length > 0 && (
                <button
                  onClick={() => setExcludedAllergens([])}
                  className="text-[11px] underline text-muted-foreground hover:text-foreground ml-1"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>{totalResults} dish{totalResults === 1 ? "" : "es"} shown</span>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1"><Leaf className="w-3 h-3 text-green-700" /> Vegan / Veg</span>
                <span className="inline-flex items-center gap-1"><span className="font-serif text-amber-700 font-bold">GF</span> Gluten-Free</span>
                <span className="inline-flex items-center gap-1"><Flame className="w-3 h-3 text-primary" /> Spicy</span>
                <span className="inline-flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-primary" /> Tap allergen to alert staff</span>
              </div>
            </div>
          </div>

          {totalResults === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No dishes match your search or filters. Try clearing them.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
              {filteredMenu.map((section) => (
                <div key={section.category}>
                  <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-foreground/20">
                    <h3 className="font-serif text-2xl font-bold">{section.category}</h3>
                    <span className="font-serif text-primary text-sm">{section.jp}</span>
                  </div>
                  <ul className="space-y-6">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-3">
                          <h4 className="font-medium">{item.name}</h4>
                          <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-4px]" />
                          <span className="font-serif text-accent whitespace-nowrap">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>

                        {(item.diet?.length || item.allergens?.length) ? (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {item.diet?.map((d) => (
                              <span
                                key={d}
                                title={DIET_LABEL[d]}
                                className={`inline-flex items-center gap-1 text-[10px] tracking-wider uppercase px-1.5 py-0.5 border ${dietBadgeStyle[d]}`}
                              >
                                {d === "vegan" || d === "vegetarian" ? <Leaf className="w-3 h-3" /> : null}
                                {d === "spicy" ? <Flame className="w-3 h-3" /> : null}
                                {d === "gf" ? "GF" : DIET_LABEL[d]}
                              </span>
                            ))}
                            {item.allergens?.map((a) => (
                              <button
                                key={a}
                                type="button"
                                onClick={() => handleAllergenClick(a, item.name)}
                                title={`Contains ${ALLERGEN_LABEL[a]} — click to alert staff`}
                                className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase px-1.5 py-0.5 border border-primary/40 text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                              >
                                <AlertTriangle className="w-3 h-3" />
                                {ALLERGEN_LABEL[a]}
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-none h-12 px-10 btn-press hover:shadow-[var(--shadow-glow)] transition-shadow">
              <Link to="/order">Order Online</Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
              Have an allergy? Tap an allergen tag above for guidance, then add a note in your online order or tell our staff before ordering in-house.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
