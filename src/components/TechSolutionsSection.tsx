import React from 'react';
import { Eye, Network } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import akhzanLogo from '/lovable-uploads/akhzan-logo-full.jpg';
import process from '/lovable-uploads/process.png';
import process2 from '/lovable-uploads/process2.png';
import screenApp from '/lovable-uploads/screeNAPP.png';
import daschboard from '/lovable-uploads/daschboard.jpg';

const TechSolutionsSection = () => {
  const { language } = useLanguage();

  return (
    <section id="solutions" className="section bg-white py-20">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#70C2E3]">
            {language === 'fr' ? 'NOS SOLUTIONS' : 'حلولنا'}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto border-2 border-gray-300 rounded-3xl p-10 bg-white shadow-xl space-y-10">
          {/* 1️⃣ AKHZAN Marketplace */}
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left Text */}
            <div className="flex items-start gap-5">
              <img
                src={akhzanLogo}
                alt="AKHZAN"
                className="w-24 h-24 rounded-full shadow-md border border-gray-200"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#70C2E3] mb-3">
                  {language === 'fr' ? 'AKHZAN Marketplace' : 'سوق أخزان'}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {language === 'fr'
                    ? 'La marketplace B2B qui connecte les producteurs aux épiceries et magasins de quartier à travers tout le Maroc.'
                    : 'سوق B2B الذي يربط المنتجين بالبقالات ومتاجر الأحياء في جميع أنحاء المغرب.'}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  {language === 'fr'
                    ? 'Nos clients peuvent comparer, commander et se faire livrer directement depuis notre plateforme.'
                    : 'يمكن لعملائنا المقارنة والطلب والحصول على التوصيل مباشرة من منصتنا.'}
                </p>
              </div>
            </div>

            {/* Right App Visual */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={screenApp}
                alt="App Preview"
                className="h-56 object-contain hover:scale-105 transition-transform"
              />
              <div className="flex gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12 cursor-pointer hover:scale-105 transition-transform"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-12 cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-2"></div>

          {/* 2️⃣ Distribution & Logistique */}
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left Text */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#70C2E3]">
                {language === 'fr'
                  ? 'Centrale de Distribution & Logistique'
                  : 'مركز التوزيع والخدمات اللوجستية'}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'L7SS gère une logistique intégrée, du stockage à la livraison finale, avec un réseau de dépôts régionaux et une flotte connectée. Livraison nationale (durée de 48h ) et la supervision temps réel des livraisons et retours.'
                  : 'تدير L7SS الخدمات اللوجستية المتكاملة، من التخزين إلى التسليم النهائي، مع شبكة من المستودعات الإقليمية وأسطول متصل.'}
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#70C2E3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5AB1D1] transition-colors"
              >
                {language === 'fr'
                  ? 'Devenir Fournisseur partenaire'
                  : 'كن مورداً شريكاً'}
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={process}
                alt="Process"
                className="w-64 h-64 object-contain hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-2"></div>

          {/* 3️⃣ Boost Performance */}
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left Image */}
            <div className="flex justify-center order-2 md:order-1">
              <img
                src={daschboard}
                alt="Dashboard"
                className="rounded-lg shadow-md w-[450px] hover:scale-105 transition-transform"
              />
            </div>

            {/* Right Text */}
            <div className="order-1 md:order-2 space-y-4">
              <h4 className="text-xl font-bold text-[#70C2E3]">
                {language === 'fr'
                  ? 'Boostez votre performance sans logistique'
                  : 'عزز أدائك بدون لوجستيات'}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === 'fr'
                  ? "AKHZAN permet aux fournisseurs de gérer facilement leur catalogue produits et leurs livraisons via une interface digitale intégrée. De notre côté, L7SS se charge de la commercialisation, de l'animation terrain et du suivi des ventes, garantissant une meilleure rotation des produits et une performance continue sur le marché."
                  : 'يتيح أخزان للموردين إدارة كتالوج منتجاتهم وتسليماتهم بسهولة عبر واجهة رقمية متكاملة.'}
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#70C2E3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5AB1D1] transition-colors"
              >
                {language === 'fr'
                  ? 'Devenir Fournisseur partenaire'
                  : 'كن مورداً شريكاً'}
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-2"></div>

          {/* 4️⃣ Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
            <div className="border-2 border-[#70C2E3] rounded-2xl p-8 hover:shadow-lg transition">
              <Eye className="text-[#70C2E3] w-16 h-16 mx-auto mb-4" strokeWidth={1} />
              <h5 className="text-lg font-semibold text-[#70C2E3]">
                {language === 'fr'
                  ? 'Visibilité nationale pour vos produits'
                  : 'رؤية وطنية لمنتجاتك'}
              </h5>
            </div>

            <div className="border-2 border-[#70C2E3] rounded-2xl p-8 hover:shadow-lg transition">
              <Network className="text-[#70C2E3] w-16 h-16 mx-auto mb-4" strokeWidth={1} />
              <h5 className="text-lg font-semibold text-[#70C2E3]">
                {language === 'fr'
                  ? 'Gestion centralisée des commandes'
                  : 'إدارة مركزية للطلبات'}
              </h5>
            </div>

            <div className="border-2 border-[#70C2E3] rounded-2xl p-8 hover:shadow-lg transition">
              <img
                src={process2}
                alt="Data Access"
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h5 className="text-lg font-semibold text-[#70C2E3]">
                {language === 'fr'
                  ? 'Accès aux données terrain'
                  : 'الوصول إلى البيانات الميدانية'}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsSection;
