import About from "../components/homepage/About"
import AskQuestion from "../components/homepage/AskQuestion"
import Banner from "../components/homepage/Banner"
import Blogs from "../components/homepage/Blogs"
import Business from "../components/homepage/Business"
import Company from "../components/homepage/CompanyInfo"
import Contact from "../components/homepage/Contact"
import LatestProject from "../components/homepage/LatestProject"
import LatestService from "../components/homepage/LatestService"
import Ourteam from "../components/homepage/Ourteam"
import Pricing from "../components/homepage/Pricing"
import Testimonial from "../components/homepage/Testimonial"


const Home = () => {

  return (
    <div>
      <Banner/>
      <LatestService/>
      <About/>
      <Company/>
      <Ourteam/>
      <LatestProject/>
      <Pricing/>
      <Business/>
      <AskQuestion/>
      <Contact/>
      <Testimonial/>
      <Blogs/>
    </div>
  )
}

export default Home