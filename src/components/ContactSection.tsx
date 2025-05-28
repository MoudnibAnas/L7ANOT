
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const { toast } = useToast();
  const { language, direction } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'information'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: language === 'fr' ? 'Message envoyé !' : 'تم إرسال الرسالة!',
      description: language === 'fr' 
        ? 'Nous vous contacterons dans les plus brefs délais.' 
        : 'سنتواصل معك في أقرب وقت ممكن.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      interest: 'information'
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            {language === 'fr' ? (
              <>Contactez <span className="text-[#70C2E3]">L7ANOT</span></>
            ) : (
              <>تواصل مع <span className="text-[#70C2E3]">الحانوت</span></>
            )}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Nous sommes là pour répondre à toutes vos questions. N\'hésitez pas à nous contacter pour en savoir plus sur nos services.'
              : 'نحن هنا للإجابة على جميع أسئلتك. لا تتردد في الاتصال بنا لمعرفة المزيد عن خدماتنا.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={cn("lg:col-span-2", direction === 'rtl' ? 'order-2 lg:order-1' : 'order-1')}>
            <div className="bg-[#E8F7FC] rounded-lg p-8 h-full">
              <h3 className={cn("text-2xl font-bold mb-8", direction === 'rtl' ? 'text-right' : '')}>
                {language === 'fr' ? 'Nos coordonnées' : 'معلومات الاتصال'}
              </h3>
              
              <div className="space-y-6">
                <div className={cn("flex items-start", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("bg-[#70C2E3] rounded-full p-2", direction === 'rtl' ? 'ml-4' : 'mr-4')}>
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'fr' ? 'Téléphone' : 'الهاتف'}</h4>
                    <p className="text-gray-600">+212 522 123 456</p>
                  </div>
                </div>
                
                <div className={cn("flex items-start", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("bg-[#70C2E3] rounded-full p-2", direction === 'rtl' ? 'ml-4' : 'mr-4')}>
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'fr' ? 'Email' : 'البريد الإلكتروني'}</h4>
                    <p className="text-gray-600">contact@l7anot.ma</p>
                  </div>
                </div>
                
                <div className={cn("flex items-start", direction === 'rtl' ? 'flex-row-reverse text-right' : '')}>
                  <div className={cn("bg-[#70C2E3] rounded-full p-2", direction === 'rtl' ? 'ml-4' : 'mr-4')}>
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'fr' ? 'Adresse' : 'العنوان'}</h4>
                    <p className="text-gray-600">
                      {language === 'fr'
                        ? 'Technopole, Casablanca'
                        : 'تكنوبول، الدار البيضاء'}
                      <br />
                      {language === 'fr' 
                        ? 'Maroc' 
                        : 'المغرب'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className={cn("font-semibold mb-3", direction === 'rtl' ? 'text-right' : '')}>
                  {language === 'fr' ? 'Suivez-nous' : 'تابعنا'}
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current text-[#1877F2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current text-[#1DA1F2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current text-[#E4405F]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current text-[#0A66C2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={cn("lg:col-span-3", direction === 'rtl' ? 'order-1 lg:order-2' : 'order-2')}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
              <h3 className={cn("text-2xl font-bold mb-6", direction === 'rtl' ? 'text-right' : '')}>
                {language === 'fr' ? 'Envoyez-nous un message' : 'أرسل لنا رسالة'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className={cn("block mb-2 text-sm font-medium", direction === 'rtl' ? 'text-right' : '')}>
                    {language === 'fr' ? 'Nom' : 'الاسم'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    dir={direction}
                    className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#70C2E3]/50",
                      direction === 'rtl' ? 'text-right' : '')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={cn("block mb-2 text-sm font-medium", direction === 'rtl' ? 'text-right' : '')}>
                    {language === 'fr' ? 'Email' : 'البريد الإلكتروني'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    dir={direction}
                    className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#70C2E3]/50",
                      direction === 'rtl' ? 'text-right' : '')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className={cn("block mb-2 text-sm font-medium", direction === 'rtl' ? 'text-right' : '')}>
                    {language === 'fr' ? 'Téléphone' : 'الهاتف'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    dir={direction}
                    className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#70C2E3]/50",
                      direction === 'rtl' ? 'text-right' : '')}
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className={cn("block mb-2 text-sm font-medium", direction === 'rtl' ? 'text-right' : '')}>
                    {language === 'fr' ? 'Intérêt' : 'الاهتمام'} *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    dir={direction}
                    className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#70C2E3]/50",
                      direction === 'rtl' ? 'text-right' : '')}
                  >
                    <option value="information">{language === 'fr' ? 'Informations générales' : 'معلومات عامة'}</option>
                    <option value="franchise">{language === 'fr' ? 'Franchise' : 'امتياز تجاري'}</option>
                    <option value="b2b">{language === 'fr' ? 'Partenariat B2B' : 'شراكة الأعمال'}</option>
                    <option value="pos">{language === 'fr' ? 'Système POS' : 'نظام نقاط البيع'}</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className={cn("block mb-2 text-sm font-medium", direction === 'rtl' ? 'text-right' : '')}>
                  {language === 'fr' ? 'Sujet' : 'الموضوع'} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  dir={direction}
                  className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#70C2E3]/50",
                    direction === 'rtl' ? 'text-right' : '')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={cn("block mb-2 text-sm font-medium", direction === 'rtl' ? 'text-right' : '')}>
                  {language === 'fr' ? 'Message' : 'الرسالة'} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  dir={direction}
                  className={cn("w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#70C2E3]/50",
                    direction === 'rtl' ? 'text-right' : '')}
                ></textarea>
              </div>

              <div className={cn("flex", direction === 'rtl' ? 'justify-end' : '')}>
                <button 
                  type="submit"
                  className="bg-[#70C2E3] text-white rounded-lg px-6 py-3 font-medium transition-all hover:bg-[#70C2E3]/90 hover:shadow-md w-full md:w-auto"
                >
                  {language === 'fr' ? 'Envoyer' : 'إرسال'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
