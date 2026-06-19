import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function Research() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-20">
        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-serif mb-4">Research</motion.h1>
        <motion.p variants={fadeIn} className="text-xl font-serif text-muted-foreground italic">
          Questions that currently occupy my attention.
        </motion.p>
      </motion.div>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-24">
        <motion.h2 variants={fadeIn} className="text-sm uppercase tracking-widest text-primary font-medium mb-8">Themes</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Information Foraging", desc: "Understanding how humans search for information and rewards." },
            { title: "Predictive Minds", desc: "Prediction, uncertainty, and adaptive behavior." },
            { title: "Decision Making", desc: "Choices under constraints and limited information." },
            { title: "Digital Behaviour", desc: "Attention, smartphones, and cognitive ecology." }
          ].map((theme, i) => (
            <motion.div key={i} variants={fadeIn} className="border-t border-border pt-4">
              <h3 className="font-serif text-xl mb-2">{theme.title}</h3>
              <p className="text-foreground/80 text-sm">{theme.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={fadeIn} className="text-sm uppercase tracking-widest text-primary font-medium mb-12">Projects</motion.h2>
        
        <div className="space-y-16">
          <motion.div variants={fadeIn}>
            <div className="mb-6">
              <h3 className="text-2xl font-serif mb-2">Environmental Structure and Foraging</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Master's Thesis · Completed · IIT Kanpur</p>
            </div>
            <div className="space-y-4 text-foreground/90 font-light">
              <p><strong className="font-medium">Question:</strong> How does environmental structure influence when animals and humans choose to leave a resource patch?</p>
              <p><strong className="font-medium">Methods:</strong> Hierarchical Drift Diffusion Models (HDDM), Linear Mixed Models, behavioral experiments.</p>
              <p><strong className="font-medium">Key insight:</strong> Structured environments alter the decision threshold for patch-leaving, suggesting the brain maintains predictive models of environmental statistics.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="mb-6">
              <h3 className="text-2xl font-serif mb-2">Smartphone Information Foraging</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Junior Research Fellow · IIT Jodhpur</p>
            </div>
            <div className="space-y-4 text-foreground/90 font-light">
              <p><strong className="font-medium">Question:</strong> How do affective states and environmental uncertainty shape digital information search?</p>
              <p><strong className="font-medium">Methods:</strong> Behavioral experiments, ecological momentary assessment, computational modeling.</p>
              <p><strong className="font-medium">Key insight:</strong> Digital scrolling follows foraging-like patterns that break down under high uncertainty and negative affect.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
