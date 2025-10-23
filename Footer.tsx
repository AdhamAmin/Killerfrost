import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 glass border-t border-border relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 font-mono">
            &lt; Built with <Heart size={16} className="text-accent fill-accent animate-pulse" /> using React & TypeScript /&gt;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
