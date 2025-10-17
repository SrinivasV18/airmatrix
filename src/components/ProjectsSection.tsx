import { Building2, Factory, ShoppingBag, Hotel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Building2,
      title: "Downtown Office Complex",
      type: "Commercial",
      description: "Complete HVAC system installation for a 15-story office building with 200+ units.",
      badge: "Major Project"
    },
    {
      icon: Factory,
      title: "Manufacturing Facility",
      type: "Industrial",
      description: "Industrial-grade climate control system for a 50,000 sq ft manufacturing plant.",
      badge: "Large Scale"
    },
    {
      icon: ShoppingBag,
      title: "Retail Shopping Center",
      type: "Commercial",
      description: "Multi-zone HVAC solution for a 20-store retail complex with energy-efficient design.",
      badge: "Energy Star"
    },
    {
      icon: Hotel,
      title: "Boutique Hotel",
      type: "Hospitality",
      description: "Luxury HVAC system installation with individual room controls for 80 guest rooms.",
      badge: "Premium"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Commercial Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've successfully completed hundreds of commercial HVAC installations across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <Badge className="bg-accent text-accent-foreground">
                        {project.badge}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <div className="text-sm text-primary font-medium mb-3">{project.type}</div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From small repairs to large commercial installations, we have the expertise and team to handle any HVAC project.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
