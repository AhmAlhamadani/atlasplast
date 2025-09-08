
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    links: [
      { href: "/", label: "Home One" },
      { href: "/home-two", label: "Home Two" },
    ],
  },

  {
    title: "Pages",
    links: [
      { href: "/about", label: "About" },
     
      {
        label: "Project",
        submenu: [
          { href: "/project", label: "Project" },
          { href: "/project/leading-the-way-in-innovation", label: "Project Details" },
          
        ],
      },
      { href: "/terms-condition", label: "Trems & Condition" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/contact", label: "Contact Us" },
      { href: "*", label: "404" },
      
    ],
  },

  {
    title: "Services",
    links: [
      { href: "/service", label: "Services" },
      { href: "/service/tech-pro-services", label: "Services Details" },
    ],
  },
 

  // {
  //   title: "Blog",
  //   links: [
  //     { href: "/blog", label: "Blog classic" },
  //     { href: "/blog/your-tomorrow-enhanced-today", label: "Blog Details" },
  //   ],
  // },

  

  {
    title: "Contact Us",
    href: "/contact",
  },
];

const NavMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <nav>
      <ul className="flex items-center gap-[30px]">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="relative group py-[30px] cursor-pointer nav-menu"
          >
            {item.href ? (
              <Link to={item.href} className="flex items-center gap-1">
                {item.title}
              </Link>
            ) : (
              <>
                <a className="flex items-center gap-1">
                  {item.title}
                  <IoIosArrowDown className="text-[16px] group-hover:-rotate-180 duration-300 ease-in-out" />
                </a>

                <ul className="absolute left-0 transform top-[140px] opacity-0 invisible transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:top-[75px] bg-white text-secondaryColor pb-5 shadow-lg rounded-md z-30 min-w-[220px]">
                  {item?.links?.map((link, j) => (
                    <li
                      key={j}
                      className={`relative group`}
                      onMouseEnter={link.submenu ? handleMouseEnter : undefined}
                      onMouseLeave={link.submenu ? handleMouseLeave : undefined}
                    >
                      {link.submenu ? (
                        <>
                          <a className="nav-sub-menu peer flex items-center gap-1 justify-between">
                            {link.label}
                            <IoIosArrowForward className="text-[16px] peer-hover:-rotate-180 duration-100 ease-in-out w-10" />
                          </a>
                          <ul
                            className={`absolute right-[250px] w-full bg-white pb-5 shadow-lg rounded-md transition-all duration-300 ease-in-out transform min-w-[220px] ${
                              isVisible
                                ? "opacity-100 translate-y-0 top-0"
                                : "opacity-0 -translate-y-2 top-10"
                            }`}
                          >
                            {link.submenu.map((sub, k) => (
                              <li key={k}>
                                <Link to={sub.href} className="nav-sub-menu">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link to={link.href} className="nav-sub-menu">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

