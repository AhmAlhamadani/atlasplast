
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { EffectCoverflow } from "swiper/modules";
import SectionTitle from "../common/SectionTitle";
import image1 from "../../assets/projects/slider-1.png";
import image2 from "../../assets/projects/slider-2.png";
import image3 from "../../assets/projects/slider-3.png";
import image4 from "../../assets/projects/slider-4.png";
import image5 from "../../assets/projects/slider-5.jpg";
import { Link } from "react-router-dom";



const images = [image1, image2, image3, image4, image5];

const LatestProject = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  return (
    <div className="bg-sectionBg section-gap lg:py-[120px] md:py-[80px] py-[60px] overflow-hidden">
      <SectionTitle
        label="Latest Project"
        title="Your Tomorrow Enhanced Today Tech Forward"
        align="center"
      />

      <div className="md:pt-15 pt-12">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          slidesPerView={3}
          spaceBetween={10}
          loop
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {images.map((src, index) => {
            const isActive = index === activeSlide;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`px-3 md:px-1 group transition-all duration-300 ${
                    isActive ? "-translate-y-5" : ""
                  } overflow-visible`}
                >
                  <div
                    className={`relative rounded overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "border-[3px] border-primaryBlue"
                        : "border-[3px] border-transparent hover:border-primaryBlue"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      className="w-full xl:h-[500px] h-[450px] object-cover"
                    />

                  <Link to={'/project/leading-the-way-in-innovation'}>
                  <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[#E5E8F2] text-secondaryColor font-semibold rounded-full flex items-center justify-center text-sm transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      More
                    </div>
                  </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProject;

