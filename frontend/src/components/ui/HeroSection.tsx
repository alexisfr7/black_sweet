"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Phone, ArrowRight, Star } from "lucide-react";
import { FloatingMotifs } from "@/components/ui/FloatingMotifs";
import { getStatus } from "@/lib/api";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [status, setStatus] = useState({ open: true, label: "Ouvert · Ferme à 23:30" });

  useEffect(() => {
    async function loadStatus() {
      try {
        const data = await getStatus();
        if (data.status) {
          setStatus(data.status);
        }
      } catch (e) {
        // Fallback already in state
      }
    }
    loadStatus();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-hero pt-[env(safe-area-inset-top)]">
      {/* Floating decorative bubbles */}
      <motion.div className="pointer-events-none absolute -left-10 top-32 h-40 w-40 rounded-full bg-pink-grad opacity-30 blur-3xl animate-float" />
      <motion.div className="pointer-events-none absolute -right-16 top-72 h-56 w-56 rounded-full bg-pink-grad opacity-25 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <motion.div className="pointer-events-none absolute bottom-20 left-1/3 h-32 w-32 rounded-full bg-rose/40 blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      <FloatingMotifs variant="hero" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink/80 shadow-soft"
        >
          <span className={`h-2 w-2 animate-pulse rounded-full ${status.open ? "bg-hotpink" : "bg-red-500"}`} />
          {status.label}
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance font-display text-6xl font-black leading-[0.95] text-ink sm:text-7xl md:text-[8rem]"
        >
          Black
          <span className="block italic text-hotpink" style={{ textShadow: "0 4px 30px oklch(0.68 0.23 1 / 0.35)" }}>
            Sweet
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 max-w-md text-balance text-base text-muted-foreground sm:text-lg"
        >
          Bubble waffles dorés, bubble tea signature et desserts maison —
          la douceur de Paris, version <span className="font-semibold text-ink">gourmande</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="/services"
            className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-pink-grad px-8 text-base font-bold text-white shadow-pop transition-transform active:scale-95"
          >
            Découvrir la carte
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink/10 bg-white/70 px-8 text-base font-semibold text-ink backdrop-blur transition active:scale-95"
          >
            <MapPin className="h-4 w-4" /> Nous trouver
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex items-center gap-3 rounded-full glass px-5 py-3 shadow-soft"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-hotpink text-hotpink" />
            ))}
          </div>
          <div className="text-left text-sm">
            <span className="font-bold text-ink">4,9</span>
            <span className="text-muted-foreground"> · 176 avis</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Storefront silhouette at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto max-w-3xl"
      >
        <div className="relative">
          <div className="absolute inset-x-8 bottom-0 h-40 rounded-t-[3rem] bg-gradient-to-t from-ink/20 to-transparent blur-2xl" />
          <img
            src="/images/storefront.png"
            alt="Devanture Black Sweet à Paris"
            className="relative mx-auto h-48 w-auto rounded-t-[2rem] object-cover object-top opacity-60 sm:h-64 md:h-80"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-ink/40"
      >
        <span className="block animate-bounce">↓ Défiler</span>
      </motion.div>

      {/* Top contact bar */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-5">
        <span className="font-display text-lg font-black italic text-hotpink">B·S</span>
        <a href="tel:0987333383" className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-xs font-semibold text-ink">
          <Phone className="h-3 w-3" /> 09 87 33 33 83
        </a>
      </div>
    </section>
  );
}
