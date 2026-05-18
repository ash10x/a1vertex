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

const FAQ = [
  {
    q: "How do I join A1 Vertex Athletics?",
    a: "Submit a registration form or attend a scheduled tryout. All athletes are evaluated before placement.",
  },
  {
    q: "Where are practices held?",
    a: "Training sessions are held at designated track facilities and strength centers, depending on the day.",
  },
  {
    q: "Do you accept beginners?",
    a: "Yes. Athletes are placed into groups based on development level and performance potential.",
  },
  {
    q: "How often do athletes train?",
    a: "Training frequency depends on group level, typically 3–5 sessions per week.",
  },
];

export default function ContactPage() {
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
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Contact Us.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">
              Let’s Build Champions.
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Reach out for athlete registration, coaching inquiries, or training
            information.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* CONTACT FORM */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4"
          >
            <h2 className="text-xl font-black mb-2">Send a Message</h2>

            <input
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <input
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <input
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm"
            >
              Send Message
            </button>
          </motion.form>

          {/* CONTACT INFO + MAP */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3"
            >
              <h2 className="text-xl font-black">Contact Details</h2>

              <p className="text-white/60 text-sm">
                <span className="text-white/80 font-semibold">Email:</span>{" "}
                info@a1vertexathletics.com
              </p>

              <p className="text-white/60 text-sm">
                <span className="text-white/80 font-semibold">Phone:</span> +1
                (876) 000-0000
              </p>

              <a
                href="https://instagram.com"
                target="_blank"
                className="text-cyan-400 text-sm font-semibold"
              >
                Follow on Instagram
              </a>
            </motion.div>

            {/* MAP */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <div className="p-4 border-b border-white/10">
                <h3 className="font-black">Practice Location</h3>
                <p className="text-white/60 text-sm">
                  National Stadium Training Complex
                </p>
              </div>

              <iframe
                title="Practice Location Map"
                className="w-full h-72"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl font-black mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="font-black mb-2">{item.q}</h3>
                <p className="text-white/60 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
