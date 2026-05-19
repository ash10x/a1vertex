"use client";

import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { getCldVideoUrl } from "next-cloudinary";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

const WHY_POINTS = [
  "Individualized development",
  "Athlete assessments",
  "Strength & conditioning",
  "Recovery support",
  "Mindset development",
  "Long-term athlete growth",
];

const EVENTS = [
  {
    title: "100m",
    image: "/images/events/100m.jpg",
    desc: "Pure speed and explosive power development.",
  },
  {
    title: "200m",
    image: "/images/events/200m.webp",
    desc: "Speed endurance and curve mechanics.",
  },
  {
    title: "400m",
    image: "/images/events/400m.webp",
    desc: "Lactic tolerance and race strategy.",
  },
  {
    title: "800m",
    image: "/images/events/800m.webp",
    desc: "Endurance speed and tactical racing.",
  },
];

export default function StatsStorySection() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // ───────────────── CLOUDINARY VIDEO ─────────────────
  const videoUrl = getCldVideoUrl({
    src: "main2_lzc6sa", // replace with your Cloudinary public ID
    width: 1920,
    height: 1080,
    format: "auto",
    quality: "auto",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const bgY = useTransform(smooth, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      aria-label="About A1 Vertex Athletics"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white"
    >
      {/* ───────────────── CINEMATIC BACKGROUND ───────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
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
        </motion.div>

        {/* overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
      </div>

      {/* ───────────────── MAIN GRID ───────────────── */}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* STORY */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={0}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -4,
                  }
            }
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
              Our Story
            </p>

            <h3 className="mb-4 text-3xl font-black leading-tight">
              Built for Athletes Who Want More
            </h3>

            <p className="leading-relaxed text-white/60">
              A1 Vertex Athletics is a structured high-performance system built
              for measurable athletic development, discipline, and long-term
              progression.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={1}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -4,
                  }
            }
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-300">
              Mission
            </p>

            <h3 className="mb-4 text-3xl font-black leading-tight">
              Develop. Elevate. Sustain Excellence.
            </h3>

            <p className="leading-relaxed text-white/60">
              We maximize athlete potential through structured coaching,
              accountability, and elite performance systems.
            </p>
          </motion.div>

          {/* PRINCIPLES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={2}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -4,
                  }
            }
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-pink-400">
              Core Principles
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="font-black tracking-tight">
                  Individualized Development
                </h4>

                <p className="mt-1 text-sm text-white/60">
                  Every athlete receives tailored programming and measurable
                  performance tracking.
                </p>
              </div>

              <div>
                <h4 className="font-black tracking-tight">
                  Equal Opportunity System
                </h4>

                <p className="mt-1 text-sm text-white/60">
                  Progress is earned through consistency, discipline, and
                  commitment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* WHY */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={3}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
              Why A1 Vertex
            </p>

            <h3 className="mb-6 text-3xl font-black leading-tight">
              Complete Development System
            </h3>

            <div className="space-y-3">
              {WHY_POINTS.map((item) => (
                <motion.div
                  key={item}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          x: 4,
                        }
                  }
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

                  <span className="text-sm text-white/75">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* EVENTS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={4}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-300">
              Events
            </p>

            <h3 className="mb-6 text-3xl font-black leading-tight">
              Sprint & Middle Distance Focus
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {EVENTS.map((event, i) => (
                <motion.div
                  key={event.title}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: -4,
                        }
                  }
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                >
                  {/* image */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>

                  {/* content */}
                  <div className="relative z-10 p-4">
                    <h4 className="text-lg font-black">{event.title}</h4>

                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {event.desc}
                    </p>
                  </div>

                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-cyan-400/5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
