
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechSolutionsSection from '../components/TechSolutionsSection';
import FranchiseSection from '../components/FranchiseSection';
import CentraleAchatSection from '../components/CentraleAchatSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { language, direction } = useLanguage();

  useEffect(() => {
    // Update document title based on language
    document.title = language === 'fr' 
      ? "L7ANOT Smart System | Digitalisation Intelligente des Commerces" 
      : "الحانوت سمارت سيستم | الرقمنة الذكية للمتاجر";
    
    // Add RTL class to html element when Arabic is selected
    if (direction === 'rtl') {
      document.documentElement.classList.add('rtl');
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.add('rtl-active');
    } else {
      document.documentElement.classList.remove('rtl');
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl-active');
    }
    
    // Add viewport meta tag for better responsiveness
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    
    // Update favicon to match new brand colors
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      favicon.setAttribute('type', 'image/png');
      document.head.appendChild(favicon);
    }
    
    // Add custom CSS variables for the new brand color
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      :root {
        --primary-color: #70C2E3;
        --primary-light: #8DCFEB;
        --primary-dark: #50B2D3;
        --secondary-color: #E8F7FC;
        --secondary-dark: #D5EFF8;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Scroll animation for elements with RTL support
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add appropriate animation based on direction
          if (direction === 'rtl') {
            entry.target.classList.add('active', 'rtl-animate');
          } else {
            entry.target.classList.add('active');
          }
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
      // Clean up style element on component unmount
      document.head.removeChild(styleElement);
    };
  }, [language, direction]);

  return (
    <div className="min-h-screen overflow-x-hidden" dir={direction}>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TechSolutionsSection />
        <FranchiseSection />
        <CentraleAchatSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
