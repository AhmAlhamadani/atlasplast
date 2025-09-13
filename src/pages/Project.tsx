import { useTranslation } from "react-i18next";
import Breadcrumb from "../components/common/Breadcrumb";
import ProjectStyle3 from "../components/sections/project/ProjectStyle3";

const Project = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title={t("projects.breadcrumb_title")}
        breadcrumb={[{ name: t("projects.breadcrumb_home"), href: "/" }, { name: t("projects.breadcrumb_projects") }]}
        isRTL={isRTL}
        isArabic={isArabic}
      />

      {/************* project section start here **************/}
       <ProjectStyle3/>

    </div>
  );
};

export default Project;
