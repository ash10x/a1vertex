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
import { getCldVideoUrl } from "next-cloudinary";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
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

  // ───────────────── CLOUDINARY VIDEO ─────────────────
  const videoUrl = getCldVideoUrl({
    src: "main4_nahyyf", // replace with your Cloudinary public ID
    width: 1920,
    height: 1080,
    format: "auto",
    quality: "auto",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const bgY = useTransform(smooth, [0, 1], ["0%", "10%"]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with API integration later
    console.log("Registration submitted:", form);
  };

  return (
    <section
      ref={ref}
      aria-label="Athlete Registration"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white"
    >
      {/* ───────────────── CINEMATIC BACKGROUND ───────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/video-poster.jpg"
            className="h-full w-full scale-[1.05] object-cover opacity-20"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </motion.div>

        {/* overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
      </div>

      {/* ───────────────── CONTENT ───────────────── */}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        {/* ───────────────── LEFT PANEL ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
          className="flex flex-col gap-6"
        >
          {/* intro */}
          <motion.div
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -4,
                  }
            }
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
              Registration System
            </p>

            <h3 className="mb-4 text-3xl font-black leading-tight">
              Join A1 Vertex Athletics
            </h3>

            <p className="leading-relaxed text-white/60">
              Submit your athlete details for structured evaluation and
              placement within our elite performance development system.
            </p>
          </motion.div>

          {/* process */}
          <motion.div
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -4,
                  }
            }
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-300">
              Evaluation Process
            </p>

            <ul className="space-y-4 text-sm text-white/65">
              {[
                "Performance testing & assessment",
                "Movement analysis",
                "Event grouping placement",
                "Monthly intake cycles",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* pricing */}
          <motion.div
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -4,
                  }
            }
            className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.04] to-pink-400/[0.04] p-8 backdrop-blur-xl transition-all duration-500"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-pink-400">
              Program Pricing
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  First-Time Athlete Registration
                </p>

                <h4 className="mt-2 text-4xl font-black">$1,150</h4>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Monthly Athlete Development
                </p>

                <h4 className="mt-2 text-3xl font-black">
                  $550<span className="text-lg text-white/50"> / month</span>
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ───────────────── FORM PANEL ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={1}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-pink-400">
            Athlete Form
          </p>

          <h3 className="mb-2 text-3xl font-black">Start Your Registration</h3>

          <p className="mb-8 text-sm leading-relaxed text-white/55">
            Complete the athlete intake form below to begin your evaluation and
            onboarding process.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* name */}
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-black/60"
            />

            {/* age + event */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="number"
                placeholder="Age"
                value={form.age}
                required
                onChange={(e) =>
                  setForm({
                    ...form,
                    age: e.target.value,
                  })
                }
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-black/60"
              />

              <input
                type="text"
                placeholder="Primary Event"
                value={form.event}
                required
                onChange={(e) =>
                  setForm({
                    ...form,
                    event: e.target.value,
                  })
                }
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-black/60"
              />
            </div>

            {/* email */}
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-black/60"
            />

            {/* phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-black/60"
            />

            {/* experience */}
            <textarea
              placeholder="Athletic Experience"
              value={form.experience}
              rows={5}
              onChange={(e) =>
                setForm({
                  ...form,
                  experience: e.target.value,
                })
              }
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-black/60"
            />

            {/* submit */}
            <motion.button
              type="submit"
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: 1.03,
                    }
              }
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 py-3.5 text-sm font-black text-black transition-all duration-300"
            >
              Submit Registration
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
