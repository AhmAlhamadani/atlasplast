import { useTranslation } from "react-i18next";
import Breadcrumb from "../components/common/Breadcrumb";
import ProjectDetailsInfo from "../components/sections/projectDetails/ProjectDetailsInfo";

const ProjectDetails = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = isRTL;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title={t("project_details.breadcrumb_title")}
        breadcrumb={[{ name: t("project_details.breadcrumb_home"), href: "/" }, { name: t("project_details.breadcrumb_project_details") }]}
        isRTL={isRTL}
        isArabic={isArabic}
      />

      {/************* project details section start here **************/}
      <ProjectDetailsInfo/>
    </div>
  );
};

export default ProjectDetails;
