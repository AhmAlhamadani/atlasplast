import { useTranslation } from "react-i18next";
import Breadcrumb from "../components/common/Breadcrumb";
import Faq from "../components/sections/faq/Faq";
import AboutSection from "../components/sections/about/AboutStyle5";
import AboutStyle4 from "../components/sections/about/AboutStyle4";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title={t("about.breadcrumb_title")}
        breadcrumb={[{ name: t("about.breadcrumb_home"), href: "/" }, { name: t("about.breadcrumb_about") }]}
        isRTL={isRTL}
        isArabic={isArabic}
      />
      

      {/************* about us section start here **************/}
      
      <AboutStyle4 />
      <AboutSection />



      {/************* faq section start here **************/}
      <Faq />

      {/************* contact section start here **************/}
      {/* <ContactStyle2 /> */}




      {/************* client testimonial section start here **************/}
      {/* <ClientTestimonial /> */}
    </div>
  );
};

export default About;
