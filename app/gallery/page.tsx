"use client";

import { motion, Variants } from "framer-motion";

// ── FIX: Strict Variants typing (Vercel-safe) ───────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

const GALLERY = [
  {
    title: "Practice Culture",
    type: "image",
    media: "/images/gallery/practice-1.jpg",
  },
  {
    title: "Track Sessions",
    type: "image",
    media: "/images/gallery/practice-2.jpg",
  },
  {
    title: "Meet Day Energy",
    type: "image",
    media: "/images/gallery/meet-1.jpg",
  },
  {
    title: "Athlete Focus",
    type: "image",
    media: "/images/gallery/meet-2.jpg",
  },
  {
    title: "Cinematic Reel",
    type: "video",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Highlight Clip",
    type: "video",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function GalleryPage() {
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
            Culture & Branding
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Gallery.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Built on Discipline. Captured in Motion.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Practice sessions, meet performances, cinematic reels, and highlight
            moments that define the A1 Vertex culture.
          </p>
        </motion.div>
      </section>

      {/* GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={item.media}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <div className="relative h-72 w-full">
                  <iframe
                    src={item.media}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* LABEL */}
              <div className="p-4">
                <h3 className="text-sm font-black">{item.title}</h3>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-1">
                  {item.type === "video" ? "Video" : "Photo"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YOUTUBE INTEGRATION */}
      <section className="px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
        >
          <h2 className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            YouTube Integration
          </h2>

          <h3 className="text-2xl font-black mb-3">
            Official Training Highlights
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Watch full training breakdowns, race analysis, and athlete
            progression videos directly from our YouTube channel.
          </p>

          <a
            href="https://youtube.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
          >
            Visit Channel
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
