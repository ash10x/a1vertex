"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 10,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

/* =========================
   MEDIA SYSTEM
========================= */
type GalleryItem = {
  title: string;
  description: string;
  type: "image" | "video";
  media: string;
};

const GALLERY: GalleryItem[] = [
  {
    title: "Practice Culture",
    description: "Daily repetition and structured development on the track.",
    type: "image",
    media: "/images/gallery/training-1.jpeg",
  },
  {
    title: "Track Sessions",
    description: "High-intensity interval work and sprint mechanics.",
    type: "image",
    media: "/images/gallery/training-2.jpeg",
  },
  {
    title: "Meet Day Energy",
    description: "Race-day focus, preparation, and execution.",
    type: "image",
    media: "/images/gallery/training-3.jpeg",
  },
  {
    title: "Athlete Focus",
    description: "Concentration and mental preparation before the race.",
    type: "image",
    media: "/images/gallery/training-7.jpeg",
  },
  {
    title: "Sprint Mechanics",
    description: "Biomechanical precision in acceleration phase.",
    type: "image",
    media: "/images/gallery/training-5.jpeg",
  },
  {
    title: "Conditioning Work",
    description: "Strength and conditioning fundamentals for elite sprinters.",
    type: "image",
    media: "/images/gallery/training-6.jpeg",
  },
  {
    title: "Block Start Drills",
    description: "Perfecting the explosive start from the blocks.",
    type: "image",
    media: "/images/gallery/training-8.jpeg",
  },
  {
    title: "Team Dynamics",
    description: "Collective culture and shared pursuit of excellence.",
    type: "image",
    media: "/images/gallery/training-9.jpeg",
  },
  {
    title: "Championship Environment",
    description: "Competing at the highest level under pressure.",
    type: "image",
    media: "/images/gallery/training-10.jpeg",
  },
  {
    title: "Stride Analysis",
    description: "Measuring and optimising stride length and frequency.",
    type: "image",
    media: "/images/gallery/training-11.jpeg",
  },
  {
    title: "Recovery Protocol",
    description: "Active recovery techniques between training blocks.",
    type: "image",
    media: "/images/gallery/training-12.jpeg",
  },
  {
    title: "Warm-Up Routine",
    description: "Pre-session activation and mobility work.",
    type: "image",
    media: "/images/gallery/training-13.jpeg",
  },
  {
    title: "Speed Endurance",
    description: "Sustaining top-end velocity across the full race distance.",
    type: "image",
    media: "/images/gallery/training-14.jpeg",
  },
  {
    title: "Athlete Progression",
    description: "Season-over-season development tracked and documented.",
    type: "image",
    media: "/images/gallery/training-15.jpeg",
  },
  {
    title: "Elite Mindset",
    description: "Mental conditioning and competitive psychology.",
    type: "image",
    media: "/images/gallery/training-16.jpeg",
  },
  {
    title: "Finish Line",
    description: "Crossing the line — the culmination of months of work.",
    type: "image",
    media: "/images/gallery/training-17.jpeg",
  },
  {
    title: "Trackside Coaching",
    description: "Real-time feedback and technical refinement from coaches.",
    type: "image",
    media: "/images/gallery/training-18.jpeg",
  },
  {
    title: "Cinematic Reel",
    description: "Full highlight reel showcasing A1 Vertex athletes in action.",
    type: "video",
    // Reference video from your public/video folder
    media: "images/gallery/meet-1.mp4",
  },
  {
    title: "Highlight Breakdown",
    description: "Detailed race analysis and performance breakdown.",
    type: "video",
    media: "images/gallery/meet-2.mp4",
  },
];

/* =========================
   MODAL
========================= */
function Modal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal card */}
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Media */}
        <div
          className="relative w-full bg-black"
          style={{ aspectRatio: "16/9" }}
        >
          {item.type === "image" ? (
            <Image
              src={item.media}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          ) : (
            <video
              src={item.media}
              controls
              autoPlay
              className="w-full h-full object-contain"
              playsInline
            />
          )}
        </div>

        {/* Info + nav */}
        <div className="flex items-center justify-between px-6 py-5 gap-4">
          <div className="min-w-0">
            <h3 className="font-black text-white text-lg leading-tight truncate">
              {item.title}
            </h3>
            <p className="text-white/50 text-sm mt-1">{item.description}</p>
            <span className="inline-block mt-2 text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              {item.type === "video" ? "Video Content" : "Photography"}
            </span>
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================
   PAGE
========================= */
export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((i: number) => setSelectedIndex(i), []);
  const closeModal = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const next = useCallback(
    () =>
      setSelectedIndex((i) =>
        i !== null && i < GALLERY.length - 1 ? i + 1 : i,
      ),
    [],
  );

  const selectedItem = selectedIndex !== null ? GALLERY[selectedIndex] : null;

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
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
          className="max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Culture • Media • Performance Identity
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            A1 Vertex Gallery.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
              Discipline in Motion.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Training culture, competition moments, and athlete progression —
            captured through performance and discipline.
          </p>
        </motion.div>
      </section>

      {/* CONTENT STRIP */}
      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Training Culture",
              desc: "Daily discipline, repetition, and structured development",
            },
            {
              title: "Competition Moments",
              desc: "Race execution, performance, and championship environments",
            },
            {
              title: "Athlete Progression",
              desc: "Before-and-after development across the season",
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

      {/* MEDIA GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item, i) => (
            <motion.button
              key={`${item.media}-${i}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              onClick={() => openModal(i)}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`Open ${item.title}`}
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.media}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Expand hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M3 3h5M3 3v5M15 3h-5M15 3v5M3 15h5M3 15v-5M15 15h-5M15 15v-5"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <div className="relative h-72 w-full overflow-hidden bg-black">
                  <video
                    src={item.media}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="ml-1"
                      >
                        <path d="M5 3l10 6-10 6V3z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* LABEL */}
              <div className="p-4">
                <h3 className="text-sm font-black">{item.title}</h3>
                <p className="text-white/40 text-xs mt-1 line-clamp-1">
                  {item.description}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-1">
                  {item.type === "video" ? "Video Content" : "Photography"}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* YOUTUBE HUB */}
      <section className="px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center"
        >
          <h2 className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Video Performance Hub
          </h2>

          <h3 className="text-3xl font-black mb-3">
            Training Breakdown & Race Analysis
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Full sprint breakdowns, athlete progression clips, and elite
            performance analysis from A1 Vertex Athletics.
          </p>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
          >
            Watch Full Content
          </a>
        </motion.div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && selectedIndex !== null && (
          <Modal
            item={selectedItem}
            onClose={closeModal}
            onPrev={prev}
            onNext={next}
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < GALLERY.length - 1}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
