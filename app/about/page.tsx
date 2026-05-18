"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────────────
const COACHES = [
  {
    name: "Marcus Reid",
    role: "Head Sprint Coach",
    bio: "Former NCAA All-American with 15 years coaching elite sprinters. Specialized in biomechanics and explosive start technique.",
    accent: "cyan",
    initials: "MR",
  },
  {
    name: "Diane Okafor",
    role: "Strength & Conditioning",
    bio: "NSCA-certified specialist who has trained 3 Olympic-level athletes. Expert in periodization and injury prevention.",
    accent: "yellow",
    initials: "DO",
  },
  {
    name: "Jerome Wells",
    role: "Field Events Director",
    bio: "12-year professional jumper turned coach. Holds national records in triple jump and long jump instruction.",
    accent: "pink",
    initials: "JW",
  },
  {
    name: "Priya Menon",
    role: "Sports Psychology",
    bio: "PhD in performance psychology from UCLA. Helps athletes build the mental edge that separates good from elite.",
    accent: "purple",
    initials: "PM",
  },
];

const VALUES = [
  {
    title: "Precision",
    description:
      "Every training rep, every technique cue, every recovery window is intentional. We leave nothing to chance.",
    accent: "cyan",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="8" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" stroke="#22d3ee" strokeWidth="1.5" />
        <line
          x1="10"
          y1="2"
          x2="10"
          y2="5"
          stroke="#22d3ee"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="15"
          x2="10"
          y2="18"
          stroke="#22d3ee"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description:
      "Champions are built in the moments no one is watching. We build the systems that keep you honest with yourself.",
    accent: "yellow",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
          stroke="#facc15"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "You don't train alone at A1 Vertex. You train surrounded by people who refuse to let you settle for less.",
    accent: "pink",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="3" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="14" cy="8" r="2.5" stroke="#f472b6" strokeWidth="1.5" />
        <path
          d="M1 17c0-3 2.5-5 6-5s6 2 6 5"
          stroke="#f472b6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 13c2 0 4 1.5 4 4"
          stroke="#f472b6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We combine time-tested coaching principles with the latest in sports science, data, and performance technology.",
    accent: "purple",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 2v3M10 15v3M2 10h3M15 10h3"
          stroke="#a78bfa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="4" stroke="#a78bfa" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const MILESTONES = [
  {
    year: "2009",
    label: "Founded",
    detail: "A1 Vertex opens its first training facility in Atlanta, GA.",
  },
  {
    year: "2012",
    label: "First Nationals",
    detail: "Three athletes qualify for the USA Track & Field Championships.",
  },
  {
    year: "2016",
    label: "Olympic Trials",
    detail: "Two A1 Vertex athletes compete at the US Olympic Trials.",
  },
  {
    year: "2019",
    label: "Expansion",
    detail: "Second location opens, growing the roster to 200+ athletes.",
  },
  {
    year: "2023",
    label: "50 Coaches",
    detail: "Staff reaches 50 certified coaches across all disciplines.",
  },
  {
    year: "2026",
    label: "Today",
    detail: "500+ athletes trained, 250+ championships, and still climbing.",
  },
];

const ACCENTS = {
  cyan: {
    grad: "linear-gradient(135deg, #22d3ee, #38bdf8)",
    glow: "rgba(34,211,238,0.15)",
    pill: "#22d3ee",
    pillBg: "rgba(34,211,238,0.08)",
  },
  yellow: {
    grad: "linear-gradient(135deg, #facc15, #fb923c)",
    glow: "rgba(250,204,21,0.15)",
    pill: "#facc15",
    pillBg: "rgba(250,204,21,0.08)",
  },
  pink: {
    grad: "linear-gradient(135deg, #f472b6, #fb7185)",
    glow: "rgba(244,114,182,0.15)",
    pill: "#f472b6",
    pillBg: "rgba(244,114,182,0.08)",
  },
  purple: {
    grad: "linear-gradient(135deg, #a78bfa, #818cf8)",
    glow: "rgba(167,139,250,0.15)",
    pill: "#a78bfa",
    pillBg: "rgba(167,139,250,0.08)",
  },
};

type AccentKey = keyof typeof ACCENTS;

// ── Shared background layer ───────────────────────────────────────────────────
function BgTexture() {
  return (
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
  );
}

// ── Coach card ────────────────────────────────────────────────────────────────
function CoachCard({
  coach,
  index,
}: {
  coach: (typeof COACHES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = ACCENTS[coach.accent as AccentKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl p-7 gap-5"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "0.5px solid rgba(255,255,255,0.09)",
      }}
      whileHover={{ y: -4 }}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${t.glow}, transparent 65%)`,
        }}
      />

      {/* Top beam */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[1.5px]"
        style={{ background: t.grad }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{
          duration: 0.9,
          delay: index * 0.1 + 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Avatar */}
      <div className="relative z-10 flex items-center gap-4">
        <div
          className="flex items-center justify-center w-14 h-14 rounded-2xl text-lg font-black shrink-0"
          style={{
            fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
            background: t.pillBg,
            border: `0.5px solid ${t.pill}33`,
            color: t.pill,
          }}
        >
          {coach.initials}
        </div>
        <div>
          <h3
            className="text-base font-black tracking-tight leading-tight"
            style={{
              fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
              background: t.grad,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {coach.name}
          </h3>
          <p
            className="text-white/35 text-xs mt-0.5 uppercase tracking-[0.1em] font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {coach.role}
          </p>
        </div>
      </div>

      <p
        className="relative z-10 text-white/45 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {coach.bio}
      </p>

      {/* Ghost index */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 right-5 text-[4.5rem] font-black leading-none select-none opacity-[0.035] group-hover:opacity-[0.065] transition-opacity duration-500"
        style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

// ── Value card ────────────────────────────────────────────────────────────────
function ValueCard({
  v,
  index,
}: {
  v: (typeof VALUES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = ACCENTS[v.accent as AccentKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
          style={{ background: t.pillBg, border: `0.5px solid ${t.pill}25` }}
        >
          {v.icon}
        </div>
        <h3
          className="text-base font-black tracking-tight"
          style={{
            fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
            background: t.grad,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {v.title}
        </h3>
      </div>
      <p
        className="text-white/40 text-sm leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {v.description}
      </p>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] rounded-full"
        style={{ background: t.grad }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "40%" } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.09 + 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  );
}

// ── Timeline ──────────────────────────────────────────────────────────────────
function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative flex flex-col gap-0">
      {/* Vertical spine */}
      <motion.div
        className="absolute left-[72px] top-2 bottom-2 w-px"
        style={{
          background:
            "linear-gradient(180deg, rgba(34,211,238,0.3), rgba(244,114,182,0.3), transparent)",
        }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformOrigin: "top",
          background:
            "linear-gradient(180deg, rgba(34,211,238,0.3), rgba(244,114,182,0.3), transparent)",
        }}
      />

      {MILESTONES.map((m, i) => {
        const isLast = i === MILESTONES.length - 1;
        const dotColor = isLast
          ? "#facc15"
          : i % 2 === 0
            ? "#22d3ee"
            : "#f472b6";
        return (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-start gap-6 pb-10 last:pb-0"
          >
            {/* Year column */}
            <div className="shrink-0 w-[72px] text-right">
              <span
                className="text-sm font-black tabular-nums"
                style={{
                  fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
                  color: dotColor,
                }}
              >
                {m.year}
              </span>
            </div>

            {/* Dot */}
            <div
              className="absolute left-[68px] top-[4px] w-2 h-2 rounded-full ring-2 ring-[#080808]"
              style={{ background: dotColor }}
            />

            {/* Content */}
            <div className="pt-0 flex flex-col gap-1">
              <p
                className="text-white text-sm font-bold"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {m.label}
              </p>
              <p
                className="text-white/35 text-sm leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {m.detail}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const coachesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-60px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });
  const coachesInView = useInView(coachesRef, { once: true, margin: "-60px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-60px",
  });

  return (
    <main
      className="bg-[#080808] text-white min-h-screen overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=DM+Sans:wght@300;400;600&display=swap');`}</style>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-6 sm:px-10 lg:px-16 min-h-[80vh] flex items-center"
        aria-labelledby="about-heading"
      >
        <BgTexture />

        {/* Orbs */}
        <motion.div
          aria-hidden="true"
          style={{ y: heroY }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.18, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ opacity: [0.07, 0.17, 0.07], scale: [1, 1.12, 1] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-16 -left-16 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Diagonal stripe */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #facc15 0, #facc15 1px, transparent 0, transparent 50%)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "linear-gradient(135deg, transparent 40%, black 70%, transparent 100%)",
            maskImage:
              "linear-gradient(135deg, transparent 40%, black 70%, transparent 100%)",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto w-full pt-32 pb-20"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 text-xs font-semibold tracking-[0.15em] uppercase"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
              aria-hidden="true"
            />
            Our Story
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="about-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3rem,8vw,6.5rem)] font-black tracking-wide leading-[0.9] mb-8 max-w-4xl"
            style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
          >
            <span className="text-white">We Build </span>
            <span
              style={{
                background: "linear-gradient(90deg, #facc15, #f472b6, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Champions.
            </span>
            <br />
            <span className="text-white/25">Not shortcuts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white/45 text-lg leading-relaxed max-w-xl mb-10 font-light"
          >
            Since 2009, A1 Vertex Athletics has operated on a single belief —
            that elite performance is a system, not a talent. We build those
            systems around every athlete who walks through our doors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.26,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black text-sm overflow-hidden"
              style={{ background: "linear-gradient(90deg, #facc15, #f472b6)" }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              View Our Programs
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6.5H11M7 2.5L11 6.5L7 10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white/60 text-sm border border-white/12 hover:text-white hover:border-white/22 hover:bg-white/[0.04] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom edge */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)",
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          MISSION STATEMENT
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
        aria-label="Mission"
      >
        <BgTexture />

        <div ref={missionRef} className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — large statement */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-400/25 bg-yellow-400/5 text-yellow-400 text-xs font-semibold tracking-[0.15em] uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                  aria-hidden="true"
                />
                Our Mission
              </div>

              <blockquote
                className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight leading-[1.1] mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
                }}
              >
                <span className="text-white">
                  "To develop the complete athlete —{" "}
                </span>
                <span
                  style={{
                    background: "linear-gradient(90deg, #22d3ee, #f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  physically, mentally, and technically
                </span>
                <span className="text-white">
                  {" "}
                  — through systems that demand excellence every single day."
                </span>
              </blockquote>

              <div
                className="h-px w-24 mb-6"
                style={{
                  background: "linear-gradient(90deg, #facc15, transparent)",
                }}
              />

              <p className="text-white/40 text-sm leading-relaxed font-light">
                — A1 Vertex Athletics, founding charter, 2009
              </p>
            </motion.div>

            {/* Right — three pillars */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4"
            >
              {[
                { label: "Physical", pct: 90, color: "#22d3ee" },
                { label: "Mental", pct: 85, color: "#facc15" },
                { label: "Technical", pct: 95, color: "#f472b6" },
              ].map((bar, i) => (
                <div key={bar.label} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-sm font-semibold text-white/60"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {bar.label} Development
                    </span>
                    <span
                      className="text-sm font-black tabular-nums"
                      style={{
                        color: bar.color,
                        fontFamily: "'Barlow Condensed', sans-serif",
                      }}
                    >
                      {bar.pct}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: bar.color }}
                      initial={{ width: "0%" }}
                      animate={missionInView ? { width: `${bar.pct}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.3 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}

              <p
                className="text-white/30 text-xs mt-2 leading-relaxed font-light"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Training distribution across A1 Vertex programs. Percentages
                reflect program emphasis weighting, not exclusive focus — all
                three are always present.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VALUES
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
        aria-labelledby="values-heading"
      >
        <BgTexture />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
          }}
        />

        <div ref={valuesRef} className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 flex items-center gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-purple-400/25 bg-purple-400/5 text-purple-400 text-xs font-semibold tracking-[0.15em] uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"
                  aria-hidden="true"
                />
                What We Stand For
              </div>
              <h2
                id="values-heading"
                className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tighter leading-[0.95]"
                style={{
                  fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
                }}
              >
                <span className="text-white">Core </span>
                <span
                  style={{
                    background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Values
                </span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} v={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COACHES
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
        aria-labelledby="coaches-heading"
      >
        <BgTexture />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
          }}
        />

        <div ref={coachesRef} className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={coachesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-pink-400/25 bg-pink-400/5 text-pink-400 text-xs font-semibold tracking-[0.15em] uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"
                aria-hidden="true"
              />
              The Team
            </div>
            <h2
              id="coaches-heading"
              className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tighter leading-[0.95]"
              style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
            >
              <span className="text-white">Meet Your </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #f472b6, #facc15)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coaches
              </span>
            </h2>
            <p className="mt-4 text-white/35 text-base max-w-lg mx-auto leading-relaxed font-light">
              Every coach at A1 Vertex has competed at the highest level. They
              know what it takes because they've been where you're going.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {COACHES.map((c, i) => (
              <CoachCard key={c.name} coach={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
        aria-labelledby="timeline-heading"
      >
        <BgTexture />

        <div ref={timelineRef} className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 text-xs font-semibold tracking-[0.15em] uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                  aria-hidden="true"
                />
                Our Journey
              </div>

              <h2
                id="timeline-heading"
                className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tighter leading-[0.95] mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
                }}
              >
                <span className="text-white">17 Years of </span>
                <span
                  style={{
                    background: "linear-gradient(90deg, #22d3ee, #facc15)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Excellence
                </span>
              </h2>

              <p className="text-white/35 text-sm leading-relaxed font-light max-w-sm">
                From a single facility in Atlanta to one of the most respected
                track and field programs in the country. Every milestone earned
                the hard way.
              </p>

              {/* Decorative divider */}
              <div
                className="mt-10 h-px w-32"
                style={{
                  background: "linear-gradient(90deg, #22d3ee55, transparent)",
                }}
              />
            </motion.div>

            {/* Right timeline */}
            <Timeline />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        aria-label="Join call to action"
      >
        <BgTexture />

        {/* Center glow */}
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-[600px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(34,211,238,0.15) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter leading-[0.92] mb-6"
            style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
          >
            <span className="text-white">Your story </span>
            <span
              style={{
                background: "linear-gradient(90deg, #facc15, #f472b6, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              starts here.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-base md:text-lg leading-relaxed mb-10 font-light"
          >
            500 athletes didn't get here by waiting. Take the first step and
            let's build your championship story together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-black text-sm overflow-hidden"
              style={{ background: "linear-gradient(90deg, #facc15, #f472b6)" }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              Start Training Today
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-semibold text-cyan-400 text-sm border border-cyan-400/30 hover:bg-cyan-400/8 transition-all duration-300"
            >
              Explore Services
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6.5H11M7 2.5L11 6.5L7 10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
