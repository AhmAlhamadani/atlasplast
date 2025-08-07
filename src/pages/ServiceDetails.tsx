import Breadcrumb from "../components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import { useEffect } from "react";
import ServiceDetailsInfo from "../components/sections/serviceDetails/ServiceDetailsInfo";
import Pagination from "../components/sections/serviceDetails/Pagination";

const ServiceDetails = () => {
  const { slug } = useParams();
  const currentIndex = services.findIndex((item) => item.slug === slug);
  const currentService = services[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!currentService) return <div>Service not found!</div>;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Service Details"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Service Details" }]}
      />

      {/************* Service details section start here **************/}
      <ServiceDetailsInfo currentService={currentService} />

      {/* pagination start */}
      <Pagination />
    </div>
  );
};

export default ServiceDetails;
