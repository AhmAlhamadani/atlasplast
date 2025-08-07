import Marquee from "react-fast-marquee"
import star from "../../assets/hero/star.svg"
const items = [
    { label: "Software development", icon: star },
    { label: "Content writing", icon: star  },
    { label: "UI/UX Design", icon: star },
    { label: "Web design", icon: star},
    { label: "Software development", icon: star },
    { label: "Content writing", icon: star  },
    { label: "UI/UX Design", icon: star },
  
  
  ];

const MarqueBanner = () => {
  return (
    <div className="bg-primaryBlue overflow-hidden h-[80px]">
      <Marquee speed={100} gradient={false}>
        <div className="flex gap-10 items-center mx-9">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-10">
                <img className="object-contain" src={item.icon} alt={item.label} />
              <h2 className="whitespace-nowrap text-white text-[40px] font-bold leading-20 tracking-[-1.08px] capitalize">
                {item.label}
              </h2>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueBanner