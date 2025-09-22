
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MenuLink {
  href: string;
  label: string;
  submenu?: MenuLink[];
}

interface MenuItem {
  title: string;
  href?: string;
  links?: MenuLink[];
}

const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  
  return [
    {
      title: t("navigation.home"),
      href: "/",
    },
    {
      title: t("navigation.about"),
      href: "/about",
    },
    {
      title: t("navigation.brands"),
      links: [
        // { href: "/brand/gf-plus", label: "+GF+" },
        // { href: "/brand/turan-borfit", label: "Turan Borfit" },
        // { href: "/brand/polomelt", label: "Polomelt" },
        // { href: "/brand/poloplast", label: "Poloplast" },
        // { href: "/brand/wisa", label: "Wisa" },
        // { href: "/brand/alvit", label: "Alvit" },
        // { href: "/brand/pimtas", label: "Pimtas" },
        // { href: "/brand/nassar", label: "Nassar" },
        // { href: "/brand/aqua-pa", label: "Aqua PA" },
        // { href: "/brand/dab", label: "DAB" },
        // { href: "/brand/quarter-bath", label: "Quarter Bath" },
        // { href: "/brand/kas", label: "KAS" },
        // { href: "/brand/guarri", label: "Guarri" },
        // { href: "/brand/asclik-clamp", label: "asclik clamp" },
        // { href: "/brand/ostendorf", label: "Ostendorf" },
        // { href: "/brand/shield", label: "Shield" },
        // { href: "/brand/candan", label: "Candan" },
        { href: "/brand/banninger", label: "Bänninger" },
        // { href: "/brand/saudi-ceramics", label: "Saudi Ceramics" },
        // { href: "/brand/almunif-pipes", label: "Almunif Pipes" },
      ],
    },
    {
      title: t("navigation.projects"),
      href: "/project",
    },
    {
      title: t("navigation.contact_us"),
      href: "/contact",
    },
  ];
};

const NavMenuTwo = ({ isSticky }: { isSticky: boolean }) => {
  const [hoveredSubmenu, setHoveredSubmenu] = useState<number | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { i18n } = useTranslation();
  const menuItems = useMenuItems();
  
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  return (
    <nav>
      <ul className={`flex items-center gap-[30px] ${isRTL ? "flex-row-reverse" : ""} ${!isSticky && !isHomePage ? "text-black" : "text-white"}`} role="menubar">
        {menuItems.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            className={`relative group py-[26px] cursor-pointer nav-menu-two ${!isSticky && !isHomePage ? "text-black" : ""}`}
            role="none"
          >
            {item.href && !item.links ? (
              <Link to={item.href} className={`flex items-center gap-1 ${isArabic ? "font-arabic" : ""}`} role="menuitem">
                {item.title}
              </Link>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  {item.href ? (
                    <Link to={item.href} className={`flex items-center gap-1 ${isArabic ? "font-arabic" : ""}`} role="menuitem">
                      {item.title}
                    </Link>
                  ) : (
                    <span
                      className={`flex items-center gap-1 cursor-pointer ${isArabic ? "font-arabic" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={false}
                      role="menuitem"
                    >
                      {item.title}
                    </span>
                  )}
                  {item.links && (
                    <IoIosArrowDown className={`text-[16px] group-hover:-rotate-180 duration-300 ease-in-out ${isRTL ? "rotate-180" : ""}`} />
                  )}
                </div>

                {item.links && (
                  <ul
                    className={`absolute transform top-[140px] opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:top-[75px] bg-white text-secondaryColor pb-5 shadow-lg rounded-md z-30 min-w-[220px] max-h-[400px] overflow-y-auto ${isRTL ? "right-0" : "left-0"}`}
                    role="menu"
                  >
                    {item.links.map((link, j) => (
                      <li
                        key={`${link.label}-${j}`}
                        className="relative group"
                        onMouseEnter={() => link.submenu && setHoveredSubmenu(j)}
                        onMouseLeave={() => link.submenu && setHoveredSubmenu(null)}
                        role="none"
                      >
                        {link.submenu ? (
                          <>
                            <span
                              className="nav-sub-menu peer flex items-center gap-1 justify-between cursor-pointer"
                              role="menuitem"
                              aria-haspopup="true"
                              aria-expanded={hoveredSubmenu === j}
                            >
                              {link.label}
                              <IoIosArrowForward className="text-[16px] peer-hover:-rotate-180 duration-100 ease-in-out w-10" />
                            </span>
                            <ul
                              className={`absolute right-[250px] w-full bg-white pb-5 shadow-lg rounded-md transition-all duration-300 ease-in-out transform min-w-[220px] ${
                                hoveredSubmenu === j
                                  ? "opacity-100 translate-y-0 top-0"
                                  : "opacity-0 -translate-y-2 top-10 pointer-events-none"
                              }`}
                              role="menu"
                            >
                              {link.submenu.map((sub, k) => (
                                <li key={`${sub.label}-${k}`} role="none">
                                  <Link to={sub.href} className="nav-sub-menu" role="menuitem">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link to={link.href} className={`nav-sub-menu ${isArabic ? "font-arabic" : ""}`} role="menuitem">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenuTwo;
