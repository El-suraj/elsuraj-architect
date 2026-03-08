import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "The Lab", href: "#lab" },
  { label: "My Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const FloatingDock = () => {
  const [active, setActive] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(current < lastScroll.current || current < 100);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const item = navItems.find((n) => n.href === `#${id}`);
            if (item) setActive(item.label);
          }
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-elevated rounded-full px-2 py-2 flex gap-1"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-mono transition-colors duration-300 ${
                active === item.label
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === item.label && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-primary glow-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingDock;
