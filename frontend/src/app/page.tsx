import { CartProvider } from "@/components/ui/CartContext";
import { CartSheet } from "@/components/ui/CartSheet";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { HeroSection } from "@/components/ui/HeroSection";
import { StorySection } from "@/components/ui/StorySection";
import { MenuSection } from "@/components/ui/MenuSection";
import { GallerySection } from "@/components/ui/GallerySection";
import { VisitSection } from "@/components/ui/VisitSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <CartProvider>
      <ScrollProgress />
      <main className="relative">
        <HeroSection />
        <StorySection />
        <MenuSection />
        <GallerySection />
        <VisitSection />
        <Footer />
        <Navbar />
      </main>
      <CartSheet />
    </CartProvider>
  );
}
