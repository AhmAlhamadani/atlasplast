import Button from "../../common/Button";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import blog1 from "../../../assets/blog/blog-1.png";
import blog2 from "../../../assets/blog/blog-2.png";
import blog3 from "../../../assets/blog/blog-3.png";
import { Link } from "react-router-dom";
import BlogCardStyle2 from "../../ui/cards/BlogCardStyle2";

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
            <Link to={"/blog"}>
              <Button>View All Blog</Button>
            </Link>
          </div>
        </div>

        {/* blog section start here */}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12">
        {blogData.map((blog) => (
        <BlogCardStyle2 key={blog.id} blog={blog} />
      ))}
        </section>

        <div className="md:hidden block mt-10 md:mt-0">
          <div className="flex justify-center items-center">
            <Link to={"/blog"}>
              <Button>View All Blog</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
