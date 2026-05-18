"use client";

import { motion, cubicBezier, Variants } from "framer-motion";
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

const POSTS = [
  {
    id: 1,
    image: "/images/gallery/training-1.jpeg",
    caption: "Speed work in South Florida heat 🔥",
    type: "Reel",
  },
  {
    id: 2,
    image: "/images/gallery/training-2.jpeg",
    caption: "Acceleration drills with the squad",
    type: "Post",
  },
  {
    id: 3,
    image: "/images/gallery/training-3.jpeg",
    caption: "Championship mindset only.",
    type: "Reel",
  },
  {
    id: 4,
    image: "/images/gallery/training-4.jpeg",
    caption: "Race day execution done right.",
    type: "Post",
  },
  {
    id: 5,
    image: "/images/gallery/training-5.jpeg",
    caption: "Strength block in progress.",
    type: "Reel",
  },
  {
    id: 6,
    image: "/images/gallery/training-6.jpeg",
    caption: "A1 Vertex culture in motion.",
    type: "Post",
  },
];

export default function SocialFeedSection() {
  return (
    <section className="relative py-28 px-6 bg-[#080808] overflow-hidden text-white">
      {/* ───────── BACKGROUND SYSTEM ───────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-pink-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Social Feed
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Training Moments
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Live from the Track
            </span>
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto">
            Real-time athlete development, training culture, and performance
            snapshots from A1 Vertex Athletics.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href="#"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                  {post.type}
                </span>

                <p className="text-white/70 text-sm mt-2 leading-snug">
                  {post.caption}
                </p>
              </div>

              {/* subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-400/5 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            View Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
