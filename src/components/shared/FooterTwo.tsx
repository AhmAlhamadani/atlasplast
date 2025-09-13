
import Container from "../common/Container"
import logo from "../../assets/logo/logo-white.svg";
import { FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt  } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import Button from "../common/Button"
import { cn } from "../../lib/utils"
import { useTranslation } from "react-i18next"


const FooterTwo = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isContactPage = location.pathname === "/contact" || location.pathname === "/about";
    
    // Check if current language is RTL
    const isRTL = i18n.language === "ar" || i18n.language === "ku";
    const isArabic = i18n.language === "ar" || i18n.language === "ku";
  
  return (
    <div className={cn("bg-secondaryColor", { "section-gap": !isContactPage })}>
      <Container className="md:pt-20 pt-15">
         {/* map here  */}
         <div className={`bg-[#E5E8F2] rounded-lg xl:px-20 lg:px-10 px-6 md:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
      {/* Left Title */}
      <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'} xl:max-w-[440px] max-w-[300px]`}>
        <h2 className={`text-2xl ${isArabic ? 'font-arabic' : 'font-primary'}`}>
          {t("footer.schedule_call")}
        </h2>
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-16 w-px bg-[#36180A]" />

      {/* Phone Number */}
      <div className={`flex items-center gap-4 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="bg-[#100701]/10 rounded-full w-16 h-16 flex justify-center items-center">
          <FaPhoneAlt className="text-secondaryColor text-lg" />
        </div>
        <div>
          <p className={isArabic ? 'font-arabic' : 'font-secondary'}>{t("footer.phone_number")}</p>
          <h5 className={isArabic ? 'font-arabic' : 'font-primary'}>(964) 7877-661-127</h5>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-16 w-px bg-[#36180A]" />

      {/* Contact Button */}
      <div>
        <Link to={'/contact'}><Button hoverBgColorClass="bg-primaryBlue" className={`bg-secondaryColor ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.contact_us")}</Button></Link>
      </div>
    
      
      </div>

      {/* main footer start here */}
      <div className={`mt-15 flex flex-wrap justify-between space-y-10 md:space-y-0 mb-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {/* item 1 start */}
        <div className="max-w-[480px]">
         {/* logo */}
         <Link to={'/'}>
         <img className=" object-contain" src={logo} alt="atlas plast logo" />
         </Link>

         <ul className={`text-[14px] text-white font-medium uppercase leading-7 flex flex-wrap mt-7 ${isRTL ? 'gap-6' : 'space-x-6'} ${isArabic ? 'font-arabic' : 'font-primary'}`}>
            {isRTL ? (
              // Arabic order (reversed)
              <>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/contact'}>{t("navigation.contact_us")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/blog'}>{t("footer.articles")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/project'}>{t("navigation.projects")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/brands'}>{t("navigation.brands")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/about'}>{t("navigation.about")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/'}>{t("navigation.home")}</Link></li>
              </>
            ) : (
              // English order (original)
              <>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/'}>{t("navigation.home")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/about'}>{t("navigation.about")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/brands'}>{t("navigation.brands")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/project'}>{t("navigation.projects")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/blog'}>{t("footer.articles")}</Link></li>
                <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/contact'}>{t("navigation.contact_us")}</Link></li>
              </>
            )}
         </ul>

         {/* social media icon here */}
          <div className="mt-5 flex items-center gap-3">
          <a
        href="https://www.facebook.com/AtlasPlast.llc/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaFacebookF size={18} />
      </a>
          <a
        href="https://www.linkedin.com/company/atlas-plast/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaLinkedin size={18} />
      </a>
          </div>
        </div>

            {/* item 2 here */}
         <div className="max-w-[700px]">
           <h4 className={`text-white ${isArabic ? 'font-arabic' : 'font-primary'}`}>{t("footer.contact")}</h4>
           <div className={`mt-7 flex flex-col lg:flex-row gap-7 lg:gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

           <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaMapMarkerAlt className="text-white text-lg" />
        </div>
        <div>
          <p className={`text-white mb-2 ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.address")}</p>
          <h5 className={`text-white ${isArabic ? 'font-arabic' : 'font-primary'}`}>Iraq, Baghdad, Kampsarah, 8F24+GFH</h5>
        </div>
      </div>

      {/* Phone */}
      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaPhoneAlt className="text-white text-lg" />
        </div>
        <div>
          <p className={`text-white mb-2 ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.phone_number")}</p>
          <h5 className={`text-white ${isArabic ? 'font-arabic' : 'font-primary'}`}>(+964)7877661127</h5>
        </div>
      </div>

      {/* Email */}
      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaEnvelope className="text-white text-lg" />
        </div>
        <div>
          <p className={`text-white mb-2 ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.email")}</p>
          <h5 className={`text-white ${isArabic ? 'font-arabic' : 'font-primary'}`}>info@atlasplast.com</h5>
        </div>
      </div>
           </div>
           
            
         </div>

      </div>

      <hr className="text-white/20"/>
       {/* footer bottom */}
       <div className={`py-[30px] md:flex justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
         <div>
          <p className={`text-white ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.copyright")}</p>
         </div>
          <div className="mt-2 md:mt-0">
            <ul className={`flex flex-wrap items-center ${isRTL ? 'gap-7' : 'space-x-7'}`}>
            <li>
                <Link to={'/terms-condition'} className={`text-white text-[16px] font-normal hover:text-primaryBlue duration-300 ease-in-out ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.terms_condition")}</Link>
              </li>
              <li>
                <Link to={'/privacy-policy'} className={`text-white text-[16px] font-normal hover:text-primaryBlue duration-300 ease-in-out ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.privacy_policy")}</Link>
              </li>
              <li>
                <Link to={'/contact'} className={`text-white text-[16px] font-normal hover:text-primaryBlue duration-300 ease-in-out ${isArabic ? 'font-arabic' : 'font-secondary'}`}>{t("footer.contact_us")}</Link>
              </li>
            </ul>
          </div>
       </div>




      </Container>
    </div>
  )
}

export default FooterTwo