
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Warehouse, Truck, Package, Building, ShoppingCart, TrendingUp, Store, Clock, ChevronRight } from 'lucide-react';

const CentraleAchatSection = () => {
  const { t, direction, language } = useLanguage();

  // Liste des fournisseurs
  const suppliers = [
    { name: language === 'fr' ? 'Produits laitiers' : 'منتجات الألبان', count: '12' },
    { name: language === 'fr' ? 'Conserves' : 'معلبات', count: '8' },
    { name: language === 'fr' ? 'Boissons' : 'مشروبات', count: '15' },
    { name: language === 'fr' ? 'Épicerie' : 'بقالة', count: '20' },
  ];

  return (
    <section id="centrale-achat" className="py-20 bg-gradient-to-br from-[#006b45]/10 via-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-lg text-gradient mb-4">{t('centrale.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('centrale.description')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className={cn(
            "reveal flex flex-col justify-center",
            direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'
          )}>
            <div className="space-y-6 max-w-xl">
              <div className={cn("flex items-start gap-4", direction === 'rtl' ? 'text-right flex-row-reverse' : '')}>
                <div className="bg-[#006b45]/10 p-3 rounded-xl">
                  <Warehouse className="text-[#006b45]" size={24} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">{t('centrale.feature1.title')}</h3>
                  <p className="text-gray-600">{t('centrale.feature1.description')}</p>
                </div>
              </div>
              
              <div className={cn("flex items-start gap-4", direction === 'rtl' ? 'text-right flex-row-reverse' : '')}>
                <div className="bg-[#006b45]/10 p-3 rounded-xl">
                  <Truck className="text-[#006b45]" size={24} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">{t('centrale.feature2.title')}</h3>
                  <p className="text-gray-600">{t('centrale.feature2.description')}</p>
                </div>
              </div>
              
              <div className={cn("flex items-start gap-4", direction === 'rtl' ? 'text-right flex-row-reverse' : '')}>
                <div className="bg-[#006b45]/10 p-3 rounded-xl">
                  <Package className="text-[#006b45]" size={24} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">{t('centrale.feature3.title')}</h3>
                  <p className="text-gray-600">{t('centrale.feature3.description')}</p>
                </div>
              </div>
              
              <div className={cn("flex items-start gap-4", direction === 'rtl' ? 'text-right flex-row-reverse' : '')}>
                <div className="bg-[#006b45]/10 p-3 rounded-xl">
                  <Building className="text-[#006b45]" size={24} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">{t('centrale.feature4.title')}</h3>
                  <p className="text-gray-600">{t('centrale.feature4.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "reveal",
            direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'
          )}>
            <div className="relative">
              <img
                src="/lovable-uploads/40a3b396-968a-425e-87d3-8edee70213e7.png"
                alt={t('centrale.image.alt')}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              
              {/* Card positioned at the top of the image instead of bottom */}
              <Card className="bg-white/90 backdrop-blur-sm w-4/5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{t('centrale.card.title')}</h3>
                  <div className={cn("grid grid-cols-2 gap-4 text-sm", direction === 'rtl' ? 'text-right' : '')}>
                    <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                      <div className="w-2 h-2 rounded-full bg-[#006b45]"></div>
                      <span>{t('centrale.card.point1')}</span>
                    </div>
                    <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                      <div className="w-2 h-2 rounded-full bg-[#006b45]"></div>
                      <span>{t('centrale.card.point2')}</span>
                    </div>
                    <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                      <div className="w-2 h-2 rounded-full bg-[#006b45]"></div>
                      <span>{t('centrale.card.point3')}</span>
                    </div>
                    <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                      <div className="w-2 h-2 rounded-full bg-[#006b45]"></div>
                      <span>{t('centrale.card.point4')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Nouvelle section avec informations supplémentaires */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-4 gap-3">
              <div className="rounded-full bg-[#006b45]/10 p-3">
                <ShoppingCart className="text-[#006b45]" size={24} />
              </div>
              <h3 className="font-bold text-lg">
                {language === 'fr' ? 'Achats groupés' : 'المشتريات الجماعية'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {language === 'fr' 
                ? 'Bénéficiez de prix réduits grâce aux commandes groupées entre commerces partenaires.'
                : 'احصل على أسعار مخفضة من خلال الطلبات الجماعية بين المتاجر الشريكة.'
              }
            </p>
            <ul className={cn("space-y-2 text-sm text-gray-600", direction === 'rtl' ? 'text-right' : '')}>
              {[
                language === 'fr' ? '20% d\'économie moyenne' : 'متوسط توفير 20٪',
                language === 'fr' ? 'Commande minimale réduite' : 'الحد الأدنى للطلب مخفض',
                language === 'fr' ? 'Livraison optimisée' : 'توصيل محسّن'
              ].map((item, index) => (
                <li key={index} className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#006b45]"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-4 gap-3">
              <div className="rounded-full bg-[#006b45]/10 p-3">
                <TrendingUp className="text-[#006b45]" size={24} />
              </div>
              <h3 className="font-bold text-lg">
                {language === 'fr' ? 'Analyses de marché' : 'تحليلات السوق'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {language === 'fr' 
                ? 'Accédez à des rapports détaillés sur les tendances du marché pour optimiser vos achats.'
                : 'الوصول إلى تقارير مفصلة حول اتجاهات السوق لتحسين مشترياتك.'
              }
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-3">
                <div className={cn("flex justify-between text-sm", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <span className="text-gray-600">{language === 'fr' ? 'Produits tendance' : 'المنتجات الرائجة'}</span>
                  <span className="font-medium">{language === 'fr' ? 'Cette semaine' : 'هذا الأسبوع'}</span>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { name: language === 'fr' ? 'Produits bio' : 'منتجات عضوية', trend: '+18%' },
                  { name: language === 'fr' ? 'Boissons' : 'مشروبات', trend: '+12%' },
                  { name: language === 'fr' ? 'Snacks' : 'وجبات خفيفة', trend: '+8%' }
                ].map((item, index) => (
                  <div key={index} className={cn("flex items-center justify-between", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                    <span className="text-sm">{item.name}</span>
                    <span className="text-xs font-medium bg-[#006b45]/10 text-[#006b45] px-2 py-0.5 rounded">
                      {item.trend}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-4 gap-3">
              <div className="rounded-full bg-[#006b45]/10 p-3">
                <Store className="text-[#006b45]" size={24} />
              </div>
              <h3 className="font-bold text-lg">
                {language === 'fr' ? 'Fournisseurs vérifiés' : 'موردون معتمدون'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {language === 'fr' 
                ? 'Notre réseau de fournisseurs est rigoureusement sélectionné pour garantir qualité et fiabilité.'
                : 'تتم مراجعة شبكة موردينا بدقة لضمان الجودة والموثوقية.'
              }
            </p>
            <div className="space-y-3">
              {suppliers.map((supplier, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors",
                    direction === 'rtl' ? 'flex-row-reverse' : ''
                  )}
                >
                  <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                    <div className="w-2 h-2 rounded-full bg-[#006b45]"></div>
                    <span className="text-sm">{supplier.name}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{supplier.count}</span>
                    <Clock className="w-3 h-3 mx-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="reveal mt-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="heading-md mb-6">{t('centrale.cta.title')}</h3>
            <p className="text-gray-600 max-w-2xl mb-8">{t('centrale.cta.description')}</p>
            <a href="#contact" className="button-primary inline-flex items-center group">
              {t('centrale.cta.button')}
              <ChevronRight size={18} className={cn(
                "transition-transform group-hover:translate-x-1", 
                direction === 'rtl' ? 'mr-2 order-first transform rotate-180' : 'ml-2'
              )} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentraleAchatSection;
