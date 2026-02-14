import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const SectionNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="hidden md:flex fixed top-0 left-0 right-0 flex-row items-center justify-center gap-10 z-50 py-5 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className="group relative flex items-center gap-0 py-1"
            data-cursor-hover
          >
            <span
              className={`text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 ${
                isActive
                  ? "text-accent-blue font-medium"
                  : "text-muted-foreground/50 hover:text-muted-foreground font-normal"
              }`}
            >
              {label}
            </span>
            <span
              className={`absolute -bottom-0.5 left-0 h-px bg-accent-blue transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full group-hover:bg-muted-foreground/40"
              }`}
            />
          </a>
        );
      })}
    </motion.nav>
  );
};

export default SectionNav;
