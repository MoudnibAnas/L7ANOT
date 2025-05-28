
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, direction } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "rounded-full px-3 py-2 hover:bg-[#70C2E3]/10 hover:text-[#70C2E3] transition-all",
        language === 'ar' ? 'font-medium' : ''
      )}
      title={language === 'fr' ? 'العربية' : 'Français'}
      aria-label={language === 'fr' ? 'التبديل إلى العربية' : 'Passer au français'}
    >
      <Globe size={16} className={cn(
        "transition-transform", 
        direction === 'rtl' ? 'ml-2' : 'mr-2',
        "text-[#70C2E3]"
      )} />
      <span className="text-sm font-medium">
        {language === 'fr' ? 'عربي' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
