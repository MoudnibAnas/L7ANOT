
import React from 'react';
import { Store, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const FranchiseSection = () => {
  const { language, direction } = useLanguage();

  return (
    <section id="franchise" className="section bg-gradient-to-br from-[#E8F7FC] to-white py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            {language === 'fr' ? (
              <>Ouvrez votre propre <span className="text-[#70C2E3]">Smart Store L7ANOT</span></>
            ) : (
              <>افتح <span className="text-[#70C2E3]">متجرك الذكي الحانوت</span></>
            )}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Rejoignez notre réseau de franchisés et bénéficiez de notre expertise, notre technologie et notre support pour lancer votre commerce moderne et connecté.'
              : 'انضم إلى شبكة الامتياز التجاري وتمتع بخبرتنا وتقنيتنا ودعمنا لإطلاق متجرك الحديث والمتصل.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: language === 'fr' ? "Format compact" : "نموذج مدمج",
              size: language === 'fr' ? "< 50 m²" : "< ٥٠ م²",
              image: "/lovable-uploads/fe2ce3f0-5f9a-4d17-8b42-659fc364f0f7.png",
              features: language === 'fr' ? [
                "Idéal pour zones urbaines densément peuplées",
                "Assortiment adapté aux besoins quotidiens",
                "Investissement initial réduit"
              ] : [
                "مثالي للمناطق الحضرية ذات الكثافة السكانية العالية",
                "تشكيلة مناسبة للاحتياجات اليومية",
                "استثمار أولي منخفض"
              ],
              price: language === 'fr' ? "150,000 DH" : "١٥٠,٠٠٠ درهم"
            },
            {
              title: language === 'fr' ? "Format standard" : "النموذج القياسي",
              size: language === 'fr' ? "50 à 200 m²" : "٥٠ إلى ٢٠٠ م²",
              image: "/lovable-uploads/b6208942-6c71-43b3-abb4-4a331b059819.png",
              features: language === 'fr' ? [
                "Offre complète de produits alimentaires",
                "Équilibre optimal entre taille et rentabilité",
                "Solution idéale pour les zones résidentielles"
              ] : [
                "عرض كامل للمنتجات الغذائية",
                "توازن مثالي بين الحجم والربحية",
                "حل مثالي للمناطق السكنية"
              ],
              price: language === 'fr' ? "350,000 DH" : "٣٥٠,٠٠٠ درهم",
              featured: true
            },
            {
              title: language === 'fr' ? "Grande surface" : "مساحة كبيرة",
              size: language === 'fr' ? "> 200 m²" : "> ٢٠٠ م²",
              image: "/lovable-uploads/dfa7e7f8-afdf-4a6b-8036-8cc907fdda5c.png",
              features: language === 'fr' ? [
                "Assortiment complet et services additionnels",
                "Potentiel de chiffre d'affaires élevé",
                "Adapté aux zones commerciales à fort trafic"
              ] : [
                "مجموعة كاملة وخدمات إضافية",
                "إمكانية تحقيق رقم مبيعات مرتفع",
                "مناسب للمناطق التجارية ذات الحركة المرورية العالية"
              ],
              price: language === 'fr' ? "700,000 DH" : "٧٠٠,٠٠٠ درهم"
            }
          ].map((format, i) => (
            <div 
              key={format.title}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${format.featured ? 'transform -translate-y-4 border-2 border-[#70C2E3]' : 'hover:-translate-y-2'}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={format.image} 
                  alt={format.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                />
                {format.featured && (
                  <div className="absolute top-4 right-4 bg-[#70C2E3] text-white text-xs py-1 px-3 rounded-full">
                    {language === 'fr' ? 'Recommandé' : 'موصى به'}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Store className={`${format.featured ? 'text-[#70C2E3]' : 'text-gray-700'} ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} size={20} />
                  <h3 className="text-xl font-bold">{format.title}</h3>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${format.featured ? 'bg-[#70C2E3]/10 text-[#70C2E3]' : 'bg-gray-100 text-gray-700'}`}>
                  {format.size}
                </div>
                <ul className="space-y-2 mb-6">
                  {format.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${format.featured ? 'bg-[#70C2E3]' : 'bg-gray-200'} ${direction === 'rtl' ? 'ml-2' : 'mr-2'} flex items-center justify-center`}>
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <p className={`font-semibold ${format.featured ? 'text-[#70C2E3]' : 'text-gray-700'}`}>
                    {language === 'fr' ? 'À partir de ' : 'ابتداء من '}{format.price}
                  </p>
                  <a 
                    href="#contact" 
                    className={`rounded-full w-10 h-10 flex items-center justify-center ${format.featured ? 'bg-[#70C2E3] text-white' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-transform`}
                  >
                    <ArrowRight size={16} className={direction === 'rtl' ? 'rotate-180' : ''} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#E8F7FC]/50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#70C2E3]">
          <h3 className={cn("text-2xl font-bold mb-8", direction === 'rtl' ? 'text-right' : '')}>
            {language === 'fr' ? "Pourquoi devenir franchisé L7ANOT ?" : "لماذا تصبح صاحب امتياز الحانوت؟"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: 1,
                title: language === 'fr' ? "Support technique complet" : "دعم تقني كامل",
                description: language === 'fr' ? "Bénéficiez de notre système de gestion intégré et d'une assistance technique permanente." : "استفد من نظام الإدارة المتكامل والمساعدة التقنية المستمرة."
              },
              {
                number: 2,
                title: language === 'fr' ? "Formation approfondie" : "تدريب متعمق",
                description: language === 'fr' ? "Accédez à nos modules de formation pour vous et votre équipe, couvrant tous les aspects de la gestion commerciale." : "الوصول إلى وحدات التدريب لك ولفريقك، تغطي كل جوانب إدارة الأعمال."
              },
              {
                number: 3,
                title: language === 'fr' ? "Pouvoir de négociation" : "قوة التفاوض",
                description: language === 'fr' ? "Profitez des meilleures conditions d'achat grâce à notre réseau et nos partenariats avec les fournisseurs." : "استفد من أفضل شروط الشراء بفضل شبكتنا وشراكاتنا مع الموردين."
              },
              {
                number: 4,
                title: language === 'fr' ? "Image de marque forte" : "صورة علامة تجارية قوية",
                description: language === 'fr' ? "Rejoignez une enseigne moderne et reconnue, synonyme d'innovation et de qualité." : "انضم إلى علامة تجارية حديثة ومعترف بها، مرادفة للابتكار والجودة."
              }
            ].map(item => (
              <div key={item.number} className={cn("flex items-start", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                <div className={cn("w-10 h-10 rounded-full bg-[#70C2E3] text-white flex items-center justify-center", direction === 'rtl' ? 'ml-4' : 'mr-4', "flex-shrink-0")}>
                  <span className="font-bold">{item.number}</span>
                </div>
                <div className={direction === 'rtl' ? 'text-right' : ''}>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-md">
              <div className={cn("text-center mb-4", direction === 'rtl' ? 'text-right' : '')}>
                <p className="text-[#70C2E3] font-bold text-xl">
                  {language === 'fr' ? "Programme d'accompagnement" : "برنامج المرافقة"}
                </p>
                <p className="text-gray-500">
                  {language === 'fr' ? "Tout au long de votre parcours" : "طوال رحلتك"}
                </p>
              </div>
              <div className="space-y-4">
                <div className={cn("flex items-center", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className={cn("h-1 w-1 rounded-full bg-[#70C2E3]", direction === 'rtl' ? 'ml-2' : 'mr-2')}></div>
                  <p className="text-gray-600">
                    {language === 'fr' 
                      ? "Financement facilité avec nos partenaires bancaires"
                      : "تمويل ميسر مع شركائنا المصرفيين"}
                  </p>
                </div>
                <div className={cn("flex items-center", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className={cn("h-1 w-1 rounded-full bg-[#70C2E3]", direction === 'rtl' ? 'ml-2' : 'mr-2')}></div>
                  <p className="text-gray-600">
                    {language === 'fr' 
                      ? "Support complet lors de l'ouverture"
                      : "دعم كامل عند الافتتاح"}
                  </p>
                </div>
                <div className={cn("flex items-center", direction === 'rtl' ? 'flex-row-reverse' : '')}>
                  <div className={cn("h-1 w-1 rounded-full bg-[#70C2E3]", direction === 'rtl' ? 'ml-2' : 'mr-2')}></div>
                  <p className="text-gray-600">
                    {language === 'fr' 
                      ? "Formations continues et actualisation des connaissances"
                      : "التدريب المستمر وتحديث المعرفة"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className={cn("bg-[#70C2E3] text-white rounded-lg px-6 py-3 font-medium transition-all hover:bg-[#70C2E3]/90 hover:shadow-md inline-flex items-center group", 
            direction === 'rtl' ? 'flex-row-reverse' : '')}
          >
            {language === 'fr' 
              ? "Devenez franchisé aujourd'hui"
              : "كن صاحب امتياز اليوم"}
            <ArrowRight 
              className={cn(
                "transition-transform group-hover:translate-x-1", 
                direction === 'rtl' ? 'mr-2 rotate-180 group-hover:translate-x-[-4px]' : 'ml-2'
              )} 
              size={18} 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
