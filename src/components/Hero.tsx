
import React from 'react';
import { ArrowRight, ShoppingCart, CreditCard, Store, Rocket, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { t, language, direction } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 md:pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#E8F7FC] via-white to-[#E8F7FC]"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#70C2E3]/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#70C2E3]/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className={cn("w-full md:w-1/2", direction === 'rtl' ? 'md:order-2' : 'md:order-1')}>
            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <span className="bg-[#70C2E3]/10 text-[#70C2E3] font-semibold py-1 px-4 rounded-full inline-block reveal">
                  {language === 'fr' ? '100% Digital' : '100% رقمي'}
                </span>
                <span className="bg-accent/10 text-accent font-semibold py-1 px-4 rounded-full inline-block reveal">
                  {language === 'fr' ? 'Solutions Innovantes' : 'حلول مبتكرة'}
                </span>
              </div>
              
              <h1 className="heading-xl reveal font-extrabold">
                {language === 'fr' 
                  ? 'Révolutionnez Votre ' 
                  : 'ثورة في '}
                <span className="text-[#70C2E3]">
                  {language === 'fr' ? 'Commerce' : 'تجارتك'}
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed reveal">
                {language === 'fr'
                  ? 'L7ANOT Smart System transforme la gestion des commerces au Maroc avec des outils digitaux innovants pour chaque aspect de votre business.'
                  : 'نظام الحانوت سمارت سيستم يحول إدارة المتاجر في المغرب بأدوات رقمية مبتكرة لكل جانب من جوانب عملك.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 reveal">
                <div className="card-warm p-5 rounded-xl hover-card group shadow-md border-[#70C2E3]/20 border">
                  <div className="flex items-center mb-3 gap-3">
                    <div className="bg-[#70C2E3]/10 p-2 rounded-lg group-hover:bg-[#70C2E3]/20 transition-colors">
                      <ShoppingCart className="text-[#70C2E3]" size={20} />
                    </div>
                    <h3 className="font-semibold">{language === 'fr' ? 'Commandes' : 'طلبات'}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Simplifiez vos approvisionnements' 
                      : 'بسّط إمداداتك'}
                  </p>
                </div>
                
                <div className="card-warm p-5 rounded-xl hover-card group shadow-md border-[#70C2E3]/20 border">
                  <div className="flex items-center mb-3 gap-3">
                    <div className="bg-[#70C2E3]/10 p-2 rounded-lg group-hover:bg-[#70C2E3]/20 transition-colors">
                      <CreditCard className="text-[#70C2E3]" size={20} />
                    </div>
                    <h3 className="font-semibold">{language === 'fr' ? 'Paiements' : 'مدفوعات'}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Gérez votre caisse facilement' 
                      : 'أدر خزينتك بسهولة'}
                  </p>
                </div>
                
                <div className="card-warm p-5 rounded-xl hover-card group shadow-md border-[#70C2E3]/20 border">
                  <div className="flex items-center mb-3 gap-3">
                    <div className="bg-[#70C2E3]/10 p-2 rounded-lg group-hover:bg-[#70C2E3]/20 transition-colors">
                      <Store className="text-[#70C2E3]" size={20} />
                    </div>
                    <h3 className="font-semibold">{language === 'fr' ? 'Gestion' : 'إدارة'}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Contrôlez votre inventaire' 
                      : 'تحكم في مخزونك'}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 reveal">
                <a 
                  href="#solutions" 
                  className="bg-[#70C2E3] text-white rounded-lg px-6 py-3 font-medium transition-all hover:bg-[#50B2D3] hover:shadow-md flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {language === 'fr' ? 'Découvrir nos solutions' : 'اكتشف حلولنا'} 
                    <ArrowRight className={cn(
                      "transition-transform", 
                      direction === 'rtl' ? "mr-2 transform rotate-180 group-hover:-translate-x-1" : "ml-2 group-hover:translate-x-1"
                    )} size={18} />
                  </span>
                  <span className={cn(
                    "absolute inset-0 bg-accent/80 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    direction === 'rtl' ? "origin-right" : "origin-left"
                  )}></span>
                </a>
                
                <a 
                  href="#contact" 
                  className="border border-[#70C2E3] text-[#70C2E3] bg-transparent rounded-lg px-6 py-3 font-medium transition-colors hover:bg-[#70C2E3]/5 flex items-center justify-center"
                >
                  {language === 'fr' ? 'Nous contacter' : 'اتصل بنا'}
                </a>
              </div>
            </div>
          </div>
          
          <div className={cn("w-full md:w-1/2 relative", direction === 'rtl' ? 'md:order-1' : 'md:order-2')}>
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/40a3b396-968a-425e-87d3-8edee70213e7.png" 
                alt="L7ANOT Smart System" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              
              {/* Feature badges around the image */}
              <div className={cn(
                "absolute -top-4 md:-top-6 left-12 bg-white text-[#70C2E3] p-3 rounded-xl shadow-lg transform -rotate-3",
                "flex items-center gap-2"
              )}>
                <Rocket size={20} className="text-[#70C2E3]" />
                <span className="font-bold text-sm">
                  {language === 'fr' ? 'Efficacité +25%' : 'كفاءة +25%'}
                </span>
              </div>
              
              <div className={cn(
                "absolute -bottom-4 md:-bottom-6 right-12 bg-white text-[#70C2E3] p-3 rounded-xl shadow-lg transform rotate-3",
                "flex items-center gap-2"
              )}>
                <Users size={20} className="text-[#70C2E3]" />
                <span className="font-bold text-sm">
                  {language === 'fr' ? '+200 Commerçants' : '+200 تاجر'}
                </span>
              </div>
              
              <div className={cn(
                "absolute bottom-1/3 -right-4 md:-right-10 bg-[#70C2E3] text-white p-4 rounded-xl shadow-lg",
                "flex items-center gap-2"
              )}>
                <Zap size={20} className="text-white" />
                <div>
                  <p className="font-bold text-sm">{language === 'fr' ? 'Smart Store' : 'متجر ذكي'}</p>
                  <p className="text-xs opacity-90">{language === 'fr' ? 'Innovation' : 'ابتكار'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative mt-20 md:mt-24 pt-8 border-t border-[#70C2E3]/10 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-[#70C2E3]/10 flex items-center justify-center">
                <span className="font-bold text-xl text-[#70C2E3]">200+</span>
              </div>
              <div className={cn(direction === 'rtl' ? 'text-right' : '')}>
                <p className="font-semibold">{language === 'fr' ? 'Commerçants' : 'تاجر'}</p>
                <p className="text-sm text-gray-500">{language === 'fr' ? 'Nous font confiance' : 'يثقون بنا'}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-[#70C2E3]/10 flex items-center justify-center">
                <span className="font-bold text-xl text-[#70C2E3]">12</span>
              </div>
              <div className={cn(direction === 'rtl' ? 'text-right' : '')}>
                <p className="font-semibold">{language === 'fr' ? 'Villes' : 'مدينة'}</p>
                <p className="text-sm text-gray-500">{language === 'fr' ? 'Au Maroc' : 'في المغرب'}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-[#70C2E3]/10 flex items-center justify-center">
                <span className="font-bold text-xl text-[#70C2E3]">25%</span>
              </div>
              <div className={cn(direction === 'rtl' ? 'text-right' : '')}>
                <p className="font-semibold">{language === 'fr' ? 'Augmentation' : 'زيادة'}</p>
                <p className="text-sm text-gray-500">{language === 'fr' ? 'De productivité' : 'في الإنتاجية'}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-[#70C2E3]/10 flex items-center justify-center">
                <span className="font-bold text-xl text-[#70C2E3]">100%</span>
              </div>
              <div className={cn(direction === 'rtl' ? 'text-right' : '')}>
                <p className="font-semibold">{language === 'fr' ? 'Solution' : 'حل'}</p>
                <p className="text-sm text-gray-500">{language === 'fr' ? 'Numérique' : 'رقمي'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
