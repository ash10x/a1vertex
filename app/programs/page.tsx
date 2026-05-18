"use client";

import { motion, Variants } from "framer-motion";

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

/* =========================
   PROGRAM SYSTEM MODULES
========================= */
const PROGRAMS = [
  {
    title: "Sprint Development System",
    focus: "Acceleration • Max Velocity • Mechanics",
    desc: "Structured sprint programming focused on technical execution, block starts, acceleration patterns, and elite top-end speed development.",
  },
  {
    title: "Speed Endurance System",
    focus: "200m • 300m • 400m Performance",
    desc: "Develops the ability to maintain velocity under fatigue through race-specific conditioning and lactate tolerance training.",
  },
  {
    title: "Middle Distance Performance",
    focus: "400m • 800m • Race Strategy",
    desc: "Combines aerobic development, pacing strategy, and finishing speed for competitive middle-distance athletes.",
  },
  {
    title: "Strength & Power System",
    focus: "Explosiveness • Force Production • Injury Prevention",
    desc: "Athlete-specific strength programming designed to improve power output, sprint transfer, and long-term durability.",
  },
  {
    title: "Recovery & Regeneration System",
    focus: "Mobility • Recovery • Load Management",
    desc: "Structured recovery protocols including mobility work, soft tissue care, and fatigue management systems.",
  },
  {
    title: "Mental Performance System",
    focus: "Focus • Confidence • Competition Execution",
    desc: "Develops psychological resilience, discipline, race-day execution, and elite competition mindset.",
  },
];

/* =========================
   SYSTEM PRINCIPLES
========================= */
const PRINCIPLES = [
  {
    title: "Individualized Athlete Development",
    desc: "Every athlete receives a tailored progression model based on ability, event group, and long-term goals.",
  },
  {
    title: "Performance Tracking & Assessment",
    desc: "Continuous evaluation of speed, strength, endurance, and mechanics to guide training progression.",
  },
  {
    title: "Long-Term Athletic Growth Model",
    desc: "We prioritize multi-season development rather than short-term performance spikes.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-pink-500/10 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Athlete Development System
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Training Programs.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
              Built as a Performance System.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            A structured development framework designed to build complete
            athletes through progressive, individualized training systems.
          </p>
        </motion.div>
      </section>

      {/* SYSTEM OVERVIEW STRIP */}
      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Speed & Mechanics",
              desc: "Acceleration, max velocity, sprint efficiency systems",
            },
            {
              title: "Strength & Conditioning",
              desc: "Power development, injury prevention, athletic durability",
            },
            {
              title: "Recovery & Mindset",
              desc: "Regeneration, discipline, and competition readiness",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <h3 className="font-black">{item.title}</h3>
              <p className="text-white/60 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAM SYSTEM */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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

      {/* DEVELOPMENT PRINCIPLES */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4">
          {PRINCIPLES.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-black mb-2">{item.title}</h3>
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
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black">
            Built for Long-Term Athlete Development
          </h2>

          <p className="text-white/60 mt-4">
            Structured systems, measurable progression, and complete performance
            development.
          </p>

          <motion.a
            href="/registration"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex mt-8 items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            Join A1 Vertex
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
