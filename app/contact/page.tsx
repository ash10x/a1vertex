"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = [
  {
    q: "How quickly do you respond?",
    a: "We typically respond within 24 hours during business days.",
  },
  {
    q: "Where is your training facility located?",
    a: "Our main practice location is in Spanish Town, Jamaica.",
  },
  {
    q: "Do you offer beginner training?",
    a: "Yes, we offer structured programs for all skill levels.",
  },
  {
    q: "Can I book a private session?",
    a: "Yes, private coaching sessions are available by request.",
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      // SAFE: replace later with API route (/api/contact)
      await new Promise((res) => setTimeout(res, 1000));
      alert("Message sent successfully.");
    } catch (err) {
      console.error("Contact form error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-5 py-24">
      {/* Background glow (safe static div, no hydration issues) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="mt-3 text-white/60">
            Get in touch for training, partnerships, or inquiries.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/40 outline-none"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/40 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/40 outline-none"
              />

              <textarea
                required
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/40 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <h2 className="text-lg font-semibold text-cyan-400">
                Contact Info
              </h2>

              <p>📧 support@a1vertex.com</p>
              <p>📞 +1 (876) 000-0000</p>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-pink-400 hover:underline"
              >
                Instagram →
              </a>
            </div>

            {/* MAP (Vercel-safe iframe attributes) */}
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <iframe
                title="Practice Location"
                src="https://www.google.com/maps?q=Spanish%20Town%20Jamaica&output=embed"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <div
                key={i}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{item.q}</h3>
                  <span className="text-cyan-400">
                    {openFAQ === i ? "−" : "+"}
                  </span>
                </div>

                {openFAQ === i && (
                  <p className="mt-3 text-white/60 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
