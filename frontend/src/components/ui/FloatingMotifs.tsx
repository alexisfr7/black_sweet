"use client";

import { motion } from "framer-motion";

function Butterfly({ className = "", delay = 0, hue = "var(--hotpink)" }: { className?: string; delay?: number; hue?: string }) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1, 0.8, 1],
        y: [0, -16, 4, -10, 0],
        x: [0, 8, -6, 4, 0],
        rotate: [0, 6, -4, 8, 0],
      }}
      transition={{ duration: 10, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <defs>
        <radialGradient id={`bw-${delay}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor={hue} stopOpacity="0.75" />
        </radialGradient>
      </defs>
      <g>
        <motion.g
          animate={{ scaleX: [1, 0.55, 1] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "32px 32px" }}
        >
          <path d="M32 32 C 12 8, 2 18, 6 30 C 2 42, 14 52, 32 32 Z" fill={`url(#bw-${delay})`} />
          <path d="M32 32 C 52 8, 62 18, 58 30 C 62 42, 50 52, 32 32 Z" fill={`url(#bw-${delay})`} />
        </motion.g>
        <ellipse cx="32" cy="32" rx="1.8" ry="10" fill="var(--ink)" />
        <circle cx="32" cy="22" r="2.2" fill="var(--ink)" />
      </g>
    </motion.svg>
  );
}

function Bubble({ className = "", delay = 0, size = 28 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 30% 30%, white 0%, oklch(0.78 0.2 5 / 0.7) 60%, transparent 100%)",
        boxShadow: "0 6px 24px oklch(0.68 0.23 1 / 0.35)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: [0, 1, 1, 0], y: [30, -120, -220, -300], x: [0, 14, -10, 0] }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute h-4 w-4 ${className}`}
      initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6], rotate: [0, 180, 360] }}
      transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" fill="var(--hotpink)" opacity="0.85" />
    </motion.svg>
  );
}

type Variant = "hero" | "story" | "menu" | "visit";

export function FloatingMotifs({ variant }: { variant: Variant }) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Butterfly className="top-[14%] left-[6%] h-12 w-12" delay={0} />
        <Butterfly className="top-[34%] right-[8%] h-16 w-16" delay={2.5} hue="oklch(0.78 0.2 5)" />
        <Butterfly className="bottom-[22%] left-[18%] h-10 w-10" delay={4} />
        <Sparkle className="top-[20%] right-[24%]" delay={0.6} />
        <Sparkle className="bottom-[30%] left-[40%]" delay={1.8} />
        <Sparkle className="top-[60%] right-[40%]" delay={3} />
        <Bubble className="bottom-0 left-[12%]" size={32} delay={0} />
        <Bubble className="bottom-0 left-[42%]" size={22} delay={2} />
        <Bubble className="bottom-0 right-[20%]" size={36} delay={3.4} />
        <Bubble className="bottom-0 right-[8%]" size={18} delay={5} />
      </div>
    );
  }
  if (variant === "story") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Butterfly className="top-[18%] right-[6%] h-14 w-14" delay={1} />
        <Butterfly className="bottom-[12%] left-[4%] h-10 w-10" delay={3.5} hue="oklch(0.82 0.13 5)" />
        <Sparkle className="top-[40%] left-[10%]" delay={0.4} />
        <Sparkle className="bottom-[30%] right-[14%]" delay={2.2} />
      </div>
    );
  }
  if (variant === "menu") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Butterfly className="top-[10%] left-[4%] h-10 w-10" delay={0.5} />
        <Butterfly className="top-[40%] right-[3%] h-12 w-12" delay={2.8} hue="oklch(0.78 0.2 5)" />
        <Sparkle className="top-[26%] right-[20%]" delay={1.2} />
        <Sparkle className="bottom-[18%] left-[12%]" delay={2.6} />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Butterfly className="top-[12%] right-[10%] h-12 w-12" delay={0} />
      <Butterfly className="bottom-[10%] left-[6%] h-10 w-10" delay={3} hue="oklch(0.82 0.13 5)" />
      <Sparkle className="top-[40%] left-[16%]" delay={1} />
      <Sparkle className="bottom-[30%] right-[20%]" delay={2.5} />
    </div>
  );
}
