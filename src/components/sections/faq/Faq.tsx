
import { useTranslation } from "react-i18next";
import faq1 from "../../../assets/faq/faq-thumb1.png"
import { accordionData } from "../../../data/accordionData"
import Accordion from "../../common/AccordionItem"
import Container from "../../common/Container"
import SectionTitle from "../../common/SectionTitle"

const Faq = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div className="section-gap mb-20">
        <Container>
            {/* section title start here */}
        <SectionTitle
        label={t("faq.label")}
        title={t("faq.title")}
        align="center"
        isArabic={isArabic}
        />

         
        {/* Accordion part start    */}
        <div className="lg:flex items-center justify-between md:mt-[60px] mt-10">
         <div className="lg:w-[50%] w-full">
         <Accordion items={accordionData} />
         </div>

         {/* image part */}
         <div className={`lg:w-[43%] w-full mt-10 lg:mt-0 relative ${isRTL ? "lg:order-first" : ""}`}>
           <img className="w-full h-auto rounded-[10px]" src={faq1} alt="faq-thumb1" />
           <div className="bg-[#E1F0FD] rounded-[20px] shadow-faq p-5 flex items-center gap-5 absolute bottom-5 right-5">
            <div>
              <img src='/icons/business/Search results for Winner.svg' alt="search icon" />
            </div>

             <div className={isRTL ? "text-right" : ""}>
                <h3 className={isArabic ? 'font-arabic' : ''}>2k+</h3>
                 <p className={isArabic ? 'font-arabic' : ''}>{t("faq.project_completed")}</p>
             </div>
             
           </div>
         </div>
        </div>
        </Container>
    </div>
  )
}

export default Faq