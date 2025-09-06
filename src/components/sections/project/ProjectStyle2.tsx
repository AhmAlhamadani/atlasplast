import { useTranslation } from "react-i18next";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projectsData";

const ProjectStyle2 = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div>
      {/************* project section start here **************/}
      <section className="section-gap">
        <Container>
          {/* section title */}
          <SectionTitle
            label={t("projects.label")}
            title={t("projects.title")}
            align="center"
            isArabic={isArabic}
          />
         

          <div className={`flex flex-col md:flex-row gap-[30px] md:mt-15 mt-12 ${isRTL ? "text-right" : ""}`}>
      {/* Left Column (projects 1-3) */}
      <div className="flex flex-col gap-[30px]">
        {projects.slice(0, 2).map((project) => (
          <div key={project.id} className="relative group overflow-hidden">
            <img
              className="w-full h-auto rounded-[10px]"
              src={project.image}
              alt={project.title}
            />

            <div
              className="absolute inset-0 bg-black/30 rounded-[10px]
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-all duration-500 ease-in-out"
            ></div>

            <Link
              to={`/project/${project.slug}`}
              className={`absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 
                 lg:opacity-0 opacity-100 scale-75 
                 group-hover:opacity-100 group-hover:scale-100
                 w-[100px] h-[100px] bg-[#E5E8F2] 
                 text-secondaryColor font-semibold 
                 rounded-full flex items-center justify-center text-sm 
                 transition-all duration-500 ease-in-out z-10 ${isArabic ? 'font-arabic' : ''}`}
            >
              {t("projects.more")}
            </Link>
          </div>
        ))}
      </div>

      {/* Right Column (projects 4-6) */}
      <div className="flex flex-col gap-[30px]">
        {projects.slice(3, 5).map((project) => (
          <div key={project.id} className="relative group overflow-hidden">
            <img
              className="w-full h-auto rounded-[10px]"
              src={project.image}
              alt={project.title}
            />

            <div
              className="absolute inset-0 bg-black/30 rounded-[10px]
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-all duration-500 ease-in-out"
            ></div>

            <Link
              to={`/project/${project.slug}`}
              className={`absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 
                 lg:opacity-0 opacity-100 scale-75 
                 group-hover:opacity-100 group-hover:scale-100
                 w-[100px] h-[100px] bg-[#E5E8F2] 
                 text-secondaryColor font-semibold 
                 rounded-full flex items-center justify-center text-sm 
                 transition-all duration-500 ease-in-out z-10 ${isArabic ? 'font-arabic' : ''}`}
            >
              {t("projects.more")}
            </Link>
          </div>
        ))}
      </div>
    </div>

          {/* Explore Projects Button */}
          <div className={`flex justify-center mt-12 ${isRTL ? "text-right" : ""}`}>
            <Button
              hoverBgColorClass="bg-primaryBlue"
              className={`bg-transparent border border-primaryBlue text-primaryBlue hover:border-primaryBlue hover:text-white duration-300 ease-in-out ${isArabic ? 'font-arabic' : ''}`}
              onClick={() => {
                window.location.href = "/project";
              }}
            >
              {t("projects.explore_button")}
            </Button>
          </div>

        </Container>
      </section>
    </div>
  );
};

export default ProjectStyle2;
