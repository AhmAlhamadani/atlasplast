import Breadcrumb from "../components/common/Breadcrumb";
import Faq from "../components/sections/faq/Faq";
import AboutSection from "../components/sections/about/AboutStyle5";
import AboutStyle4 from "../components/sections/about/AboutStyle4";

const About = () => {
  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="About us"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "About us" }]}
      />

      {/************* about us section start here **************/}
      
      <AboutStyle4 />
      <AboutSection />



      {/************* faq section start here **************/}
      <Faq />

      {/************* contact section start here **************/}
      {/* <ContactStyle2 /> */}




      {/************* client testimonial section start here **************/}
      {/* <ClientTestimonial /> */}
    </div>
  );
};

export default About;
