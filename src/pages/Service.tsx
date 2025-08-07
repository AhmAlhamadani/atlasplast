import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import { services } from "../data/servicesData";
import FaqStyle2 from "../components/sections/faq/FaqStyle2";
import ServiceCard from "../components/ui/cards/ServiceCard";
const Service = () => {
  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Service"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Service" }]}
      />

      {/************* serviec section start here **************/}
      <section className="section-gap">
        <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-7 gap-6">
          {/* service card */}
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Container>
      </section>

      {/************* faq section start here **************/}

      <FaqStyle2 />
    </div>
  );
};

export default Service;
