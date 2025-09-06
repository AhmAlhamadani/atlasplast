
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import ContactFormTwo from "../../ui/form/ContactFormTwo";



const ContactStyle2: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <section className="section-gap">
      <Container className={`grid grid-cols-1 lg:grid-cols-2 gap-7 relative ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
        {/* Left Content - will be right in Arabic */}
        <div className={`space-y-6 flex flex-col ${isRTL ? "text-right lg:order-2" : ""}`}>
        <SectionTitle
        label={t("contact.label")}
        title={t("contact.title")}
        description=""
        align={isRTL ? "right" : "left"}
        isArabic={isArabic}
        />

          <div className="space-y-6">
            <div>
              <div className={`flex items-start gap-4 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <FaLocationDot className="text-secondaryColor text-xl mt-1" />
              <p className={isArabic ? 'font-arabic' : ''}>{t("contact.address")}</p>
              </div>
                <h5 className={isArabic ? 'font-arabic' : ''}>
                   {t("contact.address_value")}
                </h5>
            
            </div>

            <div>
             <div className={`flex items-start gap-4 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
             <FaPhoneAlt className="text-secondaryColor text-xl mt-1" />
             <p className={isArabic ? 'font-arabic' : ''}>{t("contact.phone")}</p>
             </div>
                <h5 className={isArabic ? 'font-arabic' : ''}>{t("contact.phone_value")}</h5>
            </div>

            <div>
              <div className={`flex items-start gap-4 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <IoMail className="text-secondaryColor text-xl mt-1" />
              <p className={isArabic ? 'font-arabic' : ''}>{t("contact.email")}</p>
              </div>
              <h5 className={isArabic ? 'font-arabic' : ''}>
                  {t("contact.email_value")}
                </h5>
             
            </div>
          </div>
        </div>

        {/* Right Form - will be left in Arabic */}
        <div className={`bg-sectionBg md:px-10 px-6 md:py-14 py-8 rounded-[20px] flex flex-col justify-center relative ${isRTL ? "text-right lg:order-1" : ""}`}>
          {/* Vertical text in center */}
          <p className={`hidden lg:block absolute ${isRTL ? "-right-1/3" : "-left-1/3"} top-1/2 -translate-y-1/2 rotate-[-90deg] text-primaryBlue/[0.05] text-[74px] font-primary font-bold select-none ${isArabic ? 'font-arabic' : ''}`}>
            {t("contact.contact_text")}
          </p>

          <h3 className={isArabic ? 'font-arabic' : ''}>
            {t("contact.get_in_touch")}
          </h3>
           
            {/*Contact Form */}
          <ContactFormTwo/>

        </div>
      </Container>
    </section>
  );
};

export default ContactStyle2;
