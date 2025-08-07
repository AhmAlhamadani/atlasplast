import Container from "../common/Container"
import logo from "../../assets/footer/footer-logo.png"
import { FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { BsSendFill } from "react-icons/bs"
import FooterMap from "../ui/contact/FooterMap"
const Footer = () => {
  return (
    <div className="bg-secondaryColor section-gap">
      <Container className="pt-20">
         {/* map here  */}
          <FooterMap/>

      {/* main footer start here */}
      <div className="mt-15 flex flex-wrap justify-between space-y-10 md:space-y-0 mb-20">
        {/* item 1 start */}
        <div className="max-w-[330px]">
         {/* logo */}
         <Link to={'/'}>
         <img className=" object-contain" src={logo} alt="putech logo" />
         </Link>
         <p className="text-white mt-[30px]">Technology is constantly evolving, shaping the way we live and work. It encompasses  automation, connectivity </p>
         {/* social media icon here */}
          <div className="mt-5 flex items-center gap-3">
          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaFacebookF size={18} />
      </a>
          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaXTwitter size={18} />
      </a>
          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaLinkedin size={18} />
      </a>

          <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#36180A] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primaryBlue duration-300 ease-in-out"
      >
        <FaPinterestP size={18} />
      </a>
          </div>
        </div>

            {/* item 2 here */}
         <div className="max-w-[330px]">
           <h4 className="text-white">Contact</h4>
           <div className="mt-7 flex flex-col gap-7">

           <div className="flex items-center gap-4">
          <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaMapMarkerAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white mb-2">Address</p>
          <h5 className="text-white">8502 Preston Rd., Maine 98380</h5>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaPhoneAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white mb-2">Phone Number</p>
          <h5 className="text-white">012 345 678 9101</h5>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="bg-white/10 w-10 h-10 flex justify-center items-center rounded-full">
          <FaEnvelope className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white mb-2">Email</p>
          <h5 className="text-white">jackson.graham@example.com</h5>
        </div>
      </div>
           </div>
           
            
         </div>

         {/* item 3 here */}
         <div className="max-w-[330px]">
           <h4 className="text-white">Newsletter</h4>
           <p className="text-white mt-7">Technology is constantly evolving, shaping the way we live and work</p>
            <div className="mt-7 relative">
              <input type="text" className="w-full border border-white pl-5 rounded-full h-[54px] text-white text-[16px] font-secondary font-normal outline-0 placeholder:text-white focus:border-primaryBlue duration-300 ease-in-out" placeholder="Your email..."/>
              <button className="bg-primaryBlue w-10 h-10 rounded-full flex items-center justify-center text-secondaryColor absolute top-1.5 right-2">
               <BsSendFill size={20} />
               </button>
               <span className="text-white text-[12px] font-normal font-secondary mt-2 ml-3">It only takes 2 minutes to complete.</span>
            </div>
            
         </div>

      </div>

      <hr className="text-white/20"/>
       {/* footer bottom */}
       <div className="py-[30px] md:flex justify-between items-center">
         <div>
          <p className="text-white">© Putech 2025 | All Rights Reserved</p>
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

export default Footer