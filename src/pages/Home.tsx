import Blogs from "../components/homepage/Blogs"
import Business from "../components/sections/business/Business"
import Contact from "../components/sections/contact/Contact"
import LatestProject from "../components/homepage/LatestProject"
import LatestService from "../components/homepage/LatestService"
import Pricing from "../components/sections/pricing/Pricing"
import Testimonial from "../components/sections/testimonial/Testimonial"
import About from "../components/sections/about/About"
import Faq from "../components/sections/faq/Faq"
import Hero from "../components/sections/hero/Hero"
import Team from "../components/sections/team/Team"
import Brand from "../components/sections/brand/Brand"


const Home = () => {

  return (
    <div>
      <Hero/>
      <LatestService/>
      <About/>
      <Brand/>
      <Team/>
      <LatestProject/>
      <Pricing/>
      <Business/>
      <Faq/>
      <Contact/>
      <Testimonial/>
      <Blogs/>
    </div>
  )
}

export default Home