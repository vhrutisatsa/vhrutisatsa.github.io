import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

export function Home() {
  return (
    <div className="min-h-screen text-foreground selection:bg-primary/20 selection:text-primary">

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-4xl mx-auto px-6 md:px-12 pt-40 pb-40 min-h-[85vh] flex flex-col justify-center"
      >
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight mb-10"
        >
          Searching,<br />
          learning, and<br />
          making decisions<br />
          <span className="italic text-muted-foreground">under uncertainty.</span>
        </motion.h1>

        <motion.div
          variants={fadeIn}
          className="max-w-2xl space-y-5 text-lg md:text-xl text-foreground/80 font-light leading-relaxed"
        >
          <p>
            I am a researcher exploring how human minds forage for information and adapt in complex environments.
          </p>
          <p>
            My work integrates behavioral experiments, computational modeling, and cognitive neuroscience to study adaptive behavior. I am also a writer and visual artist.
          </p>
          <p className="text-sm uppercase tracking-widest font-medium pt-2 text-primary">
            Preparing for PhD Applications — Fall 2025
          </p>
        </motion.div>
      </motion.section>

      {/* Research */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 md:px-12 mb-40"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">01 / Research</h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="space-y-16 pl-0 md:pl-12">
          <motion.article variants={fadeIn}>
            <Link href="/research" className="group block">
              <h3 className="text-2xl md:text-3xl font-serif mb-3 flex items-center gap-3 group-hover:text-primary transition-colors">
                Environmental Structure and Foraging
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </h3>
              <div className="text-xs text-primary mb-3 uppercase tracking-wider font-medium">Master's Thesis · IIT Kanpur</div>
              <p className="text-foreground/75 leading-relaxed max-w-2xl font-light">
                Investigated how structured versus random environments influence patch-leaving decisions in reward-guided foraging tasks. Modeled using Hierarchical Drift Diffusion Models and Linear Mixed Models.
              </p>
            </Link>
          </motion.article>

          <motion.article variants={fadeIn}>
            <Link href="/research" className="group block">
              <h3 className="text-2xl md:text-3xl font-serif mb-3 flex items-center gap-3 group-hover:text-primary transition-colors">
                Smartphone Information Foraging
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </h3>
              <div className="text-xs text-primary mb-3 uppercase tracking-wider font-medium">Junior Research Fellow · IIT Jodhpur</div>
              <p className="text-foreground/75 leading-relaxed max-w-2xl font-light">
                Exploring how digital information search behavior is shaped by affective states, uncertainty, and environmental cues. Translating ecological foraging theory into the digital attention economy.
              </p>
            </Link>
          </motion.article>
        </div>
      </motion.section>

      {/* Methods */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 md:px-12 mb-40"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">02 / Methods</h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-0 md:pl-12">
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-serif italic mb-5">Domain</h3>
            <ul className="space-y-3 text-foreground/75 font-light">
              <li>Behavioral Experiments</li>
              <li>Cognitive Neuroscience</li>
              <li>Experimental Design</li>
              <li>Decision Making Under Uncertainty</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-serif italic mb-5">Computational</h3>
            <ul className="space-y-3 text-foreground/75 font-light">
              <li>Hierarchical Drift Diffusion Models (HDDM)</li>
              <li>Bayesian Regression (BRMS)</li>
              <li>Generalized Linear Mixed Models (GLMM)</li>
              <li>Reinforcement Learning Models</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Writing */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 md:px-12 mb-40"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">03 / Writing</h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="space-y-2 pl-0 md:pl-12">
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-b border-border/50 group">
            <Link href="/essays" className="text-2xl font-serif group-hover:text-primary transition-colors">
              What is Information Foraging?
            </Link>
            <span className="text-sm text-muted-foreground italic mt-2 md:mt-0">Coming soon</span>
          </motion.div>
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-b border-border/50 group">
            <Link href="/essays" className="text-2xl font-serif group-hover:text-primary transition-colors">
              Why Humans Keep Scrolling
            </Link>
            <span className="text-sm text-muted-foreground italic mt-2 md:mt-0">Coming soon</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Art */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 md:px-12 mb-40"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">04 / Art</h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <motion.div variants={fadeIn} className="pl-0 md:pl-12">
          <Link href="/art" className="group block">
            <p className="text-xl font-serif italic text-foreground/70 mb-6 group-hover:text-primary transition-colors">
              Paintings, drawings, and visual experiments — a studio notebook.
            </p>
            <span className="text-sm uppercase tracking-widest font-medium text-primary flex items-center gap-2">
              View artwork
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 md:px-12 pb-40"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">05 / Contact</h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <motion.div variants={fadeIn} className="pl-0 md:pl-12">
          <p className="text-xl font-serif italic mb-6">Let's connect.</p>
          <a
            href="mailto:shruti.vatsa.15@gmail.com"
            className="text-lg hover:text-primary transition-colors"
            data-testid="link-email-home"
          >
            shruti.vatsa.15@gmail.com
          </a>
        </motion.div>
      </motion.section>

    </div>
  );
}
