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

const POSTS = [
  {
    id: 1,
    image: "/images/social/post-1.jpg",
    caption: "Speed work in South Florida heat 🔥",
    type: "Reel",
    link: "#",
  },
  {
    id: 2,
    image: "/images/social/post-2.jpg",
    caption: "Acceleration drills with the squad",
    type: "Post",
    link: "#",
  },
  {
    id: 3,
    image: "/images/social/post-3.jpg",
    caption: "Championship mindset only.",
    type: "Reel",
    link: "#",
  },
  {
    id: 4,
    image: "/images/social/post-4.jpg",
    caption: "Race day execution done right.",
    type: "Post",
    link: "#",
  },
  {
    id: 5,
    image: "/images/social/post-5.jpg",
    caption: "Strength block in progress.",
    type: "Reel",
    link: "#",
  },
  {
    id: 6,
    image: "/images/social/post-6.jpg",
    caption: "A1 Vertex culture in motion.",
    type: "Post",
    link: "#",
  },
];

export default function SocialFeedSection() {
  return (
    <section
      className="relative py-24 px-6 bg-[#080808] overflow-hidden"
      aria-label="Social Media Feed"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
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
            Instagram Feed
          </h2>

          <h3 className="text-white text-3xl md:text-4xl font-black">
            Latest Training & Athlete Moments
          </h3>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Real-time updates from our athletes, training sessions, and
            competition days.
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-6 text-cyan-400 text-sm font-semibold hover:text-white transition-colors"
          >
            Follow on Instagram →
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.link}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                    {post.type}
                  </span>
                </div>

                <p className="text-white/70 text-sm leading-snug">
                  {post.caption}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-400/5" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={7}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              px-8 py-3.5 rounded-full
              bg-gradient-to-r from-cyan-400 to-pink-400
              text-black font-black text-sm
              shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            View More Content
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
      </div>
    </section>
  );
}
