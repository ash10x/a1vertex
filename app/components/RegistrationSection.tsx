"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

export default function RegistrationSection() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    event: "",
    email: "",
    phone: "",
    experience: "",
  });

  return (
    <section
      className="relative py-24 px-6 bg-[#080808] overflow-hidden"
      aria-label="Athlete Registration"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT: Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="flex flex-col gap-6"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <h2 className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Register Now
            </h2>

            <h3 className="text-white text-3xl font-black mb-4">
              Join A1 Vertex Athletics
            </h3>

            <p className="text-white/60 leading-relaxed">
              Submit your athlete information to begin the evaluation process.
              All athletes are reviewed for placement based on performance
              level, commitment, and event fit.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <h3 className="text-yellow-300 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Tryout Information
            </h3>

            <ul className="space-y-3 text-white/60 text-sm">
              <li>• Open evaluations held monthly</li>
              <li>• Sprint & middle distance testing included</li>
              <li>• Performance + movement assessment</li>
              <li>• Placement based on development level</li>
              <li>• Limited athlete intake per cycle</li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
          className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <h2 className="text-pink-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Athlete Interest Form
          </h2>

          <h3 className="text-white text-2xl font-black mb-6">
            Start Your Registration
          </h3>

          <form className="space-y-4">
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
                placeholder="Primary Event (100m, 200m...)"
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <textarea
              placeholder="Athletic Experience / Background"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full py-3.5 rounded-full
                bg-gradient-to-r from-cyan-400 to-pink-400
                text-black font-black text-sm
                shadow-[0_0_30px_rgba(34,211,238,0.25)]
              "
            >
              Submit Registration
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
