"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
type Category = "All" | "Training" | "Competition" | "Community";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Sprint Training",
    category: "Training",
    accent: "cyan",
    span: "tall",
  },
  {
    id: 2,
    title: "Championship Event",
    category: "Competition",
    accent: "yellow",
    span: "normal",
  },
  {
    id: 3,
    title: "Team Building",
    category: "Community",
    accent: "pink",
    span: "normal",
  },
  {
    id: 4,
    title: "Strength Session",
    category: "Training",
    accent: "yellow",
    span: "wide",
  },
  {
    id: 5,
    title: "Track Excellence",
    category: "Competition",
    accent: "cyan",
    span: "normal",
  },
  {
    id: 6,
    title: "Coach Development",
    category: "Training",
    accent: "pink",
    span: "tall",
  },
  {
    id: 7,
    title: "Victory Moment",
    category: "Competition",
    accent: "yellow",
    span: "normal",
  },
  {
    id: 8,
    title: "Team Success",
    category: "Community",
    accent: "cyan",
    span: "normal",
  },
] as const;

type GalleryItem = (typeof GALLERY_ITEMS)[number];

const CATEGORIES: Category[] = ["All", "Training", "Competition", "Community"];

const ACCENTS = {
  cyan: {
    grad: "linear-gradient(135deg, #22d3ee, #38bdf8)",
    glow: "rgba(34,211,238,0.2)",
    pill: "#22d3ee",
  },
  yellow: {
    grad: "linear-gradient(135deg, #facc15, #fb923c)",
    glow: "rgba(250,204,21,0.2)",
    pill: "#facc15",
  },
  pink: {
    grad: "linear-gradient(135deg, #f472b6, #fb7185)",
    glow: "rgba(244,114,182,0.2)",
    pill: "#f472b6",
  },
};

// Placeholder patterns per item — gives visual variety without real images
const PATTERNS = [
  "repeating-linear-gradient(0deg,   rgba(34,211,238,0.06) 0px, rgba(34,211,238,0.06) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(34,211,238,0.06) 0px, rgba(34,211,238,0.06) 1px, transparent 1px, transparent 32px)",
  "repeating-linear-gradient(45deg,  rgba(250,204,21,0.07)  0px, rgba(250,204,21,0.07)  1px, transparent 1px, transparent 24px)",
  "repeating-linear-gradient(-45deg, rgba(244,114,182,0.07) 0px, rgba(244,114,182,0.07) 1px, transparent 1px, transparent 24px)",
  "repeating-linear-gradient(60deg,  rgba(34,211,238,0.05)  0px, rgba(34,211,238,0.05)  2px, transparent 2px, transparent 28px)",
  "repeating-linear-gradient(0deg,   rgba(250,204,21,0.06)  0px, rgba(250,204,21,0.06)  1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(250,204,21,0.06) 0px, rgba(250,204,21,0.06) 1px, transparent 1px, transparent 40px)",
  "repeating-linear-gradient(-60deg, rgba(244,114,182,0.06) 0px, rgba(244,114,182,0.06) 2px, transparent 2px, transparent 28px)",
  "repeating-linear-gradient(30deg,  rgba(34,211,238,0.07)  0px, rgba(34,211,238,0.07)  1px, transparent 1px, transparent 20px)",
  "repeating-linear-gradient(45deg,  rgba(244,114,182,0.05) 0px, rgba(244,114,182,0.05) 2px, transparent 2px, transparent 32px)",
];

// ── Gallery card ──────────────────────────────────────────────────────────────
function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = ACCENTS[item.accent];

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.88, y: 16 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        height: item.span === "tall" ? "340px" : "240px",
        background: "#0f0f0f",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}
      whileHover={{ scale: 1.015 }}
    >
      {/* Pattern fill */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: PATTERNS[item.id - 1] }}
      />

      {/* Base color wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${t.glow}, transparent 70%)`,
        }}
      />

      {/* Top beam */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[1.5px]"
        style={{ background: t.grad }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "60%" } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.06 + 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Hover glow flood */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center, ${t.glow}, transparent 70%)`,
        }}
      />

      {/* Dark scrim for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-400"
      />

      {/* Category pill — top right */}
      <div
        className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
        style={{
          background: `${t.pill}18`,
          border: `0.5px solid ${t.pill}44`,
          color: t.pill,
        }}
      >
        {item.category}
      </div>

      {/* Zoom / search icon — center, fades in on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{
            background: "rgba(0,0,0,0.5)",
            border: `0.5px solid ${t.pill}55`,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="7.5" cy="7.5" r="5" stroke={t.pill} strokeWidth="1.5" />
            <path
              d="M11.5 11.5L15 15"
              stroke={t.pill}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <motion.div
          initial={{ y: 8, opacity: 0.7 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.28 }}
        >
          <h3
            className="text-base font-black tracking-tight text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
          >
            {item.title}
          </h3>
          <div
            className="mt-1.5 h-[1.5px] w-8 group-hover:w-16 transition-all duration-400 rounded-full"
            style={{ background: t.grad }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const filtered =
    active === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-[#080808] overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=DM+Sans:wght@300;400;600&display=swap');`}</style>

      {/* ── Grid texture ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Parallax orbs ────────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute -top-20 left-0 w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-pink-400/25 bg-pink-400/5 text-pink-400 text-xs font-semibold tracking-[0.15em] uppercase"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"
              aria-hidden="true"
            />
            Moments of Excellence
          </motion.div>

          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 22 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(2.4rem,6vw,4rem)] font-black tracking-tighter leading-[0.95] mb-5"
            style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
          >
            <span className="text-white">Gallery of </span>
            <span
              style={{
                background: "linear-gradient(90deg, #facc15, #f472b6, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white/40 text-base max-w-lg mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Witness the dedication, passion, and achievements of our athletes.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-2 flex-wrap mb-12"
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: isActive ? "#080808" : "rgba(255,255,255,0.45)",
                  background: isActive
                    ? "linear-gradient(90deg, #facc15, #f472b6)"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "none"
                    : "0.5px solid rgba(255,255,255,0.1)",
                }}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #facc15, #f472b6)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 340, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Masonry-inspired grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <div key={item.id} className="break-inside-avoid">
                <GalleryCard item={item} index={index} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, #f472b644, #22d3ee33, transparent)",
          }}
        />
      </div>
    </section>
  );
}
