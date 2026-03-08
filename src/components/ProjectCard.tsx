import { useState } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface CaseStudy {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
}

interface ProjectCardProps {
  title: string;
  highlights: string[];
  children: React.ReactNode;
  caseStudy: CaseStudy;
  index: number;
}

const ProjectCard = ({ title, highlights, children, caseStudy, index }: ProjectCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="glass-elevated rounded-2xl overflow-hidden group"
      >
        <div className="p-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">{title}</h3>
          <div className="flex gap-2 flex-wrap mb-6">
            {highlights.map((h) => (
              <span
                key={h}
                className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {h}
              </span>
            ))}
          </div>
          <div className="mb-6">{children}</div>
          <button
            onClick={() => setShowOverlay(true)}
            className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-foreground transition-colors group/btn"
          >
            View Case Study
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </motion.div>

      {/* Case Study Overlay */}
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowOverlay(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 glass-elevated rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">Case Study</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-1">{caseStudy.title}</h2>
            <p className="text-muted-foreground font-body mb-8">{caseStudy.subtitle}</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-display text-sm text-primary mb-2 uppercase tracking-wider">Challenge</h4>
                <p className="text-secondary-foreground font-body leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-display text-sm text-primary mb-2 uppercase tracking-wider">Solution</h4>
                <p className="text-secondary-foreground font-body leading-relaxed">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-display text-sm text-primary mb-2 uppercase tracking-wider">Impact</h4>
                <ul className="space-y-2">
                  {caseStudy.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-secondary-foreground font-body">
                      <span className="text-primary mt-1.5 text-xs">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm text-primary mb-2 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex gap-2 flex-wrap">
                  {caseStudy.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
