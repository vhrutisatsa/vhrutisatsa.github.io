import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const ALL_ESSAYS = [
  {
    id: 1,
    title: "What is Information Foraging?",
    category: "Cognition",
    desc: "How the mind treats information the same way a forager treats food.",
  },
  {
    id: 2,
    title: "Why Humans Keep Scrolling",
    category: "Attention",
    desc: "The neuroscience of infinite scroll and what it reveals about prediction.",
  },
  {
    id: 3,
    title: "The Shape of Uncertainty",
    category: "Neuroscience",
    desc: "On living and deciding under irreducible uncertainty.",
  },
  {
    id: 4,
    title: "Attention as a Resource",
    category: "Attention",
    desc: "What cognitive ecology tells us about modern distraction.",
  },
];

const CATEGORIES = ["All", "Cognition", "Attention", "Art", "Neuroscience"];

export function Essays() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = ALL_ESSAYS.filter((e) => {
    const matchesSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase());
    const matchesCat =
      activeCategory === "All" || e.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 md:px-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mb-16"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Essays
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl font-serif text-muted-foreground italic"
        >
          On cognition, attention, meaning, and the strangeness of minds.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 space-y-6"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search essays..."
            className="pl-10 bg-card/50 border-border/50 focus-visible:ring-primary/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-card border border-border/50 text-foreground/70 hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="space-y-8"
      >
        {filtered.length === 0 ? (
          <p className="text-muted-foreground italic py-8 text-center">
            No essays found matching your criteria.
          </p>
        ) : (
          filtered.map((essay) => (
            <motion.article
              key={essay.id}
              variants={fadeIn}
              className="group p-6 rounded-sm bg-card/30 border border-border/40 opacity-70"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs uppercase tracking-widest text-primary">
                  {essay.category}
                </span>
                <span className="text-xs italic bg-muted px-2 py-1 rounded-sm text-muted-foreground">
                  Coming soon
                </span>
              </div>
              <Link href="/essays/next-logo">
                <h2 className="text-2xl font-serif mb-3 text-foreground/80 hover:underline cursor-pointer">
                  {essay.title}
                </h2>
              </Link>
              <p className="text-foreground/70 font-light text-sm">
                {essay.desc}
              </p>
            </motion.article>
          ))
        )}
      </motion.div>
    </div>
  );
}
