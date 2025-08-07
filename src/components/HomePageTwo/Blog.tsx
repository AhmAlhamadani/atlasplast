import { FaComment, FaUser } from "react-icons/fa";
import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog/blog-4.png";
import blog2 from "../../assets/blog/blog-5.png";
import blog3 from "../../assets/blog/blog-6.png";

type BlogItem = {
  id: number;
  slug: string;
  date: string;
  author: string;
  comments: number;
  title: string;
  image: string;
};

const blogData: BlogItem[] = [
  {
    id: 1,
    slug: "your-tomorrow-enhanced-today",
    date: "10 OCT",
    author: "admin",
    comments: 50,
    title: "Redefining Tomorrow, One Byte at a Time",
    image: blog1,
  },
  {
    id: 2,
    date: "24 OCT",
    slug: "the-future-is-tech-advancing",
    author: "admin",
    comments: 20,
    title: "Smart Solutions for a Smarter World",
    image: blog2,
  },

  {
    id: 3,
    date: "16 OCT",
    slug: "vibrant-workspaces-fostering-creativity",
    author: "admin",
    comments: 0,
    title: "Empowering Growth through Technology",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <div className="section-gap">
      <Container>
        {/* section title */}
        <div className="flex justify-between items-end">
            <SectionTitle
        label="Blog And News"
        title="Smart Solutions for a Smarter World"
        align="left"
      />
               <div className="md:block hidden md:w-[260px] lg:w-auto ml-auto">
               <Link to={'/blog'}> <Button>View All Blog</Button></Link>
               </div>
            </div>

        {/* blog here */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogData?.map((blog, index) => (
            <div key={index} className="w-full relative">
              <div className="group overflow-hidden rounded-md">
                <img
                  className="w-full h-auto group-hover:scale-105 duration-300 ease-in-out"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              <div className="flex items-center gap-10 mt-5 mb-5">
                <span className="flex items-center gap-3">
                  <FaUser className="text-[16px] text-primary" />
                  <span className="text-[16px] font-medium text-textColor">
                    By {blog.author}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <FaComment className="text-[16px] text-primary" />
                  <span className="text-[16px] font-medium text-textColor">
                    {blog.comments} Comment
                  </span>
                </span>
              </div>

              <Link to="/blog/your-tomorrow-enhanced-today">
                <h4 className="max-w-[364px] hover:text-primaryBlue duration-300 ease-initial">
                  {blog.title}
                </h4>
              </Link>
              <div className="flex items-center gap-5 mt-5">
                <hr className="md:w-[70%] w-full text-primaryBorder h-px"/>
              <Link to="/blog/your-tomorrow-enhanced-today">
              <button className="w-full text-[18px] font-normal text-secondaryColor hover:text-primaryBlue duration-300 ease-in-out cursor-pointer">
                Read More
              </button>
              </Link>
              </div>

              <span className="bg-[#E5E8F2] p-2 rounded-md text-[20px] font-semibold text-primary absolute top-8 right-8">
                {blog.date}
              </span>
            </div>
          ))}
        </div>

        <div className="md:hidden block mt-10 md:mt-0">
            <div className="flex justify-center items-center">
            <Link to={'/blog'}> <Button>View All Blog</Button></Link>
            </div>
               </div>
      </Container>
    </div>
  );
};

export default Blog;
