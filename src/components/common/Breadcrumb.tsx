import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import mark from "../../assets/breadcrumb/mark.svg"
import Container from "./Container";

type PageHeaderProps = {
    title: string;
    breadcrumb: { name: string; href?: string }[];
    isRTL?: boolean;
    isArabic?: boolean;
  };

const Breadcrumb =({ title, breadcrumb, isRTL = false, isArabic = false }: PageHeaderProps) => {
  return (
    <div className="bg-[#F2F4F8]/50 h-[300px] md:h-[400px] 2xl:h-[400px] relative" 
    >

    <Container className={`h-[250px] md:h-[350px] 2xl:h-[350px] flex flex-col justify-center ${isRTL ? "items-end" : "items-start"}`}>
      <h2 className={`mt-[100px] ${isArabic ? "font-arabic" : ""} ${isRTL ? "text-right" : "text-left"}`}>{title}</h2>
      <div className={`mt-3 flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
        {breadcrumb?.map((item, index) => (
          <>
            <span key={index} className={`hover:text-secondaryColor md:text-[24px] text-[20px] font-normal text-primary capitalize duration-300 ease-in-out ${isArabic ? "font-arabic" : ""}`}>
              {item.href ? (
                <Link to={item.href}>
                  {item?.name}
                </Link>
              ) : (
                <span>{item?.name}</span>
              )}
            </span>
            {index < breadcrumb.length - 1 && (
              <span className="flex items-center">
                <IoIosArrowForward className={`text-md text-secondaryColor ${isRTL ? "rotate-180" : ""}`}/>
              </span>
            )}
          </>
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