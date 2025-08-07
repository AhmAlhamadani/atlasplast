import {
  FaCheese,
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../components/common/Container";
import { CiCalendarDate } from "react-icons/ci";
import blog from "../assets/blog/blog-10.png";
import blog3 from "../assets/blog/blog-12.png";
import blog4 from "../assets/blog/blog-13.png";
import { FiChevronsRight, FiUser } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {useNavigate, useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import { useEffect } from "react";
import DigitalComanion from "../components/ui/blog/DigitalComanion";
import BlogSearch from "../components/ui/blog/BlogSearch";
import PopularPost from "../components/ui/blog/PopularPost";
import BlogCatagory from "../components/ui/blog/BlogCatagory";
import PopularTag from "../components/ui/blog/PopularTag";
import FollowUs from "../components/ui/blog/FollowUs";
import BlogComment from "../components/ui/blog/BlogComment";
const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = blogData.findIndex((item) => item.slug === slug);
  const currentBlog = blogData[currentIndex];

  const prevBlog = blogData[currentIndex - 1];
  const nextBlog = blogData[currentIndex + 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!currentBlog) return <div>Blog not found!</div>;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Blog Details"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Blog Details" }]}
      />

      {/************* blog details section start here **************/}
      <section className="section-gap">
        <Container className="flex flex-col lg:flex-row gap-[30px]">
          {/* part 1 */}
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

              {/* pagination start */}
              <div className="bg-sectionBg mt-[30px] rounded-[20px] md:px-10 px-5 h-[90px] flex justify-between items-center">
                {/* left */}
                <div className="flex items-center gap-3">
                  <div>
                    <button
                      disabled={!prevBlog}
                      onClick={() => navigate(`/blog/${prevBlog?.slug}`)}
                      className={`w-12 h-12 rounded-full flex justify-center items-center duration-300 ease-in-out cursor-pointer ${
                        prevBlog
                          ? "bg-sectionBg text-secondaryColor hover:bg-primaryBlue hover:text-white"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <GoArrowLeft size={24} />
                    </button>
                  </div>

                  <div>
                    <h4 className="md:text-[24px] text-[18px]">Previous</h4>
                  </div>
                </div>

                {/* line */}
                <div className="w-px h-[50px] bg-primaryBlue md:block hidden"></div>

                {/* right */}
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="md:text-[24px] text-[18px]">Next</h4>
                  </div>
                  <div>
                    <button
                      disabled={!nextBlog}
                      onClick={() => navigate(`/blog/${nextBlog?.slug}`)}
                      className={`w-12 h-12 rounded-full flex justify-center items-center duration-300 ease-in-out cursor-pointer ${
                        nextBlog
                          ? "bg-sectionBg text-secondaryColor hover:bg-primaryBlue hover:text-white"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <GoArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
               
               {/* Blog Comment start */}
             <div>
              <BlogComment/>
             </div>
            </div>
          </div>

          {/* part 2 */}
          <div className="lg:w-[35%] w-full flex flex-col gap-10 mt-10 lg:mt-0">
            {/* blog search part start here */}
            <div>
              <BlogSearch />
            </div>

            {/* Popular Post part start here */}
            <div>
              <PopularPost />
            </div>

            {/* Category part start here */}
            <div>
              <BlogCatagory />
            </div>

            {/* Popular Tag part start here */}
            <div>
              <PopularTag />
            </div>

            {/* Follow Us */}
            <div>
              <FollowUs />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetails;
