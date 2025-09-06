// components/TeamCard.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { LuShare2 } from "react-icons/lu";

export interface Social {
  icon: React.ReactNode;
  link: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  socials: Social[];
  translationKey?: string;
}

const TeamCard: React.FC<{ member: TeamMember; size?: 'large' | 'small' }> = ({ member, size = 'large' }) => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  // Get translated content if translation key exists
  const getTranslatedContent = () => {
    if (member.translationKey) {
      return {
        name: t(`team.members.${member.translationKey}.name`, member.name),
        title: t(`team.members.${member.translationKey}.title`, member.title)
      };
    }
    return {
      name: member.name,
      title: member.title
    };
  };

  const translatedContent = getTranslatedContent();

  const isSmall = size === 'small';
  
  return (
    <div className={`bg-white border border-secondaryColor rounded-[10px] ${isSmall ? 'p-[20px]' : 'p-[30px]'} hover:border-primaryBlue duration-300 ease-in-out group relative overflow-hidden`}>
      {/* Image */}
      <div className="relative">
        <img
          className={`w-full object-cover rounded-[10px] aspect-square ${isSmall ? 'h-[200px]' : 'h-[340px]'}`}
          src={member.image}
          alt={translatedContent.name}
        />
        <div className={`bg-[#E5E8F2] text-primaryBlue rounded-full flex justify-center items-center absolute left-1/2 -translate-x-1/2 -bottom-5 z-10 group-hover:text-secondaryColor duration-300 ease-in-out ${isSmall ? 'w-8 h-8' : 'w-10 h-10'}`}>
          <LuShare2 size={isSmall ? 16 : 20} />
        </div>
      </div>

      {/* Description */}
      <div className={`text-center ${isSmall ? 'mt-[20px]' : 'mt-[30px]'} ${isRTL ? "text-right" : ""}`}>
        <h4 className={`${isSmall ? 'text-base' : 'text-lg'} font-semibold ${isArabic ? 'font-arabic' : ''}`}>{translatedContent.name}</h4>
        <p className={`text-sm text-gray-500 ${isArabic ? 'font-arabic' : ''}`}>{translatedContent.title}</p>
      </div>

      {/* Social Icons */}
      <div className={`${isSmall ? 'mt-3' : 'mt-5'} absolute left-1/2 -translate-x-1/2 ${isSmall ? 'bottom-[45%]' : 'bottom-1/3'} flex items-center justify-center gap-3 lg:opacity-0 opacity-100 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500`}>
        {member.socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#F2F4F8] rounded-full flex items-center justify-center text-primaryBlue hover:bg-primaryBlue hover:text-white duration-300 ${isSmall ? 'w-8 h-8' : 'w-10 h-10'}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
