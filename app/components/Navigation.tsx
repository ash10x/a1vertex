"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/coaches", label: "Coaches" },
  { href: "/team", label: "Team" },
  { href: "/training", label: "Training" },
  { href: "/events", label: "Events" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative"
    >
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`
          relative flex items-center justify-center
          px-5 py-2.5 rounded-full
          text-sm font-semibold tracking-wider
          transition-all duration-300
          overflow-hidden
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-400/70
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          ${
            active
              ? "text-white"
              : "text-white/65 hover:text-white hover:bg-white/[0.045]"
          }
        `}
      >
        {active && (
          <motion.div
            layoutId="active-pill"
            className="
              absolute inset-0 rounded-full
              bg-white/10
              border border-cyan-400/10
              shadow-[0_0_30px_rgba(34,211,238,0.18)]
            "
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}

        <motion.div
          animate={
            active
              ? {
                  boxShadow: [
                    "0 0 20px rgba(34,211,238,0.12)",
                    "0 0 32px rgba(34,211,238,0.25)",
                    "0 0 20px rgba(34,211,238,0.12)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full"
        />

        <span className="relative z-10">{label}</span>
      </Link>
    </motion.div>
  );
}

function MobileNavItem({
  href,
  label,
  active,
  index,
  onClick,
  reducedMotion,
}: {
  href: string;
  label: string;
  active: boolean;
  index: number;
  onClick: () => void;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.05,
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        className={`
          flex items-center
          px-5 py-4 rounded-2xl
          text-base font-semibold
          transition-all duration-300
          border
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-400/70
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          ${
            active
              ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/20"
              : "text-white/70 border-transparent hover:text-white hover:bg-white/[0.045]"
          }
        `}
      >
        {label}

        {active && (
          <motion.span
            layoutId="mobile-active-dot"
            className="ml-auto w-2 h-2 rounded-full bg-cyan-400"
          />
        )}
      </Link>
    </motion.div>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  const prefersReducedMotion = useReducedMotion();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastYRef = useRef(0);

  const { scrollY, scrollYProgress } = useScroll();

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Better route matching
  const isActiveRoute = useCallback(
    (href: string) => {
      return href === "/" ? pathname === "/" : pathname.startsWith(href);
    },
    [pathname],
  );

  // Smooth scroll handling
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 40);

      if (currentY > lastYRef.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastYRef.current = currentY;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ESC close support
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="
          fixed top-0 left-0 right-0
          z-[70]
          h-[2px]
          bg-cyan-400
          origin-left
        "
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

      {/* Navbar */}
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
        animate={{
          opacity: 1,
          y: hidden ? -120 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`
          fixed top-[2px] left-0 right-0 z-50
          transition-all duration-500
          relative overflow-hidden
          before:absolute before:inset-x-0 before:bottom-0 before:h-px
          before:bg-gradient-to-r before:from-transparent before:via-cyan-400/40 before:to-transparent
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-3xl border-b border-white/[0.06]"
              : "bg-black/35 backdrop-blur-2xl border-b border-white/[0.04]"
          }
        `}
      >
        {/* Atmospheric Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/3 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-cyan-300/5 blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.03,
                    y: -1,
                  }
            }
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/"
              aria-label="A1 Vertex — home"
              className="
                flex items-center gap-2
                shrink-0 select-none
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400/70
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
                rounded-xl
              "
            >
              <Image
                src="/logo/logo.png"
                alt="A1 Vertex"
                width={75}
                height={75}
                priority
                className="
                  object-contain
                  drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]
                "
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActiveRoute(link.href)}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.div
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: 1.05,
                      y: -1,
                    }
              }
              whileTap={{ scale: 0.96 }}
              className="hidden md:block"
            >
              <Link
                href="/registration"
                className="
                  relative overflow-hidden
                  inline-flex items-center gap-2
                  px-6 py-2.5 rounded-full
                  bg-[linear-gradient(135deg,#22d3ee_0%,#67e8f9_45%,#a5f3fc_100%)]
                  text-black text-sm font-black tracking-wide
                  shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  transition-all duration-300
                  before:absolute before:inset-0
                  before:rounded-full
                  before:bg-white/20
                  before:opacity-0
                  hover:before:opacity-100
                  before:transition-opacity
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-cyan-400/70
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                <span className="relative z-10">Register Now</span>

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  aria-hidden="true"
                  className="relative z-10"
                >
                  <path
                    d="M2 6.5H11M7 2.5L11 6.5L7 10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="
                md:hidden
                flex flex-col justify-center items-center
                w-11 h-11 rounded-xl
                text-white/80 hover:text-white
                hover:bg-white/10
                transition-colors
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400/70
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
              "
            >
              <motion.span
                animate={
                  mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                }
                className="block w-5 h-[1.5px] bg-current mb-[5px] origin-center"
                transition={{ duration: 0.25 }}
              />

              <motion.span
                animate={
                  mobileOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }
                }
                className="block w-5 h-[1.5px] bg-current mb-[5px]"
                transition={{ duration: 0.2 }}
              />

              <motion.span
                animate={
                  mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                }
                className="block w-5 h-[1.5px] bg-current origin-center"
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed inset-0 z-40
                bg-black/70 backdrop-blur-md
                md:hidden
              "
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      x: 80,
                      scale: 0.98,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      x: 80,
                      scale: 0.98,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
              }}
              className="
                fixed top-0 right-0 bottom-0 z-50
                w-[82vw] max-w-[380px]
                bg-black/95 backdrop-blur-2xl
                border-l border-cyan-400/10
                shadow-[-10px_0_60px_rgba(0,0,0,0.65)]
                flex flex-col md:hidden
                overflow-hidden
                after:absolute after:left-0
                after:top-0 after:bottom-0
                after:w-px
                after:bg-gradient-to-b
                after:from-transparent
                after:via-cyan-400/20
                after:to-transparent
              "
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 text-lg font-black">A1</span>

                  <span className="text-white text-lg font-semibold">
                    Vertex
                  </span>
                </div>

                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="
                    flex items-center justify-center
                    w-10 h-10 rounded-xl
                    text-white/60 hover:text-white
                    hover:bg-white/10
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-400/70
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-black
                  "
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 3L13 13M13 3L3 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="relative flex flex-col gap-2 px-4 pt-6 grow">
                {NAV_LINKS.map((link, i) => (
                  <MobileNavItem
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    index={i}
                    reducedMotion={prefersReducedMotion}
                    active={isActiveRoute(link.href)}
                    onClick={closeMenu}
                  />
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="relative px-6 pb-10 pt-4 shrink-0">
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.25 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="
                      relative overflow-hidden
                      flex items-center justify-center gap-2
                      w-full py-4 rounded-full
                      bg-[linear-gradient(135deg,#22d3ee_0%,#67e8f9_45%,#a5f3fc_100%)]
                      text-black text-sm font-black tracking-wide
                      shadow-[0_0_30px_rgba(34,211,238,0.35)]
                      before:absolute before:inset-0
                      before:rounded-full
                      before:bg-white/20
                      before:opacity-0
                      hover:before:opacity-100
                      before:transition-opacity
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-400/70
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-black
                    "
                  >
                    <span className="relative z-10">Join Now</span>

                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden="true"
                      className="relative z-10"
                    >
                      <path
                        d="M2 6.5H11M7 2.5L11 6.5L7 10.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
