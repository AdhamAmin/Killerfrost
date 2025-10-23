import { Code2, Cpu, Zap, Sparkles, Binary, GitBranch } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: Code2, delay: 0, position: "top-20 left-10" },
    { Icon: Cpu, delay: 1, position: "top-40 right-20" },
    { Icon: Zap, delay: 2, position: "bottom-40 left-20" },
    { Icon: Sparkles, delay: 0.5, position: "top-1/3 right-10" },
    { Icon: Binary, delay: 1.5, position: "bottom-20 right-40" },
    { Icon: GitBranch, delay: 0.8, position: "top-1/2 left-1/4" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => {
        const Icon = element.Icon;
        return (
          <div
            key={index}
            className={`absolute ${element.position} ${
              index % 2 === 0 ? "animate-float" : "animate-float-delayed"
            } opacity-10`}
            style={{ animationDelay: `${element.delay}s` }}
          >
            <Icon size={60} className="text-accent" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
