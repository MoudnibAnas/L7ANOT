import React from 'react';
import { ShoppingCart, ArrowRight, Package, Truck, BarChart, CreditCard, Store, Layers, Search, User, Calendar, Tag, FileText, Archive, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const TechSolutionsSection = () => {
  const { t, language, direction } = useLanguage();
  
  return (
    <section id="solutions" className="section bg-gradient-to-br from-[#F2FCE2] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-5">
            <Layers className="text-[#006b45] mr-2" size={24} />
            <span className="text-[#006b45] font-semibold">
              {language === 'fr' ? 'Solutions Technologiques' : 'الحلول التكنولوجية'}
            </span>
          </div>
          <h2 className="heading-lg mb-4">
            {language === 'fr' 
              ? 'Solutions Complètes pour votre Commerce' 
              : 'حلول متكاملة لتجارتك'}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Intégrez des outils technologiques qui révolutionnent votre gestion quotidienne, de la commande fournisseurs à la gestion des stocks et paiements.'
              : 'دمج الأدوات التكنولوجية التي تحدث ثورة في إدارتك اليومية، من طلب الموردين إلى إدارة المخزون والمدفوعات.'}
          </p>
        </div>

        {/* Two-Column Layout for Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* B2B Column */}
          <div className={cn(
            "bg-white rounded-2xl shadow-xl p-6 reveal",
            "transform transition-all hover:shadow-2xl"
          )}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#006b45] rounded-full p-3">
                <ShoppingCart className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">
                {language === 'fr' ? 'Commandes Fournisseurs' : 'طلبات الموردين'}
              </h3>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-6">
                {language === 'fr' 
                  ? 'Simplifiez vos commandes et approvisionnements avec notre application mobile. Gérez tous vos fournisseurs depuis une seule interface.'
                  : 'بسّط طلباتك وتوريداتك باستخدام تطبيقنا المحمول. أدر جميع مورديك من خلال واجهة واحدة.'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className={cn(
                  "p-4 bg-[#F2FCE2] rounded-lg flex items-start gap-3",
                  direction === 'rtl' ? 'flex-row-reverse' : ''
                )}>
                  <Package className="text-[#006b45] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {language === 'fr' ? 'Catalogue Unifié' : 'كتالوج موحد'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' 
                        ? 'Accédez à tous vos produits et fournisseurs en un seul endroit' 
                        : 'الوصول إلى جميع منتجاتك ومورديك في مكان واحد'}
                    </p>
                  </div>
                </div>
                
                <div className={cn(
                  "p-4 bg-[#F2FCE2] rounded-lg flex items-start gap-3",
                  direction === 'rtl' ? 'flex-row-reverse' : ''
                )}>
                  <Truck className="text-[#006b45] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {language === 'fr' ? 'Livraison Optimisée' : 'توصيل محسّن'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' 
                        ? 'Suivez vos commandes et recevez-les dans les meilleurs délais' 
                        : 'تتبع طلباتك واستلمها في أفضل المواعيد'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Mobile App Preview */}
            <div className="relative h-[580px] sm:h-[540px] mb-6 flex justify-center">
              <div className="smartphone-mockup">
                <div className="smartphone-notch"></div>
                <div className="smartphone-screen">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-[#006b45] to-[#048555] p-4 flex justify-between items-center">
                    <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                      <img 
                        src="/lovable-uploads/3eecde11-4b66-466a-9a57-39e7cbe8815e.png" 
                        alt="Logo" 
                        className="h-8 w-auto"
                      />
                      <div className={cn(direction === 'rtl' ? 'text-right' : '')}>
                        <h3 className="text-white font-bold text-lg"></h3>
                        {/* <p className="text-white/80 text-xs">
                          {language === 'fr' ? 'App Fournisseurs' : 'تطبيق الموردين'}
                        </p> */}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white/20 rounded-full p-1">
                        <Search size={16} className="text-white" />
                      </div>
                      <div className="bg-white/20 rounded-full p-1">
                        <User size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 bg-gray-50 flex-1">
                    {/* Welcome Section */}
                    <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                      <h4 className={cn("font-medium text-gray-800", direction === 'rtl' ? 'text-right' : '')}>
                        {language === 'fr' ? 'Bonjour, Mohammed' : 'مرحبًا، محمد'}
                      </h4>
                      <p className={cn("text-xs text-gray-500 mb-2", direction === 'rtl' ? 'text-right' : '')}>
                        {language === 'fr' ? 'Bienvenue dans votre espace fournisseurs' : 'م��حبًا بك في فضاء الموردين الخاص بك'}
                      </p>
                      <div className="bg-[#F2FCE2] rounded-md p-2">
                        <div className={cn("flex items-center gap-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                          <Package size={16} className="text-[#006b45]" />
                          <p className="text-xs text-[#006b45]">
                            {language === 'fr' ? '3 commandes en attente' : '3 طلبات في الانتظار'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Categories */}
                    <div className="mb-4">
                      <div className={cn("flex justify-between items-center mb-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                        <h4 className="font-medium text-sm">
                          {language === 'fr' ? 'Catégories' : 'التصنيفات'}
                        </h4>
                        <span className="text-xs text-[#006b45]">
                          {language === 'fr' ? 'Voir tout' : 'عرض الكل'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          {name: language === 'fr' ? "Épicerie" : "بقالة", icon: Package},
                          {name: language === 'fr' ? "Boissons" : "مشروبات", icon: Tag},
                          {name: language === 'fr' ? "Hygiène" : "نظافة", icon: FileText},
                          {name: language === 'fr' ? "Autres" : "أخرى", icon: Archive}
                        ].map((cat, i) => (
                          <div key={i} className="bg-white rounded-lg shadow-sm p-2 flex flex-col items-center">
                            <div className="bg-[#F2FCE2] p-2 rounded-full mb-1">
                              <cat.icon size={16} className="text-[#006b45]" />
                            </div>
                            <span className="text-xs text-center">{cat.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Products */}
                    <div>
                      <div className={cn("flex justify-between items-center mb-2", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                        <h4 className="font-medium text-sm">
                          {language === 'fr' ? 'Produits populaires' : 'المنتجات الشائعة'}
                        </h4>
                        <span className="text-xs text-[#006b45]">
                          {language === 'fr' ? 'Voir tout' : 'عرض الكل'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 1, name: language === 'fr' ? 'Huile d\'olive' : 'زيت الزيتون', price: 75, img: '/lovable-uploads/40a3b396-968a-425e-87d3-8edee70213e7.png' },
                          { id: 2, name: language === 'fr' ? 'Sucre blanc' : 'سكر أبيض', price: 15, img: '/lovable-uploads/3e426003-c649-4194-b026-49cd48ec5221.png' },
                          { id: 3, name: language === 'fr' ? 'Thé vert' : 'شاي أخضر', price: 28, img: '/lovable-uploads/b6208942-6c71-43b3-abb4-4a331b059819.png' },
                          { id: 4, name: language === 'fr' ? 'Farine' : 'دقيق', price: 45, img: '/lovable-uploads/dfa7e7f8-afdf-4a6b-8036-8cc907fdda5c.png' }
                        ].map(product => (
                          <div key={product.id} className={cn(
                            "bg-white rounded-lg p-3 shadow-sm",
                            direction === 'rtl' ? 'text-right' : ''
                          )}>
                            <div className="bg-gray-50 rounded-md h-20 mb-2 flex items-center justify-center">
                              <img 
                                src={product.img} 
                                alt={product.name}
                                className="h-16 w-16 object-contain"
                              />
                            </div>
                            <p className="text-sm font-medium line-clamp-1">{product.name}</p>
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
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 px-4">
                      {[
                        { icon: Home, label: language === 'fr' ? 'Accueil' : 'الرئيسية', active: true },
                        { icon: ShoppingCart, label: language === 'fr' ? 'Commandes' : 'الطلبات' },
                        { icon: Package, label: language === 'fr' ? 'Produits' : 'المنتجات' },
                        { icon: User, label: language === 'fr' ? 'Profil' : 'الحساب' }
                      ].map((item, i) => (
                        <div key={i} className={`flex flex-col items-center ${item.active ? 'text-[#006b45]' : 'text-gray-400'}`}>
                          <item.icon size={18} />
                          <span className="text-xs mt-1">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="smartphone-button"></div>
              </div>
            </div>

            <div className={cn(
              "text-center",
              direction === 'rtl' ? 'text-right' : ''
            )}>
              <a href="#contact" className={cn(
                "button-primary inline-flex items-center group",
                direction === 'rtl' ? 'flex-row-reverse' : ''
              )}>
                {language === 'fr' ? 'Découvrir T9ADYTK' : 'اكتشف تقديتك'}
                <ArrowRight size={18} className={cn(
                  "group-hover:translate-x-1 transition-transform",
                  direction === 'rtl' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'
                )} />
              </a>
            </div>
          </div>

          {/* POS Column */}
          <div className={cn(
            "bg-white rounded-2xl shadow-xl p-6 reveal",
            "transform transition-all hover:shadow-2xl"
          )}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#006b45] rounded-full p-3">
                <CreditCard className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">
                {language === 'fr' ? 'Gestion de Caisse & Stock' : 'إدارة الخزينة والمخزون'}
              </h3>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-6">
                {language === 'fr' 
                  ? 'Gérez vos stocks et vos paiements intelligemment avec notre système de caisse intuitif. Suivez vos ventes et votre inventaire en temps réel.'
                  : 'أدر مخزونك ومدفوعاتك بذكاء من خلال نظام نقاط البيع سهل الاستخدام. تابع مبيعاتك ومخزونك في الوقت الفعلي.'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className={cn(
                  "p-4 bg-[#F2FCE2] rounded-lg flex items-start gap-3",
                  direction === 'rtl' ? 'flex-row-reverse' : ''
                )}>
                  <Store className="text-[#006b45] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {language === 'fr' ? 'Gestion des Stocks' : 'إدارة المخزون'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' 
                        ? 'Suivi en temps réel de votre inventaire et alertes automatiques' 
                        : 'تتبع مخزونك في الوقت الفعلي مع تنبيهات تلقائية'}
                    </p>
                  </div>
                </div>
                
                <div className={cn(
                  "p-4 bg-[#F2FCE2] rounded-lg flex items-start gap-3",
                  direction === 'rtl' ? 'flex-row-reverse' : ''
                )}>
                  <BarChart className="text-[#006b45] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {language === 'fr' ? 'Analyses & Rapports' : 'تحليلات وتقارير'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'fr' 
                        ? 'Tableaux de bord et statistiques détaillées sur vos ventes' 
                        : 'لوحات معلومات وإحصائيات مفصلة حول مبيعاتك'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced POS Terminal Preview */}
            <div className="relative mb-6 flex justify-center">
              <div className="pos-terminal-mockup">
                <div className="pos-terminal-screen">
                  {/* POS UI */}
                  <div className="flex h-full">
                    {/* Left Sidebar */}
                    <div className="w-16 bg-[#006b45] flex flex-col items-center py-4 space-y-6">
                      {[
                        {icon: ShoppingCart, active: true}, 
                        {icon: BarChart}, 
                        {icon: Tag}, 
                        {icon: Store}, 
                        {icon: FileText}, 
                        {icon: User}
                      ].map((item, i) => (
                        <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer ${item.active ? 'bg-white text-[#006b45]' : 'text-white hover:bg-white/10'}`}>
                          <item.icon size={20} />
                        </div>
                      ))}
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 bg-gray-100 overflow-hidden">
                      {/* Header */}
                      <div className="bg-white p-3 shadow-sm flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img 
                            src="/lovable-uploads/3eecde11-4b66-466a-9a57-39e7cbe8815e.png" 
                            alt="Logo" 
                            className="h-8 w-auto" 
                          />
                          <div>
                            <h4 className="font-bold text-[#006b45]">L7ANOT POS</h4>
                            <p className="text-xs text-gray-500">
                              {language === 'fr' ? 'Caisse #001' : 'الخزينة #001'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-100 p-1 rounded-md">
                            <Calendar size={18} className="text-gray-500" />
                          </div>
                          <div className="bg-gray-100 p-1 rounded-md">
                            <Search size={18} className="text-gray-500" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Two Column Layout */}
                      <div className="flex h-[320px]">
                        {/* Products Grid */}
                        <div className="w-2/3 p-3">
                          <div className="grid grid-cols-3 gap-2 h-full overflow-y-auto">
                            {[
                              { name: language === 'fr' ? 'Huile d\'olive' : 'زيت الزيتون', price: '75', img: '/lovable-uploads/40a3b396-968a-425e-87d3-8edee70213e7.png' },
                              { name: language === 'fr' ? 'Sucre blanc' : 'سكر أبيض', price: '15', img: '/lovable-uploads/3e426003-c649-4194-b026-49cd48ec5221.png' },
                              { name: language === 'fr' ? 'Thé vert' : 'شاي أخضر', price: '28', img: '/lovable-uploads/b6208942-6c71-43b3-abb4-4a331b059819.png' },
                              { name: language === 'fr' ? 'Farine' : 'دقيق', price: '45', img: '/lovable-uploads/dfa7e7f8-afdf-4a6b-8036-8cc907fdda5c.png' },
                              { name: language === 'fr' ? 'Tomates' : 'طماطم', price: '12', img: '/lovable-uploads/40a3b396-968a-425e-87d3-8edee70213e7.png' },
                              { name: language === 'fr' ? 'Fromage' : 'جبن', price: '50', img: '/lovable-uploads/3e426003-c649-4194-b026-49cd48ec5221.png' },
                              { name: language === 'fr' ? 'Café' : 'قهوة', price: '65', img: '/lovable-uploads/b6208942-6c71-43b3-abb4-4a331b059819.png' },
                              { name: language === 'fr' ? 'Riz' : 'أرز', price: '30', img: '/lovable-uploads/dfa7e7f8-afdf-4a6b-8036-8cc907fdda5c.png' },
                              { name: language === 'fr' ? 'Eau' : 'ماء', price: '5', img: '/lovable-uploads/40a3b396-968a-425e-87d3-8edee70213e7.png' }
                            ].map((product, i) => (
                              <div key={i} className="bg-white rounded-lg shadow-sm p-2">
                                <div className="bg-[#F2FCE2] rounded-md h-16 mb-1 flex items-center justify-center">
                                  <img 
                                    src={product.img} 
                                    alt={product.name}
                                    className="h-12 w-12 object-contain"
                                  />
                                </div>
                                <div className="text-center">
                                  <p className="text-xs font-medium truncate">{product.name}</p>
                                  <p className="text-[#006b45] text-xs font-bold">{product.price} MAD</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Cart */}
                        <div className="w-1/3 bg-white p-3 border-l border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-sm">{language === 'fr' ? 'Panier' : 'سلة'}</h5>
                            <span className="text-xs text-[#006b45] cursor-pointer">{language === 'fr' ? 'Vider' : 'تفريغ'}</span>
                          </div>
                          
                          <div className="space-y-2 mb-4 h-[200px] overflow-y-auto">
                            {[
                              { name: language === 'fr' ? 'Huile d\'olive 1L' : 'زيت الزيتون 1 لتر', qty: 2, price: 75 },
                              { name: language === 'fr' ? 'Sucre blanc 1kg' : 'سكر أبيض 1 كغم', qty: 3, price: 15 },
                              { name: language === 'fr' ? 'Thé vert 200g' : 'شاي أخضر 200غ', qty: 1, price: 28 },
                              { name: language === 'fr' ? 'Farine 1kg' : 'دقيق 1كغ', qty: 2, price: 45 }
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-1 hover:bg-gray-50 rounded text-xs">
                                <div className="flex items-center">
                                  <div className="bg-[#F2FCE2] h-6 w-6 rounded-md flex items-center justify-center mr-1">
                                    <span className="text-xs font-medium text-[#006b45]">{item.qty}x</span>
                                  </div>
                                  <span className="truncate max-w-[100px]">{item.name}</span>
                                </div>
                                <span className="font-medium whitespace-nowrap">{(item.qty * item.price).toFixed(2)} MAD</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="border-t border-gray-200 pt-2 mb-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>{language === 'fr' ? 'Total' : 'المجموع'}</span>
                              <span className="font-bold text-[#006b45]">258.50 MAD</span>
                            </div>
                          </div>
                          
                          <button className="bg-[#006b45] text-white w-full py-2 rounded-md text-sm font-medium hover:bg-[#005538] transition-colors">
                            {language === 'fr' ? 'Paiement' : 'الدفع'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pos-terminal-base">
                  <div className="card-reader"></div>
                  <div className="card-slot"></div>
                </div>
              </div>
            </div>

            <div className={cn(
              "text-center",
              direction === 'rtl' ? 'text-right' : ''
            )}>
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
        </div>
        
        {/* Bottom Banner */}
        <div className="bg-[#006b45] text-white p-8 rounded-2xl text-center mb-6 reveal">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'fr' 
              ? 'Transformez votre commerce avec nos solutions intégrées' 
              : 'حوّل تجارتك مع حلولنا المتكاملة'}
          </h3>
          <p className="max-w-2xl mx-auto mb-6">
            {language === 'fr'
              ? 'Des outils complets et connectés pour une gestion optimale, de l\'approvisionnement à la vente et au suivi.'
              : 'أدوات شاملة ومتصلة للإدارة المثلى، من التوريد إلى البيع والمتابعة.'}
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="#contact" className={cn(
              "bg-white text-[#006b45] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors",
              "inline-flex items-center gap-2"
            )}>
              {language === 'fr' ? 'Contacter notre équipe' : 'تواصل مع فريقنا'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutionsSection;
