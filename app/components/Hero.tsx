"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  Variants,
} from "framer-motion";

// ── Stat ticker data ────────────────────────────────────────────────────────
const STATS = [
  { value: "200+", label: "Athletes Trained" },
  { value: "94%", label: "PR Improvement Rate" },
  { value: "38", label: "National Qualifiers" },
  { value: "12", label: "Years Coaching" },
];

// ── Stagger helpers ──────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.13,
    },
  }),
};

// ── Animated counter ────────────────────────────────────────────────────────
type CounterProps = {
  value: string;
};

function Counter({ value }: CounterProps) {
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const [display, setDisplay] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);

            setDisplay(Math.round(eased * num));

            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [num]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const springBgY = useSpring(bgY, {
    stiffness: 80,
    damping: 20,
  });

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
      aria-label="Hero"
    >
      {/* Background media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] opacity-50"
        >
          <source src="/video/hero2.mp4" type="video/mp4" />
        </video>

        <Image
          src="/images/hero1.webp"
          alt="South Florida Track Athletes"
          fill
          priority
          className="object-cover opacity-0 mix-blend-screen"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.82)_100%)]" />
      </div>

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow layers */}
      <motion.div
        aria-hidden="true"
        style={{ y: springBgY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : { opacity: [0.12, 0.28, 0.12], scale: [1, 1.18, 1] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 9, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 70%)",
          }}
        />

        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : { opacity: [0.08, 0.2, 0.08], scale: [1, 1.12, 1] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }
          className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(250,204,21,0.18) 0%, transparent 70%)",
          }}
        />

        <motion.div
          animate={prefersReducedMotion ? {} : { opacity: [0.04, 0.12, 0.04] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(244,114,182,0.14) 0%, transparent 70%)",
          }}
        />

        <motion.div
          animate={prefersReducedMotion ? {} : { opacity: [0.06, 0.14, 0.06] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute bottom-0 left-0 right-0 h-[280px]"
          style={{
            background:
              "linear-gradient(to top, rgba(249,115,22,0.10), transparent)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-10 max-w-5xl mx-auto w-full"
      >
        <motion.div
          {...motionProps}
          variants={fadeUp}
          custom={0}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 text-xs font-semibold tracking-[0.15em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Elite Track & Field
        </motion.div>

        <div className="mb-8 flex flex-col items-center">
          <motion.div
            {...motionProps}
            variants={fadeUp}
            custom={1}
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            className="relative mb-8"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 4, repeat: Infinity }
              }
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
            />

            <Image
              src="/logo/logo.png"
              alt="A1 Vertex"
              width={180}
              height={180}
              priority
              className="relative z-10 object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            />
          </motion.div>

          <motion.h1
            {...motionProps}
            variants={fadeUp}
            custom={2}
            className="leading-[0.9] tracking-tight font-black uppercase text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <span className="block text-[clamp(4rem,12vw,9rem)] text-white">
              A1 Vertex
            </span>

            <span
              className="block text-[clamp(4rem,12vw,9rem)]"
              style={{
                background:
                  "linear-gradient(90deg, #facc15 0%, #f472b6 50%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Athletics
            </span>
          </motion.h1>

          <motion.div
            {...motionProps}
            variants={fadeUp}
            custom={3}
            className="mt-6"
          >
            <span className="text-[clamp(1.4rem,3vw,2.5rem)] font-black tracking-[0.35em] text-white">
              BE GREAT.
            </span>
          </motion.div>
        </div>

        <motion.p
          {...motionProps}
          variants={fadeUp}
          custom={4}
          className="text-lg md:text-xl text-white/55 mb-10 max-w-xl leading-relaxed font-light"
        >
          Elite South Florida track and field development for athletes committed
          to greatness.{" "}
          <span className="text-white/80 font-normal">
            Transform your potential into performance.
          </span>
        </motion.p>

        <motion.div
          {...motionProps}
          variants={fadeUp}
          custom={5}
          className="flex gap-3 flex-wrap justify-center mb-20"
        >
          <motion.a
            href="#contact"
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-black text-sm overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #facc15, #f472b6)",
            }}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            Start Your Journey
          </motion.a>

          <motion.a
            href="/services"
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-cyan-400 text-sm border border-cyan-400/40 transition-colors"
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
