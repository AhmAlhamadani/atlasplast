import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoWhite from "../../assets/logo/logo-white.svg";
import logo from "../../assets/logo/logo.svg";
import Button from "../common/Button";
import NavMenuTwo from "./NavMenuTwo";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "../common/Sidebar";
import LanguageSwitcher from "./LanguageSwitcher";


const NavbarTwo = () => {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Check if current language is Arabic
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  // Close sidebar
  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click to close sidebar & lang dropdown
  

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 lg:block hidden ${
          isSticky ? "bg-secondaryColor animate-slideDown shadow" : ""
        }`}
      >
        <div
          className={`w-[95%] mx-auto relative rounded-[20px] ${
            isSticky ? "" : "absolute top-5 bg-transparent"
          }`}
        >
          <header className="w-full">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="site-branding">
                <img src={isSticky ? logoWhite : logo} alt="logo" className="w-full h-auto object-cover" />
              </Link>

              {/* Navigation Menu */}
              <div className={`${isSticky ? "" : "bg-white/[.11] px-[40px] rounded-[80px]"}`}>
                <NavMenuTwo isSticky={isSticky} />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-7 ">
                <Button onClick={() => setSidebarOpen(true)} className={`ml-5 ${isArabic ? 'font-arabic' : ''}`}>
                  {t("navigation.info")}
                </Button>

                {/* Desktop Language Dropdown */}
                <LanguageSwitcher langOpen={langOpen} setLangOpen={setLangOpen} width="w-15" height="h-15" />
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden block">
        <MobileSidebar />
      </div>

      {/* Sidebar Drawer */}
      <div ref={menuRef}>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </div>
    </div>
  );
};

export default NavbarTwo;
