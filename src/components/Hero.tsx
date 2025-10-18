import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-ac-installation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional AC installation by AirMatrix expert technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Expert HVAC Solutions
            <span className="block text-primary mt-2">You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Professional AC installation, repair, and maintenance for residential and commercial properties. 
            Serving the community with excellence since 2005.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-lg h-14 px-8">
              Request a Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (+91) 9032598491
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">30</div>
              <div className="text-sm text-muted-foreground">Expert Technicians</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
