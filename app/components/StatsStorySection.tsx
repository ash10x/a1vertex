"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.12,
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
  return (
    <section
      className="relative py-24 px-6 bg-[#080808] overflow-hidden"
      aria-label="About A1 Vertex Athletics"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[460px] h-[460px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0 as number}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <h2 className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Our Story
            </h2>

            <h3 className="text-white text-2xl md:text-3xl font-black mb-4 leading-tight">
              Built for Athletes Who Want More
            </h3>

            <p className="text-white/60 leading-relaxed">
              A1 Vertex Athletics was created to build a structured
              high-performance environment where athletes are developed with
              purpose, discipline, and long-term vision. What began as a small
              training group has evolved into a performance system focused on
              real athletic growth and measurable results.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={1 as number}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <h2 className="text-yellow-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Mission Statement
            </h2>

            <h3 className="text-white text-2xl md:text-3xl font-black mb-4">
              Develop. Elevate. Sustain Excellence.
            </h3>

            <p className="text-white/60 leading-relaxed">
              Our mission is to maximize every athlete’s potential through
              structured coaching, accountability, and individualized training
              systems designed for long-term success.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={2 as number}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <h2 className="text-pink-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Core Principles
            </h2>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold">
                  Individualized Athlete Development
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every athlete receives tailored programming based on
                  strengths, weaknesses, and performance goals.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold">
                  No Favoritism / Equal Opportunity
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Opportunity is earned through effort and consistency—every
                  athlete receives equal coaching attention and development
                  focus.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={3 as number}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <h2 className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Why A1 Vertex Athletics?
            </h2>

            <h3 className="text-white text-2xl md:text-3xl font-black mb-6">
              Complete Athlete Development System
            </h3>

            <div className="grid gap-3">
              {WHY_POINTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={4 as number}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <h2 className="text-yellow-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Events We Focus On
            </h2>

            <h3 className="text-white text-2xl md:text-3xl font-black mb-6">
              Sprint & Middle Distance Development
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {EVENTS.map((event) => (
                <div
                  key={event.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h4 className="text-white font-black text-lg">
                      {event.title}
                    </h4>
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
