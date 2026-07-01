"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "./CartContext";

export function CartSheet() {
  const { open, setOpen, items, count, totalLabel, setQty, remove, clear } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm"
          />
          <motion.aside
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-x-0 bottom-0 z-[61] max-h-[88vh] overflow-hidden rounded-t-[2rem] bg-cream pb-[max(1rem,env(safe-area-inset-bottom))] shadow-pop"
          >
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-ink/15" />

            <div className="flex items-center justify-between px-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-pink-grad text-white shadow-soft">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-hotpink">Votre commande</p>
                  <p className="font-display text-lg font-black text-ink">{count} {count > 1 ? "articles" : "article"}</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft active:scale-90"
              >
                <X className="h-4 w-4 text-ink" />
              </button>
            </div>

            <div className="mt-4 max-h-[55vh] space-y-2 overflow-y-auto px-4 pb-4">
              {items.length === 0 && (
                <div className="px-4 py-16 text-center">
                  <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-white shadow-soft">
                    <ShoppingBag className="h-5 w-5 text-hotpink" />
                  </div>
                  <p className="font-display text-lg font-bold text-ink">Votre panier est vide</p>
                  <p className="mt-1 text-sm text-muted-foreground">Ajoutez vos douceurs préférées depuis la carte.</p>
                </div>
              )}

              {items.map((it) => (
                <motion.div
                  layout
                  key={it.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-sm font-bold text-ink">{it.name}</p>
                    <p className="text-xs text-muted-foreground">{it.price}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-cream p-1">
                    <button
                      onClick={() => setQty(it.name, it.qty - 1)}
                      className="grid h-7 w-7 place-items-center rounded-full bg-white text-ink shadow-soft active:scale-90"
                      aria-label="Diminuer"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold text-ink">{it.qty}</span>
                    <button
                      onClick={() => setQty(it.name, it.qty + 1)}
                      className="grid h-7 w-7 place-items-center rounded-full bg-pink-grad text-white shadow-soft active:scale-90"
                      aria-label="Augmenter"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(it.name)}
                    aria-label="Supprimer"
                    className="grid h-8 w-8 place-items-center rounded-full text-ink/40 hover:bg-cream hover:text-hotpink"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-ink/5 px-6 pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total estimé</span>
                <span className="font-display text-2xl font-black text-ink">{totalLabel}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={clear}
                  disabled={items.length === 0}
                  className="rounded-full border border-ink/10 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-ink/70 transition disabled:opacity-40"
                >
                  Vider
                </button>
                <a
                  href="tel:0987333383"
                  className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-pink-grad px-5 py-3 text-sm font-bold text-white shadow-pop transition active:scale-95 ${items.length === 0 ? "pointer-events-none opacity-60" : ""}`}
                >
                  Commander · Appeler
                </a>
              </div>
              <p className="mt-2 text-center text-[10px] text-muted-foreground">
                La commande est confirmée par téléphone. Aucune transaction en ligne.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
