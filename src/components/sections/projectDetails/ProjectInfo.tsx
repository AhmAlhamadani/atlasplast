import type { Project } from "../../../data/projectsData";
import { useTranslation } from "react-i18next";

interface ProjectInfoProps {
    currentProjecct: Project;
  }

const ProjectInfo = ({currentProjecct}:ProjectInfoProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const isArabic = i18n.language === 'ar';

  return (
         <div className={`md:space-y-5 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className={isRTL ? 'flex flex-row-reverse items-center' : 'flex items-center'}>
                  {isRTL ? (
                    <>
                      <span className={`text-[18px] ${isArabic ? 'font-arabic' : 'font-primary'} text-secondaryColor font-bold ml-2`}>
                        :الفئة
                      </span>
                      <span className={isArabic ? 'font-arabic' : 'font-secondary'}>
                        {isArabic ? currentProjecct?.category?.ar : currentProjecct?.category?.en}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={`text-[18px] ${isArabic ? 'font-arabic' : 'font-primary'} text-secondaryColor font-bold mr-2`}>
                        Category:
                      </span>
                      <span className={isArabic ? 'font-arabic' : 'font-secondary'}>
                        {isArabic ? currentProjecct?.category?.ar : currentProjecct?.category?.en}
                      </span>
                    </>
                  )}
                </p>
                <p className={isRTL ? 'flex flex-row-reverse items-center' : 'flex items-center'}>
                  {isRTL ? (
                    <>
                      <span className={`text-[18px] ${isArabic ? 'font-arabic' : 'font-primary'} text-secondaryColor font-bold ml-2`}>
                        :تاريخ البدء
                      </span>
                      <span className={isArabic ? 'font-arabic' : 'font-secondary'}>
                        {currentProjecct?.startDate}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={`text-[18px] ${isArabic ? 'font-arabic' : 'font-primary'} text-secondaryColor font-bold mr-2`}>
                        Start Date:
                      </span>
                      <span className={isArabic ? 'font-arabic' : 'font-secondary'}>
                        {currentProjecct?.startDate}
                      </span>
                    </>
                  )}
                </p>

                <p className={isRTL ? 'flex flex-row-reverse items-center' : 'flex items-center'}>
                  {isRTL ? (
                    <>
                      <span className={`text-[18px] ${isArabic ? 'font-arabic' : 'font-primary'} text-secondaryColor font-bold ml-2`}>
                        :الموقع
                      </span>
                      <span className={isArabic ? 'font-arabic' : 'font-secondary'}>
                        {isArabic ? currentProjecct?.location?.ar : currentProjecct?.location?.en}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={`text-[18px] ${isArabic ? 'font-arabic' : 'font-primary'} text-secondaryColor font-bold mr-2`}>
                        Location:
                      </span>
                      <span className={isArabic ? 'font-arabic' : 'font-secondary'}>
                        {isArabic ? currentProjecct?.location?.ar : currentProjecct?.location?.en}
                      </span>
                    </>
                  )}
                </p>
              </div>
  )
}

export default ProjectInfo