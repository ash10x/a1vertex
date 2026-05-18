"use client";

import { motion, Variants } from "framer-motion";
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

const MEETS = [
  {
    title: "AAU Summer Nationals",
    type: "AAU Meet",
    date: "July 2026",
    image: "/images/meets/aau-nationals.jpg",
    location: "Orlando, FL",
  },
  {
    title: "USATF Junior Olympics",
    type: "USATF Meet",
    date: "August 2026",
    image: "/images/meets/usatf-jo.jpg",
    location: "Greensboro, NC",
  },
  {
    title: "South Florida Invitational",
    type: "Local Invitational",
    date: "June 2026",
    image: "/images/meets/local-invite.jpg",
    location: "Miami, FL",
  },
];

export default function UpcomingMeetsSection() {
  return (
    <section className="relative py-28 px-6 bg-[#080808] overflow-hidden text-white">
      {/* ───────────── CINEMATIC BACKGROUND ───────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Competition Schedule
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Upcoming Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Championship Season
            </span>
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto">
            AAU, USATF, and regional competitions where athletes compete,
            qualify, and progress through the season.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {MEETS.map((meet, i) => (
            <motion.article
              key={meet.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={meet.image}
                  alt={meet.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                    {meet.type}
                  </span>

                  <span className="text-white/40 text-xs">{meet.date}</span>
                </div>

                <h3 className="text-white font-black text-lg">{meet.title}</h3>

                <p className="text-white/60 text-sm mt-2">{meet.location}</p>
              </div>

              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-cyan-400/5" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          className="text-center mt-14"
        >
          <p className="text-white/50 text-sm">
            Schedule updates dynamically based on qualification and athlete
            progression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
