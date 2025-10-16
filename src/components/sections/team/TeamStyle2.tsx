
import { useTranslation } from "react-i18next";
import team1 from "../../../assets/team/team-1.png";
import team2 from "../../../assets/team/team-2.png";
import team3 from "../../../assets/team/team-3.png";
import team4 from "../../../assets/team/team-4.png";
import team5 from "../../../assets/team/team-5.png";
import team6 from "../../../assets/team/team-6.png";
import team7 from "../../../assets/team/team-7.png";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import TeamCard from "../../ui/cards/TeamCard";
import Button from "../../common/Button";

const topTeamMembers = [
  {
    id: 1,
    name: "Eng. Ameer Almusawi",
    title: "Founder - Chairman of the Board",
    image: team1,
    translationKey: "ameer",
    socials: [
      { icon: <FaYoutube size={18} />, link: "#" },
      { icon: <FaLinkedinIn size={18} />, link: "#" },
      { icon: <FaXTwitter size={18} />, link: "#" },
    ],
  },
  {
    id: 2,
    name: "Eng. Jaafar AlMusawi",
    title: "CEO",
    image: team2,
    translationKey: "jaafar",
    socials: [
      { icon: <FaYoutube size={18} />, link: "#" },
      { icon: <FaLinkedinIn size={18} />, link: "#" },
      { icon: <FaXTwitter size={18} />, link: "#" },
    ],
  },

];

const bottomTeamMembers = [
  {
    id: 3,
    name: "Dr. Mohammed Bajalan",
    title: "CBDO",
    image: team3,
    translationKey: "mohammed",
    socials: [
      { icon: <FaYoutube size={18} />, link: "#" },
      { icon: <FaLinkedinIn size={18} />, link: "#" },
      { icon: <FaXTwitter size={18} />, link: "#" },
    ],
  },
  {
    id: 4,
    name: "Hussein Raad",
    title: "Logistics Manager",
    image: team4,
    translationKey: "hussein",
    socials: [
      { icon: <FaYoutube size={16} />, link: "#" },
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },

  {
    id: 5,
    name: "Omar Ibrahim",
    title: "Chief Financial Officer",
    image: team5,
    translationKey: "omar",
    socials: [
      { icon: <FaYoutube size={16} />, link: "#" },
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 6,
    name: "Saif Nabil",
    title: "Sales Manager",
    image: team6,
    translationKey: "saif",
    socials: [
      { icon: <FaYoutube size={16} />, link: "#" },
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 7,
    name: "Yasmine",
    title: "HR Manager",
    image: team7,
    translationKey: "yasmine",
    socials: [
      { icon: <FaYoutube size={16} />, link: "#" },
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
];

const TeamStyle2 = () => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  const isArabic = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div className="section-gap">
      <Container>
        {/* section title */}
        <SectionTitle
          label={t("team.label")}
          title={t("team.title")}
          align="center"
          isArabic={isArabic}
        />

        {/* Top team members - 3 members */}
        <div className={`mt-12 flex flex-wrap justify-center gap-[30px] ${isRTL ? "text-right" : ""}`}>
          {topTeamMembers.map((member) => (
            <div key={member.id} className="w-[calc(100%-0px)] md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)]">
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Bottom team members - 5 smaller members */}
        <div className={`mt-12 flex flex-wrap justify-center gap-[20px] ${isRTL ? "text-right" : ""}`}>
          {bottomTeamMembers.map((member) => (
            <div key={member.id} className="w-[calc(50%-10px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)]">
              <TeamCard member={member} size="small" />
            </div>
          ))}
        </div>
      </Container>

      <div className={`flex justify-center mt-12 ${isRTL ? "text-right" : ""}`}>
            <Button
              hoverBgColorClass="bg-primaryBlue"
              className={`bg-transparent border border-primaryBlue text-primaryBlue hover:border-primaryBlue hover:text-white duration-300 ease-in-out ${isArabic ? 'font-arabic' : ''}`}
              onClick={() => {
                window.location.href = "/team";
              }}
            >
              {t("team.viewAll")}
            </Button>
          </div>

    </div>
  );
};

export default TeamStyle2;
