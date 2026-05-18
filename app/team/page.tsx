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
      ease: [0.22, 1, 0.36, 1],
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
    bio: "Explosive starter with strong acceleration phase development.",
    school: "Kingston High School",
  },
  {
    name: "Tyrese Williams",
    image: "/images/athletes/athlete-2.jpg",
    ageGroup: "U20",
    events: "400m",
    pbs: "47.62s",
    achievements: "Regional Champion",
    bio: "Strong endurance-based sprinter with elite race execution.",
    school: "St. Jago High School",
  },
  {
    name: "Andre Thompson",
    image: "/images/athletes/athlete-3.jpg",
    ageGroup: "U16",
    events: "200m / 400m",
    pbs: "22.10s / 50.40s",
    achievements: "School Record Holder",
    bio: "Technical sprinter focused on mechanics and consistency.",
    school: "Excelsior High School",
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
  },
];

export default function TeamPage() {
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
            Current Squad
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Our Athletes.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Built for Performance.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            A growing team of disciplined athletes committed to structured
            development, competition readiness, and long-term success.
          </p>
        </motion.div>
      </section>

      {/* ATHLETE SPOTLIGHT */}
      <section className="px-6 pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8"
        >
          <h2 className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Athlete Spotlight
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/athletes/spotlight.jpg"
                alt="Athlete Spotlight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div>
              <h3 className="text-2xl font-black mb-2">
                Performance Highlight of the Month
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Featured athlete recognition for exceptional training
                consistency, competition results, and performance breakthroughs
                within the A1 Vertex system.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="px-4 py-1 rounded-full text-xs bg-white/10 text-white/70">
                  Sprint Progression
                </span>
                <span className="px-4 py-1 rounded-full text-xs bg-white/10 text-white/70">
                  Discipline Award
                </span>
                <span className="px-4 py-1 rounded-full text-xs bg-white/10 text-white/70">
                  PR Breakthrough
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ATHLETES GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATHLETES.map((athlete, i) => (
            <motion.div
              key={athlete.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-black">{athlete.name}</h2>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-[0.2em]">
                    {athlete.ageGroup}
                  </span>
                </div>

                <p className="text-white/60 text-sm">
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

                <p className="text-white/70 text-sm italic border-t border-white/10 pt-3">
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
