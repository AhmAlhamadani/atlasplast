import { Link } from "react-router-dom";
import { servicesData } from "../../../data/servicesData";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const Service = () => {
  return (
    <div className="section-gap">
      <Container>
        {/* section title start here */}
        <SectionTitle
          label="Latest service"
          title="Transform Revolutionizing Reality Connect"
          align="center"
        />

        {/* all services */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:mt-[60px] mt-12">
          {/* service  */}
          {servicesData.map((service) => (
            <Link to={'/service/tech-pro-services'}
              key={service.id}
              className="bg-white border border-primaryBorder rounded-[10px] p-6 flex justify-between items-center hover:border-primaryBlue duration-300 ease-in-out"
            >
              <div className="flex items-center gap-5">
                <img src={service.icon} alt={service.title} />
                <h4 className="text-[18px] md:text-[20px] xl:text-[24px]">
                  {service.title}
                </h4>
              </div>
              <div>
                <h3 className="text-[#666A73] font-medium capitalize tracking-[-0.64px]">
                  {service.number}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Service;
