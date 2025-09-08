import { useTranslation } from "react-i18next";
import banner from "../../../assets/hero/banner-1.jpg";
import dot from "../../../assets/hero/effect-home-2.svg";
import author1 from "../../../assets/hero/author-1.png";
import author2 from "../../../assets/hero/author-2.png";
import author3 from "../../../assets/hero/author-3.png";
import Container from "../../common/Container";
import Button from "../../common/Button";

const HeroStyle2 = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div
      className="bg-no-repeat bg-cover relative"
      style={{ 
        backgroundImage: `url(${banner})`, 
        backgroundPosition: '0% 50%',
        backgroundSize: 'cover'
      }}
    >
      <Container className="lg:py-[80px] md:py-20 py-19">
        {/* Brand */}
        <div
          className={`flex gap-2 items-center mt-[100px] ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <span
            className={`text-white text-[18px] font-bold font-primary tracking-[2.56px] uppercase ${
              isRTL ? "text-right" : ""
            } ${isArabic ? 'font-arabic' : ''}`}
          >
            {t("hero.brand")}
          </span>
          <hr className="w-16 h-px text-white" />
        </div>

        {/* Heading and Description */}
        <div
          className={`mt-2 ${
            isRTL ? "text-right w-full md:max-w-full" : "text-left max-w-[720px]"
          }`}
        >
          <h1 className={`home-heading whitespace-pre-line pt-2 lg:text-[96px] md:text-[80px] text-[40px] font-bold text-white lg:leading-[96px] pb-10 md:leading-[85px] leading-11 tracking-[-1.92px] ${isArabic ? 'font-arabic' : ''}`}>
            {t("hero.heading")}
          </h1>

          <p 
            className={`mt-7 text-white text-[20px] font-normal leading-7 ${isArabic ? 'font-arabic' : ''}`}
            dangerouslySetInnerHTML={{ __html: t("hero.description").replace(/\n/g, '<br />') }}
          />

          <div className={`mt-12 ${isRTL ? "flex justify-end" : ""}`}>
            <Button
              hoverBgColorClass="bg-primaryBlue"
              className={`bg-transparent border border-white text-white hover:border-primaryBlue duration-300 ease-in-out ${isArabic ? 'font-arabic' : ''}`}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              {t("hero.button")}
            </Button>
          </div>
        </div>

        {/* Trusted Partners */}
        <div
          className={`flex flex-col gap-2 p-5 bg-[#E5E8F2]/[0.18] rounded-[20px] max-w-fit ${
            isRTL
              ? "ml-0 mr-auto xl:mt-[-120px] md:mt-[-90px]"
              : "ml-auto xl:mt-[-120px] md:mt-[-90px]"
          } mt-[30px] z-10 relative`}
        >
          {/* Avatar Group */}
          <div className={`flex -space-x-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={author1}
              alt="Avatar 1"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={author2}
              alt="Avatar 2"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={author3}
              alt="Avatar 3"
            />
          </div>

          {/* Text Content with line breaks */}
          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <h3 className={`text-white font-semibold text-[39px] font-secondary ${isArabic ? 'font-arabic' : ''}`}>
              {t("hero.trusted_number")}
            </h3>
            <p className={`text-white text-[12px] leading-5 font-semibold whitespace-pre-line ${isArabic ? 'font-arabic' : ''}`}>
              {t("hero.trusted_text")}
            </p>
          </div>
        </div>

        {/* Decorative Dot */}
        <div className="absolute bottom-0 right-0 z-0">
          <img className="w-full h-[250px] object-contain" src={dot} alt="dot" />
        </div>
      </Container>
    </div>
  );
};

export default HeroStyle2;
