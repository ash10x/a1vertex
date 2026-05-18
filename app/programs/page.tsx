"use client";

import { motion, Variants } from "framer-motion";

// ── FIX: strict Framer Motion Variants typing ───────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

const PROGRAMS = [
  {
    title: "Sprint Development",
    focus: "Acceleration • Max Velocity • Mechanics",
    desc: "Structured sprint programming focused on technical execution, block starts, and top-end speed development.",
  },
  {
    title: "Speed Endurance",
    focus: "200m • 300m • 400m Performance",
    desc: "Builds the ability to maintain velocity under fatigue with race-specific conditioning and lactate tolerance work.",
  },
  {
    title: "Middle Distance Development",
    focus: "400m • 800m • Race Strategy",
    desc: "Combines aerobic conditioning, pacing strategy, and finishing speed for competitive middle-distance athletes.",
  },
  {
    title: "Strength & Conditioning",
    focus: "Power • Explosiveness • Injury Prevention",
    desc: "Athlete-specific strength programs designed to improve force production, durability, and sprint transfer.",
  },
  {
    title: "Recovery & Mobility",
    focus: "Regeneration • Flexibility • Injury Prevention",
    desc: "Structured recovery systems including mobility work, soft tissue care, and fatigue management protocols.",
  },
  {
    title: "Mindset Training",
    focus: "Focus • Confidence • Competition Readiness",
    desc: "Mental performance development to improve race-day execution, discipline, and psychological resilience.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="relative max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Athlete Development System
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Training Programs.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Built for Long-Term Growth.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            A structured performance system designed to develop complete
            athletes through progressive, individualized training.
          </p>
        </motion.div>
      </section>

      {/* CORE PROGRAMS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition"
            >
              <h2 className="text-xl font-black">{program.title}</h2>

              <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-2">
                {program.focus}
              </p>

              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PHILOSOPHY */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
          {[
            {
              title: "Individualized Training Plans",
              desc: "Every athlete receives a customized training structure based on performance level, goals, and development stage.",
            },
            {
              title: "Performance Assessments",
              desc: "Regular evaluations track speed, strength, endurance, and technical progress to guide training adjustments.",
            },
            {
              title: "Long-Term Development Philosophy",
              desc: "We prioritize sustainable athlete growth over short-term results, building progression across multiple seasons.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-black text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black">
            Built for Athletes Who Want More
          </h2>

          <p className="text-white/60 mt-4">
            Structured training, measurable progression, and complete athlete
            development.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex mt-8 items-center gap-2
              px-8 py-3.5 rounded-full
              bg-gradient-to-r from-cyan-400 to-pink-400
              text-black font-black text-sm
              shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            Join A1 Vertex
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
