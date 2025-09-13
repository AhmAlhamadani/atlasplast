
import { useTranslation } from "react-i18next";

export const useMenuItems = () => {
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
      href: "/brands",
      links: [
        { href: "", label: "+GF+" },
        { href: "", label: "Turan Borfit" },
        { href: "", label: "Polomelt" },
        { href: "", label: "Poloplast" },
        { href: "", label: "Wisa" },
        { href: "", label: "Alvit" },
        { href: "", label: "Pimtas" },
        { href: "", label: "Nassar" },
        { href: "", label: "Aqua PA" },
        { href: "", label: "DAB" },
        { href: "", label: "Quarter Bath" },
        { href: "", label: "KAS" },
        { href: "", label: "Guarri" },
        { href: "", label: "asclik clamp" },
        { href: "", label: "Ostendorf" },
        { href: "", label: "Shield" },
        { href: "", label: "Candan" },
        { href: "", label: "Bänninger" },
        { href: "", label: "Saudi Ceramics" },
        { href: "", label: "Almunif Pipes" },
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
  