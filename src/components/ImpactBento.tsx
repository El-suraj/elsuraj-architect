import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  detail: string;
  span?: string;
};

const metrics: Metric[] = [
  {
    value: 42,
    prefix: "$",
    suffix: "M+",
    label: "Transaction volume routed",
    detail: "Across payment and arbitrage engines in production.",
    span: "md:col-span-2",
  },
  {
    value: 99.99,
    decimals: 2,
    suffix: "%",
    label: "Uptime SLA held",
    detail: "Multi-region failover, zero-downtime deploys.",
  },
  {
    value: 140,
    prefix: "<",
    suffix: "ms",
    label: "p99 API latency",
    detail: "Edge caching and query budgets enforced in CI.",
  },
  {
    value: 8,
    suffix: "+",
    label: "Systems taken 0 → 1",
    detail: "From whiteboard architecture to live revenue.",
  },
  {
    value: 1.2,
    decimals: 1,
    suffix: "M",
    label: "Monthly requests served",
    detail: "Sustained load with autoscaled serverless workers.",
  },
];

const Counter = ({ metric, active }: { metric: Metric; active: boolean }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(metric.value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, metric.value]);

  return (
    <span className="tabular-nums">
      {metric.prefix}
      {n.toFixed(metric.decimals ?? 0)}
      {metric.suffix}
    </span>
  );
};

const ImpactBento = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">Proof</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Numbers that survived <span className="text-gradient">production</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden glass rounded-2xl p-6 ${m.span ?? ""}`}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tighter mb-2">
                  <Counter metric={m} active={inView} />
                </div>
                <div className="text-sm font-mono text-primary/90 mb-2">{m.label}</div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBento;
