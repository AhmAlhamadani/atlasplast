import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom"
// import Button from "../../common/Button"
import type { Service } from "../../../data/servicesData";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  // Get translated content based on service slug
  const getTranslatedContent = (slug: string) => {
    const translationKey = slug.replace(/-/g, '_');
    return {
      title: t(`services.items.${translationKey}.title`, service.title),
      description: t(`services.items.${translationKey}.description`, service.description)
    };
  };

  const translatedContent = getTranslatedContent(service.slug);

  return (
    <div className={`bg-white border border-primaryBorder rounded-[20px] 2xl:p-7 md:p-6 p-5 hover:border-primaryBlue duration-300 ease-in-out group ${isRTL ? "text-right" : ""}`}>
      <div className={`flex items-center 2xl:gap-7 gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div>
          <div className="bg-primaryBlue w-20 h-20 rounded-full flex justify-center items-center">
            <img src={service.icon} alt={translatedContent.title} />
          </div>
        </div>
        <h4 className={isArabic ? 'font-arabic' : ''}>{translatedContent.title}</h4>
      </div>

      <hr className="text-primaryBorder group-hover:text-primaryBlue my-5" />
      <p 
        className={isArabic ? 'font-arabic' : ''}
        style={{ 
          direction: isArabic ? 'rtl' : 'ltr',
          unicodeBidi: 'isolate'
        }}
        dangerouslySetInnerHTML={{ 
          __html: translatedContent.description
            .replace(/\b(PPR|PVC|uPVC|PP|HDPE)\b/g, '<span dir="ltr" style="unicode-bidi: embed;">$1</span>')
        }}
      />

      <div className={`mt-[30px] ${isRTL ? "flex justify-end" : ""}`}>
        {/* <Link to={`/service/${service.slug}`}>
          <Button hoverBgColorClass="bg-primaryBlue" className={`bg-sectionBg text-secondaryColor ${isArabic ? 'font-arabic' : ''}`}>
            {t("services.read_more")}
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default ServiceCard;
