"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ── Social icons (inline SVG — no emoji, no text chars) ───────────────────────
const SOCIALS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#080808"
        />
      </svg>
    ),
  },
];

const MINI_STATS = [
  {
    value: "24/7",
    label: "Support",
    grad: "linear-gradient(135deg,#facc15,#fb923c)",
  },
  {
    value: "100%",
    label: "Dedication",
    grad: "linear-gradient(135deg,#f472b6,#fb7185)",
  },
  {
    value: "Pro",
    label: "Coaches",
    grad: "linear-gradient(135deg,#22d3ee,#38bdf8)",
  },
];

// ── Fade-up helper ────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ── Main component ────────────────────────────────────────────────────────────
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#080808] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=DM+Sans:wght@300;400;600&display=swap');`}</style>

      {/* ── Grid texture ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Parallax orbs ────────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={{ opacity: [0.08, 0.2, 0.08], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.06, 0.16, 0.06], scale: [1, 1.12, 1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244,114,182,0.18) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ════════════════════════════════════════════════════
          CTA BLOCK
      ════════════════════════════════════════════════════ */}
      <div ref={ctaRef} className="relative z-10 py-32 px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0)}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/25 bg-yellow-400/5 text-yellow-400 text-xs font-semibold tracking-[0.15em] uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"
              aria-hidden="true"
            />
            Join the Team
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-tighter leading-[0.92] mb-6"
          style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
        >
          <span className="text-white">Ready to </span>
          <span
            style={{
              background: "linear-gradient(90deg, #facc15, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Become Elite?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-white/40 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14 font-light"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Join A1 Vertex Athletics and transform your potential into
          championship performance. Our expert coaches and proven methodologies
          will elevate your athletic career to unprecedented heights.
        </motion.p>

        {/* Two-column layout: form + info */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-14"
        >
          {/* ── Contact form ──────────────────────────── */}
          <div
            className="lg:col-span-3 relative rounded-2xl p-7 flex flex-col gap-5"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "0.5px solid rgba(255,255,255,0.09)",
            }}
          >
            {/* Top beam */}
            <motion.div
              className="absolute top-0 left-0 h-[1.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, #facc15, #f472b6)" }}
              initial={{ width: "0%" }}
              animate={ctaInView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(34,211,238,0.1)",
                    border: "0.5px solid rgba(34,211,238,0.3)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-white font-semibold text-lg"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Message Sent!
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                noValidate
              >
                <p
                  className="text-white font-bold text-base mb-1"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  Send Us a Message
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs text-white/40 font-medium uppercase tracking-[0.1em]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "0.5px solid rgba(255,255,255,0.1)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(34,211,238,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs text-white/40 font-medium uppercase tracking-[0.1em]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "0.5px solid rgba(255,255,255,0.1)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(34,211,238,0.4)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs text-white/40 font-medium uppercase tracking-[0.1em]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about your goals..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/20 outline-none resize-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(34,211,238,0.4)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative self-start inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black text-sm overflow-hidden"
                  style={{
                    background: "linear-gradient(90deg, #facc15, #f472b6)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  Send Message
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6.5H11M7 2.5L11 6.5L7 10.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </form>
            )}
          </div>

          {/* ── Info panel ────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Quick contact */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(255,255,255,0.09)",
              }}
            >
              <p
                className="text-white font-bold text-sm uppercase tracking-[0.1em]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Quick Contact
              </p>

              <a
                href="mailto:info@a1vertexathletics.com"
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span
                  className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{
                    background: "rgba(250,204,21,0.08)",
                    border: "0.5px solid rgba(250,204,21,0.2)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 3.5h12v8H1zM1 3.5l6 4.5 6-4.5"
                      stroke="#facc15"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                info@a1vertexathletics.com
              </a>

              <a
                href="tel:+1234567890"
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span
                  className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{
                    background: "rgba(244,114,182,0.08)",
                    border: "0.5px solid rgba(244,114,182,0.2)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2.5s1 .5 2 2c.5 1 .5 2 .5 2s.5 1 1 1c.5 0 2-.5 3 .5s2 3 2 3a1 1 0 0 1-1.5 1C7 11 3 8 2 5.5A1 1 0 0 1 2 2.5z"
                      stroke="#f472b6"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                +1 (234) 567-890
              </a>
            </div>

            {/* Mini stats */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(255,255,255,0.09)",
              }}
            >
              <div className="grid grid-cols-3 gap-3">
                {MINI_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1 text-center"
                  >
                    <span
                      className="text-2xl font-black leading-none"
                      style={{
                        fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
                        background: s.grad,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.1em] text-white/30"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(255,255,255,0.09)",
              }}
            >
              <p
                className="text-white/30 text-xs uppercase tracking-[0.12em] font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Follow Our Journey
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    className="flex items-center justify-center w-9 h-9 rounded-xl text-white/50 hover:text-white transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Primary CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <motion.a
            href="mailto:info@a1vertexathletics.com"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 32px rgba(250,204,21,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-black text-sm overflow-hidden"
            style={{ background: "linear-gradient(90deg, #facc15, #f472b6)" }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            Start Training Today
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-white/70 text-sm border border-white/12 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2.5s1 .5 2 2c.5 1 .5 2 .5 2s.5 1 1 1c.5 0 2-.5 3 .5s2 3 2 3a1 1 0 0 1-1.5 1C7 11 3 8 2 5.5A1 1 0 0 1 2 2.5z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            Call Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
