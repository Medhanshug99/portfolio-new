import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    color: "accent-blue",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    color: "accent-green",
    skills: ["MongoDB", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools",
    color: "accent-purple",
    skills: ["Git", "Vercel", "Figma"],
  },
  {
    title: "Competitive Programming",
    color: "accent-amber",
    skills: ["C++", "Python", "Data Structures", "Algorithms", "Problem Solving", "System Design"],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  "accent-blue": { bg: "bg-accent-blue/10", text: "text-accent-blue", border: "border-accent-blue" },
  "accent-green": { bg: "bg-accent-green/10", text: "text-accent-green", border: "border-accent-green" },
  "accent-purple": { bg: "bg-accent-purple/10", text: "text-accent-purple", border: "border-accent-purple" },
  "accent-amber": { bg: "bg-accent-amber/10", text: "text-accent-amber", border: "border-accent-amber" },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6 font-body">
          Skills & Tools
        </p>
        <div className="border-t border-border mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
        {categories.map((cat, catIdx) => {
          const colors = colorMap[cat.color];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className={`font-heading text-lg font-semibold mb-4 ${colors.text}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                    className={`px-3 py-1.5 text-sm font-body ${colors.bg} ${colors.text} border ${colors.border}/20`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
