"use client";

import { useRef } from "react";
import Image from "next/image";
import { getCldVideoUrl } from "next-cloudinary";
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
];

export default function CinematicAppleLanding() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // ── Cloudinary Video URL ─────────────────────────────
  const videoUrl = getCldVideoUrl({
    src: "main_lrbgpc", // replace with your Cloudinary public ID
    width: 1920,
    height: 1080,
    format: "auto",
    quality: "auto",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  return (
    <main ref={ref} className="relative overflow-hidden bg-black text-white">
      {/* ───────────────── GLOBAL CINEMATIC VIDEO ───────────────── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/video-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
      </div>

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative z-10 flex h-screen items-center justify-center">
        <motion.div
          style={{
            opacity: useTransform(smooth, [0, 0.1], [1, 0]),
            scale: useTransform(smooth, [0, 0.1], [1, 0.98]),
          }}
          className="max-w-4xl px-6 text-center"
        >
          {/* logo */}
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
            className="relative mb-10 flex justify-center"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      opacity: [0.25, 0.5, 0.25],
                      scale: [1, 1.08, 1],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="absolute inset-0 mx-auto h-[220px] w-[220px] rounded-full bg-cyan-400/20 blur-3xl"
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

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-cyan-400">
            A1 Vertex Athletics
          </p>

          <h1 className="text-5xl font-black leading-[0.9] md:text-7xl">
            Built for
            <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Elite Performance
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
            A performance system designed for serious athletes committed to
            elite-level growth, discipline, and competitive excellence.
          </p>
        </motion.div>
      </section>

      {/* ───────────────── STORY SECTIONS ───────────────── */}
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
              className="sticky top-0 flex h-screen items-center justify-center"
            >
              <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-black/40"
              />

              <motion.div
                style={{ opacity, y, scale }}
                className="relative z-10 max-w-3xl px-6 text-center"
              >
                <h2 className="text-4xl font-black leading-tight md:text-6xl">
                  {s.title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="relative z-10 flex h-screen items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            Ready to
            <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Transform Performance?
            </span>
          </h2>

          <p className="mt-8 text-white/60">
            Join an elite system designed for serious athletes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/registration"
              className="rounded-full px-8 py-3.5 text-sm font-bold text-black transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #facc15, #f472b6)",
              }}
            >
              Start Training
            </a>

            <a
              href="/team"
              className="rounded-full border border-cyan-400/40 px-8 py-3.5 text-sm font-bold text-cyan-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Meet Athletes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
