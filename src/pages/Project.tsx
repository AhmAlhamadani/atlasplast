import Breadcrumb from "../components/common/Breadcrumb";
import faq from "../assets/faq/faq-thumb2.png"
import Container from "../components/common/Container";
import Accordion from "../components/common/AccordionItem";
import SectionTitle from "../components/common/SectionTitle";
import { accordionData } from "../data/accordionData";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";

const Project = () => {
  return (
    <div>
      
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Project"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Project" }]}
      />

      {/************* project section start here **************/}
      <section className="section-gap">
        <Container>
          <div className="flex flex-col md:flex-row gap-[30px]">
      {/* Left Column (projects 1-3) */}
      <div className="flex flex-col gap-[30px]">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="relative group overflow-hidden">
            <img
              className="w-full h-auto rounded-[10px]"
              src={project.image}
              alt={project.title}
            />

            <div
              className="absolute inset-0 bg-black/30 rounded-[10px] 
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-all duration-500 ease-in-out"
            ></div>

            <Link
              to={`/project/${project.slug}`}
              className="absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 
                 lg:opacity-0 opacity-100 scale-75 
                 group-hover:opacity-100 group-hover:scale-100
                 w-[100px] h-[100px] bg-[#E5E8F2] 
                 text-secondaryColor font-semibold 
                 rounded-full flex items-center justify-center text-sm 
                 transition-all duration-500 ease-in-out z-10"
            >
              More
            </Link>
          </div>
        ))}
      </div>

      {/* Right Column (projects 4-6) */}
      <div className="flex flex-col gap-[30px]">
        {projects.slice(3, 6).map((project) => (
          <div key={project.id} className="relative group overflow-hidden">
            <img
              className="w-full h-auto rounded-[10px]"
              src={project.image}
              alt={project.title}
            />

            <div
              className="absolute inset-0 bg-black/30 rounded-[10px] 
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-all duration-500 ease-in-out"
            ></div>

            <Link
              to={`/project/${project.slug}`}
              className="absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 
                 lg:opacity-0 opacity-100 scale-75 
                 group-hover:opacity-100 group-hover:scale-100
                 w-[100px] h-[100px] bg-[#E5E8F2] 
                 text-secondaryColor font-semibold 
                 rounded-full flex items-center justify-center text-sm 
                 transition-all duration-500 ease-in-out z-10"
            >
              More
            </Link>
          </div>
        ))}
      </div>
    </div>

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
           <img className="w-full h-auto rounded-[20px]" src={faq} alt="faq-thumb1" />
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
  );
};

export default Project;
