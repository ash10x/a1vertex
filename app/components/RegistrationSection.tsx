"use client";

import {
  motion,
  cubicBezier,
  Variants,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useState, useRef } from "react";

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

export default function RegistrationSection() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    event: "",
    email: "",
    phone: "",
    experience: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // safe placeholder (replace with API later)
    console.log("Registration submitted:", form);
  };

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-[#080808] overflow-hidden text-white"
    >
      {/* ───────────────── CINEMATIC BACKGROUND ───────────────── */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 scale-[1.05]"
          >
            <source src="/video/main.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* ───────────────── LEFT PANEL ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="flex flex-col gap-6"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
              Registration System
            </p>

            <h3 className="text-3xl font-black mb-4">
              Join A1 Vertex Athletics
            </h3>

            <p className="text-white/60 leading-relaxed">
              Submit your athlete details for structured evaluation and
              placement within our performance system.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <p className="text-yellow-300 text-xs tracking-[0.3em] uppercase mb-4">
              Evaluation Process
            </p>

            <ul className="space-y-3 text-white/60 text-sm">
              <li>• Performance testing & assessment</li>
              <li>• Movement analysis</li>
              <li>• Event grouping placement</li>
              <li>• Monthly intake cycles</li>
            </ul>
          </div>
        </motion.div>

        {/* ───────────────── FORM PANEL ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
          className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <p className="text-pink-400 text-xs tracking-[0.3em] uppercase mb-4">
            Athlete Form
          </p>

          <h3 className="text-2xl font-black mb-6">Start Your Registration</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
              />

              <input
                type="text"
                placeholder="Event"
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <textarea
              placeholder="Athletic Experience"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <motion.button
              type="submit"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
            >
              Submit Registration
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
