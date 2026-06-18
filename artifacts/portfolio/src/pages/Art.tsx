import { useState } from "react";
import { motion } from "framer-motion";
import geometryOfLonging from "../assets/geometry-of-longing.png";
import manzil from "../assets/manzil.jpg";
import portraitStudy from "../assets/portrait-study.jpg";
import schrodingersCat from "../assets/schrodingers-cat.jpg";
import indianTribal from "../assets/indian-tribal.jpg";

const ARTWORKS = [
  {
    id: 1,
    title: "The Geometry of Longing",
    year: "2021",
    medium: "Acrylic on canvas",
    image: geometryOfLonging,
    reflection:
      "An exploration of emotional geometry, the way longing has shape, weight, and direction. Painted during a period of sustained uncertainty.",
  },
  {
    id: 2,
    title: "Schrödinger's Cat",
    year: "2021",
    medium: "Acrylic on canvas",
    image: schrodingersCat,
    reflection:
      "A figure suspended between states, eyes closed, face tilted upward against a starfield. The painting lives in the moment before collapse, before observation forces certainty.",
  },
  {
    id: 3,
    title: "Indian Tribal",
    year: "2021",
    medium: "Acrylic on canvas",
    image: indianTribal,
    reflection:
      "A portrait in intensity. Painted from observation, the face holds a lifetime's weather, each line a record of something endured or witnessed.",
  },
  {
    id: 4,
    title: "Manzil",
    year: "2022",
    medium: "Pen and ink on paper",
    image: manzil,
    reflection:
      "Crosshatched from observation, built line by line. The face fractures at the forehead, two planes, two gazes, one figure. A study in duality and destination.",
  },
  {
    id: 5,
    title: "Portrait Study",
    year: "2019",
    medium: "Charcoal on paper",
    image: portraitStudy,
    reflection:
      "An early charcoal study: the hair rendered in motion, the gaze steady. Practice in seeing before painting.",
  },
];

export function Art() {
  const [layout, setLayout] = useState<"grid" | "featured">("featured");

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Art</h1>
          <p className="text-xl font-serif text-muted-foreground italic">
            A studio notebook.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2"
        >
          <button
            onClick={() => setLayout("featured")}
            data-testid="button-layout-featured"
            className={`px-4 py-2 text-sm rounded-sm transition-colors ${layout === "featured" ? "bg-foreground text-background" : "bg-card text-foreground/70 hover:text-foreground border border-border/50"}`}
          >
            Featured
          </button>
          <button
            onClick={() => setLayout("grid")}
            data-testid="button-layout-grid"
            className={`px-4 py-2 text-sm rounded-sm transition-colors ${layout === "grid" ? "bg-foreground text-background" : "bg-card text-foreground/70 hover:text-foreground border border-border/50"}`}
          >
            Grid
          </button>
        </motion.div>
      </div>

      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-32 max-w-3xl mx-auto"
        }
      >
        {ARTWORKS.map((art, i) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="group"
          >
            <div
              className={`mb-6 overflow-hidden bg-card ${layout === "featured" ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-square"}`}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div
              className={`flex flex-col ${layout === "featured" ? "md:flex-row md:items-start justify-between gap-8" : "gap-3"}`}
            >
              <div className={layout === "grid" ? "" : "md:w-1/3"}>
                <h3 className="text-2xl font-serif mb-2">{art.title}</h3>
                <p className="text-sm text-primary uppercase tracking-widest mb-1">
                  {art.year}
                </p>
                <p className="text-sm text-muted-foreground">{art.medium}</p>
              </div>
              <div
                className={
                  layout === "grid"
                    ? "mt-3 pt-4 border-t border-border/30"
                    : "md:w-2/3"
                }
              >
                <p className="text-foreground/75 font-light leading-relaxed text-sm md:text-base italic">
                  "{art.reflection}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
