
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language, direction } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300', 
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-3'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src="/lovable-uploads/80fe8797-6945-465e-95de-2b7d4e5bf8f7.png" 
              alt="L7ANOT Smart System Logo" 
              className="h-6 md:h-7 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageSwitcher />
          <a 
            href="#contact" 
            className="bg-[#70C2E3] text-white rounded-lg px-5 py-2 font-medium transition-all hover:bg-[#70C2E3]/90 hover:shadow-md group relative overflow-hidden flex items-center"
          >
            <Phone size={16} className={cn("transition-all group-hover:scale-110", direction === 'rtl' ? 'ml-2' : 'mr-2')} />
            <span className="relative z-10">
              {language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}
            </span>
            <span className={cn(
              "absolute inset-0 bg-[#50B2D3] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
              direction === 'rtl' ? "origin-right" : "origin-left"
            )}></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button 
            className="p-1.5 rounded-md hover:bg-gray-100 transition-colors" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? (direction === 'rtl' ? "إغلاق القائمة" : "Fermer le menu") : (direction === 'rtl' ? "فتح القائمة" : "Ouvrir le menu")}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm w-full absolute top-full left-0 shadow-lg py-4 animate-fade-in">
          <div className="flex flex-col px-6 space-y-4">
            <a 
              href="#contact" 
              className="bg-[#70C2E3] text-white rounded-lg px-5 py-2 font-medium text-center flex items-center justify-center" 
              onClick={toggleMenu}
            >
              <Phone size={18} className={cn(direction === 'rtl' ? 'ml-2 mr-0' : 'mr-2')} />
              {language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
