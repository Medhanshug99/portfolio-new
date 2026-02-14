import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-body">
          © 2025 · Built with precision by Medhansh Poojari
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Medhanshug99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-cursor-hover
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/medhansh-poojari-16b242200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-cursor-hover
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
