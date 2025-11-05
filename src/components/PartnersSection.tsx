import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import partner1 from '/lovable-uploads/partner1.png';
import partner2 from '/lovable-uploads/partner2.png';
import partner3 from '/lovable-uploads/partner3.png';
import partner4 from '/lovable-uploads/partner4.png';
import partner5 from '/lovable-uploads/partner5.png';

const PartnersSection = () => {
  const { language } = useLanguage();

  const partners = [
    partner1, partner2, partner3, partner4, partner5,
    partner1, partner2, partner3, partner4, partner5
  ];

  return (
    <section id="partners" className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#70C2E3] mb-4 tracking-tight">
          {language === 'fr' ? 'NOS PARTENAIRES' : 'شركاؤنا'}
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Ils nous font confiance pour construire ensemble l’avenir de la distribution au Maroc.'
            : 'يثقون بنا لبناء مستقبل التوزيع في المغرب معًا.'}
        </p>

        {/* Scrolling Logos */}
        <div className="relative w-full h-40 overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-40 h-40 md:w-44 md:h-32 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-16 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* Decorative Blur Elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#70C2E3]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#70C2E3]/10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default PartnersSection;
