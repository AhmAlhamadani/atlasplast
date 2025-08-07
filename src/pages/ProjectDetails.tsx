import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import { FiChevronsRight } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useEffect } from "react";
const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const currentProjecct = projects[currentIndex];

  const prevProjecct = projects[currentIndex - 1];
  const nextProjecct = projects[currentIndex + 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!currentProjecct) return <div>Service not found!</div>;

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Project Details"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Project Details" }]}
      />

      {/************* project details section start here **************/}
      <section className="section-gap">
        <Container className="flex flex-col gap-[30px]">
          <div className="relative">
            <img
              className="w-full md:h-[450px] h-[380px] lg:h-[550px] 2xl:h-[580px] rounded-[10px] object-cover"
              src={currentProjecct?.image}
              alt="project"
            />

            <div className="bg-white w-max rounded-[20px] shadow md:p-[30px] p-5 2xl:p-10 md:space-y-5 space-y-3 absolute md:right-5 right-2 md:bottom-5 bottom-2">
              <h3>Project Information</h3>

              <div className="md:space-y-5 space-y-3">
                <p>
                  <span className="text-[18px] font-primary text-secondaryColor font-bold mr-2">
                    Catagory:
                  </span>{" "}
                  {currentProjecct?.category}
                </p>
                <p>
                  <span className="text-[18px] font-primary text-secondaryColor font-bold mr-2">
                    Start Date:
                  </span>{" "}
                  {currentProjecct?.startDate}
                </p>

                <p>
                  <span className="text-[18px] font-primary text-secondaryColor font-bold mr-2">
                    Location:
                  </span>{" "}
                  {currentProjecct?.location}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-8">
                <h5>Share:</h5>
                <div className="flex gap-3">
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
            </div>
          </div>

          <div>
            <h2>{currentProjecct?.title}</h2>

            <div className="flex flex-col gap-5 mt-5">
              {currentProjecct.content?.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {currentProjecct?.content?.subSections?.map((section, index) => (
            <div key={index}>
              <h3 className="mb-5">{section.title}</h3>

              {/* Paragraph rendering (if any) */}
              {Array.isArray(section.paragraphs) &&
                section.paragraphs.length > 0 &&
                section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`${
                      Array.isArray(section.points) && section.points.length > 0
                        ? "mt-[30px]"
                        : "mt-5"
                    }`}
                  >
                    {p}
                  </p>
                ))}

              {/* Points rendering (if any) */}
              {Array.isArray(section.points) && section.points.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[30px] gap-5">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FiChevronsRight className="text-[#E5E8F2] w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-textColor text-[16px] font-normal leading-7 font-secondary tracking-[-0.36px]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-[30px] flex flex-col md:flex-row gap-[30px]">
            {currentProjecct?.content?.gallery?.map((imageSrc, index) => (
              <div key={index}>
                <img
                  className="w-full h-auto object-contain rounded-[20px]"
                  src={imageSrc}
                  alt={`gallery-image-${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* pagination part */}
          <div className="bg-white md:mt-[60px] mt-10 rounded-[20px] shadow-navbar-shadow md:px-10 px-5 h-[90px] flex justify-between items-center">
            {/* left */}
            <div className="flex items-center gap-3">
              <div>
                <button
                  disabled={!prevProjecct}
                  onClick={() => navigate(`/project/${prevProjecct?.slug}`)}
                  className={`w-12 h-12 rounded-full flex justify-center items-center duration-300 ease-in-out cursor-pointer ${
                    prevProjecct
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
                  disabled={!nextProjecct}
                  onClick={() => navigate(`/project/${nextProjecct?.slug}`)}
                  className={`w-12 h-12 rounded-full flex justify-center items-center duration-300 ease-in-out cursor-pointer ${
                    nextProjecct
                      ? "bg-sectionBg text-secondaryColor hover:bg-primaryBlue hover:text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <GoArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProjectDetails;
