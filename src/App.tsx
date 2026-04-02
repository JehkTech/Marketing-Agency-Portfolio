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

export default function App() {
  const [isDark, setIsDark] = useState(true);

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
        <CaseStudy />
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
