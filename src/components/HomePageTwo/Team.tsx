import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import team1 from "../../assets/team/team-1.png";
import team2 from "../../assets/team/team-2.png";
import team3 from "../../assets/team/team-3.png";
import { LuShare2 } from "react-icons/lu";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const teamMembers = [
  {
    id: 1,
    name: "Kathryn Murphy",
    title: "Web Designer",
    image: team1,
    socials: [
      { icon: <FaYoutube size={18} />, link: "#" },
      { icon: <FaLinkedinIn size={18} />, link: "#" },
      { icon: <FaXTwitter size={18} />, link: "#" },
    ],
  },
  {
    id: 2,
    name: "Darrell Steward",
    title: "Medical Assistant",
    image: team2,
    socials: [
      { icon: <FaYoutube size={18} />, link: "#" },
      { icon: <FaLinkedinIn size={18} />, link: "#" },
      { icon: <FaXTwitter size={18} />, link: "#" },
    ],
  },
  {
    id: 3,
    name: "Courtney Henry",
    title: "Dog Trainer",
    image: team3,
    socials: [
      { icon: <FaYoutube size={18} />, link: "#" },
      { icon: <FaLinkedinIn size={18} />, link: "#" },
      { icon: <FaXTwitter size={18} />, link: "#" },
    ],
  },
];

const Team = () => {
  return (
    <div className="section-gap">
      <Container>
        {/* section title */}
        <SectionTitle
          label="Our team"
          title="Our Best Team Member"
          align="center"
        />

        {/* team part start here */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-secondaryColor rounded-[10px] p-[30px] hover:border-primaryBlue duration-300 ease-in-out group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  className="w-full h-[340px] object-center rounded-[10px]"
                  src={member.image}
                  alt={member.name}
                />
                <div className="bg-[#E5E8F2] text-primaryBlue w-10 h-10 rounded-full flex justify-center items-center absolute left-1/2 -translate-x-1/2 -bottom-5 z-10 group-hover:text-secondaryColor duration-300 ease-in-out">
                  <LuShare2 size={20} />
                </div>
              </div>

              {/* Description */}
              <div className="text-center mt-[30px]">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>

              {/* Social Icons - hidden initially, shown on hover */}
              <div className="mt-5 absolute left-1/2 -translate-x-1/2 bottom-1/3  flex items-center justify-center gap-3 lg:opacity-0 opacity-100 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {member.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F2F4F8] w-10 h-10 rounded-full flex items-center justify-center text-primaryBlue hover:bg-primaryBlue hover:text-white duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}


        </div>
      </Container>
    </div>
  );
};

export default Team;
