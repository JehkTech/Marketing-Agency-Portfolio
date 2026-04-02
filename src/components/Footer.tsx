import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-green-950 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">KINERTIC</div>
                <div className="text-[10px] tracking-widest text-green-400 -mt-1">MEDIA ARTS</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium digital marketing and media solutions delivering strategic, results-driven
              brand growth for modern businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/kinerticmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/kinertic_marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'process', label: 'Process' },
                { id: 'case-study', label: 'Case Study' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-green-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">Services</h3>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">Digital Marketing</li>
              <li className="text-white/70 text-sm">Photography</li>
              <li className="text-white/70 text-sm">Videography</li>
              <li className="text-white/70 text-sm">Brand Strategy</li>
              <li className="text-white/70 text-sm">Content Production</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:kinerticmedia97@gmail.com"
                  className="text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  kinerticmedia97@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+260975219796"
                  className="text-white/70 hover:text-green-400 transition-colors text-sm"
                >
                  +260 975 219 796
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Kinertic Media Arts. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-white/60 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
