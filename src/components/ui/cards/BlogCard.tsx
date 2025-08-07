import { FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"

interface BlogProps {
    blog: {
      id: number;
      slug: string;
      date: string;
      author: string;
      comments: number;
      title: string;
      image: string;
    };
  }

const BlogCard = ({blog}:BlogProps) => {
  return (
    <div className="w-full relative">
<div className="group overflow-hidden rounded-md">
<img className="w-full h-auto group-hover:scale-105 duration-300 ease-in-out" src={blog.image} alt={blog.title}/>
</div>
<div className="flex items-center gap-10 mt-5 mb-5">
   <span className="flex items-center gap-3">
   <FaUser className="text-[16px] text-secondaryColor"/>
       <span className="text-[16px] font-normal text-textColor font-secondary">By {blog.author}</span>
   </span>
   <span className="flex items-center gap-3">
   <FaComment className="text-[16px] text-primary"/>
       <span className="text-[16px] font-normal text-textColor font-secondary">{blog.comments} Comment</span>
   </span>
</div>

  <Link to={`/blog/${blog.slug}`}>
  <h3 className="hover:text-primaryBlue duration-300 ease-initial">{blog.title}</h3>
  </Link>
  
  <div className="flex items-center gap-[30px] mt-[30px] w-full">
  <div className="flex-1">
    <div className="w-full h-px bg-primaryBorder"></div>
  </div>
  <div>
   <Link to={`/blog/${blog.slug}`}> <button className="text-[18px] font-medium capitalize text-secondaryColor font-primary">
      Read More
    </button></Link>
  </div>
</div>

 

   <span className="bg-[#E5E8F2] px-4 py-3 rounded-md text-[20px] font-semibold text-primary absolute top-10 left-10">{blog.date}</span>
</div>
  )
}

export default BlogCard