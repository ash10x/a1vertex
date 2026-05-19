"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { getCldVideoUrl } from "next-cloudinary";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.1,
    },
  }),
};

const WEEKLY_SCHEDULE = [
  {
    day: "Monday",
    focus: "Speed Mechanics",
    time: "4:00 PM – 6:00 PM",
    location: "National Stadium Track",
    group: "Sprints (100m / 200m)",
    type: "Training",
  },
  {
    day: "Tuesday",
    focus: "Strength & Conditioning",
    time: "4:30 PM – 6:00 PM",
    location: "A1 Vertex Training Facility",
    group: "All Athletes",
    type: "Gym Session",
  },
  {
    day: "Wednesday",
    focus: "Endurance & Tempo",
    time: "4:00 PM – 6:00 PM",
    location: "South Camp Road Loop",
    group: "200m / 400m / 800m",
    type: "Track Session",
  },
  {
    day: "Thursday",
    focus: "Recovery & Mobility",
    time: "Rest / Optional Recovery",
    location: "Recovery Center",
    group: "All Athletes",
    type: "Recovery",
  },
  {
    day: "Friday",
    focus: "Race Simulation",
    time: "4:00 PM – 6:00 PM",
    location: "National Stadium Track",
    group: "All Event Groups",
    type: "High Intensity",
  },
  {
    day: "Saturday",
    focus: "Specialized Sessions",
    time: "Morning Session",
    location: "Varies Weekly",
    group: "Selected Athletes",
    type: "Special Session",
  },
  {
    day: "Sunday",
    focus: "Off Day",
    time: "Rest Day",
    location: "—",
    group: "—",
    type: "Recovery",
  },
];

const PERFORMANCE_POINTS = [
  "Individualized athlete nutrition guidance",
  "Customized hydration recommendations",
  "Sports drinks & electrolyte support",
  "Pre-practice fueling guidance",
  "Post-practice recovery support",
  "Healthy snack recommendations",
  "Performance-focused meal structure",
  "Long-term healthy eating habits",
];

const NUTRITION_FEATURES = [
  {
    title: "Customized Nutrition",
    desc: "Every athlete receives realistic nutrition guidance built around their body, training demands, food preferences, and recovery needs.",
  },
  {
    title: "Hydration & Electrolytes",
    desc: "Hydration support includes water intake guidance, sports drinks, electrolyte recommendations, and recovery hydration planning.",
  },
  {
    title: "Performance Recovery",
    desc: "Athletes receive recovery-focused recommendations designed to improve energy levels, wellness, recovery speed, and performance.",
  },
];

const DAILY_SUPPORT = [
  "Breakfast recommendations",
  "Lunch recommendations",
  "Dinner recommendations",
  "Pre-practice snacks",
  "Post-practice recovery snacks",
  "Healthy juice options",
  "Sports hydration support",
  "Athlete wellness support",
];

export default function TrainingPage() {
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
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const bgY = useTransform(smooth, [0, 1], ["0%", "12%"]);

  return (
    <main
      ref={ref}
      className="min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6">
        {/* VIDEO */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ y: bgY }} className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/video-poster.jpg"
              className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </motion.div>

          {/* overlays */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#080808]" />

          {/* glow effects */}
          <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-3xl" />
        </div>

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/logo/logo.png"
              alt="A1 Vertex Athletics"
              width={100}
              height={100}
              priority
              className="mt-6 object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            Elite Athlete Development System
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl"
          >
            Training.
            <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Recovery. Fueling. Growth.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            A1 Vertex Athletics provides a complete athlete development
            structure combining elite training, individualized development,
            recovery systems, nutrition guidance, hydration support, and
            long-term athletic progression.
          </motion.p>
        </div>
      </section>

      {/* ───────────────── INFO CARDS ───────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              title: "Structured Athlete Development",
              desc: "Performance systems focused on speed, endurance, recovery, and long-term athlete progression.",
            },
            {
              title: "Customized Nutrition Guidance",
              desc: "Individualized athlete nutrition support built around realistic habits and athlete preferences.",
            },
            {
              title: "Recovery & Wellness Support",
              desc: "Hydration, recovery monitoring, mobility support, and sustainable wellness guidance.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -6,
                    }
              }
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-pink-400/[0.03]" />

              <div className="relative">
                <h3 className="mb-4 text-2xl font-black">{item.title}</h3>

                <p className="text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────── SCHEDULE ───────────────── */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Weekly Structure
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Built Around Athlete Progression.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              Every training week is designed to balance performance,
              conditioning, recovery, mobility, wellness, and technical
              development.
            </p>
          </motion.div>

          <div className="space-y-5">
            {WEEKLY_SCHEDULE.map((item, i) => (
              <motion.div
                key={item.day}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -4,
                      }
                }
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.03] to-pink-400/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-2xl font-black">{item.day}</h2>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
                      {item.type}
                    </p>
                  </div>

                  <div className="flex-1 md:text-center">
                    <p className="text-sm text-white">
                      <span className="text-white/50">Focus:</span> {item.focus}
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      <span className="text-white/50">Group:</span> {item.group}
                    </p>
                  </div>

                  <div className="text-sm text-white/60 md:text-right">
                    <p>{item.time}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
