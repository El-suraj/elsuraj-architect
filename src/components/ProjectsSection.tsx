import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Shield, CheckCircle, Zap, ToggleRight, Palette, Gem } from "lucide-react";

const DigitalAtelierMockup = () => (
  <div className="rounded-xl surface-elevated p-4 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-xs font-mono text-muted-foreground">CONFIGURATOR</span>
      <Palette className="w-4 h-4 text-primary" />
    </div>
    <div className="grid grid-cols-3 gap-2">
      {["Fabric", "Stitch", "Finish"].map((label) => (
        <div key={label} className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="w-8 h-8 rounded-full bg-primary/20 mx-auto mb-1.5" />
          <span className="text-[10px] font-mono text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
      <Gem className="w-3 h-3 text-primary" />
      <span>3D Preview Ready</span>
    </div>
  </div>
);

const TaskArcMockup = () => (
  <div className="rounded-xl surface-elevated p-4 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-xs font-mono text-muted-foreground">DASHBOARD</span>
      <Shield className="w-4 h-4 text-primary" />
    </div>
    <div className="space-y-2">
      {[
        { name: "John Doe", status: "KYC Verified" },
        { name: "Corp LLC", status: "KYC Verified" },
      ].map((item) => (
        <div key={item.name} className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
          <span className="text-xs font-body text-foreground">{item.name}</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-terminal-green">
            <CheckCircle className="w-3 h-3" />
            {item.status}
          </span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-square rounded-lg bg-secondary/30 flex items-center justify-center">
          <span className="text-[10px] text-muted-foreground font-mono">Proof {i}</span>
        </div>
      ))}
    </div>
  </div>
);

const ArbFlowMockup = () => {
  const pairs = [
    { pair: "BTC/USDT", spread: "+0.042%", active: true },
    { pair: "ETH/USDT", spread: "+0.018%", active: true },
    { pair: "SOL/USDT", spread: "-0.003%", active: false },
  ];

  return (
    <div className="rounded-xl surface-elevated p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-muted-foreground">LIVE SPREADS</span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green/75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
          </span>
          <span className="text-[10px] font-mono text-terminal-green">LIVE</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {pairs.map((p) => (
          <div key={p.pair} className="flex items-center justify-between rounded-lg bg-secondary/50 p-2.5">
            <span className="text-xs font-mono text-foreground">{p.pair}</span>
            <span className={`text-xs font-mono ${p.spread.startsWith("+") ? "text-terminal-green" : "text-destructive"}`}>
              {p.spread}
            </span>
            <div className="flex items-center gap-1.5">
              <ToggleRight className={`w-4 h-4 ${p.active ? "text-terminal-green" : "text-muted-foreground"}`} />
              <span className={`text-[10px] font-mono ${p.active ? "text-terminal-green" : "text-muted-foreground"}`}>
                {p.active ? "Bot Active" : "Idle"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
        <Zap className="w-3 h-3 text-primary" />
        <span>Atomic Execution: &lt;50ms</span>
      </div>
    </div>
  );
};

const caseStudies = {
  atelier: {
    title: "The Digital Atelier",
    subtitle: "Redefining luxury product customization through bespoke software.",
    challenge: "Luxury brands needed a way to offer truly personalized products online without compromising the high-touch, boutique experience their clientele expects.",
    solution: "Built a 3D product configurator with real-time rendering, bespoke logic trees for material compatibility, and a white-glove UX that mirrors the in-store experience. Every interaction was designed to feel intentional and premium.",
    impact: [
      "40% increase in average order value through intelligent upselling",
      "92% customer satisfaction rating for the digital experience",
      "Reduced product return rate by 35% through accurate 3D previews",
    ],
    techStack: ["React", "Three.js", "Node.js", "PostgreSQL", "WebGL"],
  },
  taskarc: {
    title: "TaskArc",
    subtitle: "Enterprise-grade compliance and anti-fraud infrastructure.",
    challenge: "Fintech platforms struggle with KYC compliance across jurisdictions while maintaining fast onboarding. Manual proof verification created bottlenecks and fraud exposure.",
    solution: "Engineered an AI-powered KYC pipeline with real-time document verification, proof gallery management, and cross-jurisdictional compliance automation. Built anti-fraud scoring that catches synthetic identities before they enter the system.",
    impact: [
      "99.7% fraud detection rate with <0.1% false positives",
      "KYC processing time reduced from 48hrs to 12 minutes",
      "Successfully processed 2M+ verifications across 40+ jurisdictions",
    ],
    techStack: ["Python", "FastAPI", "TensorFlow", "AWS", "Redis"],
  },
  arbflow: {
    title: "ArbFlow AI",
    subtitle: "Sub-millisecond arbitrage execution across decentralized markets.",
    challenge: "Crypto arbitrage opportunities exist for mere milliseconds. Traditional systems can't detect and execute trades fast enough to capture these fleeting spreads.",
    solution: "Architected a distributed execution engine with co-located nodes, atomic transaction batching, and ML-driven spread prediction. The system identifies, validates, and executes arbitrage in under 50ms end-to-end.",
    impact: [
      "Processing 10,000+ potential arbitrage signals per second",
      "Average execution latency of 23ms (p99: 47ms)",
      "Consistent positive returns across 18 consecutive months",
    ],
    techStack: ["Rust", "Python", "Kafka", "WebSocket", "AWS Lambda"],
  },
};

const ProjectsSection = () => {
  return (
    <section id="lab" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            The Lab
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="The Digital Atelier"
            highlights={["Bespoke Logic", "Luxury UX"]}
            caseStudy={caseStudies.atelier}
            index={0}
          >
            <DigitalAtelierMockup />
          </ProjectCard>

          <ProjectCard
            title="TaskArc"
            highlights={["Anti-Fraud AI", "KYC Pipeline"]}
            caseStudy={caseStudies.taskarc}
            index={1}
          >
            <TaskArcMockup />
          </ProjectCard>

          <ProjectCard
            title="ArbFlow AI"
            highlights={["Atomic Execution", "Live Data"]}
            caseStudy={caseStudies.arbflow}
            index={2}
          >
            <ArbFlowMockup />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
