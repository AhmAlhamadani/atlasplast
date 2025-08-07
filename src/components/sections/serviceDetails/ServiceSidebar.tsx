import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Button from "../../common/Button"

const ServiceSidebar = () => {
  return (
    <div>
         <div className="md:space-y-10 space-y-7">
      {/* Service Details */}
      <div className="bg-white shadow-navbar-shadow border-t border-primaryBorder rounded-[10px] md:p-10 p-5">
        <h4 className="mb-[30px]">Service Details</h4>
        <ul className="md:space-y-[30px] space-y-5">
          {[
            "Advancing with innovation",
            "Tech excellence at work",
            "Inspiring tech evolution",
            "Your digital companion",
            "Tech-savvy solutions",
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-sectionBg px-5 h-[50px] rounded-full"
            >
              <span className="text-[16px] text-textColor font-secondary font-normal">{item}</span>
              <span className="text-gray-400 font-medium">{`0${index + 1}`}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us Box */}
      <div className="bg-primaryBlue rounded-[10px] md:p-10 p-5 text-center shadow">
        <h3 className="mb-5 text-white">Contact Us</h3>
        <h4 className="mb-5 text-white">(+888) 178 456 765</h4>
        <p className="mb-[30px] text-white">Need Help? Call Us</p>
         <Link to={'/contact'}><Button className="bg-secondaryColor">
        Contact Us
        </Button></Link>
      </div>

      {/* Follow Us */}
      <div className="bg-white shadow-navbar-shadow border-t border-primaryBorder rounded-[20px] md:p-10 p-5">
        <h4 className="mb-5">Follow Us</h4>
        <div className="flex gap-3">
        <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sectionBg w-10 h-10 rounded-full flex items-center justify-center text-primaryBlue hover:bg-primaryBlue hover:text-white duration-300 ease-in-out"
      >
        <FaFacebookF size={18} />
      </a>
          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sectionBg w-10 h-10 rounded-full flex items-center justify-center text-primaryBlue hover:bg-primaryBlue hover:text-white duration-300 ease-in-out"
      >
        <FaXTwitter size={18} />
      </a>
          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sectionBg w-10 h-10 rounded-full flex items-center justify-center text-primaryBlue hover:bg-primaryBlue hover:text-white duration-300 ease-in-out"
      >
        <FaLinkedin size={18} />
      </a>

          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sectionBg w-10 h-10 rounded-full flex items-center justify-center text-primaryBlue hover:bg-primaryBlue hover:text-white duration-300 ease-in-out"
      >
        <FaPinterestP size={18} />
      </a>
        </div>
      </div>
             </div>

    </div>
  )
}

export default ServiceSidebar