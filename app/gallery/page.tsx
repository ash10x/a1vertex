"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

/* =========================
   MEDIA SYSTEM
========================= */
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
    title: "Highlight Breakdown",
    type: "video",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-pink-500/10 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Culture • Media • Performance Identity
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            A1 Vertex Gallery.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
              Discipline in Motion.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Training culture, competition moments, and athlete progression —
            captured through performance and discipline.
          </p>
        </motion.div>
      </section>

      {/* CONTENT STRIP */}
      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Training Culture",
              desc: "Daily discipline, repetition, and structured development",
            },
            {
              title: "Competition Moments",
              desc: "Race execution, performance, and championship environments",
            },
            {
              title: "Athlete Progression",
              desc: "Before-and-after development across the season",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <h3 className="font-black">{item.title}</h3>
              <p className="text-white/60 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MEDIA GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.media}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                  {item.type === "video" ? "Video Content" : "Photography"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YOUTUBE HUB */}
      <section className="px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center"
        >
          <h2 className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Video Performance Hub
          </h2>

          <h3 className="text-3xl font-black mb-3">
            Training Breakdown & Race Analysis
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Full sprint breakdowns, athlete progression clips, and elite
            performance analysis from A1 Vertex Athletics.
          </p>

          <a
            href="https://youtube.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
          >
            Watch Full Content
          </a>
        </motion.div>
      </section>
    </main>
  );
}
