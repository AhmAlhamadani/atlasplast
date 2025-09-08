
import Container from "../common/Container"
import logo from "../../assets/logo/logo-white.svg";
import { FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import Button from "../common/Button"
import { cn } from "../../lib/utils"


const FooterTwo = () => {
    const location = useLocation();
    const isContactPage = location.pathname === "/contact" || location.pathname === "/about";
  
  return (
    <div className={cn("bg-secondaryColor", { "section-gap": !isContactPage })}>
      <Container className="md:pt-20 pt-15">
         {/* map here  */}
         <div className="bg-[#E5E8F2] rounded-lg xl:px-20 lg:px-10 px-6 md:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 ">
      {/* Left Title */}
      <div className="text-center md:text-left xl:max-w-[440px] max-w-[300px]">
        <h2 className="text-2xl">
          Lets Schedule A Call
        </h2>
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-16 w-px bg-[#36180A]" />

      {/* Phone Number */}
      <div className="flex items-center gap-4 text-center lg:text-left">
        <div className="bg-[#100701]/10 rounded-full w-16 h-16 flex justify-center items-center">
          <FaPhoneAlt className="text-secondaryColor text-lg" />
        </div>
        <div>
          <p>Phone Number</p>
          <h5>(964) 7877-661-127</h5>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-16 w-px bg-[#36180A]" />

      {/* Contact Button */}
      <div>
        <Link to={'/contact'}><Button hoverBgColorClass="bg-primaryBlue" className="bg-secondaryColor">Contact Us</Button></Link>
      </div>
    
      
      </div>

      {/* main footer start here */}
      <div className="mt-15 flex flex-wrap justify-between space-y-10 md:space-y-0 mb-20">
        {/* item 1 start */}
        <div className="max-w-[480px]">
         {/* logo */}
         <Link to={'/'}>
         <img className=" object-contain" src={logo} alt="putech logo" />
         </Link>

         <ul className="text-[14px] text-white font-medium uppercase font-primary leading-7 flex flex-wrap space-x-6 mt-7">
            <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/'}>Home</Link></li>
            <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/about'}>About</Link></li>
            <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/brands'}>Brands</Link></li>
            <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/project'}>Projects</Link></li>
            <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/blog'}>Articles</Link></li>
            <li className="hover:text-primaryBlue hover:underline duration-300 ease-in-out"><Link to={'/contact'}>Contact Us</Link></li>
         </ul>

         {/* social media icon here */}
          <div className="mt-5 flex items-center gap-3">
          <a
        href="https://www.facebook.com/AtlasPlast.llc/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaFacebookF size={18} />
      </a>
          <a
        href="https://www.linkedin.com/company/atlas-plast/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaLinkedin size={18} />
      </a>
          </div>
        </div>

            {/* item 2 here */}
         <div className="max-w-[700px]">
           <h4 className="text-white">Contact</h4>
           <div className="mt-7 flex flex-col lg:flex-row gap-7 lg:gap-12">

           <div className="flex items-center gap-4">
          <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaMapMarkerAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white mb-2">Address</p>
          <h5 className="text-white">Iraq, Baghdad, Kampsarah, 8F24+GFH</h5>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaPhoneAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white mb-2">Phone Number</p>
          <h5 className="text-white">(+964)7877661127</h5>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaEnvelope className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white mb-2">Email</p>
          <h5 className="text-white">info@atlasplast.com</h5>
        </div>
      </div>
           </div>
           
            
         </div>

      </div>

      <hr className="text-white/20"/>
       {/* footer bottom */}
       <div className="py-[30px] md:flex justify-between items-center">
         <div>
          <p className="text-white">© Atlasplast  2025 | All Rights Reserved</p>
         </div>
          <div className="mt-2 md:mt-0">
            <ul className="flex flex-wrap items-center space-x-7">
            <li>
                <Link to={'/terms-condition'} className="text-white text-[16px] font-normal font-secondary hover:text-primaryBlue duration-300 ease-in-out">Trems & Condition</Link>
              </li>
              <li>
                <Link to={'/privacy-policy'} className="text-white text-[16px] font-normal font-secondary hover:text-primaryBlue duration-300 ease-in-out">Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/contact'} className="text-white text-[16px] font-normal font-secondary hover:text-primaryBlue duration-300 ease-in-out">Contact Us</Link>
              </li>
            </ul>
          </div>
       </div>




      </Container>
    </div>
  )
}

export default FooterTwo