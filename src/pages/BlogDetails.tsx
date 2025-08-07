import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import { useEffect } from "react";
import BlogSearch from "../components/ui/blog/BlogSearch";
import PopularPost from "../components/ui/blog/PopularPost";
import BlogCatagory from "../components/ui/blog/BlogCatagory";
import PopularTag from "../components/ui/blog/PopularTag";
import FollowUs from "../components/ui/blog/FollowUs";
import BlogDetailsInfo from "../components/sections/blogDetails/BlogDetailsInfo";
const BlogDetails = () => {
  const { slug } = useParams();

  const currentIndex = blogData.findIndex((item) => item.slug === slug);
  const currentBlog = blogData[currentIndex];

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
          <BlogDetailsInfo currentBlog={currentBlog} />

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
