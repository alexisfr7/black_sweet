"use client";

import { motion } from "framer-motion";

const shots = [
  { src: "/images/storefront.png", label: "La boutique", span: "row-span-2" },
  { src: "/images/interior-butterfly.png", label: "Le papillon", span: "" },
  { src: "/images/interior-menu.png", label: "Le comptoir", span: "" },
  { src: "/images/waffle-matcha.png", label: "Matcha Oreo", span: "row-span-2" },
  { src: "/images/menu-waffle.png", label: "La carte waffle", span: "" },
];

export function GallerySection() {
  return (
    <section id="galerie" className="relative bg-ink px-5 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-hotpink">Galerie</p>
          <h2 className="text-balance font-display text-4xl font-black leading-tight sm:text-6xl">
            Le rose, <span className="italic text-hotpink">en vrai</span>.
          </h2>
        </motion.div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-semibold opacity-0 transition group-hover:opacity-100">
                {s.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
