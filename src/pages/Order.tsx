import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import {
  Search, AlertTriangle, Leaf, Flame, X, Plus, Minus, ShoppingBag,
  Truck, Clock, ArrowLeft, Trash2,
} from "lucide-react";
import {
  fullMenu, ALLERGEN_LABEL, DIET_LABEL, dietBadgeStyle,
  priceToNumber, type AllergenTag, type DietTag, type MenuItem,
} from "@/data/menu";

const DOORDASH_URL = "https://www.doordash.com/";

interface CartLine {
  id: string;          // unique line id
  item: MenuItem;
  qty: number;
  remove: string[];    // list of ingredient/options to remove
  notes: string;       // free-text notes for kitchen
  flagAllergens: AllergenTag[]; // allergens the customer flagged for staff
}

const PREP_PER_ITEM_MIN = 4; // minutes per item
const BASE_PREP_MIN = 8;

const Order = () => {
  // ───────── menu filter state ─────────
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [excludedAllergens, setExcludedAllergens] = useState<AllergenTag[]>([]);

  // ───────── cart state ─────────
  const [cart, setCart] = useState<CartLine[]>([]);
  const [orderType, setOrderType] = useState<"takeout" | "delivery">("takeout");
  const [timing, setTiming] = useState<"now" | "later">("now");
  const [scheduledTime, setScheduledTime] = useState<string>("");

  const categories = ["All", ...fullMenu.map((s) => s.category)];

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

  // ───────── cart helpers ─────────
  const addToCart = (item: MenuItem) => {
    setCart((prev) => [
      ...prev,
      {
        id: `${item.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        item, qty: 1, remove: [], notes: "", flagAllergens: [],
      },
    ]);
    toast({ title: "Added to cart", description: item.name });
  };

  const updateLine = (id: string, patch: Partial<CartLine>) =>
    setCart((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));

  const removeLine = (id: string) =>
    setCart((prev) => prev.filter((l) => l.id !== id));

  const totalQty = cart.reduce((acc, l) => acc + l.qty, 0);
  const subtotal = cart.reduce(
    (acc, l) => acc + priceToNumber(l.item.price) * l.qty,
    0,
  );
  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  const estPrepMin = totalQty === 0 ? 0 : BASE_PREP_MIN + totalQty * PREP_PER_ITEM_MIN;

  // min datetime-local value (now + 30 min)
  const minScheduled = useMemo(() => {
    const d = new Date(Date.now() + 30 * 60 * 1000);
    d.setSeconds(0, 0);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }, []);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({ title: "Your cart is empty", description: "Add a few dishes first." });
      return;
    }
    if (timing === "later" && !scheduledTime) {
      toast({ title: "Pick a time", description: "Please choose when you'd like the order ready." });
      return;
    }

    if (orderType === "delivery") {
      toast({
        title: "Redirecting to DoorDash…",
        description: "Delivery orders are fulfilled by our DoorDash partner.",
      });
      setTimeout(() => window.open(DOORDASH_URL, "_blank", "noopener,noreferrer"), 600);
      return;
    }

    // Takeout — would post to POS in production
    toast({
      title: "Order received! 🎌",
      description: `${totalQty} item${totalQty === 1 ? "" : "s"} · ${
        timing === "now" ? `Ready in ~${estPrepMin} min` : `Scheduled for ${new Date(scheduledTime).toLocaleString()}`
      }`,
    });
    setCart([]);
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-xl border-b border-border/60">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors story-link">
            <ArrowLeft className="w-4 h-4" /> Back to Wasabi
          </Link>
          <div className="flex items-baseline gap-2 hover-scale">
            <span className="font-serif text-xl font-bold">Wasabi</span>
            <span className="font-serif text-xs text-primary">注文</span>
          </div>
          <div className="flex items-center gap-2 text-sm relative">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span key={totalQty} className="inline-block animate-fade-up font-medium">{totalQty}</span>
          </div>
        </nav>
      </header>

      {/* HEADER */}
      <section className="container pt-12 pb-8 max-w-6xl animate-fade-up">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">注文 · Order Online</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-3">
          Build your <span className="ink-stroke">order</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Pick takeout or delivery, customize each dish, and send it straight to our kitchen.
        </p>

        {/* Order type tabs */}
        <div className="mt-8 inline-flex border border-border bg-card/50 backdrop-blur-sm">
          {([
            { v: "takeout", icon: ShoppingBag, label: "Takeout" },
            { v: "delivery", icon: Truck, label: "Delivery" },
          ] as const).map(({ v, icon: Icon, label }) => {
            const active = orderType === v;
            return (
              <button
                key={v}
                onClick={() => setOrderType(v)}
                className={`flex items-center gap-2 px-5 py-3 text-sm tracking-wider uppercase transition-all duration-300 btn-press ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${active ? "scale-110" : ""}`} /> {label}
              </button>
            );
          })}
        </div>
        {orderType === "delivery" && (
          <p className="mt-3 text-xs text-muted-foreground flex items-center gap-2 animate-fade-up">
            <Truck className="w-3.5 h-3.5" /> Delivery orders are completed via our DoorDash partner at checkout.
          </p>
        )}
      </section>

      <div className="container max-w-6xl pb-24 grid lg:grid-cols-[1fr_400px] gap-10">
        {/* MENU COLUMN */}
        <div>
          {/* Search + filters */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes…"
                className="pl-11 h-12 rounded-none border-foreground/20"
                aria-label="Search menu"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground" aria-label="Clear">
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
                      active ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border/60">
              <span className="text-xs tracking-wider uppercase text-muted-foreground mr-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Hide:
              </span>
              {(Object.keys(ALLERGEN_LABEL) as AllergenTag[]).map((a) => {
                const excluded = excludedAllergens.includes(a);
                return (
                  <button
                    key={a}
                    onClick={() =>
                      setExcludedAllergens((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a])
                    }
                    className={`text-[11px] tracking-wider uppercase px-2.5 py-1 border transition-colors ${
                      excluded ? "bg-primary text-primary-foreground border-primary" : "border-border/80 text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {ALLERGEN_LABEL[a]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu list */}
          <div className="space-y-12">
            {filteredMenu.map((section) => (
              <div key={section.category}>
                <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-foreground/20">
                  <h3 className="font-serif text-xl font-bold">{section.category}</h3>
                  <span className="font-serif text-primary text-sm">{section.jp}</span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {section.items.map((item, idx) => (
                    <li
                      key={item.name}
                      style={{ animationDelay: `${idx * 40}ms` }}
                      className="border border-border bg-card p-4 flex flex-col hover-lift shimmer-border animate-fade-up group"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="font-medium group-hover:text-primary transition-colors">{item.name}</h4>
                        <span className="font-serif text-accent">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>

                      {(item.diet?.length || item.allergens?.length) ? (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.diet?.map((d) => (
                            <span key={d} title={DIET_LABEL[d]} className={`inline-flex items-center gap-1 text-[10px] tracking-wider uppercase px-1.5 py-0.5 border ${dietBadgeStyle[d]}`}>
                              {d === "vegan" || d === "vegetarian" ? <Leaf className="w-3 h-3" /> : null}
                              {d === "spicy" ? <Flame className="w-3 h-3" /> : null}
                              {d === "gf" ? "GF" : DIET_LABEL[d]}
                            </span>
                          ))}
                          {item.allergens?.map((a) => (
                            <span key={a} title={`Contains ${ALLERGEN_LABEL[a]}`} className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase px-1.5 py-0.5 border border-primary/40 text-primary bg-primary/5">
                              <AlertTriangle className="w-3 h-3" />
                              {ALLERGEN_LABEL[a]}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <Button
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="mt-4 self-start rounded-none bg-primary hover:bg-primary/90 btn-press hover:shadow-[var(--shadow-glow)] transition-all"
                      >
                        <Plus className="w-3.5 h-3.5 transition-transform group-hover:rotate-90" /> Add to cart
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CART COLUMN */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="border border-border bg-card shimmer-border relative">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold flex items-center gap-2">
                <ShoppingBag className={`w-4 h-4 text-primary transition-transform ${totalQty > 0 ? "animate-float" : ""}`} /> Your Order
              </h2>
              <span key={totalQty} className="text-xs text-muted-foreground animate-fade-up">{totalQty} item{totalQty === 1 ? "" : "s"}</span>
            </div>

            <div className="max-h-[55vh] overflow-y-auto divide-y divide-border">
              {cart.length === 0 && (
                <p className="p-8 text-sm text-muted-foreground text-center animate-fade-in">
                  Your cart is empty. Add dishes from the menu.
                </p>
              )}
              {cart.map((line) => (
                <div key={line.id} className="p-5 space-y-3 animate-slide-in-right">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-medium">{line.item.name}</h4>
                    <button onClick={() => removeLine(line.id)} aria-label="Remove" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all btn-press">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-border">
                      <button
                        onClick={() => updateLine(line.id, { qty: Math.max(1, line.qty - 1) })}
                        className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors btn-press" aria-label="Decrease"
                      ><Minus className="w-3.5 h-3.5" /></button>
                      <span key={line.qty} className="px-3 text-sm w-8 text-center font-medium animate-fade-up inline-block">{line.qty}</span>
                      <button
                        onClick={() => updateLine(line.id, { qty: line.qty + 1 })}
                        className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors btn-press" aria-label="Increase"
                      ><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                    <span key={`p-${line.qty}`} className="font-serif text-accent animate-fade-up">
                      ${(priceToNumber(line.item.price) * line.qty).toFixed(2)}
                    </span>
                  </div>
                  {/* Customize: remove ingredients */}
                  <details className="text-sm">
                    <summary className="cursor-pointer text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground">
                      Customize / notes
                    </summary>
                    <div className="mt-3 space-y-3">
                      <div>
                        <Label className="text-xs">Remove / hold</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Onion", "Garlic", "Sauce", "Spicy mayo", "Sesame", "Cilantro"].map((opt) => {
                            const checked = line.remove.includes(opt);
                            return (
                              <button
                                key={opt}
                                onClick={() =>
                                  updateLine(line.id, {
                                    remove: checked ? line.remove.filter((x) => x !== opt) : [...line.remove, opt],
                                  })
                                }
                                className={`text-[11px] tracking-wider uppercase px-2 py-1 border transition-colors ${
                                  checked ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground"
                                }`}
                              >
                                No {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor={`notes-${line.id}`} className="text-xs">Notes for the kitchen</Label>
                        <Textarea
                          id={`notes-${line.id}`}
                          value={line.notes}
                          onChange={(e) => updateLine(line.id, { notes: e.target.value.slice(0, 240) })}
                          placeholder="e.g. extra wasabi on the side"
                          className="mt-2 min-h-[60px] rounded-none text-sm"
                        />
                      </div>

                      {line.item.allergens?.length ? (
                        <div>
                          <Label className="text-xs flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-primary" /> Allergy alerts (notify staff)
                          </Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {line.item.allergens.map((a) => {
                              const flagged = line.flagAllergens.includes(a);
                              return (
                                <button
                                  key={a}
                                  onClick={() =>
                                    updateLine(line.id, {
                                      flagAllergens: flagged ? line.flagAllergens.filter((x) => x !== a) : [...line.flagAllergens, a],
                                    })
                                  }
                                  className={`text-[11px] tracking-wider uppercase px-2 py-1 border transition-colors ${
                                    flagged ? "bg-primary text-primary-foreground border-primary" : "border-primary/40 text-primary hover:bg-primary/10"
                                  }`}
                                >
                                  ⚠ {ALLERGEN_LABEL[a]}
                                </button>
                              );
                            })}
                          </div>
                          {line.flagAllergens.length > 0 && (
                            <p className="text-[11px] text-primary mt-2">
                              Staff will be alerted to your {line.flagAllergens.map((a) => ALLERGEN_LABEL[a].toLowerCase()).join(", ")} allergy for this dish.
                            </p>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Timing */}
            <div className="p-5 border-t border-border space-y-4">
              <div>
                <Label className="text-xs tracking-wider uppercase flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5" /> When?
                </Label>
                <RadioGroup
                  value={timing}
                  onValueChange={(v) => setTiming(v as "now" | "later")}
                  className="grid grid-cols-2 gap-2"
                >
                  <Label htmlFor="t-now" className={`flex items-center gap-2 border px-3 py-2 cursor-pointer ${timing === "now" ? "border-foreground bg-muted" : "border-border"}`}>
                    <RadioGroupItem id="t-now" value="now" /> Now
                  </Label>
                  <Label htmlFor="t-later" className={`flex items-center gap-2 border px-3 py-2 cursor-pointer ${timing === "later" ? "border-foreground bg-muted" : "border-border"}`}>
                    <RadioGroupItem id="t-later" value="later" /> Schedule
                  </Label>
                </RadioGroup>

                {timing === "later" && (
                  <Input
                    type="datetime-local"
                    value={scheduledTime}
                    min={minScheduled}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="mt-3 rounded-none"
                  />
                )}
                {timing === "now" && totalQty > 0 && (
                  <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> Estimated prep time: <span className="text-foreground font-medium">~{estPrepMin} min</span>
                  </p>
                )}
              </div>

              {/* Totals */}
              <div className="text-sm space-y-1.5 pt-3 border-t border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (6%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-serif text-lg pt-2">
                  <span>Total</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full rounded-none bg-primary hover:bg-primary/90 h-12"
                disabled={cart.length === 0}
              >
                {orderType === "delivery" ? "Continue to DoorDash" : "Place Takeout Order"}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                By placing an order, you agree our staff will be notified of any flagged allergens above.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Order;
