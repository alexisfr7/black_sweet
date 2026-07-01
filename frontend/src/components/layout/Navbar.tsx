"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, UtensilsCrossed, Image as ImageIcon, MapPin, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/ui/CartContext";

const navItems = [
  { href: "#top", icon: Home, label: "Accueil" },
  { href: "#menu", icon: UtensilsCrossed, label: "Carte" },
  { href: "#galerie", icon: ImageIcon, label: "Galerie" },
  { href: "#visite", icon: MapPin, label: "Visite" },
];

export function Navbar() {
  const [active, setActive] = useState("#top");
  const { count, setOpen } = useCart();

  useEffect(() => {
    const ids = ["top", "menu", "galerie", "visite"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
      <div className="mx-auto flex max-w-md items-center gap-1 rounded-full glass-dark p-1.5 shadow-pop">
        {navItems.map((it) => {
          const isActive = active === it.href;
          return (
            <a
              key={it.href}
              href={it.href}
              className={`relative flex flex-1 flex-col items-center gap-0.5 rounded-full px-2 py-2 text-[10px] font-semibold transition ${
                isActive ? "text-white" : "text-white/70"
              }`}
              onClick={() => setActive(it.href)}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-pink-grad shadow-soft"
                  transition={{ type: "spring", damping: 22, stiffness: 280 }}
                />
              )}
              <it.icon className="relative h-4 w-4" />
              <span className="relative truncate">{it.label}</span>
            </a>
          );
        })}
        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.9 }}
          aria-label={`Voir la commande (${count})`}
          className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pink-grad text-white shadow-soft"
        >
          <ShoppingBag className="h-4 w-4" />
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0, y: -4 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", damping: 14, stiffness: 380 }}
                className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[10px] font-black text-hotpink shadow-soft"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </nav>
  );
}

