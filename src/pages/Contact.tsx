import { useTranslation } from "react-i18next";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactStyle2 from "../components/sections/contact/ContactStyle2";
import ContactMap from "../components/ui/contact/ContactMap";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title={t("contact.breadcrumb_title")}
        breadcrumb={[{ name: t("contact.breadcrumb_home"), href: "/" }, { name: t("contact.breadcrumb_contact") }]}
        isRTL={isRTL}
        isArabic={isArabic}
      />

      {/************* contact from start here **************/}
      <ContactStyle2 />

      {/************* Map start here **************/}
      <ContactMap />
    </div>
  );
};

export default ContactUs;
