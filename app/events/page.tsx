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

const EVENTS = [
  {
    name: "Kingston Elite Sprint Meet",
    date: "June 14, 2026",
    location: "National Stadium, Kingston",
    deadline: "June 1, 2026",
    departure: "6:30 AM",
    info: "Open sprint competition for U16–Senior athletes.",
    level: "Development / Performance",
  },
  {
    name: "AAU Development Classic",
    date: "July 5, 2026",
    location: "GC Foster College Track",
    deadline: "June 20, 2026",
    departure: "7:00 AM",
    info: "Development meet focused on qualification standards.",
    level: "Qualification Meet",
  },
  {
    name: "USATF Invitational Series",
    date: "July 26, 2026",
    location: "National Stadium, Kingston",
    deadline: "July 10, 2026",
    departure: "6:00 AM",
    info: "High-performance invitational for elite athletes.",
    level: "Elite Competition",
  },
  {
    name: "South Coast Track Classic",
    date: "August 10, 2026",
    location: "South Coast Sports Complex",
    deadline: "July 25, 2026",
    departure: "5:45 AM",
    info: "Regional invitational featuring multiple event groups.",
    level: "Regional Meet",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL GLOW */}
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
          className="relative max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Meet Calendar System
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Competition Schedule.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
              Structure. Travel. Performance.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Organized competition planning for athletes, parents, and coaches —
            including logistics, deadlines, and preparation timelines.
          </p>
        </motion.div>
      </section>

      {/* INFO STRIP */}
      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Competition Structure",
              desc: "Development → Qualification → Elite progression pathway",
            },
            {
              title: "Travel Planning",
              desc: "Organized departure times and meet-day logistics",
            },
            {
              title: "Athlete Readiness",
              desc: "Performance tracking and meet preparation systems",
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

      {/* EVENTS */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto space-y-5">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 grid lg:grid-cols-[1.2fr_1fr_0.6fr] gap-8 items-center"
            >
              {/* LEFT */}
              <div>
                <h2 className="text-2xl font-black">{event.name}</h2>
                <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] mt-2">
                  {event.level}
                </p>
                <p className="text-white/60 text-sm mt-4 leading-relaxed">
                  {event.info}
                </p>
              </div>

              {/* MIDDLE */}
              <div className="text-sm text-white/60 space-y-2">
                <p>
                  <span className="text-white/80 font-semibold">Date:</span>{" "}
                  {event.date}
                </p>
                <p>
                  <span className="text-white/80 font-semibold">Location:</span>{" "}
                  {event.location}
                </p>
                <p>
                  <span className="text-white/80 font-semibold">Deadline:</span>{" "}
                  {event.deadline}
                </p>
                <p>
                  <span className="text-white/80 font-semibold">
                    Departure:
                  </span>{" "}
                  {event.departure}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3">
                <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black text-sm font-black">
                  RSVP
                </button>

                <button className="px-6 py-2.5 rounded-full border border-white/15 text-white/70 text-sm hover:bg-white/10 transition">
                  Event Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 pb-28 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black">
            Prepared Athletes Perform Better
          </h2>

          <p className="text-white/60 mt-4">
            Every competition is structured, planned, and aligned with athlete
            development goals.
          </p>

          <button className="mt-8 px-8 py-3.5 rounded-full bg-white text-black font-black text-sm">
            View Full Season Plan
          </button>
        </motion.div>
      </section>
    </main>
  );
}
