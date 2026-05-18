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

const ATHLETES = [
  {
    name: "Jamal Richards",
    image: "/images/athletes/athlete-1.jpg",
    ageGroup: "U18",
    events: "100m / 200m",
    pbs: "10.78s / 21.95s",
    achievements: "National Junior Finalist",
    bio: "Explosive starter with elite acceleration phase development.",
    school: "Kingston High School",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Tyrese Williams",
    image: "/images/athletes/athlete-2.jpg",
    ageGroup: "U20",
    events: "400m",
    pbs: "47.62s",
    achievements: "Regional Champion",
    bio: "Strong endurance-based sprinter with high-level race execution.",
    school: "St. Jago High School",
    accent: "from-pink-400 to-orange-400",
  },
  {
    name: "Andre Thompson",
    image: "/images/athletes/athlete-3.jpg",
    ageGroup: "U16",
    events: "200m / 400m",
    pbs: "22.10s / 50.40s",
    achievements: "School Record Holder",
    bio: "Technical sprinter focused on mechanics, rhythm, and consistency.",
    school: "Excelsior High School",
    accent: "from-yellow-300 to-pink-400",
  },
  {
    name: "Kadeem Brown",
    image: "/images/athletes/athlete-4.jpg",
    ageGroup: "U20",
    events: "800m",
    pbs: "1:52.30",
    achievements: "National Qualifier",
    bio: "Tactical middle-distance athlete with strong finishing speed.",
    school: "Campion College",
    accent: "from-cyan-400 to-pink-400",
  },
];

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
          className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center p-10 rounded-[2rem] border border-white/10 bg-white/[0.03]"
        >
          <div className="relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10">
            <Image
              src="/images/athletes/spotlight.jpg"
              alt="Athlete Spotlight"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          <div>
            <h2 className="text-4xl font-black">Athlete Spotlight</h2>

            <p className="text-white/60 mt-6 leading-relaxed">
              Recognizing standout performances, training consistency, and
              breakthrough development within the A1 Vertex system.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Performance Growth",
                "Discipline Recognition",
                "PR Breakthroughs",
                "Elite Progression",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 rounded-full text-xs bg-white/10 text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= ATHLETES GRID ================= */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATHLETES.map((athlete, i) => (
            <motion.div
              key={athlete.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {/* IMAGE */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-black">{athlete.name}</h2>
                  <span className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase">
                    {athlete.ageGroup}
                  </span>
                </div>

                <p className="text-white/60 text-sm mt-3">
                  <span className="text-white/80 font-semibold">Events:</span>{" "}
                  {athlete.events}
                </p>

                <p className="text-white/60 text-sm">
                  <span className="text-white/80 font-semibold">PBs:</span>{" "}
                  {athlete.pbs}
                </p>

                <p className="text-white/60 text-sm">
                  <span className="text-white/80 font-semibold">
                    Achievements:
                  </span>{" "}
                  {athlete.achievements}
                </p>

                <p className="text-white/60 text-sm">
                  <span className="text-white/80 font-semibold">School:</span>{" "}
                  {athlete.school}
                </p>

                <p className="text-white/70 text-sm italic border-t border-white/10 pt-3 mt-4">
                  {athlete.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
