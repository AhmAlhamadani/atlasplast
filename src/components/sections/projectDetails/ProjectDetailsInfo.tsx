import { useParams } from "react-router-dom";
import Container from "../../common/Container"
import { projects } from "../../../data/projectsData";
import { useEffect } from "react";
import ProjectInfo from "./ProjectInfo";
import { FiChevronsRight } from "react-icons/fi";
import Pagination from "./Pagination";
import { useTranslation } from "react-i18next";

const ProjectDetailsInfo = () => {
    const { slug } = useParams();
    const { i18n } = useTranslation();
    const currentIndex = projects.findIndex((item) => item.slug === slug);
    const currentProjecct = projects[currentIndex];
    const isRTL = i18n.language === 'ar';
    const isArabic = i18n.language === 'ar';
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);
  
    if (!currentProjecct) return <div>Service not found!</div>;
  return (
    <section className="section-gap">
        <Container className="flex flex-col gap-[30px]">
          <div className="relative">
            <img
              className="w-full md:h-[450px] h-[380px] lg:h-[550px] 2xl:h-[580px] rounded-[10px] object-cover"
              src={currentProjecct?.image}
              alt="project"
            />

            <div className="bg-white w-max rounded-[20px] shadow md:p-[30px] p-5 2xl:p-10 md:space-y-5 space-y-3 absolute md:right-5 right-2 md:bottom-5 bottom-2">
              <h3 className={`${isArabic ? 'font-arabic' : 'font-primary'}`}>
                {isArabic ? 'معلومات المشروع' : 'Project Information'}
              </h3>
              {/************* project info start here **************/}
              <ProjectInfo currentProjecct={currentProjecct} />

              {/* <div className="pt-2 flex items-center gap-8">
                <h5>Share:</h5>
                <ShareIcon />
              </div> */}
            </div>
          </div>

          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-primary'}`}>
              {isArabic ? currentProjecct?.title?.ar : currentProjecct?.title?.en}
            </h2>

            <div className="flex flex-col gap-5 mt-5">
              {(isArabic ? currentProjecct.content?.paragraphs?.ar : currentProjecct.content?.paragraphs?.en)?.map((paragraph, index) => (
                <p key={index} className={`${isArabic ? 'font-arabic' : 'font-secondary'}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          {currentProjecct?.content?.subSections?.map((section, index) => (
            <div key={index} className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className={`mb-5 ${isArabic ? 'font-arabic' : 'font-primary'}`}>
                {isArabic ? section.title?.ar : section.title?.en}
              </h3>

              {/* Paragraph rendering (if any) */}
              {section.paragraphs && Array.isArray(isArabic ? section.paragraphs.ar : section.paragraphs.en) &&
                (isArabic ? section.paragraphs.ar : section.paragraphs.en)?.length > 0 &&
                (isArabic ? section.paragraphs.ar : section.paragraphs.en)?.map((p, i) => (
                  <p
                    key={i}
                    className={`${
                      section.points && Array.isArray(isArabic ? section.points.ar : section.points.en) && 
                      (isArabic ? section.points.ar : section.points.en)?.length > 0
                        ? "mt-[30px]"
                        : "mt-5"
                    } ${isArabic ? 'font-arabic' : 'font-secondary'}`}
                  >
                    {p}
                  </p>
                ))}

              {/* Points rendering (if any) */}
              {section.points && Array.isArray(isArabic ? section.points.ar : section.points.en) && 
               (isArabic ? section.points.ar : section.points.en)?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[30px] gap-5">
                  {(isArabic ? section.points.ar : section.points.en)?.map((point, idx) => (
                    <div key={idx} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <FiChevronsRight className={`text-[#E5E8F2] w-5 h-5 mt-1 flex-shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                      <span className={`text-textColor text-[16px] font-normal leading-7 tracking-[-0.36px] ${isArabic ? 'font-arabic' : 'font-secondary'}`}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-[30px] flex flex-col md:flex-row gap-[30px]">
            {currentProjecct?.content?.gallery?.map((imageSrc, index) => (
              <div key={index}>
                <img
                  className="w-full h-auto object-contain rounded-[20px]"
                  src={imageSrc}
                  alt={`gallery-image-${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* pagination part */}
          <Pagination />
        </Container>
      </section>
  )
}

export default ProjectDetailsInfo