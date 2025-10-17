import { Users, Award, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const features = [
    {
      icon: Users,
      title: "30-Member Expert Team",
      description: "Our skilled technicians are certified, experienced, and committed to excellence in every job."
    },
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "EPA certified technicians with ongoing training in the latest HVAC technologies and best practices."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for urgent HVAC issues. We're here when you need us most."
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with comprehensive warranties and quality guarantees."
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With 30 highly trained professionals, we deliver exceptional HVAC services backed by decades of combined experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">30</div>
              <div className="text-lg text-muted-foreground">Certified Technicians</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
