"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
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
            className="absolute inset-0 rounded-full bg-white/10 border border-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}

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
      transition={{ delay: index * 0.05 }}
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
  const prefersReducedMotion = useReducedMotion() ?? false;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastYRef = useRef(0);
  const { scrollYProgress } = useScroll();

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const isActiveRoute = useCallback(
    (href: string) => {
      return href === "/" ? pathname === "/" : pathname.startsWith(href);
    },
    [pathname],
  );

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

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-cyan-400 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
        animate={{
          opacity: 1,
          y: hidden ? -120 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
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
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
          <motion.div
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="/" className="flex items-center gap-2 rounded-xl">
              <Image
                src="/logo/logo.png"
                alt="A1 Vertex"
                width={75}
                height={75}
                priority
              />
            </Link>
          </motion.div>

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

          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:block"
            >
              <Link
                href="/registration"
                className="px-6 py-2.5 rounded-full bg-cyan-400 text-black font-black text-sm"
              >
                Register Now
              </Link>
            </motion.div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-11 h-11 flex items-center justify-center"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
