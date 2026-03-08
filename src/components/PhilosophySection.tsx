import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section id="process" className="py-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            Conceptual Debugging
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-2xl p-8 md:p-12 space-y-6"
        >
          <p className="text-lg md:text-xl text-foreground font-body leading-relaxed">
            I don't build apps. I architect <span className="text-gradient font-semibold">systems that think</span>.
          </p>
          <p className="text-secondary-foreground font-body leading-relaxed">
            Every product is a hypothesis — a living theory about how humans and machines should collaborate. 
            My process starts not with wireframes or sprints, but with a fundamental question: 
            <span className="text-foreground font-medium"> "What is the real problem beneath the stated problem?"</span>
          </p>
          <p className="text-secondary-foreground font-body leading-relaxed">
            I call this <span className="text-primary font-mono">Conceptual Debugging</span> — the practice of 
            interrogating assumptions before they become architecture. By the time I write the first line of code, 
            I've already debugged the idea itself. The result: products that feel inevitable, systems that scale 
            without friction, and logic that anticipated the edge cases before users discovered them.
          </p>
          <p className="text-secondary-foreground font-body leading-relaxed">
            From luxury configurators to anti-fraud engines, from arbitrage bots to compliance pipelines — 
            the common thread is <span className="text-foreground font-medium">obsessive clarity</span> in thinking 
            and <span className="text-foreground font-medium">surgical precision</span> in execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
