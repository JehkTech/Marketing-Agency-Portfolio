import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Footer() {
  const brand = useScrollAnimation({ threshold: 0.2 });
  const contact = useScrollAnimation({ threshold: 0.2 });
  const services = useScrollAnimation({ threshold: 0.2 });
  const company = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-muted/20 border-t border-border/10 relative overflow-hidden">
      {/* Gradient accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div 
            ref={brand.ref}
            className={brand.isVisible ? 'animate-fade-in' : 'opacity-0'}
          >
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                KINERTIC MEDIA ARTS
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Transforming digital visions into reality. Your partner in creative excellence.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400/10 to-emerald-500/10 border border-lime-400/20 flex items-center justify-center hover:from-lime-400 hover:to-emerald-500 hover:border-transparent transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-lime-400 group-hover:text-black transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400/10 to-emerald-500/10 border border-lime-400/20 flex items-center justify-center hover:from-lime-400 hover:to-emerald-500 hover:border-transparent transition-all duration-300 group">
                <Twitter className="w-4 h-4 text-lime-400 group-hover:text-black transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400/10 to-emerald-500/10 border border-lime-400/20 flex items-center justify-center hover:from-lime-400 hover:to-emerald-500 hover:border-transparent transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-lime-400 group-hover:text-black transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400/10 to-emerald-500/10 border border-lime-400/20 flex items-center justify-center hover:from-lime-400 hover:to-emerald-500 hover:border-transparent transition-all duration-300 group">
                <Linkedin className="w-4 h-4 text-lime-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>
          
          <div 
            ref={contact.ref}
            className={contact.isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}
          >
            <h4 className="text-sm sm:text-base mb-4 text-lime-400">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Amphitheatre Parkway,<br />
                  Mountain View, California, 94043
                </p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@kinerticmediaarts.com" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors">
                  hello@kinerticmediaarts.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+123456789" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={services.ref}
            className={services.isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}
          >
            <h4 className="text-sm sm:text-base mb-4 text-lime-400">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Digital Marketing</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Branding Design</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Web Development</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Social Media</a></li>
            </ul>
          </div>
          
          <div 
            ref={company.ref}
            className={company.isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}
          >
            <h4 className="text-sm sm:text-base mb-4 text-lime-400">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">About Us</a></li>
              <li><a href="#works" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Our Work</a></li>
              <li><a href="#contact" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Contact</a></li>
              <li><a href="#careers" className="text-xs sm:text-sm text-muted-foreground hover:text-lime-400 transition-colors hover:translate-x-1 inline-block duration-300">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gradient-to-r from-transparent via-border to-transparent mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <a href="#privacy" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#terms" className="hover:text-lime-400 transition-colors">Terms of Service</a>
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
            © 2024 Kinertic Media Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}