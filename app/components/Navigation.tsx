"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/coaches", label: "Coaches" },
  { href: "/team", label: "Team" },
  { href: "/training", label: "Training" },
  { href: "/events", label: "Events" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join A1 Vertex" },
];

export default function Navigation() {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const lastY = useRef(0);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname],
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 30);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-cyan-400 origin-left"
        style={{ scaleX: scrollY }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: hidden ? -120 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-[2px] left-0 right-0 z-50
          backdrop-blur-3xl
          border-b
          transition-all duration-300
          ${
            scrolled
              ? "bg-black/70 border-white/10"
              : "bg-black/25 border-white/5"
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="A1 Vertex"
              width={72}
              height={72}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                      active ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10 border border-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/registration"
              className="hidden md:flex px-6 py-2.5 rounded-full bg-cyan-400 text-black font-bold text-sm hover:scale-105 transition"
            >
              Register
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed top-0 right-0 w-[85%] max-w-sm h-full z-50 bg-black/95 backdrop-blur-3xl border-l border-white/10 md:hidden p-6"
            initial={{ x: 280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 280, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-3 mt-10">
              {NAV_ITEMS.map((item, i) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-5 py-4 rounded-2xl text-base font-semibold transition ${
                        active
                          ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
