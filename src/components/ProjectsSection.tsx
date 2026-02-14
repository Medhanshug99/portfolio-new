import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import project1 from "@/assets/p1.png";
import project2 from "@/assets/p2.png";
import project3 from "@/assets/p3.png";
import project4 from "@/assets/p4.png";
import project5 from "@/assets/p5.png";

const projects = [
  {
    title: "Digital Footprint Simulator",
    description: "A virtual system that mirrors a person’s personality and behavior",
    tech: ["React", "Javascript", "HTML/CSS"],
    year: "2026",
    type: "Web App",
    color: "text-accent-blue",
    image: project1,
  },
  {
    title: "Contact Hub",
    description: "A simple, clean contact manager",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    year: "2025",
    type: "Web App",
    color: "text-accent-purple",
    image: project2,
  },
  {
    title: "BMI Calculator",
    description: "A simple, clean BMI calculator built with HTML, CSS, and JavaScript",
    tech: ["HTML", "CSS", "Javascript"],
    year: "2025",
    type: "Web App",
    color: "text-accent-green",
    image: project3,
  },
  {
    title: "Currency Converter",
    description: "A tool that converts one currency into another using real-time exchange rates",
    tech: ["HTML", "CSS", "Javascript"],
    year: "2025",
    type: "Web App",
    color: "text-accent-amber",
    image: project4,
  },
  {
    title: "User Interaction Tracker",
    description: "A system that monitors and analyzes how users interact with a platform",
    tech: ["HTML", "CSS", "Javascript"],
    year: "2025",
    type: "Web App",
    color: "text-accent-blue",
    image: project5,
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6 font-body">
          Projects
        </p>
        <div className="border-t border-border mb-2" />
      </motion.div>

      <div ref={containerRef} className="relative" onMouseMove={handleMouseMove}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-border py-8 md:py-10 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-cursor-hover
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3
                  className={`font-heading text-2xl md:text-3xl font-bold transition-colors duration-300 ${hoveredIndex === index ? project.color : "text-foreground"
                    }`}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-6 md:gap-8">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground font-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hidden md:flex items-center gap-4 text-muted-foreground text-sm whitespace-nowrap">
                  <span>{project.type}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Hover preview image */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="hidden md:block absolute pointer-events-none z-10 w-72 h-44 overflow-hidden"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 88,
              }}
            >
              <img
                src={projects[hoveredIndex].image}
                alt={projects[hoveredIndex].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
