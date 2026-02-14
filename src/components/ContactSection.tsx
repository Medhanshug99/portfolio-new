import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6 font-body">
            Contact
          </p>
          <div className="border-t border-border mb-12" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Have an idea, a project, or just{" "}
          <span className="text-accent-amber">want to talk</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary-foreground text-lg mb-10 leading-relaxed"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of something great. Let's create
          something meaningful together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href="mailto:medhanshp7@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background font-heading font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            data-cursor-hover
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/Medhanshug99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-muted-foreground/50 transition-colors"
              data-cursor-hover
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/medhansh-poojari-16b242200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-muted-foreground/50 transition-colors"
              data-cursor-hover
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
