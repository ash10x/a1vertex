"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
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
  },
  {
    name: "AAU Development Classic",
    date: "July 5, 2026",
    location: "GC Foster College Track",
    deadline: "June 20, 2026",
    departure: "7:00 AM",
    info: "Development meet focused on qualification standards.",
  },
  {
    name: "USATF Invitational Series",
    date: "July 26, 2026",
    location: "National Stadium, Kingston",
    deadline: "July 10, 2026",
    departure: "6:00 AM",
    info: "High-performance invitational for elite athletes.",
  },
  {
    name: "South Coast Track Classic",
    date: "August 10, 2026",
    location: "South Coast Sports Complex",
    deadline: "July 25, 2026",
    departure: "5:45 AM",
    info: "Regional invitational featuring multiple event groups.",
  },
];

export default function EventsPage() {
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
            Meet Schedule
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Upcoming Events.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Stay Prepared. Stay Ready.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Keep athletes and parents informed with upcoming competitions,
            deadlines, and logistical details.
          </p>
        </motion.div>
      </section>

      {/* EVENTS LIST */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto space-y-4">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* LEFT */}
              <div className="flex-1">
                <h2 className="text-xl font-black">{event.name}</h2>
                <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-1">
                  Competition Event
                </p>

                <p className="text-white/60 text-sm mt-3">{event.info}</p>
              </div>

              {/* MIDDLE */}
              <div className="text-sm text-white/60 flex-1 space-y-1 lg:text-center">
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

              {/* ACTIONS */}
              <div className="flex flex-col gap-2 lg:items-end">
                <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black text-sm font-black">
                  RSVP
                </button>

                <button className="px-6 py-2.5 rounded-full border border-white/15 text-white/70 text-sm hover:bg-white/10 transition">
                  Download PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
