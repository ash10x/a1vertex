"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

/* =========================
   COACH KAI SELVON (FULL DATA)
========================= */

const KAI_HIGHLIGHTS = [
  "Three-Time Olympian — Trinidad & Tobago",
  "World Athletics Relays Bronze Medalist",
  "Commonwealth Games Finalist",
  "Pan American Junior Silver Medalist",
  "CAC Championships Silver Medalist",
  "Multiple-Time National Champion",
  "Trinidad & Tobago Junior Record Holder",
  "Former Auburn University Sprinter",
  "SEC Indoor Champion",
  "NCAA Division I Athlete",
];

const KAI_FOCUS = [
  "Sprint mechanics",
  "Acceleration development",
  "Speed endurance",
  "Relay development",
  "Race execution",
  "Competition preparation",
  "Athlete confidence & discipline",
];

/* =========================
   SUPPORT COACHES
========================= */

const COACHES = [
  {
    name: "Coach Rivera",
    role: "Strength & Conditioning Coach",
    qualifications: "NSCA Certified | Sports Performance Specialist",
    experience: "10+ years in elite sprint & athletic development systems",
    image: "/images/coaches/coach-rivera.jpg",
    bio: "Specializes in explosive strength development, sprint-specific conditioning, movement efficiency, and long-term athlete durability.",
    specialties: [
      "Explosive power development",
      "Sprint-specific strength training",
      "Movement mechanics",
      "Injury prevention systems",
      "Athlete durability programming",
      "Performance conditioning cycles",
    ],
    philosophy: "Strength builds speed. Movement quality builds longevity.",
  },

  {
    name: "Coach Thompson",
    role: "Middle Distance Development Coach",
    qualifications: "Endurance Performance Specialist | Track & Field Coach",
    experience: "8+ years coaching 400m–800m competitive athletes",
    image: "/images/coaches/coach-thompson.jpg",
    bio: "Focused on endurance speed, pacing strategy, aerobic development, and tactical race execution.",
    specialties: [
      "400m / 800m development",
      "Endurance speed systems",
      "Race strategy & pacing",
      "Aerobic conditioning",
      "Competition preparation",
      "Tactical execution",
    ],
    philosophy:
      "Consistency and discipline build championship endurance athletes.",
  },

  {
    name: "Coach Daniels",
    role: "Mental Performance Coach",
    qualifications: "Certified Mental Performance Consultant (CMPC)",
    experience: "Youth & elite athlete mindset development specialist",
    image: "/images/coaches/coach-daniels.jpg",
    bio: "Specializes in confidence building, focus training, competition mindset, and emotional resilience.",
    specialties: [
      "Confidence development",
      "Competition mindset training",
      "Mental resilience systems",
      "Focus under pressure",
      "Athlete accountability",
      "Leadership development",
    ],
    philosophy: "Elite performance starts with elite thinking under pressure.",
  },
];

/* =========================
   PAGE
========================= */

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-pink-500/10 blur-[160px] rounded-full" />
      </div>

      {/* =========================
          HERO — COACH KAI SELVON
      ========================= */}
      <section className="relative pt-36 pb-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
        >
          {/* LEFT */}
          <div>
            {/* HEADER + QUALIFICATION */}
            <div className="mb-6">
              <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold">
                Head Sprint Coach — A1 Vertex Athletics
              </p>

              <p className="text-white/50 text-xs mt-2 tracking-wide">
                USATF Level 1 Certified • Three-Time Olympian • NCAA Division I
                Athlete • Elite Sprint Development Specialist
              </p>

              {/* CREDENTIAL BADGES */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "USATF Level 1",
                  "Olympian",
                  "NCAA D1 Athlete",
                  "National Champion",
                  "Elite Sprint Coach",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
              Coach Kai
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
                Selvon
              </span>
            </h1>

            <p className="text-white/70 mt-8 text-lg max-w-2xl">
              International-level sprint coach and Three-Time Olympian
              representing Trinidad & Tobago, bringing elite sprint systems,
              discipline-based development, and world-class athlete experience
              to A1 Vertex Athletics.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid md:grid-cols-2 gap-2 mt-10 text-sm text-white/70">
              {KAI_HIGHLIGHTS.map((h) => (
                <p key={h}>• {h}</p>
              ))}
            </div>

            {/* FOCUS */}
            <div className="mt-10">
              <h3 className="text-cyan-400 text-xs uppercase tracking-[0.25em] mb-3">
                Areas of Focus
              </h3>
              <div className="grid md:grid-cols-2 gap-2 text-white/70 text-sm">
                {KAI_FOCUS.map((f) => (
                  <p key={f}>• {f}</p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[520px] rounded-[2rem] overflow-hidden border border-white/10">
            <Image
              src="/images/coaches/coachkai.jpeg"
              alt="Coach Kai Selvon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* =========================
          OTHER COACHES
      ========================= */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-black">Complete Performance Staff</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Strength. Speed. Mindset. Development systems built for elite
              athlete progression.
            </p>
          </motion.div>

          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="grid lg:grid-cols-[420px_1fr] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {/* IMAGE */}
              <div className="relative h-[420px]">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-10">
                <h3 className="text-3xl font-black">{coach.name}</h3>

                <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-2">
                  {coach.role}
                </p>

                <p className="text-white/50 text-xs mt-1">
                  {coach.qualifications}
                </p>

                <p className="text-white/60 mt-6">{coach.bio}</p>

                <div className="grid md:grid-cols-2 gap-2 mt-8 text-white/70 text-sm">
                  {coach.specialties.map((s) => (
                    <p key={s}>• {s}</p>
                  ))}
                </div>

                <p className="mt-8 text-white/80 italic">
                  “{coach.philosophy}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
