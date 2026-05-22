"use client";

import { motion, cubicBezier, Variants } from "framer-motion";
import RegistrationForm from "@/app/components/RegistrationForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
      delay: i * 0.1,
    },
  }),
};

const PROGRAM_HIGHLIGHTS = [
  "32-week structured development season",
  "4–5 training sessions per week",
  "Only 12 athletes accepted (6 boys / 6 girls)",
  "Olympic-level sprint coaching",
  "Strength & conditioning system",
  "Recovery & wellness support",
  "Athlete gear package included",
  "Meet preparation & support",
];

const BENEFITS = [
  {
    title: "Individualized Development",
    items: [
      "Personalized athlete programming",
      "Event-specific development",
      "Progression tracking",
      "Movement assessments",
    ],
  },
  {
    title: "Sprint & Technical Coaching",
    items: [
      "Three-time Olympian sprint coaching",
      "Sprint mechanics",
      "Acceleration development",
      "Race execution training",
    ],
  },
  {
    title: "Strength & Conditioning",
    items: [
      "Speed & power development",
      "Movement quality improvement",
      "Injury prevention support",
      "Athletic durability training",
    ],
  },
  {
    title: "Recovery & Wellness",
    items: [
      "Weekly recovery support",
      "Mobility & wellness checks",
      "Muscle recovery guidance",
      "Athlete maintenance support",
    ],
  },
  {
    title: "Nutrition & Hydration",
    items: [
      "Water & electrolytes",
      "Healthy athlete snacks",
      "Basic nutrition support",
      "Practice & meet hydration",
    ],
  },
  {
    title: "Athlete Gear Package",
    items: [
      "Competition uniforms",
      "Training apparel",
      "Athlete backpack",
      "Recovery accessories",
    ],
  },
];

const PRICING = [
  { label: "Monthly Tuition", value: "$550 / Month" },
  { label: "Program Duration", value: "11 Months" },
  { label: "Total Investment", value: "$6,050 Per Athlete" },
];

export default function RegistrationSection() {
  return (
    <section className="relative py-28 px-6 bg-[#080808] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-5">
            2026–2027 Athlete Development Program
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
            Elite Athlete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Development System
            </span>
          </h1>

          <p className="text-white/60 max-w-3xl mx-auto mt-6 leading-relaxed text-lg">
            A boutique high-performance training environment designed to develop
            disciplined, confident, and highly competitive athletes through
            individualized coaching and long-term progression systems.
          </p>
        </motion.div>

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="space-y-6"
          >
            {/* STRUCTURE */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h2 className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Program Structure
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/40 text-xs uppercase mb-2">Season</p>
                  <p className="text-white font-bold">Sept 2026 – July 2027</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/40 text-xs uppercase mb-2">
                    Duration
                  </p>
                  <p className="text-white font-bold">32 Weeks</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/40 text-xs uppercase mb-2">
                    Training
                  </p>
                  <p className="text-white font-bold">4–5 Sessions Weekly</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-white/40 text-xs uppercase mb-2">
                    Capacity
                  </p>
                  <p className="text-white font-bold">12 Athletes Only</p>
                </div>
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h2 className="text-yellow-300 text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Program Highlights
              </h2>

              <div className="grid gap-3">
                {PROGRAM_HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-black/20"
                  >
                    <span className="w-2 h-2 mt-1 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PRICING */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h2 className="text-pink-400 text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Investment
              </h2>

              <div className="space-y-4">
                {PRICING.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <span className="text-white/60 text-sm">{item.label}</span>

                    <span className="text-white font-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl h-fit sticky top-28"
          >
            <h2 className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
              Athlete Application
            </h2>

            <h3 className="text-white text-3xl font-black mb-6">
              Start Your Evaluation
            </h3>

            <RegistrationForm />
          </motion.div>
        </div>

        {/* BENEFITS SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Athlete Benefits
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white">
              What Athletes Receive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                <h3 className="text-white text-xl font-black mb-5">
                  {benefit.title}
                </h3>

                <div className="space-y-3">
                  {benefit.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-pink-400" />

                      <span className="text-white/65 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MOTTO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-center mt-24"
        >
          <p className="text-white/30 tracking-[0.45em] uppercase text-sm mb-4">
            A1 Vertex Athletics
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
            BE GREAT.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
