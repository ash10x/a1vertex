"use client";

import { motion } from "framer-motion";

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

export default function TrainingPage() {
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
            Training Schedule
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Weekly Training Plan.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Structured. Consistent. Elite.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Full weekly structure for athletes, parents, and coaches.
          </p>
        </motion.div>
      </section>

      {/* INFO CARDS */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Event Groups",
              desc: "100m, 200m, 400m, 800m development tracks",
            },
            {
              title: "Training Structure",
              desc: "Speed, strength, endurance, recovery cycles",
            },
            {
              title: "Special Sessions",
              desc: "Invite-only technical performance blocks",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <h3 className="font-black mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto space-y-4">
          {WEEKLY_SCHEDULE.map((item, i) => (
            <motion.div
              key={item.day}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h2 className="text-xl font-black">{item.day}</h2>
                <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-1">
                  {item.type}
                </p>
              </div>

              <div className="text-sm text-white/60 flex-1 md:text-center">
                <p>
                  <span className="text-white/80 font-semibold">Focus:</span>{" "}
                  {item.focus}
                </p>
                <p>
                  <span className="text-white/80 font-semibold">Group:</span>{" "}
                  {item.group}
                </p>
              </div>

              <div className="text-sm text-white/60 md:text-right">
                <p>{item.time}</p>
                <p>{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALENDAR */}
      <section className="px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/[0.03] text-center"
        >
          <h2 className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Calendar Sync
          </h2>

          <h3 className="text-2xl font-black mb-3">
            Stay Updated in Real Time
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Sync training sessions to your calendar (integration placeholder).
          </p>

          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
            type="button"
          >
            Add to Calendar
          </button>
        </motion.div>
      </section>
    </main>
  );
}
