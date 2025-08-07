import Button from "../common/Button"
import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import blog1 from "../../assets/blog/blog-1.png"
import blog2 from "../../assets/blog/blog-2.png"
import blog3 from "../../assets/blog/blog-3.png"
import { FaComment, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

 const blogData = [
    {
      id: 1,
      image: blog1,
      author: "admin",
      comments: 0,
      title: "Where Technology Meets Imagination",
      date: "10 oct",
      link: "/blog/your-tomorrow-enhanced-today",
    },
    {
      id: 2,
      image: blog2,
      author: "admin",
      comments: 3,
      title: "Your Partner in Digital Transformation.",
      date: "12 nov",
      link: "/blog/your-tomorrow-enhanced-today",
    },
    {
      id: 3,
      image: blog3,
      author: "admin",
      comments: 5,
      title: "Your Tomorrow, Enhanced Today Tech Forward",
      date: "28 dec",
      link: "/blog/your-tomorrow-enhanced-today",
    },
  ];
  

const Blogs = () => {
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
                <Link to={'/blog'}><Button>View All Blog</Button></Link>
               </div>
            </div>

           {/* blog section start here */}

           <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12">
      {blogData.map((blog) => (
        <div key={blog.id} className="relative rounded-[10px]">
          <img className="w-full h-auto rounded-[10px]" src={blog.image} alt="blogs" />

          <div className="absolute bottom-7 z-10 px-[30px]">
            <div className="flex items-center gap-10 mt-5 mb-5">
              <span className="flex items-center gap-3">
                <FaUser className="text-[16px] text-white" />
                <span className="text-[16px] font-normal text-white">By {blog.author}</span>
              </span>
              <span className="flex items-center gap-3">
                <FaComment className="text-[16px] text-white" />
                <span className="text-[16px] font-normal text-white">{blog.comments} Comment</span>
              </span>
            </div>

            <Link to={blog.link}>
              <h4 className="text-white hover:text-primaryBlue duration-300 ease-in-out">
                {blog.title}
              </h4>
            </Link>
          </div>

          <div
            className="absolute inset-0 rounded-[10px] z-0"
            style={{ background: "var(--gradient-blog-overlay)" }}
          />

          <span className="bg-[#E5E8F2] px-4 py-2.5 rounded-md text-[20px] font-semibold text-primary absolute top-6 right-6 capitalize">
            {blog.date}
          </span>
        </div>
      ))}
          </section>

          <div className="md:hidden block mt-10 md:mt-0">
            <div className="flex justify-center items-center">
            <Link to={'/blog'}><Button>View All Blog</Button></Link>
            </div>
               </div>




        </Container>
    </div>
  )
}

export default Blogs