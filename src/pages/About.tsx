import Breadcrumb from "../components/common/Breadcrumb";
import Business from "../components/sections/business/Business";
import Pricing from "../components/sections/pricing/Pricing";
import ClientTestimonial from "../components/sections/testimonial/ClientTestimonial";
import Faq from "../components/sections/faq/Faq";
import FunFacts from "../components/sections/funfacts/FunFacts";
import ContactStyle2 from "../components/sections/contact/ContactStyle2";
import AboutStyle3 from "../components/sections/about/AboutStyle3";

const About = () => {
  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="About us"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "About us" }]}
      />

      {/************* about us section start here **************/}
      <AboutStyle3 />

      {/************* Stats section start here **************/}
      <FunFacts />

      {/************* faq section start here **************/}
      <Faq />

      {/************* contact section start here **************/}
      <ContactStyle2 />

      {/************* business section start here **************/}
      <Business />

      {/************* pricing section start here **************/}
      <Pricing />

      {/************* client testimonial section start here **************/}
      <ClientTestimonial />
    </div>
  );
};

export default About;
