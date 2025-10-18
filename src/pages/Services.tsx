import { Snowflake, Wrench, Wind, Shield, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    description: "Professional installation of energy-efficient air conditioning systems for homes and businesses.",
    features: ["Energy-efficient systems", "Professional setup", "System optimization", "Warranty included"],
  },
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    description: "Expert repair services and routine maintenance to keep your system running smoothly year-round.",
    features: ["24/7 emergency repairs", "Routine maintenance", "Performance optimization", "Parts replacement"],
  },
  {
    icon: Wind,
    title: "Heating Systems",
    description: "Complete heating solutions including furnace installation, repair, and maintenance services.",
    features: ["Furnace installation", "Heat pump services", "System diagnostics", "Efficiency upgrades"],
  },
  {
    icon: Shield,
    title: "Duct Cleaning & Installation",
    description: "Improve air quality and system efficiency with professional duct cleaning and installation.",
    features: ["Air quality improvement", "Duct inspection", "New duct installation", "Seal & insulation"],
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    description: "Comprehensive HVAC solutions for commercial properties of all sizes and industries.",
    features: ["Large-scale systems", "Custom solutions", "Preventive maintenance", "Energy management"],
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "Round-the-clock emergency HVAC services when you need them most.",
    features: ["24/7 availability", "Fast response time", "Same-day service", "All brands serviced"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
            Our HVAC Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Comprehensive heating, ventilation, and air conditioning solutions delivered by our 30-member expert team.
          </p>
          <Button variant="cta" size="lg" className="animate-fade-in">
            Request a Free Estimate
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team of experts today for a free consultation and estimate on any of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg">
                  Request Free Estimate
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Call (+91) 9032598491
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
