import Breadcrumb from "../components/common/Breadcrumb"
import Container from "../components/common/Container"
import Button from "../components/common/Button"
import { services } from "../data/servicesData"
import { Link } from "react-router-dom"
import FaqStyle2 from "../components/sections/faq/FaqStyle2"
const Service = () => {
  return (
    <div>
      
        {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Service"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Service" },
        ]}
      />

       {/************* serviec section start here **************/}
       <section className="section-gap">
       <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-7 gap-6">
           {/* service card */}
            

      {services.map((service,index) => (
        <div key={index} className="bg-white border border-primaryBorder rounded-[20px] 2xl:p-7 md:p-6 p-5 hover:border-primaryBlue duration-300 ease-in-out group">
          <div className="flex items-center 2xl:gap-7 gap-5">
           <div>
           <div className="bg-primaryBlue w-20 h-20 rounded-full flex justify-center items-center">
              <img src={service?.icon} alt={service?.title} />
            </div>
           </div>
            <h4>{service?.title}</h4>
          </div>

          <hr className="text-primaryBorder my-5 group-hover:text-primaryBlue" />
          <p className="mb-[30px]">{service?.description}</p>

          <Link to={`/service/${service?.slug}`}>
            <Button hoverBgColorClass="bg-primaryBlue" className="bg-sectionBg text-secondaryColor">
              Read More
            </Button>
          </Link>
        </div>
      ))}
       </Container>
       </section>

       {/************* faq section start here **************/}
       <section className="section-gap">
        <Container>
           <FaqStyle2/>     
        </Container>
      </section>

    </div>
  )
}

export default Service