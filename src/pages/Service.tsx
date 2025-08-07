import Breadcrumb from "../components/common/Breadcrumb"
import Container from "../components/common/Container"
import Button from "../components/common/Button"
import { services } from "../data/servicesData"
import Accordion from "../components/common/AccordionItem"
import SectionTitle from "../components/common/SectionTitle"
import { accordionData } from "../data/accordionData"
import faq from "../assets/faq/faq-thumb2.png"
import { Link } from "react-router-dom"
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
            {/* section ttile start here */}
        <SectionTitle
        label="ASk QUESTION"
        title="Your Tomorrow, Enhanced Today Tech Forward"
        align="center"/>

         
        {/* Accordion part start    */}
        <div className="lg:flex items-center justify-between md:mt-[60px] mt-10">
         <div className="lg:w-[50%] w-full">
         <Accordion items={accordionData} />
         </div>

         {/* image part */}
         <div className="lg:w-[43%] w-full mt-10 lg:mt-0 relative">
           <img className="w-full h-auto" src={faq} alt="faq-thumb1" />
           <div className="bg-[#E1F0FD] rounded-[20px] shadow-faq p-5 flex items-center gap-5 absolute bottom-5 right-5">
            <div>
              <img src='/icons/business/Search results for Winner.svg' alt="serach icon" />
            </div>

             <div>
                <h3>2k+</h3>
                 <p>Project Completed</p>
             </div>
             
           </div>
         </div>
        </div>
        </Container>
      </section>

    </div>
  )
}

export default Service