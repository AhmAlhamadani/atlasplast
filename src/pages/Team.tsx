import { useTranslation } from "react-i18next";
import Container from "../components/common/Container";
import Breadcrumb from "../components/common/Breadcrumb";
import TeamCard from "../components/ui/cards/TeamCard";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

// Import team images
import team1 from "../assets/team/team-1.png";
import team2 from "../assets/team/team-2.png";
import team3 from "../assets/team/team-3.png";
import team4 from "../assets/team/team-4.png";
import team5 from "../assets/team/team-5.png";
import team6 from "../assets/team/team-6.png";
import team7 from "../assets/team/team-7.png";
// import team8 from "../assets/team/team-8.png";
// import team9 from "../assets/team/team-9.png";
// import team10 from "../assets/team/team-10.png";
// import team11 from "../assets/team/team-11.png";
// import team12 from "../assets/team/team-12.png";
// import team13 from "../assets/team/team-13.png";
// import team14 from "../assets/team/team-14.png";
// import team15 from "../assets/team/team-15.png";
// import team16 from "../assets/team/team-16.png";
// import team17 from "../assets/team/team-17.png";
// import team18 from "../assets/team/team-18.png";
// import team19 from "../assets/team/team-19.png";

// Leadership Team (existing team from TeamStyle2)
const leadershipTeam = [
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
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
];

// Branch Management Team (12 additional management roles)
const branchManagementTeam = [
  {
    id: 8,
    name: "Wael Al-Moussawi",
    title: "Manager - Campsarah Branch",
    image: team1, 
    translationKey: "wael_al_moussawi",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 9,
    name: "Gilani Assad Ibrahim",
    title: "Kurdistan - Regional Director",
    image: team2,
    translationKey: "gilani_assad_ibrahim",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 10,
    name: "Haider Shakir",
    title: "Manager - Najaf Branch",
    image: team3,
    translationKey: "haider_shakir",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 11,
    name: "Ahmed Nashwan",
    title: "Manager - Sha'ab Branch",
    image: team4,
    translationKey: "ahmed_nashwan",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 12,
    name: "Ahmed Safa",
    title: "Sales Accountant Manager",
    image: team5,
    translationKey: "ahmed_safa",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 13,
    name: "Sermad Jawad",
    title: "Manager - Dhok Branch",
    image: team6,
    translationKey: "sermad_jawad",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 14,
    name: "Riyadh Thamer",
    title: "Warehouse Manager - Owairig Branch",
    image: team7,
    translationKey: "riyadh_thamer",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 15,
    name: "Younis Saleh Mahdi",
    title: "Iraqi Craftsmen Club Manager",
    image: team1,
    translationKey: "younis_saleh_mahdi",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 16,
    name: "Ahmed Muhammed Jaafar",
    title: "Manager - Basra Branch",
    image: team2,
    translationKey: "ahmed_muhammed_jaafar",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 17,
    name: "Doha Samir Shehab",
    title: "Project Manager",
    image: team3,
    translationKey: "doha_samir_shehab",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 18,
    name: "Thaer Jalal",
    title: "Manager - Saudi Arabia Branch",
    image: team4,
    translationKey: "hassan_mosawi",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
  {
    id: 19,
    name: "Ahmed Abd Alrazak",
    title: "Manager - Egypt Branch",
    image: team5,
    translationKey: "ahmed_abd_alrazak",
    socials: [
      { icon: <FaLinkedinIn size={16} />, link: "#" },
      { icon: <FaXTwitter size={16} />, link: "#" },
    ],
  },
];

const Team = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar" || i18n.language === "ku";
  const isRTL = i18n.language === "ar" || i18n.language === "ku";

  return (
    <div>
      <Breadcrumb
        title={t("team.title")}
        breadcrumb={[{ name: t("about.breadcrumb_home"), href: "/" }, { name: t("team.title") }]}
        isRTL={isRTL}
        isArabic={isArabic}
      />
      
      <Container>
        {/* Top 2 Large Cards - Director and CEO */}
        <div className={`mt-8 flex flex-wrap justify-center gap-[30px] ${isRTL ? "text-right" : ""}`}>
          {leadershipTeam.slice(0, 2).map((member) => (
            <div key={member.id} className="w-[calc(100%-0px)] md:w-[calc(40%-15px)]">
              <TeamCard member={member} size="top" />
            </div>
          ))}
        </div>

        {/* Middle 5 Smaller Cards - Next Most Important */}
        <div className={`mt-12 flex flex-wrap justify-center gap-[20px] ${isRTL ? "text-right" : ""}`}>
          {leadershipTeam.slice(2, 7).map((member) => (
            <div key={member.id} className="w-[calc(50%-10px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)]">
              <TeamCard member={member} size="small" />
            </div>
          ))}
        </div>

        {/* First Row of 6 Smaller Cards */}
        <div className={`mt-12 flex flex-wrap justify-center gap-[20px] ${isRTL ? "text-right" : ""}`}>
          {branchManagementTeam.slice(0, 6).map((member) => (
            <div key={member.id} className="w-[calc(50%-10px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(16.666%-17px)]">
              <TeamCard member={member} size="small" />
            </div>
          ))}
        </div>

        {/* Second Row of 6 Smaller Cards */}
        <div className={`mt-12 flex flex-wrap justify-center gap-[20px] ${isRTL ? "text-right" : ""}`}>
          {branchManagementTeam.slice(6, 12).map((member) => (
            <div key={member.id} className="w-[calc(50%-10px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(16.666%-17px)]">
              <TeamCard member={member} size="small" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Team;
