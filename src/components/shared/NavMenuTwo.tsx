
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

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

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Brands",
    href: "/brands",
    links: [
      { href: "https://www.georgfischer.com/en.html", label: "+GF+" },
      { href: "https://turanmak.com/?lang=en", label: "Turan Borfit" },
      { href: "https://www.polymelt.com/", label: "Polomelt" },
      { href: "https://www.poloplast.com/en-at.html", label: "Poloplast" },
      { href: "https://www.wisa-sanitair.com/en/", label: "Wisa" },
      { href: "https://www.alvit.com.tr/en", label: "Alvit" },
      { href: "https://pimtas.com/", label: "Pimtas" },
      { href: "https://nassarplastic.com/", label: "Nassar" },
      { href: "https://www.aquapa.com.tr/en/index", label: "Aquapa" },
      { href: "https://www.dabpumps.com/en", label: "DAB" },
      { href: "https://quarterbath.com/en", label: "Quarter Bath" },
      { href: "https://kas.com.tr/en/", label: "KAS" },
      { href: "https://www.facebook.com/guarriarmature/", label: "Guarri" },
      { href: "https://www.ascfixing.com/", label: "asclik clamp" },
      { href: "https://www.ostendorf-kunststoffe.com/en/", label: "Ostendorf" },
      { href: "https://www.facebook.com/Shield.EngG/", label: "Shield" },
      { href: "https://www.candanmakina.com/", label: "Candan" },
      { href: "https://www.baenninger.de/en.html", label: "Bänninger" },
      { href: "https://www.saudiceramics.com/en/", label: "Saudi Ceramics" },
      { href: "https://almunifpipes.com/", label: "Almunif Pipes" },
    ],
  },
  {
    title: "Projects",
    href: "/project",
  },

  // {
  //   title: "Services",
  //   links: [
  //     { href: "/service", label: "Services" },
  //     { href: "/service/tech-pro-services", label: "Services Details" },
  //   ],
  // },
  // {
  //   title: "Articles",
  //   href: "/blog",

  // },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const NavMenuTwo = ({ isSticky }: { isSticky: boolean }) => {
  const [hoveredSubmenu, setHoveredSubmenu] = useState<number | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav>
      <ul className={`flex items-center gap-[30px] ${!isSticky && !isHomePage ? "text-black" : "text-white"}`} role="menubar">
        {menuItems.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            className={`relative group py-[26px] cursor-pointer nav-menu-two ${!isSticky && !isHomePage ? "text-black" : ""}`}
            role="none"
          >
            {item.href && !item.links ? (
              <Link to={item.href} className="flex items-center gap-1" role="menuitem">
                {item.title}
              </Link>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  {item.href ? (
                    <Link to={item.href} className="flex items-center gap-1" role="menuitem">
                      {item.title}
                    </Link>
                  ) : (
                    <span
                      className="flex items-center gap-1 cursor-pointer"
                      aria-haspopup="true"
                      aria-expanded={false}
                      role="menuitem"
                    >
                      {item.title}
                    </span>
                  )}
                  {item.links && (
                    <IoIosArrowDown className="text-[16px] group-hover:-rotate-180 duration-300 ease-in-out" />
                  )}
                </div>

                {item.links && (
                  <ul
                    className="absolute left-0 transform top-[140px] opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:top-[75px] bg-white text-secondaryColor pb-5 shadow-lg rounded-md z-30 min-w-[220px] max-h-[400px] overflow-y-auto"
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
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="nav-sub-menu" role="menuitem">
                            {link.label}
                          </a>
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
