
import blog2 from "../../../assets/blog/blog-11.png";
import { IoStar } from "react-icons/io5";


const DigitalCompanion = () => {
  return (
    <div>
          <div className="my-[30px]">
                <img className="rounded-[10px]" src={blog2} alt="blog" />
              </div>

              <h3 className="mt-[30px] mb-5">Your digital companion</h3>
              <p>
                Technology is a vast field that encompasses the design,
                creation, use, and maintenance of various systems, tools, and
                machines. It drives innovation, efficiency, and connectivity in
                today's digital world
              </p>

              <div className="my-[30px] bg-secondaryColor rounded-[10px] md:px-10 md:py-8 px-5 py-5">
                <p className="text-white">
                  Technology is a vast field that encompasses the design,
                  creation, use, and maintenance of various systems, tools, and
                  machines. It drives innovation, efficiency, and connectivity{" "}
                </p>
                <div className="flex justify-between items-center mt-5">
                  <div>
                    <h4 className="text-white">Devid Bekham</h4>
                    <p className="mt-2">Web Designer</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoStar className="text-[#FFE175] text-[20px]" />
                    <IoStar className="text-[#FFE175] text-[20px]" />
                    <IoStar className="text-[#FFE175] text-[20px]" />
                    <IoStar className="text-white opacity-60 text-[20px]" />
                    <IoStar className="text-white opacity-60 text-[20px]" />
                  </div>
                </div>
              </div>
              <p>
                Technology is a vast field that encompasses the design,
                creation, use, and maintenance of various systems, tools, and
                machines. It drives innovation, efficiency, and connectivity in
                today's digital world
              </p>
    </div>
  )
}

export default DigitalCompanion