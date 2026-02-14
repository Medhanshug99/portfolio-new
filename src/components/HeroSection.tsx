import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-8"
        >
          Medhansh Poojari
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
        >

          I build fast, reliable frontend applications,
          <br />
          driven by simplicity and defined by{" "}
          <span className="text-accent-blue">performance</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-secondary-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
        >
          Clean architecture and usability guide every decision I make
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-foreground text-background font-heading font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            data-cursor-hover
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-muted-foreground/30 text-foreground font-heading font-medium text-sm tracking-wide hover:border-foreground/60 transition-colors"
            data-cursor-hover
          >
            Download Resume
          </a>
        </motion.div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-6 md:left-16 lg:left-24"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
