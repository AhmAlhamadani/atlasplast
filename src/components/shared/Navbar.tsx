
import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../common/Container";
import NavMenu from "./NavMenu";
import logo from "../../assets/logo/logo.svg";
import Button from "../common/Button";
import { CgMenuRight } from "react-icons/cg";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "../common/Sidebar";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 lg:block hidden ${
          isSticky ? "bg-white animate-slideDown shadow-navbar-shadow" : ""
        }`}
      >
        <Container
          className={`mx-auto relative w-full ${
            isHome ? "rounded-full" : "rounded-[20px]"
          } ${
            isSticky
              ? ""
              : "absolute top-5 bg-white shadow-navbar-shadow left-1/2 -translate-x-1/2 px-4 md:px-6 xl:px-7 2xl:px-7"
          }`}
        >
          <header className="w-full">
            <div className="flex justify-between items-center">
              {/* Branding */}
              <Link to="/" className="site-branding">
                <img
                  src={logo}
                  alt="TailorFit Logo"
                  className="w-full h-auto object-cover"
                />
              </Link>

              {/* Menu */}
              <NavMenu />

              {/* Buttons */}
              <div className="flex items-center gap-7">
                {isHome ? (
                  <Button className="bg-primaryBlue text-white text-[18px] font-medium font-primary hover:bg-secondaryColor duration-300 ease-in-out">
                    Get Started
                  </Button>
                ) : (
                  <>
                    <Button
                      hoverBgColorClass="bg-primaryBlue"
                      className="bg-transparent border border-[#E5E8F2] text-[18px] font-medium font-primary text-primary hover:text-white duration-300 ease-in-out"
                    >
                      Get In Touch
                    </Button>
                    <button
                      onClick={openSidebar}
                      className="w-12 h-12 rounded-full bg-primaryBlue flex justify-center items-center text-white hover:bg-secondaryColor duration-300 ease-in-out cursor-pointer"
                    >
                      <CgMenuRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </header>
        </Container>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden block">
        <MobileSidebar />
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Navbar;
