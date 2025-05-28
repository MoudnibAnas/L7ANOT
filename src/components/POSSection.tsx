
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Database, CreditCard, FileText, ChartBar, Search, Tag, Archive, User, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const POSSection = () => {
  const { t, direction, language } = useLanguage();
  
  // Weekly sales data for chart
  const weeklySalesData = [
    { day: t('pos.dashboard.days.mon'), sales: 1200 },
    { day: t('pos.dashboard.days.tue'), sales: 1800 },
    { day: t('pos.dashboard.days.wed'), sales: 800 },
    { day: t('pos.dashboard.days.thu'), sales: 2400 },
    { day: t('pos.dashboard.days.fri'), sales: 1600 },
    { day: t('pos.dashboard.days.sat'), sales: 2100 },
    { day: t('pos.dashboard.days.sun'), sales: 1400 },
  ];

  return (
    <section id="pos" className="section py-24 bg-gradient-to-br from-white via-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-lg mb-4">
            {t('pos.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('pos.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className={cn(
            "lg:col-span-2 order-2",
            direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'
          )}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card-warm p-6 hover:-translate-y-1 transition-transform reveal">
                <div className={cn("flex items-start mb-4", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("p-2 bg-primary/10 rounded-lg", direction === 'rtl' ? 'mr-0 ml-3' : 'mr-3')}>
                    <Database className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('pos.feature1.title')}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {t('pos.feature1.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-warm p-6 hover:-translate-y-1 transition-transform reveal">
                <div className={cn("flex items-start mb-4", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("p-2 bg-primary/10 rounded-lg", direction === 'rtl' ? 'mr-0 ml-3' : 'mr-3')}>
                    <CreditCard className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('pos.feature2.title')}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {t('pos.feature2.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-warm p-6 hover:-translate-y-1 transition-transform reveal">
                <div className={cn("flex items-start mb-4", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("p-2 bg-primary/10 rounded-lg", direction === 'rtl' ? 'mr-0 ml-3' : 'mr-3')}>
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('pos.feature3.title')}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {t('pos.feature3.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-warm p-6 hover:-translate-y-1 transition-transform reveal">
                <div className={cn("flex items-start mb-4", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("p-2 bg-primary/10 rounded-lg", direction === 'rtl' ? 'mr-0 ml-3' : 'mr-3')}>
                    <ChartBar className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{t('pos.feature4.title')}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {t('pos.feature4.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            "lg:col-span-3 order-1 reveal",
            direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'
          )}>
            {/* Modern POS Dashboard Mockup */}
            <div className="relative">
              {/* Laptop Frame */}
              <div className="relative bg-gray-800 rounded-t-xl p-2 pt-1 pb-16 shadow-xl">
                <div className="flex justify-center absolute top-0 left-0 right-0">
                  <div className="h-1 w-10 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Screen content */}
                <div className="bg-white h-[400px] overflow-hidden rounded-md">
                  {/* Dashboard UI */}
                  <div className="h-full flex flex-col">
                    {/* Dashboard Header */}
                    <div className="bg-[#006b45] text-white p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/lovable-uploads/3eecde11-4b66-466a-9a57-39e7cbe8815e.png" 
                          alt="L7ANNOUT Logo" 
                          className="h-8" 
                        />
                        <div>
                          <h3 className="font-bold">L7ANNOUT POS</h3>
                          <p className="text-xs opacity-80">{t('pos.dashboard.title')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button className="bg-white/10 hover:bg-white/20 p-1 rounded-md">
                          <Search size={18} />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 p-1 rounded-md">
                          <User size={18} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="flex h-full">
                      {/* Sidebar */}
                      <div className="w-16 bg-gray-100 border-r border-gray-200 flex flex-col items-center py-4 gap-6">
                        {[ChartBar, Tag, Archive, CreditCard, FileText, Calendar].map((Icon, i) => (
                          <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer ${i === 0 ? 'bg-[#006b45] text-white' : 'hover:bg-gray-200'}`}>
                            <Icon size={20} />
                          </div>
                        ))}
                      </div>
                      
                      {/* Main Content */}
                      <div className={cn("flex-grow p-4 overflow-hidden", direction === 'rtl' ? 'text-right' : '')}>
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-bold">{t('pos.dashboard.title')}</h3>
                          <div className="text-sm text-gray-500">
                            <span>{t('pos.dashboard.today')}</span> • <span className="text-[#006b45]">12 {language === 'fr' ? 'Mai' : 'مايو'} 2025</span>
                          </div>
                        </div>
                        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-secondary/50 border border-secondary rounded-lg p-3">
                            <p className="text-sm text-gray-500 mb-1">{t('pos.dashboard.sales')}</p>
                            <p className="text-xl font-bold">2,450 {language === 'fr' ? 'DH' : 'درهم'}</p>
                            <span className="text-xs text-[#006b45]">+12% vs {language === 'fr' ? 'hier' : 'أمس'}</span>
                          </div>
                          <div className="bg-secondary/50 border border-secondary rounded-lg p-3">
                            <p className="text-sm text-gray-500 mb-1">{t('pos.dashboard.items')}</p>
                            <p className="text-xl font-bold">48</p>
                            <span className="text-xs text-[#006b45]">+8 vs {language === 'fr' ? 'hier' : 'أمس'}</span>
                          </div>
                          <div className="bg-secondary/50 border border-secondary rounded-lg p-3">
                            <p className="text-sm text-gray-500 mb-1">{t('pos.dashboard.clients')}</p>
                            <p className="text-xl font-bold">17</p>
                            <span className="text-xs text-accent">-2 vs {language === 'fr' ? 'hier' : 'أمس'}</span>
                          </div>
                        </div>
                        
                        {/* Charts Row */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-2">{t('pos.dashboard.weeklySales')}</h4>
                            <div className="h-28">
                              <ChartContainer
                                config={{
                                  sales: {
                                    theme: {
                                      light: "#006b45",
                                      dark: "#006b45",
                                    },
                                  }
                                }}
                              >
                                <ResponsiveContainer width="100%" height="100%">
                                  <BarChart
                                    data={weeklySalesData}
                                    margin={{
                                      top: 5,
                                      right: 5,
                                      left: 0,
                                      bottom: 5,
                                    }}
                                  >
                                    <ChartTooltip
                                      content={
                                        <ChartTooltipContent 
                                          labelKey="day"
                                        />
                                      }
                                    />
                                    <Bar
                                      dataKey="sales"
                                      name="sales"
                                      fill="var(--color-sales)"
                                      radius={[4, 4, 0, 0]}
                                    />
                                  </BarChart>
                                </ResponsiveContainer>
                              </ChartContainer>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-2">{t('pos.dashboard.categories')}</h4>
                            <div className="h-28 relative">
                              {/* Simplified pie chart */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full border-[6px] border-[#006b45]"></div>
                                <div className="absolute top-0 right-1/2 w-20 h-10 overflow-hidden">
                                  <div className="w-20 h-20 rounded-full border-[6px] border-accent"></div>
                                </div>
                                <div className="absolute bottom-0 left-1/2 w-10 h-10 overflow-hidden">
                                  <div className="w-20 h-20 rounded-full border-[6px] border-gray-300"></div>
                                </div>
                              </div>
                            </div>
                            <div className={cn(
                              "grid grid-cols-3 gap-1 text-xs", 
                              direction === 'rtl' ? 'text-right' : ''
                            )}>
                              <div className={cn("flex items-center", direction === 'rtl' ? 'justify-end' : '')}>
                                <div className={cn("w-2 h-2 bg-[#006b45]", direction === 'rtl' ? 'mr-0 ml-1' : 'mr-1')}></div>
                                <span>{language === 'fr' ? 'Épicerie' : 'بقالة'}</span>
                              </div>
                              <div className={cn("flex items-center", direction === 'rtl' ? 'justify-end' : '')}>
                                <div className={cn("w-2 h-2 bg-accent", direction === 'rtl' ? 'mr-0 ml-1' : 'mr-1')}></div>
                                <span>{language === 'fr' ? 'Boissons' : 'مشروبات'}</span>
                              </div>
                              <div className={cn("flex items-center", direction === 'rtl' ? 'justify-end' : '')}>
                                <div className={cn("w-2 h-2 bg-gray-300", direction === 'rtl' ? 'mr-0 ml-1' : 'mr-1')}></div>
                                <span>{language === 'fr' ? 'Autres' : 'أخرى'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Section */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-2">{t('pos.dashboard.latestSales')}</h4>
                            <div className="text-xs">
                              <div className={cn("grid grid-cols-4 font-medium text-gray-500 mb-2", direction === 'rtl' ? 'text-right' : '')}>
                                <span>{t('pos.dashboard.product')}</span>
                                <span>{t('pos.dashboard.client')}</span>
                                <span>{t('pos.dashboard.price')}</span>
                                <span>{t('pos.dashboard.time')}</span>
                              </div>
                              {[
                                {product: language === 'fr' ? "Huile d'olive" : "زيت الزيتون", client: language === 'fr' ? "Ahmed K." : "أحمد ك.", price: `75 ${language === 'fr' ? 'DH' : 'درهم'}`, time: "14:32"},
                                {product: language === 'fr' ? "Sucre 1kg" : "سكر 1 كغ", client: language === 'fr' ? "Sara T." : "سارة ت.", price: `15 ${language === 'fr' ? 'DH' : 'درهم'}`, time: "13:45"},
                                {product: language === 'fr' ? "Thé vert" : "شاي أخضر", client: language === 'fr' ? "Omar B." : "عمر ب.", price: `28 ${language === 'fr' ? 'DH' : 'درهم'}`, time: "12:10"}
                              ].map((sale, i) => (
                                <div key={i} className={cn("grid grid-cols-4 py-1 border-t border-gray-100", direction === 'rtl' ? 'text-right' : '')}>
                                  <span>{sale.product}</span>
                                  <span>{sale.client}</span>
                                  <span>{sale.price}</span>
                                  <span>{sale.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-white border border-gray-200 rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-2">{t('pos.dashboard.lowStock')}</h4>
                            <div className="space-y-2">
                              {[
                                {name: language === 'fr' ? "Lait" : "حليب", level: 20},
                                {name: language === 'fr' ? "Café" : "قهوة", level: 15},
                                {name: language === 'fr' ? "Farine" : "طحين", level: 10}
                              ].map((item, i) => (
                                <div key={i} className="text-xs">
                                  <div className={cn("flex justify-between mb-1", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                                    <span>{item.name}</span>
                                    <span className="text-accent">{item.level}%</span>
                                  </div>
                                  <div className="w-full h-1 bg-gray-200 rounded-full">
                                    <div 
                                      className="h-1 bg-accent rounded-full" 
                                      style={{width: `${item.level}%`}}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop bottom part */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-800 rounded-b-xl"></div>
              </div>
              
              {/* Laptop Stand */}
              <div className="relative z-0 h-4 bg-gray-800 w-32 mx-auto"></div>
              <div className="relative z-0 h-1 bg-gray-800 w-48 mx-auto rounded-b-lg"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 right-0 bg-[#006b45]/10 w-20 h-20 rounded-full -z-10"></div>
              <div className="absolute bottom-1/3 -left-8 bg-accent/10 w-16 h-16 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#contact" className="button-primary inline-flex items-center group">
            {t('pos.demo.button')}
            <ArrowRight size={18} className={cn(
              "group-hover:translate-x-1 transition-transform", 
              direction === 'rtl' ? 'mr-2 order-first' : 'ml-2'
            )} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default POSSection;
