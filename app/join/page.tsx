"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const PROGRAM_BENEFITS = [
  "Individualized Athlete Development",
  "Olympic-Level Sprint Coaching",
  "Strength & Conditioning Program From a Specialist For Youths Performance & Development",
  "Recovery & Wellness Systems From Specialists With Over 10 Years Experience With Youths",
  "Meet Preparation & Support",
  "Hydration Drinks, Water & Snacks on Practice Days & Meet Days",
  "Athlete Progress Tracking",
  "Competition Uniform Package",
];

const GEAR_ITEMS = [
  "2 Competition Uniforms",
  "Sweatsuits / Warmups",
  "Training Shirts",
  "Athlete Backpack",
  "Recovery Roller / Mat",
  "Compression Sleeves",
  "Athlete Headbands",
  "Branded Athlete Gear",
];

export default function JoinPage() {
  const [activeTab, setActiveTab] = useState<"athlete" | "parent">("athlete");

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BG */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-[11px] tracking-[0.3em] uppercase font-semibold">
            2026–2027 Athlete Development Program
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 mt-10 items-start">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
                Join
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
                  A1 Vertex Athletics
                </span>
              </h1>

              <p className="text-white/65 text-lg leading-relaxed max-w-3xl mt-8">
                A boutique youth athlete development program focused on
                individualized growth, discipline, confidence, mental strength,
                physical wellness, and elite long-term athlete progression.
              </p>

              {/* UPDATED PRICING CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {[
                  {
                    label: "First-Time Enrollment",
                    value: "$1,150",
                    desc: "Initial athlete onboarding & gear package",
                  },
                  {
                    label: "Elite Performance Development Program",
                    value: "$550",
                    desc: "Per athlete / billed monthly",
                  },
                  {
                    label: "Training Schedule",
                    value: "4–5 Days",
                    desc: "Structured weekly development",
                  },
                  {
                    label: "Athlete Capacity",
                    value: "12 Athletes",
                    desc: "6 boys • 6 girls",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-400/5" />

                    <div className="relative">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                        {item.label}
                      </p>

                      <h3 className="text-3xl font-black mt-3">{item.value}</h3>

                      <p className="text-white/50 text-sm mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold">
                Program Overview
              </p>

              <div className="space-y-5 mt-8">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Season
                  </p>

                  <h3 className="text-xl font-black mt-2">
                    September 2026 – July 2027
                  </h3>
                </div>

                {/* UPDATED PRICING STRUCTURE */}
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Program Pricing Structure
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-white/50 text-xs uppercase tracking-[0.2em]">
                        First-Time Athlete Enrollment
                      </p>

                      <h3 className="text-3xl font-black mt-2">$1,150</h3>

                      <p className="text-white/60 text-sm mt-2">
                        Includes onboarding, athlete gear package, uniforms, and
                        initial program setup.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-white/50 text-xs uppercase tracking-[0.2em]">
                        Monthly Athlete Tuition
                      </p>

                      <h3 className="text-3xl font-black mt-2">$550</h3>

                      <p className="text-white/60 text-sm mt-2">
                        Covers structured coaching, strength development,
                        recovery support, training sessions, and athlete
                        development systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Athlete Structure
                  </p>

                  <p className="text-white/70 mt-2">6 Boys • 6 Girls</p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-white/65 leading-relaxed">
                    Built for athletes who want elite development, structure,
                    accountability, confidence, and long-term progression.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10"
          >
            <h2 className="text-4xl font-black">What Athletes Receive</h2>

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              {PROGRAM_BENEFITS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-white/80 text-sm">✔ {item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10"
          >
            <h2 className="text-4xl font-black">Athlete Gear Package</h2>

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              {GEAR_ITEMS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-white/80 text-sm">• {item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/5">
              <p className="text-cyan-300 text-sm leading-relaxed">
                All gear includes official A1 Vertex Athletics branding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORMS */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-2">
              <button
                onClick={() => setActiveTab("athlete")}
                className={`px-6 py-3 rounded-full text-sm font-black transition ${
                  activeTab === "athlete"
                    ? "bg-gradient-to-r from-cyan-400 to-pink-400 text-black"
                    : "text-white/60"
                }`}
              >
                Athlete Application
              </button>

              <button
                onClick={() => setActiveTab("parent")}
                className={`px-6 py-3 rounded-full text-sm font-black transition ${
                  activeTab === "parent"
                    ? "bg-gradient-to-r from-cyan-400 to-pink-400 text-black"
                    : "text-white/60"
                }`}
              >
                Parent Registration
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "athlete" && (
              <motion.div
                key="athlete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
              >
                <div className="mb-10">
                  <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold">
                    Athlete Registration
                  </p>

                  <h2 className="text-4xl font-black mt-4">
                    Apply as an Athlete
                  </h2>
                </div>

                <form className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Athlete Full Name"
                    className="input"
                  />

                  <input type="date" className="input" />

                  <input
                    type="text"
                    placeholder="School Name"
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Primary Events"
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Current Personal Bests"
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Athlete Phone Number"
                    className="input"
                  />

                  <input
                    type="email"
                    placeholder="Athlete Email"
                    className="input md:col-span-2"
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us about your goals, experience, and why you want to join A1 Vertex Athletics."
                    className="input resize-none md:col-span-2"
                  />

                  <button
                    type="submit"
                    className="mt-3 inline-flex justify-center items-center rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 px-8 py-4 text-black font-black text-sm md:col-span-2"
                  >
                    Submit Athlete Application
                  </button>
                </form>
              </motion.div>
            )}

            {activeTab === "parent" && (
              <motion.div
                key="parent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
              >
                <div className="mb-10">
                  <p className="text-pink-400 text-xs uppercase tracking-[0.3em] font-semibold">
                    Parent Registration
                  </p>

                  <h2 className="text-4xl font-black mt-4">Join as a Parent</h2>
                </div>

                <form className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Parent / Guardian Full Name"
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Relationship to Athlete"
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Athlete Name"
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Emergency Contact Number"
                    className="input"
                  />

                  <input
                    type="email"
                    placeholder="Parent Email Address"
                    className="input"
                  />

                  <input
                    type="tel"
                    placeholder="Parent Phone Number"
                    className="input"
                  />

                  <textarea
                    rows={5}
                    placeholder="Additional information, athlete needs, questions, or concerns."
                    className="input resize-none md:col-span-2"
                  />

                  <button
                    type="submit"
                    className="mt-3 inline-flex justify-center items-center rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 px-8 py-4 text-black font-black text-sm md:col-span-2"
                  >
                    Submit Parent Registration
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 pb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 md:p-16 text-center"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold">
            Our Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-6">
            Every Athlete Develops Differently
          </h2>

          <p className="text-white/65 leading-relaxed mt-8 max-w-3xl mx-auto">
            We believe individualized development matters. Every athlete has
            unique strengths, abilities, learning styles, and growth timelines.
          </p>

          <div className="mt-12 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
            BE GREAT.
          </div>
        </motion.div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem 1.1rem;
          color: white;
          outline: none;
          transition: 0.25s ease;
        }

        .input:focus {
          border-color: rgba(34, 211, 238, 0.5);
          box-shadow: 0 0 0 1px rgba(34, 211, 238, 0.15);
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </main>
  );
}
