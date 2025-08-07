import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  message: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  message,
}) => {
  return (
    <div className="px-3 pb-10">
      <div className="w-full bg-sectionBg border border-secondaryColor rounded-[20px] md:px-10 px-5 md:py-[30px] py-5">
        <p className="text-[22px] font-normal leading-[34px]">{message}</p>
        <div className="flex items-center gap-4 mt-[30px]">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h4 className="text-[22px]">{name}</h4>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
