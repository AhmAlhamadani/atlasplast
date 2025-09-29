
import { useTranslation } from "react-i18next";
import { brandsData } from "../../data/brandsData";

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
  
  // Generate brand links from brandsData
  const brandLinks = brandsData.map(brand => ({
    href: `/brand/${brand.slug}`,
    label: brand.name
  }));
  
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
      links: brandLinks,
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
  