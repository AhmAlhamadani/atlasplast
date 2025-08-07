import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  src: string;
  isActive: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, isActive, index }) => {
  return (
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

        <Link to="/project/leading-the-way-in-innovation">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[#E5E8F2] text-secondaryColor font-semibold rounded-full flex items-center justify-center text-sm transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
