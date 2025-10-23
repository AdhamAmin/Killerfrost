import { Code2, Video, Palette, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Software Engineer",
      description: "Building robust and scalable applications with modern technologies. Passionate about clean code and innovative solutions.",
      skills: ["React", "TypeScript", "Node.js", "Python", "Database Design"]
    },
    {
      icon: Video,
      title: "Video Editor",
      description: "Creating engaging visual stories through professional video editing. Bringing ideas to life with compelling narratives.",
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"]
    },
    {
      icon: Palette,
      title: "Graphic Designer",
      description: "Designing beautiful and functional visual experiences. From branding to UI/UX, every pixel matters.",
      skills: ["Photoshop", "Illustrator", "Figma", "Brand Identity", "UI/UX Design"]
    },
    {
      icon: Waves,
      title: "Competitive Swimmer",
      description: "Discipline, perseverance, and teamwork learned through years of competitive swimming. Always pushing limits.",
      skills: ["Team Leadership", "Performance", "Dedication", "Goal Setting", "Resilience"]
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              &lt; About Me /&gt;
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A multidisciplinary professional combining technical expertise with creative vision and athletic discipline
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="glass hover:shadow-glow transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-xl neumorphic text-accent group-hover:shadow-glow transition-all duration-300">
                        <Icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">
                          {skill.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skill.skills.map((s, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 text-sm rounded-full neumorphic text-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
