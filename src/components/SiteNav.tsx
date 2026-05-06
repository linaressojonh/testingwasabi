import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X, Sun, Moon, Home, UtensilsCrossed, ShoppingBag, MapPin, Star, Phone } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const sections = [
  {
    label: "Pages",
    items: [
      { name: "Home", to: "/", icon: Home },
      { name: "Full Menu", to: "/menu", icon: UtensilsCrossed },
      { name: "Order Online", to: "/order", icon: ShoppingBag },
    ],
  },
  {
    label: "Sections",
    items: [
      { name: "About", to: "/#welcome", icon: Star },
      { name: "Reviews", to: "/#reviews", icon: Star },
      { name: "Visit", to: "/#visit", icon: MapPin },
      { name: "Call", to: "tel:+12709000670", icon: Phone, external: true },
    ],
  },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Floating taskbar */}
      <div className="fixed top-3 right-3 z-[60] flex items-center gap-2">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="h-11 w-11 grid place-items-center bg-card/85 backdrop-blur-md border border-border hover:border-primary text-foreground btn-press transition-all hover:shadow-[var(--shadow-glow)] group"
        >
          <Sun className={`w-5 h-5 absolute transition-all duration-500 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
          <Moon className={`w-5 h-5 absolute transition-all duration-500 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`} />
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="h-11 w-11 grid place-items-center bg-card/85 backdrop-blur-md border border-border hover:border-primary text-foreground btn-press transition-all hover:shadow-[var(--shadow-glow)]"
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[70] bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[80] h-full w-[300px] max-w-[85vw] bg-card border-l border-border shadow-[var(--shadow-elegant)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-bold">Wasabi</span>
            <span className="font-serif text-sm text-primary">わさび</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 hover:text-primary btn-press">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-5 space-y-8 overflow-y-auto h-[calc(100%-4.5rem)]">
          {sections.map((sec, sIdx) => (
            <div key={sec.label} className="animate-slide-in-right" style={{ animationDelay: open ? `${sIdx * 80}ms` : "0ms" }}>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{sec.label}</p>
              <ul className="space-y-1">
                {sec.items.map((item, i) => {
                  const Icon = item.icon;
                  const active = pathname === item.to;
                  const Inner = (
                    <span
                      style={{ transitionDelay: `${i * 30}ms` }}
                      className={`flex items-center gap-3 px-3 py-3 border-l-2 transition-all group ${
                        active
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-transparent text-muted-foreground hover:border-primary hover:bg-primary/5 hover:text-foreground hover:translate-x-1"
                      }`}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:text-primary" />
                      <span className="text-sm tracking-wide">{item.name}</span>
                    </span>
                  );
                  return (
                    <li key={item.name}>
                      {item.external ? (
                        <a href={item.to}>{Inner}</a>
                      ) : (
                        <Link to={item.to}>{Inner}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="pt-6 border-t border-border">
            <button
              onClick={toggle}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              Switch to {theme === "dark" ? "light" : "dark"} mode
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SiteNav;
