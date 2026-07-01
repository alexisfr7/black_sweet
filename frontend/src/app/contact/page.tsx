import type { Metadata } from "next";
import { CartProvider } from "@/components/ui/CartContext";
import { CartSheet } from "@/components/ui/CartSheet";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { VisitSection } from "@/components/ui/VisitSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Retrouvez-nous au 29 Rue du 4 septembre, 75002 Paris. Ouvert tous les jours jusqu'à 23:30. Téléphone : 09 87 33 33 83.",
};

export default function ContactPage() {
  return (
    <CartProvider>
      <ScrollProgress />
      <main className="relative">
        <VisitSection />
        <Footer />
        <Navbar />
      </main>
      <CartSheet />
    </CartProvider>
  );
}
