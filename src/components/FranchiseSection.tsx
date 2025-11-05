import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import l7anotStore from '/lovable-uploads/interface.jpeg';
import l7anotLogo from '/lovable-uploads/L7ANOT LOGO.png';
import grandSurface from '/lovable-uploads/grand surface.png';
import medium from '/lovable-uploads/medium.png';
import compact from '/lovable-uploads/compact.png';




const FranchiseSection = () => {
  const { language, direction } = useLanguage();

  return (
    <section id="franchise" className="section bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content Box */}
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Left: Store Image */}
            <div className="flex justify-center">
              <img 
                src={l7anotStore} 
                alt="L7ANOT Store" 
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right: Title and Description */}
            <div className={cn("space-y-6", direction === 'rtl' ? 'text-right' : '')}>
              <div className="flex items-center justify-between">
                <h2 className="text-4xl md:text-5xl font-bold text-[#70C2E3]">
                  {language === 'fr' ? 'LA MARQUE L7ANOT' : 'علامة الحانوت'}
                </h2>
                <img 
                  src={l7anotLogo} 
                  alt="L7ANOT Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-l object-contain"
                />
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                {language === 'fr' 
                  ? 'L7ANOT offre aux fournisseurs et producteurs marocains un réseau national de points de vente connectés, pour accélérer leur performance commerciale et leur écoulement sur le marché.'
                  : 'يقدم الحانوت للموردين والمنتجين المغاربة شبكة وطنية من نقاط البيع المتصلة، لتسريع أدائهم التجاري وتصريف منتجاتهم في السوق.'}
              </p>

              <button className="bg-[#70C2E3] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#5AB1D1] transition-all hover:scale-105 shadow-lg w-full md:w-auto">
                {language === 'fr' ? 'Rejoindre le Réseau L7ANOT' : 'انضم إلى شبكة الحانوت'}
              </button>
            </div>
          </div>

          {/* Store Format Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: grandSurface,
                titleAr: 'مساحة كبيرة',
                titleFr: 'Grande Surface',
                icon: '🏢'
              },
              {
                image: medium,
                titleAr: 'النموذج القياسي',
                titleFr: 'Le Modèle Standard',
                icon: '🏪'
              },
              {
                image: compact,
                titleAr: 'نموذج مدمج',
                titleFr: 'Modèle Compact',
                icon: '🏬'
              }
            ].map((format, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl border-4 border-[#70C2E3] p-4 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-4 flex items-center justify-center min-h-[200px]">
                  <img 
                    src={format.image} 
                    alt={language === 'fr' ? format.titleFr : format.titleAr}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className={cn(
                  "flex items-center justify-center gap-2 text-center py-3 bg-gradient-to-r from-[#70C2E3]/10 to-[#5AB1D1]/10 rounded-lg",
                  direction === 'rtl' ? 'flex-row-reverse' : ''
                )}>
                  <span className="text-xl">{format.icon}</span>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {language === 'fr' ? format.titleFr : format.titleAr}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#70C2E3]">
            <h3 className={cn("text-2xl font-bold text-[#70C2E3] mb-6", direction === 'rtl' ? 'text-right' : '')}>
              {language === 'fr' ? 'Avantages du Réseau' : 'مزايا الشبكة'}
            </h3>
            <ul className={cn("space-y-4", direction === 'rtl' ? 'text-right' : '')}>
              {[
                language === 'fr' ? 'Distribution nationale optimisée' : 'توزيع وطني محسّن',
                language === 'fr' ? 'Support marketing et commercial' : 'دعم تسويقي وتجاري',
                language === 'fr' ? 'Technologie et innovation' : 'التكنولوجيا والابتكار',
                language === 'fr' ? 'Formation continue' : 'تدريب مستمر'
              ].map((benefit, i) => (
                <li key={i} className={cn("flex items-center gap-3", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className="w-2 h-2 rounded-full bg-[#70C2E3]"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#70C2E3] to-[#5AB1D1] rounded-2xl p-8 shadow-lg text-white">
            <h3 className={cn("text-2xl font-bold mb-6", direction === 'rtl' ? 'text-right' : '')}>
              {language === 'fr' ? 'Rejoignez-nous' : 'انضم إلينا'}
            </h3>
            <p className={cn("mb-6 text-white/90", direction === 'rtl' ? 'text-right' : '')}>
              {language === 'fr' 
                ? 'Devenez partenaire et profitez d\'un réseau en pleine expansion à travers tout le Maroc.'
                : 'كن شريكاً واستفد من شبكة متنامية في جميع أنحاء المغرب.'}
            </p>
            <a 
              href="#contact" 
              className={cn(
                "inline-flex items-center gap-2 bg-white text-[#70C2E3] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all hover:scale-105",
                direction === 'rtl' ? 'flex-row-reverse' : ''
              )}
            >
              {language === 'fr' ? 'Contactez-nous' : 'اتصل بنا'}
              <ArrowRight className={direction === 'rtl' ? 'rotate-180' : ''} size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
