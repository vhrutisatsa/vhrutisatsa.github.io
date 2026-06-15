import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:shruti.vatsa.15@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="pt-32 pb-32 max-w-4xl mx-auto px-6 md:px-12">
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}>
        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif mb-8">Get in touch.</motion.h1>
        
        <motion.p variants={fadeIn} className="text-xl md:text-2xl font-serif text-muted-foreground italic mb-16 max-w-2xl">
          Open to research collaborations, PhD opportunities, and conversations about minds.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={fadeIn} className="space-y-8">
            <a
              href="mailto:shruti.vatsa.15@gmail.com"
              data-testid="link-email"
              className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
            >
              <div className="p-4 bg-card border border-border/50 rounded-full group-hover:border-primary/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              shruti.vatsa.15@gmail.com
            </a>
            
            <a
              href="https://github.com/vhrutisatsa"
              target="_blank"
              rel="noreferrer"
              data-testid="link-github"
              className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
            >
              <div className="p-4 bg-card border border-border/50 rounded-full group-hover:border-primary/30 transition-colors">
                <SiGithub className="w-5 h-5" />
              </div>
              GitHub
            </a>
            
            <a
              href="https://linkedin.com/in/shruti-vatsa"
              target="_blank"
              rel="noreferrer"
              data-testid="link-linkedin"
              className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
            >
              <div className="p-4 bg-card border border-border/50 rounded-full group-hover:border-primary/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              LinkedIn
            </a>
            
            <span className="flex items-center gap-4 text-lg text-muted-foreground cursor-default">
              <div className="p-4 bg-card border border-border/30 rounded-full">
                <span className="font-serif italic px-1 text-sm">gs</span>
              </div>
              Google Scholar <span className="text-xs uppercase tracking-widest ml-2 italic">(coming soon)</span>
            </span>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-card/50 p-8 rounded-sm border border-border/50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif">Opening your mail app</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Your message is ready to send in your email client.<br />
                  Or write directly to <a href="mailto:shruti.vatsa.15@gmail.com" className="underline underline-offset-2 hover:text-foreground transition-colors">shruti.vatsa.15@gmail.com</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    ref={nameRef}
                    required
                    data-testid="input-name"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    ref={emailRef}
                    required
                    data-testid="input-email"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    ref={messageRef}
                    required
                    rows={5}
                    data-testid="input-message"
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-testid="button-send"
                  className="w-full font-serif text-lg tracking-wide bg-foreground text-background hover:bg-foreground/90 rounded-sm py-6"
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
