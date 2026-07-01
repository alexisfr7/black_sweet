import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

interface MenuItem {
  name: string;
  price: string;
  tag?: string;
  desc?: string;
}

const menu: Record<string, MenuItem[]> = {
  waffles: [
    { name: "Glace Matcha / Vanille", price: "8,8€", tag: "Signature", desc: "Bubble waffle croustillant, glace douce" },
    { name: "Crème brûlée & Tapioca", price: "9,5€", desc: "Cœur crémeux, perles tendres" },
    { name: "Glace avec Tapioca", price: "9,5€", desc: "Glace au lait & perles tapioca" },
    { name: "Fraise & Mangue", price: "9,5€", tag: "Frais", desc: "Fruits frais de saison" },
    { name: "Oreo", price: "9,5€", desc: "Glace, brisures Oreo, sauce chocolat" },
    { name: "Spéculoos", price: "9,5€", desc: "Glace caramel, pâte spéculoos" },
    { name: "Waffle Nutella", price: "8€", desc: "Le classique chocolat noisette" },
    { name: "Waffles fourrés", price: "8€", desc: "Taro · Haricot rouge · Oreo · Spéculoos" },
    { name: "Waffle sandwich", price: "8,8€", desc: "Hot dog poulet/bœuf, salade, cheddar" },
  ],
  teas: [
    { name: "Thé au lait", price: "5,5€", desc: "Le bubble tea classique aux perles" },
    { name: "Matcha latte", price: "6,5€", tag: "Signature", desc: "Matcha cérémonial, lait onctueux" },
    { name: "Latte crème brûlée", price: "6,5€", desc: "Caramélisé en surface" },
    { name: "Thé aux fruits", price: "5,5€", desc: "Mangue · Fraise · Litchi · Passion" },
    { name: "Smoothie maison", price: "6€", desc: "Fruits frais mixés minute" },
    { name: "Café au lait glacé", price: "5,5€", desc: "Café arabica & glaçons" },
    { name: "Tiramisu latte", price: "6,5€", tag: "Nouveau", desc: "Mascarpone, cacao, espresso" },
    { name: "Boost super latte", price: "6,5€", desc: "Énergie naturelle, charbon actif" },
  ],
};

const openingHours = [
  { d: "Lundi – Dimanche", h: "12:00 – 23:30" },
];

const schedule: Record<number, { open: number; close: number }> = {
  0: { open: 12 * 60, close: 23 * 60 + 30 }, // dimanche
  1: { open: 12 * 60, close: 23 * 60 + 30 },
  2: { open: 12 * 60, close: 23 * 60 + 30 },
  3: { open: 12 * 60, close: 23 * 60 + 30 },
  4: { open: 12 * 60, close: 23 * 60 + 30 },
  5: { open: 12 * 60, close: 23 * 60 + 30 },
  6: { open: 12 * 60, close: 23 * 60 + 30 },
};

const fmt = (mins: number) =>
  `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;

function getOpenStatus(now: Date = new Date()) {
  const paris = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
  const day = paris.getDay();
  const mins = paris.getHours() * 60 + paris.getMinutes();
  const today = schedule[day];
  const open = mins >= today.open && mins < today.close;

  if (open) {
    return { open: true, label: `Ouvert · Ferme à ${fmt(today.close)}` };
  }
  if (mins < today.open) {
    return { open: false, label: `Fermé · Ouvre à ${fmt(today.open)}` };
  }
  const nextDay = schedule[(day + 1) % 7];
  return { open: false, label: `Fermé · Ouvre demain à ${fmt(nextDay.open)}` };
}

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.get("/api/status", (req, res) => {
  res.json({
    status: getOpenStatus(),
    openingHours,
  });
});

app.listen(PORT, () => {
  console.log(`[backend] Server running on http://localhost:${PORT}`);
});
