import { useTranslation } from "react-i18next";
import { services } from "../../../data/servicesData"
import Container from "../../common/Container"
import ServiceCard from "../../ui/cards/ServiceCard"
import SectionTitle from "../../common/SectionTitle"

const ServiceStyle2 = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div className="section-gap">
        <SectionTitle
          label={t("services.label")}
          title={t("services.title")}
          align="center"
          isArabic={isArabic}
        />
        <Container className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-7 gap-6 mt-12 ${isRTL ? "text-right" : ""}`}>
           {/* service card */}
           {services.slice(0, 6).map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
       </Container>
    </div>
  )
}

export default ServiceStyle2