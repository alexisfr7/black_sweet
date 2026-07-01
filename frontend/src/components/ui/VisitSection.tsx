"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { FloatingMotifs } from "@/components/ui/FloatingMotifs";
import { getStatus } from "@/lib/api";

export function VisitSection() {
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
    <section id="visite" className="relative overflow-hidden bg-gradient-to-b from-blush/40 to-cream px-5 py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink-grad opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />
      <FloatingMotifs variant="visit" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-hotpink">Nous rendre visite</p>
          <h2 className="text-balance font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            Rendez-vous au<br/>
            <span className="italic">29 Rue du 4 septembre</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-pop"
        >
          <div className="relative h-64 sm:h-80">
            <iframe
              title="Carte Black Sweet"
              src="https://www.google.com/maps?q=29+Rue+du+4+septembre,+75002+Paris&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-3 p-6">
            <a href="https://www.google.com/maps/dir/?api=1&destination=29+Rue+du+4+septembre,+75002+Paris" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-cream/60 p-4 transition active:scale-[0.98]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pink-grad text-white shadow-soft">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Adresse</p>
                <p className="truncate font-display text-base font-bold text-ink">29 Rue du 4 septembre, 75002 Paris</p>
              </div>
              <Navigation className="h-4 w-4 shrink-0 text-hotpink" />
            </a>

            <a href="tel:0987333383" className="flex items-center gap-4 rounded-2xl bg-cream/60 p-4 transition active:scale-[0.98]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pink-grad text-white shadow-soft">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Téléphone</p>
                <p className="font-display text-base font-bold text-ink">09 87 33 33 83</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-cream/60 p-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pink-grad text-white shadow-soft">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Horaires</p>
                <p className="font-display text-base font-bold text-ink">
                  <span className={`inline-block h-2 w-2 rounded-full align-middle ${status.open ? "bg-green-500" : "bg-red-500"}`} /> {status.label}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

