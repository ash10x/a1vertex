"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

export default function RegistrationPage() {
  const [form, setForm] = useState({
    athleteName: "",
    age: "",
    events: "",
    experience: "",
    parentName: "",
    email: "",
    phone: "",
    emergencyContact: "",
    tryoutDate: "",
    waitlist: false,
  });

  return (
    <main className="min-h-screen bg-[#080808] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black">
            Athlete Registration
          </h1>

          <p className="text-white/60 mt-4">
            Register your interest for A1 Vertex Athletics. All submissions are
            reviewed for placement, tryouts, or waitlist status.
          </p>
        </motion.div>
      </section>

      {/* FORM */}
      <section className="relative px-6 pb-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* LEFT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <h2 className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                Registration Purpose
              </h2>
              <p className="text-white/60 text-sm">
                This form allows athletes and parents to submit interest for
                training, evaluations, and placement within A1 Vertex Athletics.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <h2 className="text-pink-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                Tryout / Waitlist Options
              </h2>

              <label className="flex items-center gap-3 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={form.waitlist}
                  onChange={(e) =>
                    setForm({ ...form, waitlist: e.target.checked })
                  }
                />
                Join Waitlist (if slots are full)
              </label>

              <input
                type="date"
                value={form.tryoutDate}
                onChange={(e) =>
                  setForm({ ...form, tryoutDate: e.target.value })
                }
                className="mt-4 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
              />
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <h2 className="text-yellow-300 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                Payment Integration
              </h2>
              <p className="text-white/60 text-sm">
                Secure payment gateway integration (Stripe / PayPal) for
                registration fees, monthly training plans, or tryout access.
              </p>

              <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm">
                Proceed to Payment
              </button>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] space-y-4"
          >
            <h2 className="text-white font-black text-xl mb-2">
              Athlete & Parent Information
            </h2>

            <input
              placeholder="Athlete Name"
              value={form.athleteName}
              onChange={(e) =>
                setForm({ ...form, athleteName: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Age"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/10"
              />

              <input
                placeholder="Events (100m, 200m...)"
                value={form.events}
                onChange={(e) => setForm({ ...form, events: e.target.value })}
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/10"
              />
            </div>

            <textarea
              placeholder="Previous Track Experience"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
              rows={3}
            />

            <input
              placeholder="Parent / Guardian Name"
              value={form.parentName}
              onChange={(e) => setForm({ ...form, parentName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <input
              placeholder="Emergency Contact"
              value={form.emergencyContact}
              onChange={(e) =>
                setForm({ ...form, emergencyContact: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            {/* Waiver Upload */}
            <div className="border border-white/10 rounded-xl p-4 bg-black/30">
              <p className="text-xs text-white/60 mb-2">Waiver Upload</p>
              <input type="file" className="text-sm text-white/60" />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
            >
              Submit Registration
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
