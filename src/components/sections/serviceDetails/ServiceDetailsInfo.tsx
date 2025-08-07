import { FiChevronsRight } from "react-icons/fi"
import Container from "../../common/Container"
import ConnectingService from "./ConnectingService"
import ServiceSidebar from "./ServiceSidebar"
import type { Service } from "../../../data/servicesData";

interface ServiceInfoProps {
    currentService: Service;
  }

const ServiceDetailsInfo = ({currentService}:ServiceInfoProps) => {
  return (
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
  )
}

export default ServiceDetailsInfo