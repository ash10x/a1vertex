"use client";

import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export default function Footer() {
  return (
    <footer
      className="relative bg-[#050505] text-white overflow-hidden border-t border-white/10"
      aria-label="Footer"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">
        {/* BRAND */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0 * 0.08 }}
        >
          <h2 className="text-xl font-black tracking-tight">
            A1 <span className="text-cyan-400">Vertex</span>
          </h2>

          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Elite track & field development built on structure, discipline, and
            long-term athlete growth.
          </p>

          <p className="text-white/40 text-xs mt-6">
            © {new Date().getFullYear()} A1 Vertex Athletics
          </p>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 1 * 0.08 }}
        >
          <h3 className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-white/60">
            <li>Spanish Town, Jamaica</li>
            <li>+1 (876) 000-0000</li>
            <li>
              <a
                href="mailto:info@a1vertex.com"
                className="hover:text-white transition-colors"
              >
                info@a1vertex.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 2 * 0.08 }}
        >
          <h3 className="text-xs uppercase tracking-[0.25em] text-pink-400 font-semibold mb-4">
            Social
          </h3>

          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <a className="hover:text-white" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                TikTok
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                YouTube
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Twitter / X
              </a>
            </li>
          </ul>
        </motion.div>

        {/* POLICIES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 3 * 0.08 }}
        >
          <h3 className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-semibold mb-4">
            Policies
          </h3>

          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <a className="hover:text-white" href="/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/terms">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/waiver">
                Athlete Waiver
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/contact">
                Contact Support
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            Built for performance. Designed for athletes.
          </p>

          <div className="flex gap-6 text-xs text-white/40">
            <a className="hover:text-white" href="/privacy">
              Privacy
            </a>
            <a className="hover:text-white" href="/terms">
              Terms
            </a>
            <a className="hover:text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
