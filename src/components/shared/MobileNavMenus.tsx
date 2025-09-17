
import { useTranslation } from "react-i18next";

interface MenuLink {
  href: string;
  label: string;
}

interface MenuItemWithHref {
  title: string;
  href: string;
  links?: never;
}

interface MenuItemWithLinks {
  title: string;
  href?: never;
  links: MenuLink[];
}

type MenuItem = MenuItemWithHref | MenuItemWithLinks;

export const useMenuItems = (): MenuItem[] => {
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
        { href: "/brand/gf-plus", label: "+GF+" },
        { href: "/brand/turan-borfit", label: "Turan Borfit" },
        { href: "/brand/polomelt", label: "Polomelt" },
        { href: "/brand/poloplast", label: "Poloplast" },
        { href: "/brand/wisa", label: "Wisa" },
        { href: "/brand/alvit", label: "Alvit" },
        { href: "/brand/pimtas", label: "Pimtas" },
        { href: "/brand/nassar", label: "Nassar" },
        { href: "/brand/aqua-pa", label: "Aqua PA" },
        { href: "/brand/dab", label: "DAB" },
        { href: "/brand/quarter-bath", label: "Quarter Bath" },
        { href: "/brand/kas", label: "KAS" },
        { href: "/brand/guarri", label: "Guarri" },
        { href: "/brand/asclik-clamp", label: "asclik clamp" },
        { href: "/brand/ostendorf", label: "Ostendorf" },
        { href: "/brand/shield", label: "Shield" },
        { href: "/brand/candan", label: "Candan" },
        { href: "/brand/banninger", label: "Bänninger" },
        { href: "/brand/saudi-ceramics", label: "Saudi Ceramics" },
        { href: "/brand/almunif-pipes", label: "Almunif Pipes" },
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
  