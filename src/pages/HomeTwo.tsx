import ClientTestimonial from "../components/about/ClientTestimonial"
import Business from "../components/homepage/Business"
import AboutUs from "../components/HomePageTwo/AboutUs"
import Banner from "../components/HomePageTwo/Banner"
import Blog from "../components/HomePageTwo/Blog"
import Contact from "../components/HomePageTwo/Contact"
import DisitalService from "../components/HomePageTwo/DisitalService"
import LetestProject from "../components/HomePageTwo/LetestProject"
import OurFeatuers from "../components/HomePageTwo/OurFeatuers"
import Stats from "../components/HomePageTwo/Stats"
import Team from "../components/HomePageTwo/Team"

const HomeTwo = () => {
  return (
    <div>
        <Banner/>
        <DisitalService/>
        <Stats/>
        <AboutUs/>
        <Team/>
        <OurFeatuers/>
        <LetestProject/>
        <Contact/>
        <Business/>
        <ClientTestimonial/>
        <Blog/>
    </div>
  )
}

export default HomeTwo