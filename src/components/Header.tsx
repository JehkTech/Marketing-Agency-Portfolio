import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold tracking-tight text-foreground">
                KINERTIC
              </div>
              <div className="text-[10px] tracking-widest text-green-500 -mt-1">
                MEDIA ARTS
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/70 hover:text-green-500 transition-colors"
            >
              About
            </button>
            
            <div className="relative group">
              <button className="text-sm font-medium text-foreground/70 hover:text-green-500 transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-border rounded-lg shadow-lg p-2">
                  <button
                    onClick={() => scrollToSection('services')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-green-500/10 rounded transition-colors"
                  >
                    All Services
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('case-study')}
              className="text-sm font-medium text-foreground/70 hover:text-green-500 transition-colors"
            >
              Case Study
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium text-foreground/70 hover:text-green-500 transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-sm font-medium text-foreground/70 hover:text-green-500 transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/70 hover:text-green-500 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-foreground/70 hover:text-green-500"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-foreground/70"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-foreground/70 hover:text-green-500"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-foreground/70 hover:text-green-500"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-study')}
              className="block w-full text-left py-2 text-foreground/70 hover:text-green-500"
            >
              Case Study
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 text-foreground/70 hover:text-green-500"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="block w-full text-left py-2 text-foreground/70 hover:text-green-500"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-foreground/70 hover:text-green-500"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
