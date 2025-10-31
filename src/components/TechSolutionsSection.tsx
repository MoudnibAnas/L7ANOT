import React from 'react';
import { Eye, Network, Globe, Warehouse, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import akhzanLogo from '/lovable-uploads/akhzan-logo-full.jpg';
import process from '/lovable-uploads/process.png';
import process2 from '/lovable-uploads/process2.png';

import daschboard from '/lovable-uploads/daschboard.jpg';




const TechSolutionsSection = () => {
  const { language } = useLanguage();
  
  return (
    <section id="solutions" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-5xl font-bold text-[#70C2E3] mb-2">
            {language === 'fr' ? 'NOS SOLUTIONS' : 'حلولنا'}
          </h2>
        </div>

        {/* Main Solutions Box */}
        <div className="max-w-6xl mx-auto border-4 border-gray-800 rounded-3xl p-8 md:p-12 bg-white shadow-xl">
          
          {/* AKHZAN Marketplace Header */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-[#70C2E3] rounded-full flex items-center justify-center shadow-lg">
                <img src={akhzanLogo} alt="AKHZAN" className="w-24 h-24 rounded-full object-cover" />
              </div>
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
            
            {/* App Store Buttons */}
            <div className="flex flex-col justify-center items-end gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
            </div>
          </div>

          {/* Distribution & Logistics Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-bold text-[#70C2E3] mb-4">
                {language === 'fr' ? 'Centrale de Distribution & Logistique' : 'مركز التوزيع والخدمات اللوجستية'}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {language === 'fr'
                  ? 'FSS gère une logistique intégrée, du stockage à la livraison finale, avec un réseau de dépôts régionaux et une flotte connectée. Livraison nationale (Taux de 48%) et la supervision temps réel des livraisons et retours.'
                  : 'تدير FSS الخدمات اللوجستية المتكاملة، من التخزين إلى التسليم النهائي، مع شبكة من المستودعات الإقليمية وأسطول متصل. التسليم الوطني (معدل 48٪) والإشراف في الوقت الفعلي على عمليات التسليم والإرجاع.'}
              </p>
              <a href="#contact" className="inline-block bg-[#70C2E3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5AB1D1] transition-colors">
                {language === 'fr' ? 'Devenir Fournisseur partenaire' : 'كن مورداً شريكاً'}
              </a>
            </div>
            
            {/* Logistics Icon */}
            <div className="flex items-center justify-center">
              <div className="relative">
              <div className="flex-shrink-0 w-64 h-64 flex items-center justify-center ">
                <img src={process} alt="AKHZAN" className="w-64 h-64  object-cover" />
              </div>
              </div>
            </div>
          </div>

          {/* Performance Boost Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Laptop Illustration */}
            <div className="flex items-center justify-center order-2 ">
              <div className="relative">
          
                  <div className="w-92 h-66 bg-white   flex items-center justify-center">
                  <img src={daschboard} alt="AKHZAN" className=" object-cover" />
                  </div>
       
        
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h4 className="text-xl font-bold text-[#70C2E3] mb-4">
                {language === 'fr' ? 'Boostez votre performance sans logistique' : 'عزز أدائك بدون لوجستيات'}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {language === 'fr'
                  ? 'AKHZAN permet aux fournisseurs de gérer facilement leur catalogue produits et leurs livraisons via une interface digitale intégrée. De notre côté, L7SS se charge de la commercialisation, de l\'animation terrain et du suivi des ventes, garantissant une meilleure rotation des produits et une performance continue sur le marché.'
                  : 'يتيح أخزان للموردين إدارة كتالوج منتجاتهم وتسليماتهم بسهولة عبر واجهة رقمية متكاملة. من جانبنا، يتولى L7SS التسويق والتحريك الميداني ومتابعة المبيعات، مما يضمن دوران أفضل للمنتجات وأداء مستمر في السوق.'}
              </p>
              <a href="#contact" className="inline-block bg-[#70C2E3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5AB1D1] transition-colors">
                {language === 'fr' ? 'Devenir Fournisseur partenaire' : 'كن مورداً شريكاً'}
              </a>
            </div>
          </div>

          {/* Three Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Visibility Box */}
            <div className="border-4 border-[#70C2E3] rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
              <Eye className="text-[#70C2E3] w-20 h-20 mx-auto mb-4" strokeWidth={0.75} />
              <h5 className="text-lg font-bold text-[#70C2E3]">
                {language === 'fr' ? 'Visibilité nationale pour vos produits' : 'رؤية وطنية لمنتجاتك'}
              </h5>
            </div>

            {/* Centralized Management Box */}
            <div className="border-4 border-[#70C2E3] rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
              <Network className="text-[#70C2E3] w-20 h-20 mx-auto mb-4" strokeWidth={0.75} />
              <h5 className="text-lg font-bold text-[#70C2E3]">
                {language === 'fr' ? 'Gestion centralisée des commandes' : 'إدارة مركزية للطلبات'}
              </h5>
            </div>

            {/* Data Access Box */}
            <div className="border-4 border-[#70C2E3]  p-6 text-center hover:shadow-xl transition-shadow">
              <div className="relative mx-auto mb-5 w-20 h-20 flex items-center justify-center">
              <div className="flex-shrink-0 w-32 h-32  flex items-center justify-center ">
                <img src={process2} alt="AKHZAN" className="w-32 h-32  object-cover" />
              </div>
              </div>
              <h5 className="text-lg font-bold text-[#70C2E3]">
                {language === 'fr' ? 'Accès aux données terrain' : 'الوصول إلى البيانات الميدانية'}
              </h5>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TechSolutionsSection;
