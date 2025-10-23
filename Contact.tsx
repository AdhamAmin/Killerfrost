import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent! ✓",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:adham2211976@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              &lt; Get In Touch /&gt;
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's collaborate on your next project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full neumorphic hover:shadow-glow text-foreground hover:text-accent-foreground hover:bg-accent"
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? "Sending..." : "&lt; Send Message /&gt;"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    &lt; Connect /&gt;
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl neumorphic hover:shadow-glow transition-all duration-300 group"
                        >
                          <div className="p-3 rounded-lg text-accent group-hover:text-accent transition-all duration-300">
                            <Icon size={24} />
                          </div>
                          <span className="text-foreground group-hover:text-accent transition-colors">
                            {link.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-accent/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    &lt; Available For /&gt;
                  </h3>
                  <p className="text-muted-foreground">
                    Currently open to freelance projects, collaborations, and full-time opportunities in software engineering and creative fields.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
