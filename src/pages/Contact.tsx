import Breadcrumb from "../components/common/Breadcrumb"
import Contact from "../components/sections/contact/Contact"
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
      <Contact/>

      {/************* Map start here **************/}
       <ContactMap/>

    </div>
  )
}

export default ContactUs