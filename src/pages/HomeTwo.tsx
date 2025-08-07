import Business from "../components/sections/business/Business"
import OurFeatuers from "../components/sections/featuers/OurFeatuers"
import AboutStyle2 from "../components/sections/about/AboutStyle2"
import HeroStyle2 from "../components/sections/hero/HeroStyle2"
import ClientTestimonial from "../components/sections/testimonial/ClientTestimonial"
import TeamStyle2 from "../components/sections/team/TeamStyle2"
import FunFacts from "../components/sections/funfacts/FunFacts"
import ContactStyle2 from "../components/sections/contact/ContactStyle2"
import ProjectStyle2 from "../components/sections/project/ProjectStyle2"
import ServiceStyle2 from "../components/sections/service/ServiceStyle2"
import BlogStyle2 from "../components/sections/blog/BlogStyle2"

const HomeTwo = () => {
  return (
    <div>
        <HeroStyle2/>
        <ServiceStyle2/>
        <FunFacts/>
        <AboutStyle2/>
        <TeamStyle2/>
        <OurFeatuers/>
        <ProjectStyle2/>
        <ContactStyle2/>
        <Business/>
        <ClientTestimonial/>
        <BlogStyle2/>
    </div>
  )
}

export default HomeTwo