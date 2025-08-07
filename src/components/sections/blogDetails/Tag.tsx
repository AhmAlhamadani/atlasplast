import {
    FaFacebookF,
    FaLinkedin,
    FaPinterestP,
  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Tag = () => {
  return (
    <div className="md:flex justify-between items-center mt-[30px]">
    <div className="flex flex-wrap gap-6">
      <h3> Tags:</h3>
      <div className="bg-[#F2F4F8] rounded-[30px] px-2 py-1">
        <p>Shield Services</p>
      </div>
      <div className="bg-[#F2F4F8] rounded-[30px] px-2 py-1">
        <p>Data Surge</p>
      </div>
      <div className="bg-[#F2F4F8] rounded-[30px] px-2 py-1">
        <p>Virtual</p>
      </div>
    </div>
    {/* socal media icon */}
    <div className="flex items-center gap-3 mt-5 md:mt-0">
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
  )
}

export default Tag