import { useTranslation } from "react-i18next";
import Container from "../../common/Container"
import SectionTitle from "../../common/SectionTitle"
import Button from "../../common/Button"
import about1 from "../../../assets/about/about-1.png"
import about2 from "../../../assets/about/about-2.png"
import about3 from "../../../assets/about/about-3.png"
import icon from "../../../assets/about/icon.svg"


const About = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div className="section-gap">
        <Container className="lg:flex justify-between">
          {/* left part */}
          <div className={`lg:w-[47%] md:w-[80%] md:mx-auto lg:mx-0 w-full flex gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="flex flex-col gap-7">
            <img className="rounded-[10px]" src={about1} alt="about image" />
            <div className="bg-[#E5E8F2] rounded-[10px] md:p-7 p-3 shadow-about flex items-center gap-5">
            <div>
              <img src={icon} alt="serach icon" />
            </div>

             <div className={isRTL ? "text-right" : ""}>
                <h3 className={isArabic ? 'font-arabic' : ''}>10+</h3>
                 <p className={isArabic ? 'font-arabic' : ''}>{t("about.honourable_awards")}</p>
             </div>
             </div>
            </div>

             <div className="flex flex-col gap-7">
             <img className="rounded-[10px]" src={about2} alt="about image" />
            <img className="rounded-[10px]" src={about3} alt="about image" />
             </div>
          </div>

          {/* right part */}
          <div className={`lg:w-[47%] md:w-[80%] md:mx-auto lg:mx-0 w-full mt-10 lg:mt-0 ${isRTL ? "text-right" : ""}`}>
<SectionTitle
  label={t("about.label")}
  title={t("about.title")}
  description={
    <>
      <p className={`${isArabic ? 'font-arabic' : ''} ${isRTL ? "text-right" : ""}`}>{t("about.description_1")}</p><br />
      <p className={`${isArabic ? 'font-arabic' : ''} ${isRTL ? "text-right" : ""}`}>{t("about.description_2")}</p><br />
    </>
  }
  align={isRTL ? "right" : "left"}
  isArabic={isArabic}
/>


     <div className="flex flex-col gap-7">
      {/* Box with texts */}

      {/* More About Us section */}
      <div className={`flex ${isRTL ? "justify-end" : "justify-start"}`}>
        <Button
          hoverBgColorClass="bg-primaryBlue"
          className={`bg-transparent border border-primaryBlue text-primaryBlue hover:border-primaryBlue hover:text-white duration-300 ease-in-out ${isArabic ? 'font-arabic' : ''}`}
          onClick={() => {
            window.location.href = "/about";
          }}
        >
          {t("about.more_about_us")}
        </Button>
      </div>
    </div>

          </div>
        </Container>
    </div>
  )
}

export default About