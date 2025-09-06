import Marquee from "react-fast-marquee";

import brand1 from "../../../assets/brands/brand-1.png";
import brand2 from "../../../assets/brands/brand-2.png";
import brand3 from "../../../assets/brands/brand-3.png";
import brand4 from "../../../assets/brands/brand-4.png";
import brand5 from "../../../assets/brands/brand-5.png";
import brand6 from "../../../assets/brands/brand-6.png";
import brand7 from "../../../assets/brands/brand-7.png";
import brand8 from "../../../assets/brands/brand-8.png";
import brand9 from "../../../assets/brands/brand-9.png";
import brand10 from "../../../assets/brands/brand-10.png";
import brand11 from "../../../assets/brands/brand-11.png";
import brand12 from "../../../assets/brands/brand-12.png";
import brand13 from "../../../assets/brands/brand-13.png";
import brand14 from "../../../assets/brands/brand-14.png";
import brand15 from "../../../assets/brands/brand-15.png";

const items = [
  { logo: brand1 },
  { logo: brand2 },
  { logo: brand3 },
  { logo: brand4 },
  { logo: brand5 },
  { logo: brand6 },
  { logo: brand7 },
  { logo: brand8 },
  { logo: brand9 },
  { logo: brand10 },
  { logo: brand11 },
  { logo: brand12 },
  { logo: brand13 },
  { logo: brand14 },
  { logo: brand15 },
];

const Business = () => {
  return (
    <div className="bg-[#E5E8F2] overflow-hidden md:py-9 py-4">
      <Marquee speed={100} gradient={false}>
        <div className="flex gap-10 items-center mx-9">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img
                className="h-16 w-auto object-contain"
                src={item.logo}
                alt={`Company Logo ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Business;
