import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
              CoolAir HVAC
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted local HVAC experts since 2005. Professional service, guaranteed satisfaction.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@coolair-hvac.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Main St, Your City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-1" />
                <div>
                  <div>Mon-Fri: 7:00 AM - 7:00 PM</div>
                  <div>Sat: 8:00 AM - 5:00 PM</div>
                  <div>Sun: Emergency Only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>AC Installation</li>
              <li>AC Repair</li>
              <li>Maintenance Plans</li>
              <li>Commercial HVAC</li>
              <li>Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CoolAir HVAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
