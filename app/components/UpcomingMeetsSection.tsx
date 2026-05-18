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
      delay: i * 0.12,
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
    <section
      className="relative py-24 px-6 bg-[#080808] overflow-hidden"
      aria-label="Upcoming Meets"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="text-center mb-12"
        >
          <h2 className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Upcoming Competitions
          </h2>

          <h3 className="text-white text-3xl md:text-4xl font-black">
            Race Calendar & Championship Meets
          </h3>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Key AAU, USATF, and local invitational events where A1 Vertex
            athletes compete throughout the season.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {MEETS.map((meet, i) => (
            <motion.div
              key={meet.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={meet.image}
                  alt={meet.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                    {meet.type}
                  </span>

                  <span className="text-white/40 text-xs">{meet.date}</span>
                </div>

                <h4 className="text-white font-black text-lg">{meet.title}</h4>

                <p className="text-white/60 text-sm mt-2">{meet.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm">
            Meet schedule is updated throughout the season based on
            qualification and athlete progression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
