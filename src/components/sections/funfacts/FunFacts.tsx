import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import Container from "../../common/Container";

type StatItem = {
  id: number;
  end: number;
  suffix: string;
  translationKey: string;
};

const stats: StatItem[] = [
  { id: 1, end: 100, suffix: "+", translationKey: "team_member" },
  { id: 2, end: 7, suffix: "", translationKey: "mega_warehouses" },
  { id: 3, end: 20, suffix: "+", translationKey: "distribution_partners" },
  { id: 4, end: 6, suffix: "", translationKey: "governorates" },
];

const FunFacts: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check if current language is RTL
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px" // Start animation slightly before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
   <Container className="mt-20">
     <section ref={sectionRef} className="bg-primaryBlue rounded-[30px] lg:py-10 py-8 lg:px-15 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center border border-white rounded-[20px] py-5 px-8 text-center text-white"
          >
            <h2 className="text-white mb-2 md:text-[60px] text-[50px]">
              {isVisible && (
                <CountUp end={stat.end} duration={2.5} separator="," />
              )}
              {!isVisible && "0"}
              {stat.suffix}
            </h2>
            <p className={`text-white ${isArabic ? 'font-arabic' : ''}`}>
              {t(`funfacts.${stat.translationKey}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
   </Container>
  );
};

export default FunFacts;
