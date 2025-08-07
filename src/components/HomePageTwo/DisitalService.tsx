import { Link } from "react-router-dom"
import { services } from "../../data/servicesData"
import Button from "../common/Button"
import Container from "../common/Container"

const DisitalService = () => {
  return (
    <div className="section-gap">
        <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-7 gap-6">
           {/* service card */}
      {services.slice(0,3).map((service,index) => (
        <div key={index} className="bg-white border border-primaryBorder rounded-[20px] 2xl:p-7 md:p-6 p-5 hover:border-primaryBlue duration-300 ease-in-out group">
          <div className="flex items-center 2xl:gap-7 gap-5">
           <div>
           <div className="bg-primaryBlue w-20 h-20 rounded-full flex justify-center items-center">
              <img src={service.icon} alt={service.title} />
            </div>
           </div>
            <h4>{service.title}</h4>
          </div>

          <hr className="text-primaryBorder group-hover:text-primaryBlue my-5" />
          <p>{service.description}</p>

          <div className="mt-[30px]">
            <Link to={'/service/tech-pro-services'}><Button hoverBgColorClass="bg-primaryBlue" className="bg-sectionBg text-secondaryColor">
              Read More
            </Button></Link>
          </div>
        </div>
      ))}
       </Container>
    </div>
  )
}

export default DisitalService