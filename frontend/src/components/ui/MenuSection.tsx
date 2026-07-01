"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/components/ui/CartContext";
import { FloatingMotifs } from "@/components/ui/FloatingMotifs";
import { toast } from "sonner";
import { getMenu } from "@/lib/api";

type Item = { name: string; price: string; tag?: string; desc?: string };

const waffles: Item[] = [
  { name: "Glace Matcha / Vanille", price: "8,8€", tag: "Signature", desc: "Bubble waffle croustillant, glace douce" },
  { name: "Crème brûlée & Tapioca", price: "9,5€", desc: "Cœur crémeux, perles tendres" },
  { name: "Glace avec Tapioca", price: "9,5€", desc: "Glace au lait & perles tapioca" },
  { name: "Fraise & Mangue", price: "9,5€", tag: "Frais", desc: "Fruits frais de saison" },
  { name: "Oreo", price: "9,5€", desc: "Glace, brisures Oreo, sauce chocolat" },
  { name: "Spéculoos", price: "9,5€", desc: "Glace caramel, pâte spéculoos" },
  { name: "Waffle Nutella", price: "8€", desc: "Le classique chocolat noisette" },
  { name: "Waffles fourrés", price: "8€", desc: "Taro · Haricot rouge · Oreo · Spéculoos" },
  { name: "Waffle sandwich", price: "8,8€", desc: "Hot dog poulet/bœuf, salade, cheddar" },
];

const teas: Item[] = [
  { name: "Thé au lait", price: "5,5€", desc: "Le bubble tea classique aux perles" },
  { name: "Matcha latte", price: "6,5€", tag: "Signature", desc: "Matcha cérémonial, lait onctueux" },
  { name: "Latte crème brûlée", price: "6,5€", desc: "Caramélisé en surface" },
  { name: "Thé aux fruits", price: "5,5€", desc: "Mangue · Fraise · Litchi · Passion" },
  { name: "Smoothie maison", price: "6€", desc: "Fruits frais mixés minute" },
  { name: "Café au lait glacé", price: "5,5€", desc: "Café arabica & glaçons" },
  { name: "Tiramisu latte", price: "6,5€", tag: "Nouveau", desc: "Mascarpone, cacao, espresso" },
  { name: "Boost super latte", price: "6,5€", desc: "Énergie naturelle, charbon actif" },
];

export function MenuSection() {
  const [tab, setTab] = useState<"waffle" | "tea">("waffle");
  const [pulse, setPulse] = useState<string | null>(null);
  const [wafflesList, setWafflesList] = useState<Item[]>(waffles);
  const [teasList, setTeasList] = useState<Item[]>(teas);
  const { add, setOpen } = useCart();

  useEffect(() => {
    async function loadMenu() {
      try {
        const data = await getMenu();
        if (data.waffles) setWafflesList(data.waffles);
        if (data.teas) setTeasList(data.teas);
      } catch (e) {
        console.warn("[frontend] Node.js backend offline, using client-side static data fallback");
      }
    }
    loadMenu();
  }, []);

  const items = tab === "waffle" ? wafflesList : teasList;


  const handleAdd = (item: Item) => {
    add(item.name, item.price);
    setPulse(item.name);
    setTimeout(() => setPulse((p) => (p === item.name ? null : p)), 900);
    toast.success(`${item.name} ajouté`, {
      description: item.price,
      action: { label: "Voir", onClick: () => setOpen(true) },
    });
  };

  return (
    <section id="menu" className="relative overflow-hidden bg-gradient-to-b from-cream to-blush/40 px-5 py-24">
      <FloatingMotifs variant="menu" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-hotpink">La carte</p>
          <h2 className="text-balance font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Choisissez votre <span className="italic">douceur</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="sticky top-3 z-30 mx-auto mt-10 flex w-full max-w-sm rounded-full glass p-1.5 shadow-soft">
          <button
            onClick={() => setTab("waffle")}
            className={`relative flex-1 rounded-full px-4 py-3 text-sm font-bold transition ${tab === "waffle" ? "text-white" : "text-ink/60"}`}
          >
            {tab === "waffle" && (
              <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-full bg-pink-grad shadow-pop" />
            )}
            <span className="relative">🧇 Bubble Waffle</span>
          </button>
          <button
            onClick={() => setTab("tea")}
            className={`relative flex-1 rounded-full px-4 py-3 text-sm font-bold transition ${tab === "tea" ? "text-white" : "text-ink/60"}`}
          >
            {tab === "tea" && (
              <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-full bg-pink-grad shadow-pop" />
            )}
            <span className="relative">🧋 Bubble Tea</span>
          </button>
        </div>

        {/* Featured card */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid w-full gap-4 sm:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-3xl bg-ink shadow-pop">
            <img
              src={tab === "waffle" ? "/images/waffle-matcha.png" : "/images/menu-waffle.png"}
              alt={tab === "waffle" ? "Bubble waffle matcha Oreo" : "Sélection bubble tea"}
              className="aspect-square w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-hotpink">Coup de cœur</p>
              <p className="mt-1 font-display text-2xl font-bold italic">
                {tab === "waffle" ? "Matcha Oreo" : "Matcha Latte"}
              </p>
            </div>
          </div>

          {/* Items list */}
          <div className="w-full space-y-2">
            {items.map((item, i) => {
              const isPulsing = pulse === item.name;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-2 sm:gap-3 rounded-2xl bg-white p-3 sm:p-4 shadow-soft transition active:scale-[0.98]"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <h3 className="truncate font-display text-sm sm:text-base font-bold text-ink">{item.name}</h3>
                      {item.tag && (
                        <span className="shrink-0 rounded-full bg-hotpink/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-hotpink">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    {item.desc && <p className="mt-0.5 truncate text-[10px] sm:text-xs text-muted-foreground">{item.desc}</p>}
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-display text-sm sm:text-base font-black text-ink">{item.price}</p>
                  </div>
                  <motion.button
                    onClick={() => handleAdd(item)}
                    aria-label={`Ajouter ${item.name}`}
                    whileTap={{ scale: 0.85 }}
                    animate={isPulsing ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="shrink-0 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-pink-grad text-white shadow-soft transition group-hover:scale-110"
                  >
                    {isPulsing ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
