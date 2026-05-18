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

const COACHES = [
  {
    name: "Coach Daniels",
    title: "Head Sprint Coach",
    image: "/images/coaches/coach-1.jpg",
    bio: "Specializes in elite sprint mechanics, acceleration development, and race execution strategy.",
  },
  {
    name: "Coach Rivera",
    title: "Strength & Conditioning Coach",
    image: "/images/coaches/coach-2.jpg",
    bio: "Focuses on explosive power, injury prevention, and long-term athletic durability.",
  },
  {
    name: "Coach Thompson",
    title: "Middle Distance Coach",
    image: "/images/coaches/coach-3.jpg",
    bio: "Develops endurance speed, pacing strategy, and tactical race awareness.",
  },
];

export default function CoachesSection() {
  return (
    <section
      className="relative py-24 px-6 bg-[#080808] overflow-hidden"
      aria-label="Meet Our Coaches"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-pink-500/10 blur-3xl rounded-full" />
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
            Meet Our Coaches
          </h2>

          <h3 className="text-white text-3xl md:text-4xl font-black">
            Built by Experience. Driven by Results.
          </h3>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A dedicated coaching team focused on developing athletes through
            structure, discipline, and individualized performance systems.
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-white font-black text-xl">{coach.name}</h4>

                <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-semibold mt-1">
                  {coach.title}
                </p>

                <p className="text-white/60 text-sm mt-4 leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="/coaches"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2
              px-8 py-3.5 rounded-full
              bg-gradient-to-r from-cyan-400 to-pink-400
              text-black font-black text-sm
              shadow-[0_0_30px_rgba(34,211,238,0.25)]
              transition-all
            "
          >
            View Full Coaching Staff
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
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
      </div>
    </section>
  );
}
