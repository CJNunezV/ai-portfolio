"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navItems, profile } from "../data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Highlight the nav link of the section currently in the middle of the screen.
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="container navInner">
          <a href="#top" className="brand" aria-label={`${profile.name} — back to top`}>
            <span className="brandMark" aria-hidden>
              CN
            </span>
            <span>
              {profile.name}
              <span className="brandSub">{profile.role}</span>
            </span>
          </a>

          <nav className="navLinks" aria-label="Main">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="navLink"
                aria-current={active === n.id ? "true" : undefined}
              >
                {n.label}
                {active === n.id ? <motion.span layoutId="nav-indicator" className="navIndicator" /> : null}
              </a>
            ))}
          </nav>

          <div className="navActions">
            <ThemeToggle />
            <button
              type="button"
              className="iconBtn menuBtn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            className="mobileMenu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="navLink"
                aria-current={active === n.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
