"use client";

import { motion } from "framer-motion";
import { FloatingMotifs } from "@/components/ui/FloatingMotifs";

export function StorySection() {
  return (
    <section id="histoire" className="relative overflow-hidden bg-cream px-5 py-24">
      <FloatingMotifs variant="story" />
      {/* Marquee ribbon */}
      <div className="absolute inset-x-0 top-0 overflow-hidden border-y border-ink/5 bg-pink-grad py-3">
        <div className="flex animate-marquee whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.3em] text-white">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8">Bubble Tea · Waffle · Made in Paris · Maison ·</span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-hotpink">Notre histoire</p>
          <h2 className="text-balance font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Un cocon rose,<br/>
            <span className="italic">une douceur</span> noire.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Au cœur du 2ᵉ arrondissement, Black Sweet imagine des bubble waffles
            croustillants, des bubble teas vibrants et des instants suspendus —
            comme un papillon rose dans une rue parisienne.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl shadow-soft"
          >
            <img
              src="/images/interior-butterfly.png"
              alt="Intérieur Black Sweet — papillon rose suspendu"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white">
              <p className="font-display text-xl font-bold italic">L&apos;envol</p>
              <p className="text-xs opacity-80">Une déco onirique, signée maison</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl shadow-soft sm:mt-12"
          >
            <img
              src="/images/interior-menu.png"
              alt="Comptoir et menu Black Sweet"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white">
              <p className="font-display text-xl font-bold italic">Le comptoir</p>
              <p className="text-xs opacity-80">Plus de 40 recettes à composer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
