import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import mark from "../../assets/breadcrumb/mark.svg"
import Container from "./Container";

type PageHeaderProps = {
    title: string;
    breadcrumb: { name: string; href?: string }[];
  };

const Breadcrumb =({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="bg-[#F2F4F8]/50 h-[300px] md:h-[400px] 2xl:h-[400px] relative" 
    >

    <Container className="h-[250px] md:h-[350px] 2xl:h-[350px] flex flex-col justify-center items-start">
      <h2 className="mt-[100px]">{title}</h2>
      <div className="mt-3 flex gap-2">
        {breadcrumb?.map((item, index) => (
          <span key={index} className="flex items-center hover:text-secondaryColor md:text-[24px] text-[20px] font-normal text-primary capitalize duration-300 ease-in-out">
            {item.href ? (
              <Link to={item.href}>
                {item?.name}
              </Link>
            ) : (
              <span>{item?.name}</span>
            )}
            {index < breadcrumb.length - 1 && <span> <IoIosArrowForward className="text-md ml-2 text-secondaryColor"/>
                </span>}
          </span>
        ))}
      </div>
    </Container>

   


    <div className="md:w-[373px] md:h-[373px] w-[300px] h-[300px] rounded-full bg-primaryBlue opacity-40 blur-[150px] absolute md:left-[10%] left-[5%] top-1/2 -translate-y-1/2">
    </div>
     
     <div className="absolute right-0 bottom-0 opacity-20">
      <img className="object-contain w-full md:w-[450px] 2xl:w-[600px]" src={mark} alt="mark" />
     </div>

    


  </div>
  )
}

export default Breadcrumb