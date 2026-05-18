"use client";

import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { services } from "@/app/services/data";

// ── Theme map ─────────────────────────────────────────────────────────────────
type Scheme = "yellow" | "pink" | "cyan" | "purple";

const THEMES: Record<
  Scheme,
  { grad: string; glow: string; pill: string; pillText: string }
> = {
  yellow: {
    grad: "linear-gradient(135deg, #facc15, #fb923c)",
    glow: "rgba(250,204,21,0.12)",
    pill: "rgba(250,204,21,0.08)",
    pillText: "#facc15",
  },
  pink: {
    grad: "linear-gradient(135deg, #f472b6, #fb7185)",
    glow: "rgba(244,114,182,0.12)",
    pill: "rgba(244,114,182,0.08)",
    pillText: "#f472b6",
  },
  cyan: {
    grad: "linear-gradient(135deg, #22d3ee, #38bdf8)",
    glow: "rgba(34,211,238,0.12)",
    pill: "rgba(34,211,238,0.08)",
    pillText: "#22d3ee",
  },
  purple: {
    grad: "linear-gradient(135deg, #a78bfa, #818cf8)",
    glow: "rgba(167,139,250,0.12)",
    pill: "rgba(167,139,250,0.08)",
    pillText: "#a78bfa",
  },
};

// ── Service card ──────────────────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const t = THEMES[service.scheme as Scheme];
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={`/services/${service.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl h-full"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "0.5px solid rgba(255,255,255,0.09)",
        }}
        aria-label={`Learn more about ${service.title}`}
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
            delay: index * 0.09 + 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <div className="relative z-10 flex flex-col flex-1 p-7 gap-6">
          {/* Header row */}
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-2xl"
              style={{
                background: t.pill,
                border: `0.5px solid ${t.pillText}22`,
              }}
            >
              {service.icon}
            </div>

            {/* Title + description */}
            <div className="flex flex-col gap-1 min-w-0">
              <h2
                className="text-lg font-black tracking-tight leading-tight"
                style={{
                  fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
                  background: t.grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=DM+Sans:wght@300;400;600&display=swap');`}</style>
                {service.title}
              </h2>
              <p
                className="text-white/40 text-sm leading-snug group-hover:text-white/60 transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {service.description}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          {/* Highlights */}
          <ul
            className="flex flex-col gap-2.5 flex-1"
            aria-label={`${service.title} highlights`}
          >
            {service.highlights.slice(0, 3).map((item: string) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span
                  aria-hidden="true"
                  className="mt-[3px] shrink-0 w-1 h-1 rounded-full"
                  style={{
                    background: t.pillText,
                    boxShadow: `0 0 5px ${t.pillText}`,
                  }}
                />
                <span
                  className="text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Footer CTA */}
          <div className="flex items-center justify-between mt-auto">
            <span
              className="text-sm font-semibold"
              style={{ color: t.pillText, fontFamily: "'DM Sans', sans-serif" }}
            >
              Learn more
            </span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              style={{ color: t.pillText }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>

        {/* Ghost index */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 right-5 text-[5rem] font-black leading-none select-none opacity-[0.035] group-hover:opacity-[0.065] transition-opacity duration-500"
          style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </Link>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <main
      className="bg-[#080808] text-white min-h-screen overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=DM+Sans:wght@300;400;600&display=swap');`}</style>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden px-6 py-36 sm:px-10 lg:px-16 min-h-[70vh] flex items-center"
        aria-labelledby="services-page-heading"
      >
        {/* Grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orbs */}
        <motion.div
          aria-hidden="true"
          style={{ y: heroY }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.15, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-0 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.1, 1] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full"
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
              "repeating-linear-gradient(45deg, #22d3ee 0, #22d3ee 1px, transparent 0, transparent 50%)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "linear-gradient(135deg, black 0%, transparent 55%)",
            maskImage: "linear-gradient(135deg, black 0%, transparent 55%)",
          }}
        />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
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
            Our Services
          </motion.div>

          <motion.h1
            id="services-page-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-wide leading-[0.92] max-w-3xl"
            style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
          >
            <span className="text-white">Elevate every aspect of your </span>
            <span
              style={{
                background: "linear-gradient(90deg, #facc15, #f472b6, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              athletic performance.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-10 text-white/40 text-base md:text-lg leading-relaxed max-w-xl font-light"
          >
            Explore the full range of A1 Vertex Athletics programs, each built
            to deliver championship-level strength, speed, focus, and
            data-driven progress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/12 bg-white/[0.03] text-white/60 text-sm font-semibold hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 7H2M6 3L2 7L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </Link>

            <motion.a
              href="#offerings"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-black overflow-hidden"
              style={{ background: "linear-gradient(90deg, #facc15, #f472b6)" }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              View Offerings
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 2V12M2 7H12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: "rotate(45deg)",
                    transformOrigin: "center",
                  }}
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom edge line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.25), transparent)",
          }}
        />
      </section>

      {/* ── Offerings grid ────────────────────────────────────────────────── */}
      <section
        id="offerings"
        className="py-28 px-6 sm:px-10 lg:px-16"
        aria-labelledby="offerings-heading"
      >
        <div ref={gridRef} className="relative max-w-7xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-12"
          >
            <span
              id="offerings-heading"
              className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold"
            >
              All Programs
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <span className="text-xs text-white/20">
              {services.length} offerings
            </span>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
