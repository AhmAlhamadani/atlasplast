
import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export interface AccordionItem {
  title: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionSingleItem
          key={index}
          title={item.title[currentLang as keyof typeof item.title] || item.title.en}
          content={item.content[currentLang as keyof typeof item.content] || item.content.en}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

interface AccordionSingleItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionSingleItem: React.FC<AccordionSingleItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>(isOpen ? "auto" : 0);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={`border-b border-primaryBorder duration-300 ease-in-out ${isOpen ? "border-secondaryColor":""}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 focus:outline-none cursor-pointer"
      >
        <h5 className={`${isRTL ? "text-right" : "text-left"} ${isArabic ? "font-arabic" : ""}`}>
          {title}
        </h5>
        {isOpen ? (
          <FiMinus className="text-primaryBlue w-6 h-6 font-bold" />
        ) : (
          <FiPlus className="text-black w-6 h-6 font-bold" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          height,
          transition: "height 300ms ease",
          overflow: "hidden",
        }}
      >
        <p className={`pb-4 pt-0 ${isRTL ? "text-right" : "text-left"} ${isArabic ? "font-arabic" : ""}`}>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
