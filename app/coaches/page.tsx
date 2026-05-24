"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cubicBezier } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export default function CoachesPage() {
  const [allCoaches, setAllCoaches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/coaches")
      .then((res) => res.json())
      .then((data) => {
        setAllCoaches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch coaches:", err);
        setLoading(false);
      });
  }, []);

  const headCoach = allCoaches.find((c) => c.isHeadCoach === 1);
  const supportCoaches = allCoaches.filter((c) => c.isHeadCoach === 0);

  const highlights = (headCoach?.highlights as string[]) || [];
  const focus = (headCoach?.focus as string[]) || [];

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050505] text-white overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <p className="text-cyan-400 text-lg">Loading coaches...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-pink-500/10 blur-[160px] rounded-full" />
      </div>

      {headCoach && (
        <section className="relative pt-36 pb-24 px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
          >
            <div>
              <div className="mb-6">
                <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold">
                  {headCoach.role} — A1 Vertex Athletics
                </p>
                <p className="text-white/50 text-xs mt-2 tracking-wide">
                  {headCoach.qualifications}
                </p>
                {highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {highlights.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
                Coach{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
                  {headCoach.name.split(" ").pop()}
                </span>
              </h1>

              <p className="text-white/70 mt-8 text-lg max-w-2xl">
                {headCoach.bio}
              </p>

              {highlights.length > 0 && (
                <div className="grid md:grid-cols-2 gap-2 mt-10 text-sm text-white/70">
                  {highlights.map((h) => (
                    <p key={h}>• {h}</p>
                  ))}
                </div>
              )}

              {focus.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-cyan-400 text-xs uppercase tracking-[0.25em] mb-3">
                    Areas of Focus
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2 text-white/70 text-sm">
                    {focus.map((f) => (
                      <p key={f}>• {f}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative h-[520px] rounded-[2rem] overflow-hidden border border-white/10">
              <Image
                src={headCoach.image}
                alt={headCoach.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
          </motion.div>
        </section>
      )}

      {supportCoaches.length > 0 && (
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto space-y-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl font-black">
                Complete Performance Staff
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                Strength. Speed. Mindset. Development systems built for elite
                athlete progression.
              </p>
            </motion.div>

            {supportCoaches.map((coach, i) => {
              const specialties = (coach.specialties as string[]) || [];
              return (
                <motion.div
                  key={coach.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="grid lg:grid-cols-[420px_1fr] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative h-[420px]">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="p-10">
                    <h3 className="text-3xl font-black">{coach.name}</h3>
                    <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-2">
                      {coach.role}
                    </p>
                    {coach.qualifications && (
                      <p className="text-white/50 text-xs mt-1">
                        {coach.qualifications}
                      </p>
                    )}
                    <p className="text-white/60 mt-6">{coach.bio}</p>
                    {specialties.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-2 mt-8 text-white/70 text-sm">
                        {specialties.map((s) => (
                          <p key={s}>• {s}</p>
                        ))}
                      </div>
                    )}
                    {coach.philosophy && (
                      <p className="mt-8 text-white/80 italic">
                        "{coach.philosophy}"
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
