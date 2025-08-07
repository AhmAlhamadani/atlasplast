import Breadcrumb from "../components/common/Breadcrumb"
import Container from "../components/common/Container"
import { FiChevronsRight } from "react-icons/fi"
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import { useNavigate, useParams } from "react-router-dom"
import { services } from "../data/servicesData"
import { useEffect } from "react"
import ConnectingService from "../components/ui/service/ConnectingService"
import ServiceSidebar from "../components/ui/service/ServiceSidebar"

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = services.findIndex(item => item.slug === slug);
  const currentService = services[currentIndex];

  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!currentService) return <div>Service not found!</div>;

  return (
    <div>
      
         {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Service Details"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Service Details" },
        ]}
      />

        {/************* Service details section start here **************/}
       <section className="section-gap">
         <Container className="flex flex-col lg:flex-row gap-[30px]">
           {/* left part */}
           <div className="lg:w-[70%] w-full">
             <img className="w-full h-auto rounded-[10px]" src={currentService?.image} alt="Service image" />
              <div className="flex flex-col gap-y-[30px] mt-[30px]">
              <div>
                <h2>{currentService?.title}</h2>

                  <div className="flex flex-col gap-5 mt-5">
                  {
                    currentService?.paragraphs?.map((p,index)=>
                    
                    <div key={index}>
                   <p>{p}</p>
              
                    </div>)
                  }

                  </div>
               
              </div>

                <div>
                   <h3>Empowering Your Digital Future</h3>
                   <div className="flex flex-col gap-5 mt-[30px]">

                   {currentService?.points?.map((point,index)=>
                       <div key={index} className="flex items-start gap-2">
                       <FiChevronsRight className="text-[#E5E8F2] w-5 h-5 mt-1 flex-shrink-0" />
                       <span className="text-textColor text-[16px] font-normal leading-7 font-secondary tracking-[-0.36px]">{point}</span>
                     </div>
                  )}

               </div>

                  <p className="mt-[30px]">Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, our world is becoming more connected every day Technology has revolutionized the way </p>
                </div>

                {/* Connecting You to Tomorrow */}
                <div>
                  <ConnectingService/>
                </div>



              </div>
           </div>

           {/* right part */}
           <div className="lg:w-[30%] w-full">
              <ServiceSidebar/>
           </div>
         </Container>

         
       </section>


       {/* pagination start */}
       <section>
        <Container>
          <div className="bg-white md:mt-[60px] mt-10 rounded-[20px] shadow-navbar-shadow md:px-10 px-5 h-[90px] flex justify-between items-center">
             {/* left */}
            <div className="flex items-center gap-3">
                <div>
              
                 <button
              disabled={!prevService}
              onClick={() => navigate(`/service/${prevService?.slug}`)}
              className={`w-12 h-12 rounded-full flex justify-center items-center duration-300 ease-in-out cursor-pointer ${
                prevService
                  ? 'bg-sectionBg text-secondaryColor hover:bg-primaryBlue hover:text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <GoArrowLeft size={24} />
            </button>
                </div>

                 <div>
                    <h4 className="md:text-[24px] text-[18px]">Previous</h4>
                 </div>
            </div>

            {/* line */}
             <div className="w-px h-[50px] bg-primaryBlue md:block hidden"></div>


            {/* right */}
            <div className="flex items-center gap-3">
            <div>
                    <h4 className="md:text-[24px] text-[18px]">Next</h4>
                 </div>
                <div>
              
                 <button
              disabled={!nextService}
              onClick={() => navigate(`/service/${nextService?.slug}`)}
              className={`w-12 h-12 rounded-full flex justify-center items-center duration-300 ease-in-out cursor-pointer ${
                nextService
                  ? 'bg-sectionBg text-secondaryColor hover:bg-primaryBlue hover:text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <GoArrowRight size={24} />
            </button>
                </div>

                 
            </div>

          </div>
        </Container>
       </section>

    </div>
  )
}

export default ServiceDetails