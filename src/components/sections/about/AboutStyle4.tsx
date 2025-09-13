import { useTranslation } from "react-i18next";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import about1 from "../../../assets/about/about-5.png";

const AboutStyle4 = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div className="section-gap">
      <Container className="lg:flex justify-between lg:items-start">
        
        {/* left part */}
        <div
          className={`lg:w-[40%] md:w-[80%] md:mx-auto lg:mx-0 w-full ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col gap-5">
            <img
              className={`rounded-[10px] w-full object-cover ${
                isArabic ? "max-h-[250px]" : "max-h-[450px]"
              }`}
              src={about1}
              alt="about image"
            />
          </div>
        </div>

        {/* right part */}
        <div
          className={`lg:w-[80%] md:w-[80%] md:mx-auto lg:mx-0 w-full mt-10 lg:mt-0 ${
            isRTL ? "text-right" : ""
          }`}
        >
          <SectionTitle className="whitespace-pre-line lg:ml-5"
            label={t("aboutStyle4.label")}
            title={t("")}
            description={
               <>
                 <p
                   className={`${isArabic ? "font-arabic" : ""} ${
                     isRTL ? "text-right" : ""
                   } whitespace-pre-line`}
                 >
                   {t("aboutStyle4.description_1")}
                 </p>
                 <p
                   className={`${isArabic ? "font-arabic" : ""} ${
                     isRTL ? "text-right" : ""
                   } mt-4 whitespace-pre-line`}
                 >
                   {t("aboutStyle4.description_2")}
                 </p>
                 <p
                   className={`${isArabic ? "font-arabic" : ""} ${
                     isRTL ? "text-right" : ""
                   } mt-4 whitespace-pre-line`}
                 >
                   {t("aboutStyle4.description_3")}
                 </p>
               </>
             }
            align={isRTL ? "right" : "left"}
            isArabic={isArabic}
          />

          <div className="flex flex-col gap-7 mt-[30px]">
            {/* Box with texts */}

            {/* Help section */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutStyle4;
