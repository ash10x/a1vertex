"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const COACHES = [
  {
    name: "Head Coach",
    role: "Program Director & Head Coach",
    image: "/images/coaches/head-coach.jpg",
    experience:
      "12+ years developing national-level sprinters and junior champions",
    certifications: "USATF Level 2, Strength & Conditioning Specialist (NSCA)",
    specialties:
      "Athlete development systems, sprint mechanics, performance planning",
    philosophy:
      "Build complete athletes through structure, discipline, and long-term progression.",
  },
  {
    name: "Sprint Coach",
    role: "Speed Development Coach",
    image: "/images/coaches/sprint-coach.jpg",
    experience:
      "8+ years specializing in acceleration and max velocity training",
    certifications: "USATF Level 1, Sprint Mechanics Certification",
    specialties: "100m / 200m performance, block starts, top-end speed",
    philosophy:
      "Speed is a skill—refined through repetition, precision, and intent.",
  },
  {
    name: "Strength & Conditioning Coach",
    role: "Performance Strength Coach",
    image: "/images/coaches/strength-coach.jpg",
    experience:
      "10+ years in athletic performance training across track & field",
    certifications: "NSCA-CSCS, USA Weightlifting Certified",
    specialties: "Explosive power, injury prevention, sprint-specific strength",
    philosophy:
      "Stronger athletes move better, recover faster, and compete longer.",
  },
  {
    name: "Recovery Specialist",
    role: "Physiotherapist / Recovery Coach",
    image: "/images/coaches/recovery-coach.jpg",
    experience:
      "Sports rehabilitation experience working with competitive athletes",
    certifications:
      "Licensed Physiotherapy Practitioner, Sports Rehab Certification",
    specialties: "Injury prevention, mobility work, recovery programming",
    philosophy:
      "Recovery is performance—treating the body is part of training.",
  },
  {
    name: "Mental Performance Coach",
    role: "Sport Psychology & Mindset Coach",
    image: "/images/coaches/mental-coach.jpg",
    experience: "Performance psychology coaching for youth and elite athletes",
    certifications: "Certified Mental Performance Consultant (CMPC)",
    specialties: "Confidence building, focus training, competition mindset",
    philosophy: "Elite performance begins with elite thinking under pressure.",
  },
];

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full" />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Coaching Staff
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Elite Coaching System.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Built on Credibility.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            A structured performance team covering every pillar of athlete
            development: speed, strength, recovery, and mindset.
          </p>
        </motion.div>
      </section>

      {/* COACH GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-black">{coach.name}</h2>

                <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-semibold">
                  {coach.role}
                </p>

                <p className="text-white/60 text-sm">
                  <span className="text-white/80 font-semibold">
                    Experience:
                  </span>{" "}
                  {coach.experience}
                </p>

                <p className="text-white/60 text-sm">
                  <span className="text-white/80 font-semibold">
                    Certifications:
                  </span>{" "}
                  {coach.certifications}
                </p>

                <p className="text-white/60 text-sm">
                  <span className="text-white/80 font-semibold">
                    Specialties:
                  </span>{" "}
                  {coach.specialties}
                </p>

                <p className="text-white/70 text-sm italic border-t border-white/10 pt-3">
                  “{coach.philosophy}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black">
            Train With a Proven System
          </h2>

          <p className="text-white/60 mt-4">
            Every athlete is developed through structured coaching, measurable
            progression, and full-performance support.
          </p>

          <motion.a
            href="/registration"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex mt-8 items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
