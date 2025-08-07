/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useState } from "react";
import author1 from "../../assets/testimonial/author-1.png"
import author2 from "../../assets/testimonial/author-2.png"
import author3 from "../../assets/testimonial/author-3.png"
import { useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

const testimonials = [
    {
      id: 1,
      name: "Floyd Miles",
      role: "Marketing Coordinator",
      image: author1,
      message:
        "Technology is constantly evolving, shaping the way we live and work. It encompasses innovation, automation, and connectivity, driving progress forward",
    },
    {
      id: 2,
      name: "Esther Howard",
      role: "Manager",
      image: author2,
      message:
        "Technology is constantly evolving, shaping the way we live and work. It encompasses innovation, automation, and connectivity, driving progress forward",
    },
    {
      id: 3,
      name: "Cody Fisher",
      role: "Medical Assistant",
      image: author3,
      message:
        "Technology is constantly evolving, shaping the way we live and work. It encompasses innovation, automation, and connectivity, driving progress forward",
    },
    {
      id: 4,
      name: "Leslie Murphy",
      role: "Project Lead",
      image: author1,
      message:
        "Technology is constantly evolving, shaping the way we live and work. It encompasses innovation, automation, and connectivity, driving progress forward",
    },
  ];


const ClientTestimonial = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/home-two";

  
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: "60px",
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        dots: true,
        afterChange: (index: number) => setCurrentSlide(index),
        appendDots: (dots: any) => (
          <div>
            <ul className="flex justify-center items-center gap-5">
              {dots}
            </ul>
          </div>
        ),
       
        customPaging: (i: number) => (
          <div className="w-10 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-blue-600 w-full" : "bg-gray-300 w-0"
              }`}
            ></div>
          </div>
        ),
       
        
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: "60px",
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: "50px",
            },
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "60px",
            },
          },


          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "0px",
            },
          },
        ],
      };
      
  
    return (
    <div className={cn("bg-sectionBg lg:py-[120px] md:py-20 py-15", { "section-gap": !isContactPage })}>
        <Container>
        <SectionTitle
        label="Clients Testimonial"
        title="Whats Clients Say"
        align="center"
      />
        </Container>

        <div className="md:mt-15 mt-12">

        <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="px-3 pb-10">
            <div className="w-full bg-sectionBg border border-secondaryColor rounded-[20px] md:px-10 px-5 md:py-[30px] py-5">
              <p className="text-[22px] font-normal leading-[34px]">{item.message}</p>
              <div className="flex items-center gap-4 mt-[30px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[22px]">{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

        </div>
    </div>
  )
}

export default ClientTestimonial