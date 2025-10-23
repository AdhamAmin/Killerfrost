import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "software",
      description: "Full-stack web application with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tags: ["Branding", "Illustrator", "Figma"],
      links: { demo: "#" }
    },
    {
      title: "Corporate Video Production",
      category: "video",
      description: "Professional promotional video with motion graphics, color grading, and sound design for a leading company.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      tags: ["Premiere Pro", "After Effects"],
      links: { demo: "#" }
    },
    {
      title: "Mobile App UI/UX",
      category: "design",
      description: "Modern mobile app design with intuitive user experience, custom illustrations, and interactive prototypes.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      tags: ["Figma", "UI/UX", "Prototyping"],
      links: { demo: "#" }
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "software",
      description: "Real-time analytics platform with data visualization, machine learning insights, and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Python", "TensorFlow"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Documentary Edit",
      category: "video",
      description: "Feature-length documentary with cinematic color grading, interviews, and compelling storytelling.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      tags: ["DaVinci Resolve", "Sound Design"],
      links: { demo: "#" }
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "video", label: "Video" },
    { id: "design", label: "Design" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              &lt; Portfolio /&gt;
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent projects and creative work
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id 
                  ? "neumorphic shadow-glow bg-accent text-accent-foreground hover:bg-accent/90" 
                  : "neumorphic hover:shadow-glow text-foreground"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass hover:shadow-glow transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full neumorphic text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.demo && (
                      <Button size="sm" className="flex-1 neumorphic hover:shadow-glow hover:bg-accent hover:text-accent-foreground">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" className="neumorphic hover:shadow-glow">
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
