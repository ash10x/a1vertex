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
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

export default function CoachesSection() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [coaches, setCoaches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/coaches")
      .then((res) => res.json())
      .then((data) => {
        setCoaches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch coaches:", err);
        setLoading(false);
      });
  }, []);

  // ───────────────── CLOUDINARY VIDEO ─────────────────
  const videoUrl = getCldVideoUrl({
    src: "main3_kipgnb", // replace with your Cloudinary public ID
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

  return (
    <section
      ref={ref}
      aria-label="Meet Our Coaches"
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
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </motion.div>

        {/* overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black" />
      </div>

      {/* ───────────────── CONTENT ───────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ───────────────── HEADER ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
            Coaching System
          </p>

          <h3 className="text-4xl font-black leading-tight md:text-5xl">
            Built by Experience.
            <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Driven by Results.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            A performance-driven coaching team focused on structured athlete
            development, elite mentorship, and competitive excellence.
          </p>
        </motion.div>

        {/* ───────────────── GRID ───────────────── */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -6,
                    }
              }
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-cyan-400/5" />
              </div>

              {/* IMAGE */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6">
                <h4 className="text-xl font-black tracking-tight">
                  {coach.name}
                </h4>

                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-400">
                  {coach.title}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {coach.bio}
                </p>
              </div>

              {/* border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/20" />
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
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="/coaches"
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.04,
                  }
            }
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-3.5 text-sm font-black text-black transition-all duration-300"
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
