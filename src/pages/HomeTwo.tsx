import Business from "../components/sections/business/Business"
import Blog from "../components/HomePageTwo/Blog"
import DisitalService from "../components/HomePageTwo/DisitalService"
import LetestProject from "../components/HomePageTwo/LetestProject"
import OurFeatuers from "../components/HomePageTwo/OurFeatuers"
import AboutStyle2 from "../components/sections/about/AboutStyle2"
import HeroStyle2 from "../components/sections/hero/HeroStyle2"
import ClientTestimonial from "../components/sections/testimonial/ClientTestimonial"
import TeamStyle2 from "../components/sections/team/TeamStyle2"
import ContactStyle2 from "../components/sections/contact/ContactStyle2"
import FunFacts from "../components/sections/funfacts/FunFacts"

const HomeTwo = () => {
  return (
    <div>
        <HeroStyle2/>
        <DisitalService/>
        <FunFacts/>
        <AboutStyle2/>
        <TeamStyle2/>
        <OurFeatuers/>
        <LetestProject/>
        <ContactStyle2/>
        <Business/>
        <ClientTestimonial/>
        <Blog/>
    </div>
  )
}

export default HomeTwo