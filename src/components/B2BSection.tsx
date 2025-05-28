

import React from 'react';
import { ShoppingCart, ArrowRight, Package, Truck, BarChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const B2BSection = () => {
  const { t, language, direction } = useLanguage();
  
  return (
    <section id="b2b" className="section bg-gradient-to-br from-secondary to-white py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            {language === 'fr' ? 'Simplifiez vos ' : 'بسّط '}
            <span className="text-primary">
              {language === 'fr' ? 'commandes fournisseurs' : 'طلبات المورّدين'}
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'T9ADYTK, notre application mobile dédiée aux commerçants, transforme votre façon de gérer et centraliser vos commandes.'
              : 'تقديتك، تطبيقنا المحمول المخصص للتجار، يحوّل طريقتك في إدارة وتنظيم طلباتك.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "order-2",
            direction === 'rtl' ? 'md:order-2' : 'md:order-1'
          )}>
            <div className="space-y-6">
              <div className={cn(
                "card-warm p-6 hover:-translate-y-1 transition-transform",
                direction === 'rtl' ? 'text-right' : ''
              )}>
                <div className={cn("flex items-center gap-4 mb-4", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ShoppingCart className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'fr' ? 'Commande simplifiée' : 'طلب مبسط'}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Commandez tous vos produits directement depuis votre smartphone avec une interface intuitive et simple d\'utilisation.'
                    : 'اطلب جميع منتجاتك مباشرة من هاتفك الذكي بواجهة بديهية وسهلة الاستخدام.'
                  }
                </p>
              </div>

              <div className={cn(
                "card-warm p-6 hover:-translate-y-1 transition-transform",
                direction === 'rtl' ? 'text-right' : ''
              )}>
                <div className={cn("flex items-center gap-4 mb-4", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Package className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'fr' ? 'Regroupement intelligent' : 'تجميع ذكي'}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Notre système regroupe automatiquement les commandes similaires pour optimiser les coûts et réduire les délais.'
                    : 'يقوم نظامنا تلقائيًا بتجميع الطلبات المتشابهة لتحسين التكاليف وتقليل أوقات التسليم.'
                  }
                </p>
              </div>

              <div className={cn(
                "card-warm p-6 hover:-translate-y-1 transition-transform",
                direction === 'rtl' ? 'text-right' : ''
              )}>
                <div className={cn("flex items-center gap-4 mb-4", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Truck className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {language === 'fr' ? 'Livraison optimisée' : 'توصيل محسّن'}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Recevez vos marchandises dans des délais optimaux grâce à notre système de logistique avancé et nos partenaires de livraison.'
                    : 'استلم بضائعك في أوقات مثالية بفضل نظام الخدمات اللوجستية المتقدم وشركاء التوصيل لدينا.'
                  }
                </p>
              </div>
            </div>

            <div className={cn("mt-10", direction === 'rtl' ? 'text-right' : '')}>
              <a href="#contact" className={cn(
                "button-primary inline-flex items-center group",
                direction === 'rtl' ? 'flex-row-reverse' : ''
              )}>
                {language === 'fr' ? 'Demander une démonstration' : 'طلب عرض توضيحي'}
                <ArrowRight size={18} className={cn(
                  "group-hover:translate-x-1 transition-transform",
                  direction === 'rtl' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'
                )} />
              </a>
            </div>
          </div>

          <div className={cn(
            "order-1",
            direction === 'rtl' ? 'md:order-1' : 'md:order-2',
            "flex justify-center"
          )}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] rounded-[40px] bg-black p-3 shadow-xl rotate-1">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                {/* Phone Screen */}
                <div className="h-full w-full rounded-[32px] overflow-hidden border-8 border-black">
                  {/* App UI */}
                  <div className={cn(
                    "bg-gradient-to-b from-primary-light/10 to-white h-full flex flex-col",
                    direction === 'rtl' ? 'text-right' : ''
                  )}>
                    {/* App Header */}
                    <div className="bg-[#006b45] p-4 flex justify-between items-center">
                      <div className={cn("text-white", direction === 'rtl' ? 'order-2' : '')}>
                        <h3 className="text-lg font-bold">T9ADYTK</h3>
                        <p className="text-xs">
                          {language === 'fr' ? 'App Fournisseurs' : 'تطبيق الموردين'}
                        </p>
                      </div>
                      <img 
                        src="/lovable-uploads/3eecde11-4b66-466a-9a57-39e7cbe8815e.png" 
                        alt={language === 'fr' ? "L7ANOT Logo" : "شعار الحانوت"} 
                        className={cn("h-8", direction === 'rtl' ? 'order-1' : '')}
                      />
                    </div>
                    
                    {/* Search Bar */}
                    <div className="p-4">
                      <div className={cn(
                        "bg-white rounded-full shadow-md flex items-center p-2 px-4",
                        direction === 'rtl' ? 'flex-row-reverse' : ''
                      )}>
                        <input 
                          type="text" 
                          placeholder={language === 'fr' ? "Rechercher un produit" : "ابحث عن منتج"} 
                          className={cn(
                            "bg-transparent border-none outline-none flex-grow text-sm",
                            direction === 'rtl' ? 'text-right' : ''
                          )} 
                          disabled 
                        />
                        <ShoppingCart className="text-[#006b45]" size={16} />
                      </div>
                    </div>
                    
                    {/* Categories */}
                    <div className="px-4">
                      <h4 className={cn(
                        "font-medium text-gray-700 mb-3",
                        direction === 'rtl' ? 'text-right' : ''
                      )}>
                        {language === 'fr' ? 'Catégories' : 'الفئات'}
                      </h4>
                      <div className={cn(
                        "flex gap-3 overflow-x-auto pb-2",
                        direction === 'rtl' ? 'flex-row-reverse' : ''
                      )}>
                        {(language === 'fr' 
                          ? ['Épicerie', 'Boissons', 'Produits frais', 'Hygiène']
                          : ['بقالة', 'مشروبات', 'منتجات طازجة', 'نظافة']
                        ).map((cat, i) => (
                          <div 
                            key={cat} 
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                              i === 0 ? 'bg-[#006b45] text-white' : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Product Grid */}
                    <div className="p-4 flex-grow">
                      <h4 className={cn(
                        "font-medium text-gray-700 mb-3",
                        direction === 'rtl' ? 'text-right' : ''
                      )}>
                        {language === 'fr' ? 'Produits populaires' : 'المنتجات الشائعة'}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 1, name: language === 'fr' ? 'Huile d\'olive' : 'زيت الزيتون', price: 75 },
                          { id: 2, name: language === 'fr' ? 'Sucre blanc' : 'سكر أبيض', price: 15 },
                          { id: 3, name: language === 'fr' ? 'Thé vert' : 'شاي أخضر', price: 28 },
                          { id: 4, name: language === 'fr' ? 'Café moulu' : 'قهوة مطحونة', price: 45 }
                        ].map(product => (
                          <div key={product.id} className={cn(
                            "bg-white rounded-lg p-3 shadow-sm",
                            direction === 'rtl' ? 'text-right' : ''
                          )}>
                            <div className="bg-gray-100 rounded-md h-20 mb-2 flex items-center justify-center">
                              <div className="w-10 h-10 bg-[#006b45]/20 rounded-full"></div>
                            </div>
                            <p className="text-sm font-medium">{product.name}</p>
                            <div className={cn(
                              "flex justify-between items-center mt-2",
                              direction === 'rtl' ? 'flex-row-reverse' : ''
                            )}>
                              <p className="text-xs text-gray-500">
                                {product.price} {language === 'fr' ? 'MAD' : 'درهم'}
                              </p>
                              <button className="w-6 h-6 rounded-full bg-[#006b45] text-white flex items-center justify-center">
                                {direction === 'rtl' ? '-' : '+'}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="bg-white border-t border-gray-200 flex justify-between p-4">
                      <div className="flex flex-col items-center">
                        <ShoppingCart className="text-[#006b45]" size={18} />
                        <span className="text-xs mt-1">{language === 'fr' ? 'Achats' : 'مشتريات'}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Package className="text-gray-400" size={18} />
                        <span className="text-xs mt-1">{language === 'fr' ? 'Commandes' : 'طلبات'}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Truck className="text-gray-400" size={18} />
                        <span className="text-xs mt-1">{language === 'fr' ? 'Livraisons' : 'توصيل'}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <BarChart className="text-gray-400" size={18} />
                        <span className="text-xs mt-1">{language === 'fr' ? 'Statistiques' : 'إحصائيات'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/3 -right-16 bg-accent/10 w-24 h-24 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-12 bg-[#006b45]/10 w-32 h-32 rounded-full"></div>
              
              {/* Feature Badge */}
              <div className="absolute top-10 -right-10 bg-[#006b45] text-white p-3 rounded-lg shadow-lg transform rotate-12">
                <p className="text-sm font-bold">
                  {language === 'fr' ? 'Application\nmobile' : 'تطبيق\nمحمول'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
