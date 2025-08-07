import hero1 from "../../assets/hero/hero-1.png"
import hero2 from "../../assets/hero/hero-2.png"
import hero3 from "../../assets/hero/hero-3.png"
import left from "../../assets/hero/left.png"
import right from "../../assets/hero/right.png"
import icon from "../../assets/hero/icon-1.png"
import shape from "../../assets/hero/border-shape.svg"

import Container from "../common/Container"
import Button from "../common/Button"
import MarqueBanner from "./MarqueBanner"
const Banner = () => {
  return (
   <div className="lg:mb-[180px] md:mb-[140px] mb-[60px]">
     <div
    className="relative bg-[#F2F4F8]"
  >
      
    <Container className="md:pt-[120px] pt-5 2xl:pt-[160px] md:pb-[160px] pb-16">
        <div className="md:flex items-center gap-5 z-10 relative pt-[112px]">
            <div className="max-w-[300px] relative">
            <img className="w-full h-auto transform  rotate-[-5deg] rounded-[20px]" src={hero1} alt="Putech image" />
             <img className="absolute left-[-10px] top-1/2 -translate-y-1/2" src={shape} alt="shape" />
            </div>
              <div className="max-w-[500px] md:mt-[-50px] mt-10 ml-2">
              <h1 className="uppercase">Creativity Meets Strategy </h1>
              <p className="text-[16px] font-bold leading-7 max-w-[392px] mt-5 lg:hidden block">Elevate Your Brand with Inspired Design Financial planners help people to gain knowledge about to is invest and save their money Elevate</p>
              <Button className="mt-4">
              Get Started
              </Button>
              </div>

             <div className="lg:block hidden">
             <div className="flex items-center gap-5 lg:ml-[-260px] xl:ml-[-170px] lg:mt-[-100px]">
                 <img src={icon} alt="" />
                <p className="xl:text-[16px] text-[14px] font-bold leading-7 max-w-[392px]">Elevate Your Brand with Inspired Design Financial planners help people to gain knowledge about to is invest and save their money Elevate</p>
             </div>
             </div>
        </div>


         
    </Container>

    {/* shape bg */}
    <div>
    <img className="absolute left-0 bottom-0 z-0" src={left} alt="" />
    <img className="absolute right-0 top-0 z-0" src={right} alt="" />
    </div>
 
  </div>

   
    <div className="relative">
  <MarqueBanner />
  {/* Positioned image group */}
  <div className="absolute inset-x-0 z-10 md:block hidden">
    <Container className="relative">
      <div className="absolute -bottom-20 right-0 flex gap-4 justify-end">
        <img
          className="lg:w-[290px] w-[200px] lg:h-[380px] h-[310px] object-contain rounded-[20px]"
          src={hero2}
          alt="putech image"
        />
        <img
          className="lg:w-[250px] w-[160px] h-[365px] mt-[-30px] object-contain rounded-[20px]"
          src={hero3}
          alt="putech image"
        />
      </div>
    </Container>
  </div>
</div>



    
   
   </div>
  )
}

export default Banner