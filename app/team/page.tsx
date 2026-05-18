"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

/* =========================
   ROSTER
========================= */
const ATHLETES = [
  {
    name: "Aubrianna Grant",
    image: "/images/athletes/aubriannagrant.jpeg",
    dob: "January 8, 2014",
    age: 12,
    ageGroup: "U13",
    events: ["100m", "200m", "4×100 Relay"],
    pbs: { "100m": "12.79s", "200m": "26.20s" },
    highlights: [
      "4× AAU All-American",
      "2× Indoor All-American",
      "2× Outdoor All-American",
      "Multiple medal finishes in youth competition",
    ],
    attributes: [
      "Explosive sprint speed",
      "Strong competitive mentality",
      "Disciplined work ethic",
      "Coachable & team-oriented",
      "Leadership qualities",
    ],
    bio: "Aubrianna Grant is one of the rising young sprint athletes representing A1 Vertex Athletics. She began her track & field journey at the age of 9 and quickly developed a passion for sprinting and competition. Known for her natural speed, determination, and competitive mindset, she has consistently shown strong sprint mechanics and elite-level potential for her age group.",
    motto: "BE GREAT.",
    goals:
      "Continue developing as a student-athlete, improve sprint performances, compete at national-level competitions, and inspire other young athletes through hard work, discipline, and consistency.",
    accent: "from-cyan-400 to-blue-500",
    spotlight: true,
  },
  // ── Placeholder athletes – fill in real data when ready ──
  {
    name: "Athlete Coming Soon",
    image: "/images/athletes/placeholder.jpeg",
    dob: "—",
    age: null,
    ageGroup: "U15",
    events: ["100m", "200m"],
    pbs: { "100m": "—", "200m": "—" },
    highlights: [],
    attributes: [],
    bio: "Profile coming soon. Stay tuned for updates from A1 Vertex Athletics.",
    motto: "",
    goals: "",
    accent: "from-pink-400 to-rose-500",
    spotlight: false,
  },
  {
    name: "Athlete Coming Soon",
    image: "/images/athletes/placeholder.jpeg",
    dob: "—",
    age: null,
    ageGroup: "U17",
    events: ["400m", "4×400 Relay"],
    pbs: { "400m": "—" },
    highlights: [],
    attributes: [],
    bio: "Profile coming soon. Stay tuned for updates from A1 Vertex Athletics.",
    motto: "",
    goals: "",
    accent: "from-violet-400 to-purple-600",
    spotlight: false,
  },
];

const spotlight = ATHLETES.find((a) => a.spotlight)!;

/* =========================
   ATHLETE CARD
========================= */
function AthleteCard({
  athlete,
  i,
}: {
  athlete: (typeof ATHLETES)[0];
  i: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i}
      className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative h-80 overflow-hidden flex-shrink-0">
        <Image
          src={athlete.image}
          alt={athlete.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Age group badge */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold bg-black/60 border border-white/20 text-cyan-400">
          {athlete.ageGroup}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Name + events */}
        <div>
          <h2 className="text-xl font-black">{athlete.name}</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {athlete.events.map((e) => (
              <span
                key={e}
                className="px-2.5 py-0.5 rounded-full text-[11px] bg-white/10 text-white/70"
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* PBs */}
        {Object.keys(athlete.pbs).length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(athlete.pbs).map(([event, time]) => (
              <div
                key={event}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center"
              >
                <p className="text-[10px] text-white/50 uppercase tracking-widest">
                  {event}
                </p>
                <p className="text-lg font-black mt-0.5">{time}</p>
              </div>
            ))}
          </div>
        )}

        {/* Bio */}
        <p className="text-white/60 text-sm leading-relaxed">{athlete.bio}</p>

        {/* Highlights */}
        {athlete.highlights.length > 0 && (
          <ul className="space-y-1.5 border-t border-white/10 pt-4">
            {athlete.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-white/70"
              >
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${athlete.accent}`}
                />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Motto */}
        {athlete.motto && (
          <p
            className={`text-sm font-black italic text-transparent bg-clip-text bg-gradient-to-r ${athlete.accent} border-t border-white/10 pt-4`}
          >
            "{athlete.motto}"
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* =========================
   PAGE
========================= */
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-pink-500/10 blur-[160px] rounded-full" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
            A1 Vertex Athletics — Athlete Roster
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
            Our Athletes.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
              Built Through Structure.
            </span>
          </h1>

          <p className="text-white/70 mt-8 max-w-2xl mx-auto">
            A disciplined training system producing athletes through structured
            development, performance tracking, and long-term progression.
          </p>
        </motion.div>
      </section>

      {/* ================= SPOTLIGHT ================= */}
      <section className="px-6 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          {/* Header */}
          <div className="px-10 pt-10 pb-6 border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-1">
                Featured Athlete
              </p>
              <h2 className="text-3xl md:text-4xl font-black">
                Athlete Spotlight
              </h2>
            </div>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400">
              {spotlight.ageGroup} · {spotlight.age} yrs old
            </span>
          </div>

          {/* Body */}
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-0">
            {/* Image */}
            <div className="relative h-[480px] lg:h-auto overflow-hidden">
              <Image
                src={spotlight.image}
                alt={spotlight.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]" />

              {/* Motto overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  "{spotlight.motto}"
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col gap-7">
              {/* Name + events */}
              <div>
                <h3 className="text-3xl md:text-4xl font-black">
                  {spotlight.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {spotlight.events.map((e) => (
                    <span
                      key={e}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* PBs */}
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-widest mb-3">
                  Personal Bests
                </p>
                <div className="flex gap-3 flex-wrap">
                  {Object.entries(spotlight.pbs).map(([event, time]) => (
                    <div
                      key={event}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center min-w-[90px]"
                    >
                      <p className="text-[10px] text-white/50 uppercase tracking-widest">
                        {event}
                      </p>
                      <p className="text-2xl font-black mt-0.5">{time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-widest mb-3">
                  Overview
                </p>
                <p className="text-white/70 leading-relaxed text-sm">
                  {spotlight.bio}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-widest mb-3">
                  Career Highlights
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {spotlight.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br from-cyan-400 to-blue-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Attributes */}
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-widest mb-3">
                  Athlete Attributes
                </p>
                <div className="flex flex-wrap gap-2">
                  {spotlight.attributes.map((a) => (
                    <span
                      key={a}
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70 border border-white/10"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
                  Goals
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {spotlight.goals}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= ATHLETES GRID ================= */}
      <section className="px-6 pb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-10 flex items-end justify-between"
        >
          <div>
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-2">
              Full Roster
            </p>
            <h2 className="text-3xl font-black">Meet the Team</h2>
          </div>
          <p className="text-white/40 text-sm hidden md:block">
            {ATHLETES.length} athletes · Growing
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATHLETES.map((athlete, i) => (
            <AthleteCard key={athlete.name + i} athlete={athlete} i={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
