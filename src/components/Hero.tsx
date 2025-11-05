import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import l7anotLogo from '/lovable-uploads/l7anot-logo.png';
import heroIllustration from '/lovable-uploads/hero-illustration.png';
import moroccoMap from '/lovable-uploads/morocco-map-locations.png';
import akhzanLogo from '/lovable-uploads/akhzan-logo-full.jpg';

const Hero = () => {
  const { language, direction } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 pb-12 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">

        {/* Main Title */}
        <div className="text-center mb-8 reveal">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 text-[#70C2E3]">
            {language === 'fr' 
              ? 'La nouvelle génération de distribution au Maroc' 
              : 'الجيل الجديد من التوزيع في المغرب'}
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'L7ANOT SMART SYSTEM connecte les producteurs, distributeurs et commerçants via des solutions logistiques, digitales et retail intelligentes.'
              : 'نظام الحانوت الذكي يربط المنتجين والموزعين والتجار عبر حلول لوجستية ورقمية وتجزئة ذكية.'}
          </p>
        </div>

        {/* Main Illustration */}
        <div className="relative mb-12 reveal">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-gray-200 p-4 md:p-8 relative overflow-visible">
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="L7ANOT Distribution System" 
                className="w-full h-auto rounded-xl"
              />
              
              {/* Floating Labels/Panels */}
              {/* Force de vente - Top Left */}
              <div className="absolute top-[5%] left-[8%] bg-[#70C2E3]/90 text-white px-4 py-2 rounded-lg shadow-lg z-10 hidden md:block animate-float">
                <p className="font-bold text-sm whitespace-nowrap">
                  {language === 'fr' ? 'Force de vente' : 'قوة المبيعات'}
                </p>
                <p className="text-xs opacity-90">
                  {language === 'fr' ? 'Équipe commerciale dédiée' : 'فريق تجاري متخصص'}
                </p>
              </div>

              {/* Logistique - Top Right */}
              <div className="absolute top-[8%] right-[15%] bg-[#70C2E3]/90 text-white px-4 py-2 rounded-lg shadow-lg z-10 hidden md:block animate-float" style={{ animationDelay: '0.5s' }}>
                <p className="font-bold text-sm whitespace-nowrap">
                  {language === 'fr' ? 'Logistique' : 'اللوجستيات'}
                </p>
                <p className="text-xs opacity-90">
                  {language === 'fr' ? 'Distribution efficace' : 'توزيع فعال'}
                </p>
              </div>

              {/* Comité de pilotage - Left Side */}
              <div className="absolute top-[35%] left-[5%] bg-[#70C2E3]/90 text-white px-4 py-2 rounded-lg shadow-lg z-10 hidden md:block animate-float" style={{ animationDelay: '1s' }}>
                <p className="font-bold text-sm whitespace-nowrap">
                  {language === 'fr' ? 'Comité de pilotage' : 'لجنة التوجيه'}
                </p>
                <p className="text-xs opacity-90">
                  {language === 'fr' ? 'Gestion professionnelle' : 'إدارة احترافية'}
                </p>
              </div>

              {/* Digitalisation avec AKHZAN - Right Side Bubble */}
              <div className="absolute top-[32%] right-[8%] bg-white border-2 border-[#70C2E3] px-5 py-3 rounded-full shadow-xl z-10 hidden md:block animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <img src={akhzanLogo} alt="AKHZAN" className="h-20 w-20 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-sm text-[#70C2E3] whitespace-nowrap">
                      {language === 'fr' ? 'Digitalisation' : 'الرقمنة'}
                    </p>
                    <p className="text-xs text-gray-600">avec AKHZAN</p>
                  </div>
                </div>
              </div>

              {/* Morocco Map with TT LES VILLES - Center Bottom */}
              <div className="absolute bottom-[4%] left-[12%] z-10 hidden md:block animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="relative">
                  <img src={moroccoMap} alt="Morocco Map" className="h-120 w-auto opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 px-3 py-1 rounded-lg shadow-lg border border-[#70C2E3]">
                      <p className="text-sm font-bold text-[#70C2E3] text-center whitespace-nowrap">
                        {language === 'fr' ? 'Toutes Les Villes' : 'جميع المدن'}
                      </p>
                      <p className="text-xs text-gray-600 text-center">
                        {language === 'fr' ? 'Couverture nationale' : 'تغطية وطنية'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 DÉPÔTS CENTRAUX - Bottom Right */}
              <div className="absolute bottom-[10%] right-[12%] bg-white border-2 border-[#70C2E3] px-4 py-3 rounded-xl shadow-xl z-10 hidden md:block animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#70C2E3]">6</p>
                  <p className="text-xs font-bold text-[#70C2E3] whitespace-nowrap">
                    {language === 'fr' ? 'DÉPÔTS' : 'مستودعات'}
                  </p>
                  <p className="text-xs font-bold text-[#70C2E3] whitespace-nowrap">
                    {language === 'fr' ? 'CENTRAUX' : 'مركزية'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="#contact" 
                className="bg-[#70C2E3] text-white rounded-full px-8 py-3 font-bold text-base md:text-lg transition-all hover:bg-[#50B2D3] hover:shadow-xl flex items-center justify-center group"
              >
                {language === 'fr' ? 'Devenir Fournisseur partenaire' : 'كن مورداً شريكاً'}
              </a>
              
              <a 
                href="#solutions" 
                className="bg-[#70C2E3] text-white rounded-full px-8 py-3 font-bold text-base md:text-lg transition-all hover:bg-[#50B2D3] hover:shadow-xl flex items-center justify-center"
              >
                {language === 'fr' ? 'Découvrir nos Solutions' : 'اكتشف حلولنا'}
              </a>
            </div>
          </div>
        </div>

        {/* Who Are We Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#70C2E3]">
                {language === 'fr' ? 'QUI SOMMES-NOUS ?' : 'من نحن؟'}
              </h2>
              <p className="text-lg font-semibold mb-4 text-[#70C2E3]">
                {language === 'fr' 
                  ? 'Un écosystème complet pour la distribution moderne' 
                  : 'نظام بيئي متكامل للتوزيع الحديث'}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {language === 'fr'
                  ? 'L7ANOT SMART SYSTEM est une société marocaine spécialisée dans la modernisation du commerce de proximité et la gestion des B2B dans l\'alimentation générale. Son objectif principal est d\'aider les commerçants à mieux distribuer leurs produits grâce à une plateforme technologique, une logistique rationnelle et un réseau de points de vente franchisés L7ANOT'
                  : 'نظام الحانوت الذكي هو شركة مغربية متخصصة في تحديث التجارة القريبة وإدارة B2B في المواد الغذائية العامة. هدفها الرئيسي هو مساعدة التجار على توزيع منتجاتهم بشكل أفضل من خلال منصة تقنية ولوجستيات عقلانية وشبكة من نقاط البيع المرخصة L7ANOT'}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#70C2E3] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-[#70C2E3] text-2xl">
                      {language === 'fr' ? '+8000 points de vente ciblés' : '+8000 نقطة بيع مستهدفة'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#70C2E3] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-[#70C2E3] text-2xl">
                      {language === 'fr' ? '6 dépôts régionaux' : '6 مستودعات إقليمية'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="space-y-6">
              {/* Feature boxes matching the design */}
              <div className="bg-gradient-to-r from-[#70C2E3]/20 to-[#70C2E3]/10 p-6 rounded-2xl border-l-4 border-[#70C2E3]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#70C2E3] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#70C2E3]">
                    {language === 'fr' ? 'Distribution Moderne' : 'توزيع حديث'}
                  </h3>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#70C2E3]/20 to-[#70C2E3]/10 p-6 rounded-2xl border-l-4 border-[#70C2E3]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#70C2E3] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">🚚</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#70C2E3]">
                    {language === 'fr' ? 'Logistique Intelligente' : 'لوجستيات ذكية'}
                  </h3>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#70C2E3]/20 to-[#70C2E3]/10 p-6 rounded-2xl border-l-4 border-[#70C2E3]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#70C2E3] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#70C2E3]">
                    {language === 'fr' ? 'Plateforme Technologique' : 'منصة تقنية'}
                  </h3>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#70C2E3]/20 to-[#70C2E3]/10 p-6 rounded-2xl border-l-4 border-[#70C2E3]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#70C2E3] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">🏪</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#70C2E3]">
                    {language === 'fr' ? 'Réseau Franchisé' : 'شبكة امتياز'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
