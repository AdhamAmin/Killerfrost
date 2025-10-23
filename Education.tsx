import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      school: "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
      degree: "Bachelor of Computer Engineering",
      location: "Smart Village Campus",
      period: "Expected Graduation",
      status: "Current",
      description: "Specializing in software engineering and computer systems. Building strong foundations in algorithms, data structures, and modern development practices."
    },
    {
      school: "El Hossam British School",
      degree: "High School Diploma",
      location: "",
      period: "Graduated",
      status: "Completed",
      description: "Strong academic foundation with focus on mathematics, sciences, and technology. Developed early interest in programming and digital design."
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              &lt; Education /&gt;
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic journey building expertise in technology and engineering
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full" />

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-accent border-4 border-background shadow-glow animate-pulse" />

                  <Card className="glass hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8">
                      {/* Status Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-4 py-2 text-sm rounded-full neumorphic ${
                          edu.status === 'Current' 
                            ? 'text-accent' 
                            : 'text-primary'
                        }`}>
                          {edu.status}
                        </span>
                      </div>

                      {/* School Name */}
                      <h3 className="text-2xl font-bold mb-2 text-foreground flex items-start gap-3">
                        <GraduationCap className="text-accent mt-1 flex-shrink-0" size={28} />
                        <span>{edu.school}</span>
                      </h3>

                      {/* Degree */}
                      <p className="text-lg text-accent mb-2 pl-11">
                        {edu.degree}
                      </p>

                      {/* Location & Period */}
                      <div className="flex items-center gap-4 text-muted-foreground mb-4 pl-11">
                        {edu.location && (
                          <span>{edu.location}</span>
                        )}
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {edu.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground pl-11">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
