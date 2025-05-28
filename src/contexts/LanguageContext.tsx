
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Translations dictionary - Complete and systematic
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.b2b': 'T9ADYTK',
    'nav.pos': 'Solution POS',
    'nav.franchise': 'Franchise',
    'nav.contact': 'Contactez-nous',
    
    // Hero Section
    'hero.tagline': 'L7ANNOUT Smart System',
    'hero.title': 'Révolutionnez votre commerce de proximité',
    'hero.description': 'Notre solution complète digitalise intelligemment les petits commerces. Une technologie avancée qui transforme la façon dont vous gérez votre entreprise.',
    'hero.button.join': 'Rejoignez notre réseau',
    'hero.button.discover': 'Découvrir nos solutions',
    'hero.stats.merchants': 'Commerçants',
    'hero.stats.merchants.detail': 'satisfaits',
    'hero.stats.cities': 'Villes',
    'hero.stats.cities.detail': 'couvertes',
    'hero.stats.increase': 'Augmentation',
    'hero.stats.increase.detail': 'du CA moyen',
    'hero.stats.solution': 'Solution',
    'hero.stats.solution.detail': 'digitale',
    
    // Cards
    'card.orders': 'Gestion des commandes simplifiée',
    'card.payment': 'Gestion moderne des paiements',
    'card.store': 'Votre Smart Store L7ANNOUT',
    
    // B2B Section
    'b2b.title': 'Optimisez vos approvisionnements',
    'b2b.subtitle': 'avec notre plateforme T9ADYTK',
    'b2b.description': 'Connectez-vous directement avec les grossistes et bénéficiez des meilleurs prix et d\'une livraison rapide pour tous vos produits.',
    'b2b.feature1.title': 'Prix compétitifs',
    'b2b.feature1.description': 'Accédez aux meilleures offres directement des grossistes',
    'b2b.feature2.title': 'Livraison rapide',
    'b2b.feature2.description': 'Recevez vos commandes en 24h dans votre commerce',
    'b2b.feature3.title': 'Paiements flexibles',
    'b2b.feature3.description': 'Options de paiement adaptées à votre trésorerie',
    'b2b.feature4.title': 'Suivi en temps réel',
    'b2b.feature4.description': 'Suivez vos commandes de la validation à la livraison',

    // POS Section
    'pos.title': 'Gérez vos stocks et paiements intelligemment',
    'pos.description': 'Notre solution POS intégrée transforme votre point de vente en un système complet de gestion commerciale avec des outils modernes et adaptés à vos besoins.',
    'pos.feature1.title': 'Gestion de stock en temps réel',
    'pos.feature1.description': 'Suivez vos inventaires et recevez des alertes pour les réapprovisionnements.',
    'pos.feature2.title': 'Paiement multi-modal',
    'pos.feature2.description': 'TPE, Mobile Money et espèces, pour une flexibilité maximale.',
    'pos.feature3.title': 'E-carnet intelligent',
    'pos.feature3.description': 'Gérez les crédits clients et suivez les encaissements facilement.',
    'pos.feature4.title': 'Reporting automatique',
    'pos.feature4.description': 'Analyses statistiques détaillées pour optimiser votre rentabilité.',
    'pos.demo.button': 'Demander une démonstration',
    'pos.dashboard.title': 'Tableau de bord',
    'pos.dashboard.today': 'Aujourd\'hui',
    'pos.dashboard.sales': 'Ventes du jour',
    'pos.dashboard.items': 'Articles vendus',
    'pos.dashboard.clients': 'Clients',
    'pos.dashboard.weeklySales': 'Ventes hebdomadaires',
    'pos.dashboard.categories': 'Catégories populaires',
    'pos.dashboard.latestSales': 'Dernières ventes',
    'pos.dashboard.lowStock': 'Stock à compléter',
    'pos.dashboard.product': 'Produit',
    'pos.dashboard.client': 'Client',
    'pos.dashboard.price': 'Prix',
    'pos.dashboard.time': 'Heure',
    'pos.dashboard.days.mon': 'Lun',
    'pos.dashboard.days.tue': 'Mar',
    'pos.dashboard.days.wed': 'Mer',
    'pos.dashboard.days.thu': 'Jeu',
    'pos.dashboard.days.fri': 'Ven',
    'pos.dashboard.days.sat': 'Sam',
    'pos.dashboard.days.sun': 'Dim',

    // Franchise Section
    'franchise.title': 'Ouvrez votre propre Smart Store',
    'franchise.subtitle': 'Rejoignez le réseau L7ANNOUT',
    'franchise.description': 'Notre programme de franchise vous permet de lancer votre propre commerce moderne avec tout le soutien technologique et logistique de L7ANNOUT.',
    'franchise.feature1.title': 'Support complet',
    'franchise.feature1.description': 'Formation, assistance et solutions technologiques incluses',
    'franchise.feature2.title': 'Image de marque',
    'franchise.feature2.description': 'Bénéficiez d\'une marque reconnue et d\'une identité forte',
    'franchise.feature3.title': 'Rentabilité prouvée',
    'franchise.feature3.description': 'Modèle économique testé avec marges bénéficiaires attractives',
    'franchise.button': 'Devenir franchisé',

    // Centrale d'Achat Section
    'centrale.title': 'Centrale d\'achat intégrée',
    'centrale.description': 'Optimisez votre chaîne d\'approvisionnement et réduisez vos coûts grâce à notre centrale d\'achat qui connecte votre commerce directement aux fournisseurs.',
    'centrale.feature1.title': 'Approvisionnement centralisé',
    'centrale.feature1.description': 'Commandes groupées et tarifs négociés pour tous vos produits',
    'centrale.feature2.title': 'Logistique optimisée',
    'centrale.feature2.description': 'Livraisons programmées et suivi en temps réel de vos commandes',
    'centrale.feature3.title': 'Contrôle qualité',
    'centrale.feature3.description': 'Sélection rigoureuse des fournisseurs et produits référencés',
    'centrale.feature4.title': 'Centralisation administrative',
    'centrale.feature4.description': 'Facturation unique et simplification des processus d\'achat',
    'centrale.image.alt': 'Centrale d\'achat L7ANNOUT',
    'centrale.card.title': 'Avantages exclusifs',
    'centrale.card.point1': 'Prix grossiste',
    'centrale.card.point2': 'Livraison J+1',
    'centrale.card.point3': 'Paiement différé',
    'centrale.card.point4': 'Catalogue étendu',
    'centrale.cta.title': 'Rejoignez notre réseau d\'approvisionnement',
    'centrale.cta.description': 'Bénéficiez immédiatement de tarifs préférentiels et d\'une logistique optimisée pour votre commerce.',
    'centrale.cta.button': 'Devenir partenaire',

    // Contact Section
    'contact.title': 'Contactez',
    'contact.title.brand': 'L7ANNOUT',
    'contact.description': 'Vous souhaitez en savoir plus sur nos services ou notre programme de franchise ? Notre équipe est à votre disposition pour répondre à toutes vos questions.',
    'contact.info.title': 'Nos coordonnées',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.interest': 'Je suis intéressé par',
    'contact.form.interest.information': 'Informations générales',
    'contact.form.interest.franchise': 'Devenir franchisé',
    'contact.form.interest.b2b': 'Solution B2B (T9ADYTK)',
    'contact.form.interest.pos': 'Solution POS',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre message',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.success.title': 'Formulaire envoyé',
    'contact.form.success.description': 'Nous vous contacterons dans les plus brefs délais.',
    'contact.address.title': 'Adresse',
    'contact.address.line1': '123 Avenue Hassan II',
    'contact.address.line2': 'Casablanca, Maroc',
    'contact.phone.title': 'Téléphone',
    'contact.phone.number': '+212 522 123 456',
    'contact.email.title': 'Email',
    'contact.email.address': 'contact@l7annout.ma',
    'contact.social.title': 'Suivez-nous',

    // Footer
    'footer.logo.alt': 'L7ANNOUT Logo',
    'footer.description': 'La solution intelligente pour la digitalisation des petits commerces au Maroc. Transformez votre boutique en un Smart Store connecté.',
    'footer.quickLinks': 'Liens rapides',
    'footer.services': 'Services',
    'footer.services.orders': 'Gestion des commandes',
    'footer.services.payment': 'Paiement digitalisé',
    'footer.services.inventory': 'Gestion de stock',
    'footer.services.credit': 'E-carnet de crédit',
    'footer.services.reporting': 'Reporting et statistiques',
    'footer.contact': 'Contact',
    'footer.address': '123 Avenue Hassan II, Casablanca, Maroc',
    'footer.phone': '+212 522 123 456',
    'footer.email': 'contact@l7annout.ma',
    'footer.newsletter': 'Inscrivez-vous à notre newsletter',
    'footer.newsletter.placeholder': 'Votre email',
    'footer.newsletter.button': 'S\'abonner',
    'footer.copyright': '© YEAR L7ANNOUT Smart System. Tous droits réservés.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.legal': 'Mentions légales',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.b2b': 'تقديتك',
    'nav.pos': 'نظام نقاط البيع',
    'nav.franchise': 'الامتياز',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.tagline': 'الحانوت سمارت سيستم',
    'hero.title': 'ثورة في متجرك المحلي',
    'hero.description': 'حلولنا المتكاملة ترقمن المتاجر الصغيرة بذكاء. تقنية متطورة تحول طريقة إدارتك لعملك.',
    'hero.button.join': 'انضم إلى شبكتنا',
    'hero.button.discover': 'اكتشف حلولنا',
    'hero.stats.merchants': 'تاجر',
    'hero.stats.merchants.detail': 'راضٍ',
    'hero.stats.cities': 'مدينة',
    'hero.stats.cities.detail': 'مغطاة',
    'hero.stats.increase': 'زيادة',
    'hero.stats.increase.detail': 'في متوسط المبيعات',
    'hero.stats.solution': 'حل',
    'hero.stats.solution.detail': 'رقمي',
    
    // Cards
    'card.orders': 'إدارة مبسطة للطلبات',
    'card.payment': 'إدارة حديثة للمدفوعات',
    'card.store': 'متجرك الذكي الحانوت',
    
    // B2B Section
    'b2b.title': 'تحسين عمليات التوريد الخاصة بك',
    'b2b.subtitle': 'مع منصة تقديتك',
    'b2b.description': 'تواصل مباشرة مع تجار الجملة واستفد من أفضل الأسعار والتسليم السريع لجميع منتجاتك.',
    'b2b.feature1.title': 'أسعار تنافسية',
    'b2b.feature1.description': 'الوصول إلى أفضل العروض مباشرة من تجار الجملة',
    'b2b.feature2.title': 'توصيل سريع',
    'b2b.feature2.description': 'استلم طلباتك في غضون 24 ساعة في متجرك',
    'b2b.feature3.title': 'خيارات دفع مرنة',
    'b2b.feature3.description': 'خيارات الدفع المتكيفة مع تدفق أموالك',
    'b2b.feature4.title': 'تتبع في الوقت الحقيقي',
    'b2b.feature4.description': 'تتبع طلباتك من التأكيد إلى التسليم',

    // POS Section
    'pos.title': 'إدارة المخزون والمدفوعات بذكاء',
    'pos.description': 'يحول نظام نقاط البيع المتكامل نقطة البيع الخاصة بك إلى نظام إدارة تجارية كامل بأدوات حديثة مصممة لتلبية احتياجاتك.',
    'pos.feature1.title': 'إدارة المخزون في الوقت الحقيقي',
    'pos.feature1.description': 'تتبع مخزونك وتلقي تنبيهات لإعادة التخزين.',
    'pos.feature2.title': 'دفع متعدد الطرق',
    'pos.feature2.description': 'آلات نقاط البيع، المحفظة الإلكترونية والنقد، لمرونة قصوى.',
    'pos.feature3.title': 'دفتر إلكتروني ذكي',
    'pos.feature3.description': 'إدارة ائتمانات العملاء وتتبع المدفوعات بسهولة.',
    'pos.feature4.title': 'تقارير تلقائية',
    'pos.feature4.description': 'تحليلات إحصائية مفصلة لتحسين ربحيتك.',
    'pos.demo.button': 'طلب عرض توضيحي',
    'pos.dashboard.title': 'لوحة التحكم',
    'pos.dashboard.today': 'اليوم',
    'pos.dashboard.sales': 'مبيعات اليوم',
    'pos.dashboard.items': 'العناصر المباعة',
    'pos.dashboard.clients': 'العملاء',
    'pos.dashboard.weeklySales': 'المبيعات الأسبوعية',
    'pos.dashboard.categories': 'الفئات الشائعة',
    'pos.dashboard.latestSales': 'آخر المبيعات',
    'pos.dashboard.lowStock': 'المخزون المنخفض',
    'pos.dashboard.product': 'المنتج',
    'pos.dashboard.client': 'العميل',
    'pos.dashboard.price': 'السعر',
    'pos.dashboard.time': 'الوقت',
    'pos.dashboard.days.mon': 'إث',
    'pos.dashboard.days.tue': 'ثل',
    'pos.dashboard.days.wed': 'أر',
    'pos.dashboard.days.thu': 'خم',
    'pos.dashboard.days.fri': 'جم',
    'pos.dashboard.days.sat': 'سب',
    'pos.dashboard.days.sun': 'أح',

    // Franchise Section
    'franchise.title': 'افتح متجرك الذكي الخاص',
    'franchise.subtitle': 'انضم إلى شبكة الحانوت',
    'franchise.description': 'يتيح لك برنامج الامتياز الخاص بنا إطلاق متجرك الحديث الخاص بك مع كل الدعم التكنولوجي واللوجستي من الحانوت.',
    'franchise.feature1.title': 'دعم كامل',
    'franchise.feature1.description': 'التدريب والمساعدة والحلول التكنولوجية مشمولة',
    'franchise.feature2.title': 'صورة العلامة التجارية',
    'franchise.feature2.description': 'استفد من علامة تجارية معروفة وهوية قوية',
    'franchise.feature3.title': 'ربحية مثبتة',
    'franchise.feature3.description': 'نموذج أعمال مختبر مع هوامش ربح جذابة',
    'franchise.button': 'كن صاحب امتياز',

    // Centrale d'Achat Section
    'centrale.title': 'مركز الشراء المتكامل',
    'centrale.description': 'تحسين سلسلة التوريد الخاصة بك وتقليل التكاليف من خلال مركز الشراء الذي يربط متجرك مباشرة بالموردين.',
    'centrale.feature1.title': 'توريد مركزي',
    'centrale.feature1.description': 'طلبات جماعية وأسعار تفاوضية لجميع منتجاتك',
    'centrale.feature2.title': 'خدمات لوجستية محسنة',
    'centrale.feature2.description': 'عمليات تسليم مجدولة وتتبع طلباتك في الوقت الفعلي',
    'centrale.feature3.title': 'مراقبة الجودة',
    'centrale.feature3.description': 'اختيار صارم للموردين والمنتجات المدرجة',
    'centrale.feature4.title': 'مركزية إدارية',
    'centrale.feature4.description': 'فاتورة موحدة وتبسيط عمليات الشراء',
    'centrale.image.alt': 'مركز شراء الحانوت',
    'centrale.card.title': 'مزايا حصرية',
    'centrale.card.point1': 'أسعار الجملة',
    'centrale.card.point2': 'توصيل في اليوم التالي',
    'centrale.card.point3': 'دفع مؤجل',
    'centrale.card.point4': 'كتالوج موسع',
    'centrale.cta.title': 'انضم إلى شبكة التوريد الخاصة بنا',
    'centrale.cta.description': 'استفد على الفور من الأسعار التفضيلية والخدمات اللوجستية المحسنة لمتجرك.',
    'centrale.cta.button': 'كن شريكاً',

    // Contact Section
    'contact.title': 'تواصل مع',
    'contact.title.brand': 'الحانوت',
    'contact.description': 'هل ترغب في معرفة المزيد عن خدماتنا أو برنامج الامتياز؟ فريقنا متاح للإجابة على جميع أسئلتك.',
    'contact.info.title': 'معلومات الاتصال',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.interest': 'أنا مهتم بـ',
    'contact.form.interest.information': 'معلومات عامة',
    'contact.form.interest.franchise': 'أصبح صاحب امتياز',
    'contact.form.interest.b2b': 'حل B2B (تقديتك)',
    'contact.form.interest.pos': 'حل نقاط البيع',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.success.title': 'تم إرسال النموذج',
    'contact.form.success.description': 'سنتصل بك في أقرب وقت ممكن.',
    'contact.address.title': 'العنوان',
    'contact.address.line1': '123 شارع الحسن الثاني',
    'contact.address.line2': 'الدار البيضاء، المغرب',
    'contact.phone.title': 'الهاتف',
    'contact.phone.number': '+212 522 123 456',
    'contact.email.title': 'البريد الإلكتروني',
    'contact.email.address': 'contact@l7annout.ma',
    'contact.social.title': 'تابعنا',

    // Footer
    'footer.logo.alt': 'شعار الحانوت',
    'footer.description': 'الحل الذكي لرقمنة المتاجر الصغيرة في المغرب. حوّل متجرك إلى متجر ذكي متصل.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.services.orders': 'إدارة الطلبات',
    'footer.services.payment': 'الدفع الرقمي',
    'footer.services.inventory': 'إدارة المخزون',
    'footer.services.credit': 'دفتر الائتمان الإلكتروني',
    'footer.services.reporting': 'التقارير والإحصائيات',
    'footer.contact': 'اتصل بنا',
    'footer.address': '123 شارع الحسن الثاني، الدار البيضاء، المغرب',
    'footer.phone': '+212 522 123 456',
    'footer.email': 'contact@l7annout.ma',
    'footer.newsletter': 'اشترك في نشرتنا الإخبارية',
    'footer.newsletter.placeholder': 'بريدك الإلكتروني',
    'footer.newsletter.button': 'اشتراك',
    'footer.copyright': '© YEAR الحانوت سمارت سيستم. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.legal': 'الشروط القانونية',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  direction: 'ltr',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [direction, setDirection] = useState<Direction>('ltr');

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && (storedLanguage === 'fr' || storedLanguage === 'ar')) {
      changeLanguage(storedLanguage);
    }
    
    // Apply direction to document for RTL support
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add special RTL class to body for global styling adjustments
    if (direction === 'rtl') {
      document.body.classList.add('rtl-active');
    } else {
      document.body.classList.remove('rtl-active');
    }
  }, [direction, language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
