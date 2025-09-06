import { useCallback, useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../common/Container";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./MobileNavMenus";
import logo from "../../assets/logo/logo-white.svg";
import logo2 from "../../assets/logo/logo.svg";
import { IoClose } from "react-icons/io5";
import { cn } from "../../lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";


const MobileSidebar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home-two";

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [animateOverlay, setAnimateOverlay] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openSidebar = () => {
    setMenuOpen(true);
    setTimeout(() => {
      setAnimateOverlay(true);
    }, 20);
    setTimeout(() => {
      setShowSidebar(true);
    }, 350);
  };


  const closeSidebar = useCallback(() => {
    setShowSidebar(false);
    setTimeout(() => {
      setAnimateOverlay(false);
    }, 100);
    setTimeout(() => {
      setMenuOpen(false);
    }, 400);
  }, []);
  


  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      closeSidebar(); // <-- ESLint warns about this
    }
  }, [closeSidebar]);
  
  
  useEffect(() => {
    if (!menuOpen) return;
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, handleClickOutside]);

  return (
    <div className="w-full relative">
      <Container
        className={cn(
          "h-[60px] md:h-[80px] flex items-center justify-between px-2 absolute top-5 left-0 right-0 w-[95%] mx-auto z-50 rounded-[60px] bg-white/[.11] border border-white"
        )}
      >
        {/* logo */}
        <Link to="/" className="site-branding ml-5">
          <img src={isHomePage ? logo : logo2} alt="logo" className="object-contain h-15" />
        </Link>

        {/* menu icon */}
        <div className="w-25 flex justify-between items-center mr-5">
        <LanguageSwitcher langOpen={langOpen} setLangOpen={setLangOpen} width="w-10" height="h-10" />
        <div onClick={openSidebar} className="cursor-pointer">
          <HiOutlineMenuAlt2 className="text-white text-[32px]" />
        </div>
        </div>
      </Container>

      {/* Sliding overlay and sidebar */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-500 ${
            animateOverlay ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Full-screen overlay that slides in */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500"></div>

          {/* Sidebar */}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 w-[85%] h-full bg-[#0D121E] shadow-lg z-50 transition-transform duration-500 transform ${
              showSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="p-4 relative">
              <Link to="/" onClick={closeSidebar}>
                <img src={logo} alt="logo" className="object-contain" />
              </Link>

              <button
                className="w-10 h-10 rounded-full bg-primaryBlue text-white flex justify-center items-center absolute top-5 -right-4"
                onClick={closeSidebar}
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Menu */}
            <div className="px-4 mt-[40px] overflow-y-auto h-[calc(100%-150px)]">
              <nav>
                <ul className="flex flex-col gap-5">
                  {menuItems.map((item, index) => (
                    <li key={item.title}>
                      {item.links ? (
                        <>
                          <div className="w-full flex justify-between items-center text-white font-primary text-[18px] font-medium border-b-[.7px] border-primaryBorder/30 pb-5">
                            <Link
                              to={item.href}
                              className="flex items-center gap-1"
                              onClick={closeSidebar}
                            >
                              {item.title}
                            </Link>
                            <button
                              onClick={() => toggleIndex(index)}
                              className="bg-primaryBlue w-8 h-8 rounded-sm flex justify-center items-center"
                            >
                              <IoIosArrowForward
                                className={`text-[18px] transition-transform duration-300 ${
                                  activeIndex === index ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                          </div>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              activeIndex === index
                                ? "max-h-[800px]"
                                : "max-h-0"
                            }`}
                          >
                            <ul className="pl-4 py-2 flex flex-col gap-3 mt-2 font-primary text-white text-[16px] max-h-[800px] overflow-y-auto">
                              {item.links.map((link, i) => (
                                <li key={i}>
                                  <Link
                                    to={link.href}
                                    className="text-[16px]"
                                    onClick={closeSidebar}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="block text-white font-primary text-[18px] font-medium border-b-[.7px] border-primaryBorder/30 pb-5"
                          onClick={closeSidebar}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
