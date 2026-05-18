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
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6">
        {/* VIDEO */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video/main4.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#080808]" />

          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full" />
        </div>

        {/* GRID */}
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

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex justify-center mb-8"
          >
            <Image
              src="/logo/logo.png"
              alt="A1 Vertex Athletics"
              width={100}
              height={100}
              className="object-contain mt-6 drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-cyan-400 text-xs tracking-[0.35em] uppercase font-semibold mb-5"
          >
            Elite Athlete Development System
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]"
          >
            Training.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Recovery. Fueling. Growth.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-8"
          >
            A1 Vertex Athletics provides a complete athlete development
            structure combining elite training, individualized development,
            recovery systems, nutrition guidance, hydration support, and
            long-term athletic progression.
          </motion.p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
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
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-pink-400/[0.03]" />

              <div className="relative">
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>

                <p className="text-white/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="relative px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Weekly Structure
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Built Around Athlete Progression.
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-5">
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
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/[0.03] to-pink-400/[0.03]" />

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-black">{item.day}</h2>

                    <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-2">
                      {item.type}
                    </p>
                  </div>

                  <div className="flex-1 md:text-center">
                    <p className="text-white text-sm">
                      <span className="text-white/50">Focus:</span> {item.focus}
                    </p>

                    <p className="text-white/70 text-sm mt-1">
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

      {/* NUTRITION HERO */}
      <section className="relative px-6 pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-0 w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-10 md:p-12 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-pink-400/[0.05]" />

            <div className="relative">
              <p className="text-cyan-400 text-xs tracking-[0.35em] uppercase font-semibold mb-5">
                Custom Athlete Nutrition & Hydration Support
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tight mb-8">
                Fueling Greatness
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  Beyond The Track.
                </span>
              </h2>

              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>
                  Every athlete at A1 Vertex Athletics receives individualized
                  nutrition guidance designed around their body, training
                  demands, recovery needs, and personal food preferences.
                </p>

                <p>
                  We understand that every athlete is different — including how
                  they eat, what foods they enjoy, and what fuels them best.
                </p>

                <p>
                  Because of that, we do not believe in forcing unrealistic
                  generic meal plans athletes dislike or cannot realistically
                  follow.
                </p>

                <p>
                  Instead, we focus on creating customized athlete nutrition
                  support that balances performance, recovery, healthy
                  development, realistic habits, and foods athletes genuinely
                  enjoy.
                </p>

                <p>
                  At A1 Vertex Athletics, we believe development goes beyond the
                  track. Fueling the body correctly is part of building
                  greatness.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-5">
            {PERFORMANCE_POINTS.map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/[0.03] to-pink-400/[0.03]" />

                <div className="relative flex items-start gap-4">
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

                  <p className="text-white/75 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ATHLETE SUPPORT */}
      <section className="relative px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Daily Athlete Support
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Built Around Real Athlete Needs.
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-5">
              Nutrition and hydration guidance is designed to improve
              performance, recovery, energy levels, wellness, and long-term
              athlete habits while remaining realistic and sustainable for each
              family.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DAILY_SUPPORT.map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <p className="text-white/75 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative px-6 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {NUTRITION_FEATURES.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-pink-400/[0.03]" />

              <div className="relative">
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>

                <p className="text-white/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MOTTO */}
      <section className="px-6 pb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden max-w-6xl mx-auto rounded-[36px] border border-white/10 bg-white/[0.03] p-14 text-center backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.05] via-transparent to-pink-400/[0.05]" />

          <div className="relative">
            <p className="text-cyan-400 text-xs uppercase tracking-[0.35em] font-semibold mb-6">
              A1 Vertex Athletics
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
              BE GREAT.
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-8 leading-relaxed text-lg">
              Performance development, recovery, nutrition, discipline,
              confidence, and long-term athlete growth — built into one complete
              athlete development system.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
