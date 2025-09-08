import Business from "../components/sections/business/Business";
import About from "../components/sections/about/About";
import HeroStyle2 from "../components/sections/hero/HeroStyle2";
import TeamStyle2 from "../components/sections/team/TeamStyle2";
import FunFacts from "../components/sections/funfacts/FunFacts";
import ContactStyle2 from "../components/sections/contact/ContactStyle2";
import ProjectStyle2 from "../components/sections/project/ProjectStyle2";
import ServiceStyle2 from "../components/sections/service/ServiceStyle2";
// import BlogStyle2 from "../components/sections/blog/BlogStyle2";

const HomeTwo = () => {
  return (
    <div>
      <HeroStyle2 />
      <Business />
      <ServiceStyle2 /> 
      <About />
      <FunFacts />
      <TeamStyle2 />
      <ProjectStyle2 />
      
     {/* <BlogStyle2 /> */}
     <ContactStyle2 />
    </div>
  );
};

export default HomeTwo;
