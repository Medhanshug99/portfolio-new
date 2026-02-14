import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6 font-body">
            About
          </p>
          <div className="border-t border-border mb-12" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-tight"
        >
          I care about <span className="text-accent-purple">clean code</span>,
          {" "}thoughtful design, and building things that{" "}
          <span className="text-accent-green">actually work</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <p className="text-secondary-foreground leading-relaxed">
            I'm a frontend developer focused on building applications that
            are fast, accessible, and maintainable.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            I prioritize performance, usability, and smooth interactions from the start.
            Every decision I make is centered around building reliable, user-focused products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
