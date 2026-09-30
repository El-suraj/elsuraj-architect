import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "elsuraj@architect.dev";

const lagosTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

const HeroStatusBar = () => {
  const [time, setTime] = useState(lagosTime);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(lagosTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied", { description: EMAIL });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — " + EMAIL);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-3 mb-8"
    >
      <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs font-mono">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-terminal-green" />
        </span>
        <span className="text-foreground/90">Available for Q4 architecture &amp; advisory</span>
      </div>

      <div className="glass rounded-full px-4 py-2 text-xs font-mono text-muted-foreground tabular-nums">
        Lagos <span className="text-foreground/90">{time}</span> WAT
      </div>

      <button
        onClick={copyEmail}
        className="glass rounded-full px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
      >
        {EMAIL}
        {copied ? (
          <Check className="w-3.5 h-3.5 text-terminal-green" />
        ) : (
          <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
    </motion.div>
  );
};

export default HeroStatusBar;
