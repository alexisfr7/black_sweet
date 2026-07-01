import type { Metadata } from "next";
import { CartProvider } from "@/components/ui/CartContext";
import { CartSheet } from "@/components/ui/CartSheet";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MenuSection } from "@/components/ui/MenuSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "La Carte",
  description:
    "Découvrez notre carte de bubble waffles, bubble teas et desserts maison. Plus de 40 recettes à composer.",
};

export default function ServicesPage() {
  return (
    <CartProvider>
      <ScrollProgress />
      <main className="relative">
        <MenuSection />
        <Footer />
        <Navbar />
      </main>
      <CartSheet />
    </CartProvider>
  );
}
