import Breadcrumb from "../components/common/Breadcrumb"
import Contact from "../components/homepage/Contact"
import ContactMap from "../components/ui/contact/ContactMap"

const ContactUs = () => {
   

  return (
    <div>
       
        {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Contact us"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Contact us" },
        ]}
      />

      {/************* contact from start here **************/}
      <section>
      <Contact/>
      </section>

      {/************* Map start here **************/}
       <ContactMap/>

    </div>
  )
}

export default ContactUs