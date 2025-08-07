import { accordionData } from "../../data/accordionData"
import Accordion from "../common/AccordionItem"
import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import faq1 from "../../assets/faq/faq-thumb1.png"

const AskQuestion = () => {
  return (
    <div className="section-gap">
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
           <img className="w-full h-auto rounded-[10px]" src={faq1} alt="faq-thumb1" />
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
    </div>
  )
}

export default AskQuestion