import DigitalComanion from "../../ui/blog/DigitalComanion"
import { CiCalendarDate } from "react-icons/ci";
import blog from "../../../assets/blog/blog-10.png";
import blog3 from "../../../assets/blog/blog-12.png";
import blog4 from "../../../assets/blog/blog-13.png";
import { FiChevronsRight, FiUser } from "react-icons/fi";
import {
    FaCheese,
  } from "react-icons/fa";
import Tag from "./Tag";
import Pagination from "./Pagination";
import BlogComment from "../../ui/blog/BlogComment";
import type { BlogItem } from "../../../data/blogData";


interface BlogInfoProps {
    currentBlog: BlogItem;
  }

  
const BlogDetailsInfo = ({currentBlog}:BlogInfoProps) => {
  return (
    <div className="lg:w-[65%] w-full">
    <div>
      <img
        className="w-full h-auto group-hover:scale-105 duration-300 ease-in-out rounded-[10px]"
        src={currentBlog.image}
        alt={blog}
      />
      <div className="flex flex-wrap items-center gap-5 my-5">
        <span className="flex items-center gap-3">
          <CiCalendarDate className="text-[16px] text-primaryBlue" />
          <span className="text-[16px] font-normal text-textColor font-secondary">
            By {currentBlog.fullDate}
          </span>
        </span>
        <span className="flex items-center gap-3">
          <FiUser className="text-[16px] text-primaryBlue" />
          <span className="text-[16px] font-normal text-textColor font-secondary">
            By {currentBlog.author}
          </span>
        </span>
        <span className="flex items-center gap-3">
          <FaCheese className="text-[16px] text-primaryBlue" />
          <span className="text-[16px] font-normal text-textColor font-secondary">
            Category
          </span>
        </span>
      </div>

      <h3 className="my-5">{currentBlog.title}</h3>
      {currentBlog?.content?.map((para, index) => (
        <p key={index} className={`${index > 0 ? "mt-5" : ""}`}>
          {para}
        </p>
      ))}

      <div className="flex flex-col gap-5 my-[30px]">
        {currentBlog?.highlights?.map((point, index) => (
          <div key={index} className="flex items-start gap-2">
            <FiChevronsRight className="text-[#E5E8F2] w-5 h-5 mt-1 flex-shrink-0" />
            <span className="text-textColor text-[16px] font-normal leading-7 font-secondary tracking-[-0.36px]">
              {point}
            </span>
          </div>
        ))}
      </div>

      <p>
        {currentBlog?.des}
      </p>

       <div>
         <DigitalComanion/>
       </div>

      {/* Transforming lives through tech */}
      <div className="mt-[30px]">
        <h3>Transforming lives through tech</h3>
        <div className="mt-[30px] flex flex-col md:flex-row gap-[30px]">
          <div>
            <img
              className="w-full h-auto rounded-[20px]"
              src={blog3}
              alt="blog-image"
            />
          </div>
          <div>
            <img
              className="w-full h-auto rounded-[20px]"
              src={blog4}
              alt="blog-image"
            />
          </div>
        </div>
        <p className="mt-[30px]">
          Technology is a vast field that encompasses the design,
          creation, use, and maintenance of various systems, tools, and
          machines. It drives innovation, efficiency, and connectivity
          in today's digital world
        </p>
      </div>

      {/* tag */}
       <Tag/>

      {/* pagination start */}
      <Pagination/>
       
       {/* Blog Comment start */}
     <div>
      <BlogComment/>
     </div>
    </div>
  </div>
  )
}

export default BlogDetailsInfo