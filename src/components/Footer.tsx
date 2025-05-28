
import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { language, direction } = useLanguage();
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/L7ANOT SMART SYSTEM LOGO 1.png" 
                alt="L7ANOT Logo"
                className="h-7 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              {language === 'fr'
                ? 'Solutions digitales innovantes pour les commerçants marocains. Nous révolutionnons la façon dont les commerces sont gérés.'
                : 'حلول رقمية مبتكرة للتجار المغاربة. نحن نحدث ثورة في طريقة إدارة المتاجر.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#70C2E3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#70C2E3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#70C2E3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#70C2E3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">
              {language === 'fr' ? 'Liens rapides' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2">
              {[
                { name: language === 'fr' ? 'Accueil' : 'الرئيسية', href: '#home' },
                { name: language === 'fr' ? 'Solutions' : 'الحلول', href: '#solutions' },
                { name: language === 'fr' ? 'Franchise' : 'الامتياز التجاري', href: '#franchise' },
                { name: language === 'fr' ? 'Centrale d\'Achat' : 'التجميع المركزي', href: '#centrale' },
                { name: language === 'fr' ? 'Contact' : 'اتصل بنا', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className={cn(
                      "text-gray-400 hover:text-[#70C2E3] transition-colors flex items-center",
                      direction === 'rtl' ? 'flex-row-reverse' : ''
                    )}
                  >
                    <ArrowRight 
                      size={14}
                      className={cn(
                        direction === 'rtl' ? 'rotate-180 ml-2' : 'mr-2'
                      )}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Solutions */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">
              {language === 'fr' ? 'Nos Solutions' : 'حلولنا'}
            </h4>
            <ul className="space-y-2">
              {[
                { name: language === 'fr' ? 'Application T9ADYTK' : 'تطبيق تقديتك', href: '#solutions' },
                { name: language === 'fr' ? 'Système POS' : 'نظام نقاط البيع', href: '#solutions' },
                { name: language === 'fr' ? 'Gestion des stocks' : 'إدارة المخزون', href: '#solutions' },
                { name: language === 'fr' ? 'Analyses & Rapports' : 'التحليلات والتقارير', href: '#solutions' },
                { name: language === 'fr' ? 'Smart Franchise' : 'امتياز ذكي', href: '#franchise' },
              ].map((solution, i) => (
                <li key={i}>
                  <a 
                    href={solution.href}
                    className={cn(
                      "text-gray-400 hover:text-[#70C2E3] transition-colors flex items-center",
                      direction === 'rtl' ? 'flex-row-reverse' : ''
                    )}
                  >
                    <ArrowRight 
                      size={14}
                      className={cn(
                        direction === 'rtl' ? 'rotate-180 ml-2' : 'mr-2'
                      )}
                    />
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">
              {language === 'fr' ? 'Contact' : 'اتصل بنا'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@l7anot.ma" 
                  className={cn(
                    "text-gray-400 hover:text-[#70C2E3] transition-colors flex items-start",
                    direction === 'rtl' ? 'flex-row-reverse text-right' : ''
                  )}
                >
                  <Mail 
                    size={18} 
                    className={cn(
                      "text-[#70C2E3] mt-1",
                      direction === 'rtl' ? 'ml-3' : 'mr-3'
                    )}
                  />
                  <span>contact@l7anot.ma</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+212522123456" 
                  className={cn(
                    "text-gray-400 hover:text-[#70C2E3] transition-colors flex items-start",
                    direction === 'rtl' ? 'flex-row-reverse text-right' : ''
                  )}
                >
                  <Phone 
                    size={18} 
                    className={cn(
                      "text-[#70C2E3] mt-1",
                      direction === 'rtl' ? 'ml-3' : 'mr-3'
                    )}
                  />
                  <span>+212 522 123 456</span>
                </a>
              </li>
              <li>
                <div 
                  className={cn(
                    "text-gray-400 flex items-start",
                    direction === 'rtl' ? 'flex-row-reverse text-right' : ''
                  )}
                >
                  <MapPin 
                    size={18} 
                    className={cn(
                      "text-[#70C2E3] mt-1",
                      direction === 'rtl' ? 'ml-3' : 'mr-3'
                    )}
                  />
                  <span>
                    {language === 'fr'
                      ? 'Casablanca, Maroc'
                      : 'الدار البيضاء، المغرب'}
                  </span>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">
                {language === 'fr' ? 'Newsletter' : 'النشرة الإخبارية'}
              </h5>
              <form className={cn(
                "flex",
                direction === 'rtl' ? 'flex-row-reverse' : ''
              )}>
                <input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre email' : 'بريدك الإلكتروني'}
                  className={cn(
                    "bg-gray-800 text-white px-4 py-2 text-sm rounded-l",
                    "focus:outline-none focus:ring-1 focus:ring-[#70C2E3]",
                    direction === 'rtl' ? 'rounded-r-none rounded-l' : 'rounded-l rounded-r-none',
                    "flex-grow"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "bg-[#70C2E3] px-4 py-2 text-white text-sm",
                    direction === 'rtl' ? 'rounded-r-none rounded-l' : 'rounded-l-none rounded-r'
                  )}
                >
                  {direction === 'rtl' ? '←' : '→'}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            © {year} L7ANOT Smart System. {language === 'fr' ? 'Tous droits réservés.' : 'جميع الحقوق محفوظة.'}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#70C2E3] text-sm">
              {language === 'fr' ? 'Conditions d\'utilisation' : 'شروط الاستخدام'}
            </a>
            <a href="#" className="text-gray-500 hover:text-[#70C2E3] text-sm">
              {language === 'fr' ? 'Politique de confidentialité' : 'سياسة الخصوصية'}
            </a>
            <a href="#" className="text-gray-500 hover:text-[#70C2E3] text-sm">
              {language === 'fr' ? 'Mentions légales' : 'إشعارات قانونية'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
