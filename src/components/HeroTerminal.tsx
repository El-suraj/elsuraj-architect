import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import HeroStatusBar from "@/components/HeroStatusBar";


const phrases = [
  "Debugging the Idea",
  "Architecting the Engine",
  "Shipping the Solution",
];

const HeroTerminal = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayText, isDeleting, currentPhrase]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-glow-secondary/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground text-sm font-mono tracking-[0.3em] uppercase mb-6">
            Master Product Architect
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8">
            <span className="text-gradient">Elsuraj</span>
          </h1>
        </motion.div>

        <HeroStatusBar />



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-xl p-6 md:p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
            <span className="text-muted-foreground text-xs font-mono ml-3">elsuraj@architect ~</span>
          </div>
          <div className="text-left font-mono">
            <span className="text-muted-foreground">$ </span>
            <span className="terminal-glow text-lg md:text-2xl">
              {displayText}
            </span>
            <span className="inline-block w-0.5 h-6 md:h-7 bg-terminal-green ml-0.5 align-middle animate-blink" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground mt-8 text-base max-w-lg mx-auto font-body leading-relaxed"
        >
          Building systems that don't just work — they think, adapt, and scale.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroTerminal;
