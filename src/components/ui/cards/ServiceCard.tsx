import { Link } from "react-router-dom"
import Button from "../../common/Button"
import type { Service } from "../../../data/servicesData";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-primaryBorder rounded-[20px] 2xl:p-7 md:p-6 p-5 hover:border-primaryBlue duration-300 ease-in-out group">
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
        <Link to={`/service/${service.slug}`}>
          <Button hoverBgColorClass="bg-primaryBlue" className="bg-sectionBg text-secondaryColor">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
