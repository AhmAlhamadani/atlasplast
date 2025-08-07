import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import { blogData } from "../data/blogData";
import BlogCard from "../components/ui/cards/BlogCard";
import BlogSearch from "../components/ui/blog/BlogSearch";
import PopularPost from "../components/ui/blog/PopularPost";
import BlogCatagory from "../components/ui/blog/BlogCatagory";
import PopularTag from "../components/ui/blog/PopularTag";
import FollowUs from "../components/ui/blog/FollowUs";

const Blog = () => {
  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Blog classic"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Blog classic" }]}
      />

      {/************* blog section start here **************/}
      <section className="section-gap">
        <Container className="flex flex-col lg:flex-row gap-[30px]">
          {/* part 1 */}
          <div className="lg:w-[65%] w-full">
            {/* blog cart start here */}
            <div className="flex flex-col gap-20">
              {blogData?.map((blog) => (
                <BlogCard key={blog?.id} blog={blog} />
              ))}
            </div>
            {/* pagination part start here */}
            <div className="flex items-center justify-center gap-3 mt-15">
              <button className=" w-10 h-10 rounded-full text-[16px] font-medium flex justify-center items-center bg-primaryBlue text-white duration-300 ease-in-out cursor-pointer">
                01
              </button>
              <button className="bg-[#F2F4F8] w-10 h-10 rounded-full text-[16px] font-medium text-primary flex justify-center items-center hover:bg-primaryBlue hover:text-white duration-300 ease-in-out cursor-pointer">
                02
              </button>
              <button className="bg-[#F2F4F8] w-10 h-10 rounded-full text-[16px] font-medium text-primary flex justify-center items-center hover:bg-primaryBlue hover:text-white duration-300 ease-in-out cursor-pointer">
                03
              </button>
              <button className="bg-[#F2F4F8] w-10 h-10 rounded-full text-[16px] font-medium text-primary flex justify-center items-center hover:bg-primaryBlue hover:text-white duration-300 ease-in-out cursor-pointer">
                <MdKeyboardDoubleArrowRight />
              </button>
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

export default Blog;
