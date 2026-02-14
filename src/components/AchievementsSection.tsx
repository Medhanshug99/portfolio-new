import { motion } from "framer-motion";
import { Trophy, Star, Code2, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Codeforces Rating",
    detail: "Specialist · 1400+",
    color: "text-accent-blue",
  },
  {
    icon: Star,
    title: "LeetCode",
    detail: "Actively practicing problem solving",
    color: "text-accent-green",
  },
  {
    icon: Code2,
    title: "CodeChef",
    detail: "3★ · Division 2",
    color: "text-accent-amber",
  },
  // {
  //   icon: Award,
  //   title: "Hackathons",
  //   detail: "Multiple Top-3 Finishes",
  //   color: "text-accent-purple",
  // },
];

const AchievementsSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6 font-body">
          Achievements
        </p>
        <div className="border-t border-border mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 bg-card border border-border hover:border-muted-foreground/30 transition-colors"
            data-cursor-hover
          >
            <item.icon className={`w-5 h-5 mb-4 ${item.color}`} />
            <h3 className="font-heading font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
