"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type CartItem = { name: string; price: string; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  totalLabel: string;
  add: (name: string, price: string) => void;
  remove: (name: string) => void;
  setQty: (name: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

const parsePrice = (p: string) => Number(p.replace(/[^\d,.-]/g, "").replace(",", ".")) || 0;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((name: string, price: string) => {
    setItems((prev) => {
      const found = prev.find((i) => i.name === name);
      if (found) return prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { name, price, qty: 1 }];
    });
  }, []);

  const remove = useCallback((name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  }, []);

  const setQty = useCallback((name: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.name !== name) : prev.map((i) => (i.name === name ? { ...i, qty } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((a, b) => a + b.qty, 0);
    const total = items.reduce((a, b) => a + parsePrice(b.price) * b.qty, 0);
    return {
      items,
      count,
      totalLabel: total.toFixed(2).replace(".", ",") + "€",
      add,
      remove,
      setQty,
      clear,
      open,
      setOpen,
    };
  }, [items, add, remove, setQty, clear, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
