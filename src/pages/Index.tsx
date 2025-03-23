
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Initialize reveal animations for sections
    const revealSections = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealSections);
    revealSections(); // Call once immediately
    
    return () => window.removeEventListener('scroll', revealSections);
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
