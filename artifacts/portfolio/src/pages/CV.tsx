import { motion } from "framer-motion";
import { Download } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export function CV() {
  return (
    <div className="pt-32 pb-32 max-w-3xl mx-auto px-6 md:px-12">
      <div className="flex justify-between items-start mb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-serif mb-2">Curriculum Vitae</motion.h1>
          <motion.p variants={fadeIn} className="text-sm text-muted-foreground font-light">Shruti Vatsa — shruti.vatsa.15@gmail.com</motion.p>
        </motion.div>
        <motion.a
          href="/ShrutiV_CV_2026.pdf"
          download="ShrutiV_CV_2026.pdf"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          data-testid="button-download-cv"
          className="flex items-center gap-2 text-sm font-medium border border-border px-4 py-2 rounded-sm hover:bg-card transition-colors"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download PDF</span>
        </motion.a>
      </div>

      <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-16">

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Research Interests</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Foraging and uncertainty · Cognitive mechanisms of information search · Decision Neuroscience · Computational modelling · Bayesian Inference
          </p>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-serif">BTech–MTech (Dual Degree)</h3>
                <span className="text-sm text-muted-foreground">Jul 2018 – Dec 2023</span>
              </div>
              <p className="text-sm text-foreground/80">Indian Institute of Technology Kanpur</p>
              <p className="text-sm text-muted-foreground mt-1">BTech: Civil Engineering · MTech: Biological Sciences & Bioengineering</p>
              <p className="text-sm text-muted-foreground italic">Thesis: Influence of environmental structure on foraging behaviour (Supervisor: Dr. Arjun Ramakrishnan)</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Research Experience</h2>
          <div className="space-y-10">

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-serif">Junior Research Fellow</h3>
                <span className="text-sm text-muted-foreground">Feb 2025 – Jul 2025</span>
              </div>
              <p className="text-sm text-foreground/80 mb-3">Cognition & Neural Dynamics Lab, IIT Jodhpur · Supervised by Dr. Saurabh Gandhi</p>
              <ul className="text-sm text-foreground/70 space-y-2 list-disc list-inside marker:text-muted-foreground">
                <li>Conducted an extensive literature review on digital foraging, affective states, and decision-making.</li>
                <li>Designed the preliminary task interface and experimental flow for studying smartphone-based information foraging.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-serif">Project Engineer</h3>
                <span className="text-sm text-muted-foreground">Jan 2024 – Dec 2024</span>
              </div>
              <p className="text-sm text-foreground/80 mb-3">Decision Lab, IIT Kanpur · Supervised by Dr. Arjun Ramakrishnan</p>
              <ul className="text-sm text-foreground/70 space-y-2 list-disc list-inside marker:text-muted-foreground">
                <li>Investigated the effect of environmental structural uncertainty on decision-making as a function of anxiety and depression scores using a patch-foraging task.</li>
                <li>Modelled data with GLMMs, LMMs, HDDMs, PCA, and Bayesian regression (BRMS).</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-serif">Master's Thesis</h3>
                <span className="text-sm text-muted-foreground">May 2022 – Dec 2023</span>
              </div>
              <p className="text-sm text-foreground/80 mb-3">IIT Kanpur · Supervised by Dr. Arjun Ramakrishnan</p>
              <ul className="text-sm text-foreground/70 space-y-2 list-disc list-inside marker:text-muted-foreground">
                <li>Co-designed a 2D web-based foraging task to understand how environmental structure, anxiety, and depression influence patch-leaving behaviour.</li>
                <li>Applied LMM and HDDM frameworks to model optimality deviations.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-serif">Research Internship</h3>
                <span className="text-sm text-muted-foreground">Mar 2021 – Apr 2021</span>
              </div>
              <p className="text-sm text-foreground/80 mb-3">WeUnlearn</p>
              <ul className="text-sm text-foreground/70 space-y-2 list-disc list-inside marker:text-muted-foreground">
                <li>Conducted behavioral studies on mental health interventions via chatbots for adolescents.</li>
                <li>Project placed 3rd in the Stanford Center on Longevity Design Challenge.</li>
              </ul>
            </div>

          </div>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Publications & Talks</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-foreground/80 leading-relaxed">
                Vatsa S., Biswal A., Ramakrishnan A. <span className="italic">(in preparation).</span> Effect of structure and trait anxiety on reward-guided decision-making in a patch-foraging environment.
              </p>
            </div>
            <div>
              <p className="text-foreground/80 leading-relaxed mb-2">
                Vatsa S., Ramakrishnan A. <span className="italic">(oral presentation).</span> Influence of structure and trait-anxiety on patch foraging behaviour.
              </p>
              <ul className="text-foreground/60 space-y-1 list-disc list-inside marker:text-muted-foreground">
                <li>Annual Conference of Cognitive Science 11th Edition, IIT Bombay, December 2024</li>
                <li>2024 Indian Conference on Judgement and Decision Making, IIT Mandi, October 2024</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Teaching & Mentorship</h2>
          <div className="space-y-6 text-sm">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-serif text-base">Teaching Assistant — Computational Neuroscience</h3>
                <span className="text-muted-foreground">July 2024</span>
              </div>
              <p className="text-foreground/70">Neuromatch Academy · Guided 17 students through hands-on Python programming in tutorials and research projects.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-serif text-base">Teaching Assistant — Decision-making and The Brain</h3>
                <span className="text-muted-foreground">Jan 2024 – Apr 2024</span>
              </div>
              <p className="text-foreground/70">IIT Kanpur (BSE662A)</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-serif text-base">Academic Mentor</h3>
                <span className="text-muted-foreground">Jul 2019 – Apr 2020</span>
              </div>
              <p className="text-foreground/70">Counselling Service, IIT Kanpur · Remedial classes and one-on-one academic assistance for incoming students.</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Leadership & Outreach</h2>
          <div className="space-y-4 text-sm">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                <h3 className="font-serif text-base">Co-founder, Chuckles Art Studio</h3>
                <span className="text-muted-foreground">Jan 2024 – Present</span>
              </div>
              <p className="text-foreground/70">Art and design startup creating literature and science inspired apparel and wall art.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                <h3 className="font-serif text-base">Founding Member, IIT Kanpur Women's Football Team</h3>
                <span className="text-muted-foreground">2019 – 2022</span>
              </div>
              <p className="text-foreground/70">Won 2 Bronze & 1 Silver medal at Udghosh, IITK's national sports fest.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                <h3 className="font-serif text-base">Media & Publicity Lead, Entrepreneurship Cell</h3>
                <span className="text-muted-foreground">2019 – 2021</span>
              </div>
              <p className="text-foreground/70">IIT Kanpur · Led a 10-member team managing media coverage of entrepreneurial events.</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeIn}>
          <h2 className="text-xs uppercase tracking-widest text-primary font-medium mb-6 border-b border-border pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-serif italic text-base mb-3">Programming</h3>
              <p className="text-foreground/70 leading-relaxed">Python & R (proficient) · MATLAB, HTML, JavaScript, C/C++ (familiar)</p>
            </div>
            <div>
              <h3 className="font-serif italic text-base mb-3">Modelling & Analysis</h3>
              <p className="text-foreground/70 leading-relaxed">LMM, GLMM (lme4, glmmTMB) · HDDM · Bayesian inference (brms) · PCA</p>
            </div>
            <div>
              <h3 className="font-serif italic text-base mb-3">Software & Tools</h3>
              <p className="text-foreground/70 leading-relaxed">LaTeX, Qualtrics, AWS (S3 & Lambda), PsychoPy, QGIS, Tableau, Figma, Balsamiq</p>
            </div>
            <div>
              <h3 className="font-serif italic text-base mb-3">Other</h3>
              <p className="text-foreground/70 leading-relaxed">Writing · Visual Art · Bioinformatics (BLAST, Clustal, PDB)</p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
