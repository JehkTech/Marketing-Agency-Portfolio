import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { VisionMissionValues } from './components/VisionMissionValues';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CaseStudy } from './components/CaseStudy';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Clientele } from './components/Clientele';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingCTA } from './components/FloatingCTA';
import { PortfolioDetail } from './components/PortfolioDetail';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHomeAndScrollTo = (id: string) => {
    navigateTo('/');

    window.setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const portfolioMatch = currentPath.match(/^\/portfolio\/(\d+)$/);
  const portfolioId = portfolioMatch ? Number(portfolioMatch[1]) : null;

  if (portfolioId) {
    return (
      <div className="min-h-screen bg-background text-foreground antialiased">
        <PortfolioDetail
          portfolioId={portfolioId}
          onBack={() => navigateTo('/')}
          onBookCall={() => openHomeAndScrollTo('contact')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <ScrollToTop />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative">
        <Hero />
        <AboutUs />
        <Services />
        <Process />
        <CaseStudy onOpenPortfolio={(id) => navigateTo(`/portfolio/${id}`)} />
        <Testimonials />
        <VisionMissionValues />
        <Team />
        <Clientele />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
