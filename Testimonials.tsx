import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      content: "Outstanding work on our web platform. The attention to detail and technical expertise exceeded our expectations. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "The video production quality was phenomenal. Creative vision combined with technical excellence. Our campaign exceeded all targets.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Exceptional design work that perfectly captured our brand identity. Professional, creative, and delivered ahead of schedule.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              &lt; Testimonials /&gt;
            </h2>
            <p className="text-xl text-muted-foreground">
              What clients say about working with me
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glass hover:shadow-glow transition-all duration-300"
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <p className="font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
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

export default Testimonials;
