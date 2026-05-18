"use client";

import {
  motion,
  Variants,
  cubicBezier,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: cubicBezier(0.22, 1, 0.36, 1),
      delay: i * 0.1,
    },
  }),
};

const COACHES = [
  {
    name: "Coach Rivera",
    title: "Head Sprint Coach — A1 Vertex Athletics",
    image: "/images/coaches/coachkai.jpeg",
    bio: `International-level sprint coach and Three-Time Olympian
    representing Trinidad & Tobago, bringing elite sprint systems,
    discipline-based development, and world-class athlete experience
    to A1 Vertex Athletics.`,
  },
];

export default function CoachesSection() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const bgY = useTransform(smooth, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-[#080808] overflow-hidden text-white"
      aria-label="Meet Our Coaches"
    >
      {/* ───────────────── CINEMATIC BACKGROUND ───────────────── */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video/main3.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ───────────────── HEADER ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
            Coaching System
          </p>

          <h3 className="text-4xl md:text-5xl font-black">
            Built by Experience.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Driven by Results.
            </span>
          </h3>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto">
            A performance-driven coaching team focused on structured athlete
            development.
          </p>
        </motion.div>

        {/* ───────────────── GRID ───────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h4 className="text-xl font-black">{coach.name}</h4>

                <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] mt-1">
                  {coach.title}
                </p>

                <p className="text-white/60 text-sm mt-4 leading-relaxed">
                  {coach.bio}
                </p>
              </div>

              {/* subtle glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-cyan-400/5" />
            </motion.div>
          ))}
        </div>

        {/* ───────────────── CTA ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={4}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="/coaches"
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-black text-black text-sm"
            style={{
              background: "linear-gradient(90deg, #22d3ee, #f472b6)",
            }}
          >
            View Full Coaching Staff
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
