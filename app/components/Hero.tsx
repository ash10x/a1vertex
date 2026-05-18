"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  cubicBezier,
} from "framer-motion";

// ── Stat ticker data ────────────────────────────────────────────────────────
const STATS = [
  { value: "200+", label: "Athletes Trained" },
  { value: "94%", label: "PR Improvement Rate" },
  { value: "38", label: "National Qualifiers" },
  { value: "12", label: "Years Coaching" },
];

// ── Static fade animation (FIXED) ───────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

// ── Animated counter ────────────────────────────────────────────────────────
function Counter({ value }: { value: string }) {
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
      aria-label="Hero"
    >
      {/* BACKGROUND VIDEO */}
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#080808]" />
      </div>

      {/* GLOW LAYERS */}
      <motion.div
        style={{ y: springBgY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full bg-yellow-400/18 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/14 blur-3xl" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-10 max-w-5xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0 * 0.08 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Elite Track & Field
        </motion.div>

        {/* LOGO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
          whileHover={{ scale: 1.04 }}
        >
          <Image
            src="/logo/logo.png"
            alt="A1 Vertex"
            width={180}
            height={180}
            priority
          />
        </motion.div>

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.16 }}
          className="font-black uppercase text-white text-[clamp(4rem,12vw,9rem)]"
        >
          A1 Vertex
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400">
            Athletics
          </span>
        </motion.h1>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.32 }}
          className="flex gap-3 flex-wrap justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-bold text-black text-sm bg-gradient-to-r from-yellow-300 to-pink-400"
          >
            Start Your Journey
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-bold text-cyan-400 border border-cyan-400/40 text-sm"
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
