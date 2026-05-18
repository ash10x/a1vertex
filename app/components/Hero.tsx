"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const sections = [
  {
    title: "Elite Training System",
    desc: "Structured athlete development built on performance data, discipline, and progression science.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Data-Driven Performance",
    desc: "Every sprint, rep, and session is measured for measurable gains.",
    accent: "from-pink-400 to-purple-500",
  },
  {
    title: "Championship Mindset",
    desc: "Mental conditioning for high-pressure execution and race dominance.",
    accent: "from-yellow-300 to-orange-400",
  },
];

export default function CinematicAppleLanding() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  return (
    <main ref={ref} className="relative bg-black text-white overflow-hidden">
      {/* ───────────────── GLOBAL CINEMATIC BACKGROUND VIDEO ───────────────── */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.05] opacity-50"
        >
          <source src="/video/main.mp4" type="video/mp4" />
        </video>

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
      </div>

      {/* ───────────────── HERO INTRO ───────────────── */}
      <section className="relative h-screen flex items-center justify-center z-10">
        <motion.div
          style={{
            opacity: useTransform(smooth, [0, 0.1], [1, 0]),
            scale: useTransform(smooth, [0, 0.1], [1, 0.98]),
          }}
          className="text-center max-w-4xl px-6"
        >
          {/* ───────────────── LOGO HERO MARK ───────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              opacity: useTransform(smooth, [0, 0.15], [1, 0]),
              scale: useTransform(smooth, [0, 0.15], [1, 0.96]),
            }}
            className="mb-10 relative flex justify-center"
          >
            {/* glow aura */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { opacity: [0.25, 0.5, 0.25], scale: [1, 1.08, 1] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
              className="absolute inset-0 mx-auto w-[220px] h-[220px] bg-cyan-400/20 blur-3xl rounded-full"
            />

            <Image
              src="/logo/logo.png"
              alt="A1 Vertex Logo"
              width={160}
              height={160}
              priority
              className="relative z-10 drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            />
          </motion.div>
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-xs mb-6">
            A1 Vertex Athletics
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">
            Built for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Elite Performance
            </span>
          </h1>

          <p className="mt-8 text-white/60 text-lg max-w-xl mx-auto">
            A performance system designed for serious athletes committed to
          </p>
        </motion.div>
      </section>

      {/* ───────────────── STORY SECTIONS (APPLE STYLE) ───────────────── */}
      <section className="relative z-10">
        {sections.map((s, i) => {
          const start = i * 0.25;
          const end = start + 0.25;

          const opacity = useTransform(smooth, [start, end], [0, 1]);
          const y = useTransform(smooth, [start, end], [60, 0]);
          const scale = useTransform(smooth, [start, end], [0.97, 1]);

          return (
            <div
              key={s.title}
              className="h-screen sticky top-0 flex items-center justify-center"
            >
              {/* SECTION OVERLAY (video stays constant underneath) */}
              <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-black/40"
              />

              {/* CONTENT */}
              <motion.div
                style={{ opacity, y, scale }}
                className="relative z-10 text-center max-w-3xl px-6"
              >
                <div
                  className={`text-xs uppercase tracking-[0.3em] mb-6 bg-gradient-to-r ${s.accent} text-transparent bg-clip-text`}
                >
                  Performance Layer {i + 1}
                </div>

                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  {s.title}
                </h2>

                <p className="mt-6 text-white/60 text-lg leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="relative h-screen flex items-center justify-center z-10 text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Transform Performance?
            </span>
          </h2>

          <p className="mt-8 text-white/60">
            Join an elite system designed for serious athletes.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-bold text-black text-sm"
              style={{
                background: "linear-gradient(90deg, #facc15, #f472b6)",
              }}
            >
              Start Training
            </a>

            <a
              href="/team"
              className="px-8 py-3.5 rounded-full font-bold text-cyan-400 text-sm border border-cyan-400/40"
            >
              Meet Athletes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
