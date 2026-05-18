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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
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
    image: "/images/events/200m.jpg",
    desc: "Speed endurance and curve mechanics.",
  },
  {
    title: "400m",
    image: "/images/events/400m.jpg",
    desc: "Lactic tolerance and race strategy.",
  },
  {
    title: "800m",
    image: "/images/events/800m.jpg",
    desc: "Endurance speed and tactical racing.",
  },
];

export default function StatsStorySection() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

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
      className="relative py-28 px-6 bg-[#080808] overflow-hidden text-white"
      aria-label="About A1 Vertex Athletics"
    >
      {/* ───────────────── CINEMATIC BACKGROUND LAYER ───────────────── */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25 scale-[1.05]"
          >
            <source src="/video/hero2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_60%)]" />
      </div>

      {/* ───────────────── MAIN GRID ───────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* STORY */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>

            <h3 className="text-3xl font-black mb-4">
              Built for Athletes Who Want More
            </h3>

            <p className="text-white/60 leading-relaxed">
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
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <p className="text-yellow-300 text-xs tracking-[0.3em] uppercase mb-4">
              Mission
            </p>

            <h3 className="text-3xl font-black mb-4">
              Develop. Elevate. Sustain Excellence.
            </h3>

            <p className="text-white/60">
              We maximize athlete potential through structured coaching,
              accountability, and performance systems.
            </p>
          </motion.div>

          {/* PRINCIPLES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <p className="text-pink-400 text-xs tracking-[0.3em] uppercase mb-4">
              Core Principles
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Individualized Development</h4>
                <p className="text-white/60 text-sm">
                  Every athlete receives tailored programming.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Equal Opportunity System</h4>
                <p className="text-white/60 text-sm">
                  Progress is earned through consistency and effort.
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
            viewport={{ once: true, amount: 0.4 }}
            custom={3}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
              Why A1 Vertex
            </p>

            <h3 className="text-3xl font-black mb-6">
              Complete Development System
            </h3>

            <div className="space-y-3">
              {WHY_POINTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* EVENTS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={4}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <p className="text-yellow-300 text-xs tracking-[0.3em] uppercase mb-4">
              Events
            </p>

            <h3 className="text-3xl font-black mb-6">
              Sprint & Middle Distance Focus
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {EVENTS.map((event) => (
                <div
                  key={event.title}
                  className="group relative rounded-2xl overflow-hidden border border-white/10"
                >
                  <div className="relative h-32">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  <div className="p-4">
                    <h4 className="font-black">{event.title}</h4>
                    <p className="text-white/60 text-sm">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
