import { useTranslation } from "react-i18next";
import Container from "../../common/Container";
import about1 from "../../../assets/about/about-4.png";
import about2 from "../../../assets/about/about-6.png";
import about3 from "../../../assets/about/about-7.png";

const AboutStyle5 = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div className="lg:mt-[20px] md:mt-[30px] mt-[0px]">
      <Container className="lg:flex justify-between items-start">
        {/* left part - Text */}
        <div className={`lg:w-[50%] md:w-[80%] md:mx-auto lg:mx-0 w-full ${isRTL ? "text-right" : ""}`}>
          <div className="flex flex-col gap-4">
            <p
              className={`${isArabic ? "font-arabic" : ""} ${
                isRTL ? "text-right" : ""
              } whitespace-pre-line`}
            >
              {t("aboutStyle5.description_1")}
            </p>
            <p
              className={`${isArabic ? "font-arabic" : ""} ${
                isRTL ? "text-right" : ""
              } whitespace-pre-line`}
            >
              {t("aboutStyle5.description_2")}
            </p>
            <p
              className={`${isArabic ? "font-arabic" : ""} ${
                isRTL ? "text-right" : ""
              } whitespace-pre-line`}
            >
              {t("aboutStyle5.description_3")}
            </p>
            <p
              className={`${isArabic ? "font-arabic" : ""} ${
                isRTL ? "text-right" : ""
              } whitespace-pre-line`}
            >
              {t("aboutStyle5.description_4")}
            </p>
          </div>

          <div className="flex flex-col gap-7 mt-[30px]">


          </div>
        </div>

        {/* right part - Images */}
        <div className={`lg:w-[47%] w-full mt-10 lg:mt-0 flex gap-5 justify-center lg:justify-start ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="flex flex-col gap-7"> 
            <img className="rounded-[10px] h-full object-cover" src={about1} alt="about image" />
          </div>

          <div className="flex flex-col gap-7">
            <img className="rounded-[10px]" src={about2} alt="about image" />
            <img className="rounded-[10px]" src={about3} alt="about image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutStyle5;