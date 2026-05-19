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
    a: "Our main practice location is in Baoca Raton, Florida.",
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
      await new Promise((res) => setTimeout(res, 1000));
      alert("Message sent successfully.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-400/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] right-0 w-[700px] h-[700px] bg-pink-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 space-y-20 relative">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Contact A1 Vertex
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-400">
              Athletics Support Team
            </span>
          </h1>

          <p className="text-white/60 mt-6">
            For athlete inquiries, training questions, partnerships, or program
            information.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
          >
            <h2 className="text-xl font-black mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                rows={5}
                required
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400/40 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm hover:scale-[1.02] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* INFO PANEL */}
          <div className="space-y-6">
            {/* CONTACT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h2 className="text-xl font-black text-cyan-400 mb-4">
                Direct Contact
              </h2>

              <div className="space-y-3 text-white/70 text-sm">
                <p>📧 contact@a1vertexathletics.com</p>
                <p>📞 +1 (754) 213-3650</p>
                <p>📍 9170 Glades Road, STE 121 , Boca Raton, Florida 33434</p>
              </div>

              <a
                href="https://www.instagram.com/a1eliteyouthathletics?igsh=ZWg1b3U5Y2RzOXFk"
                target="_blank"
                className="inline-block mt-6 text-pink-400 hover:text-white transition"
              >
                Instagram →
              </a>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden border border-white/10"
            >
              <iframe
                title="Training Location"
                src="https://www.google.com/maps?q=9170+Glades+Road%2C+STE+121%2C+Boca+Raton%2C+Florida+33434&output=embed"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-center text-3xl font-black">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <div
                key={i}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
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
