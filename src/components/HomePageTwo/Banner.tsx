import banner from "../../assets/hero/banner-1.jpg"
import dot from "../../assets/hero/effect-home-2.svg"
import Button from "../common/Button"
import Container from "../common/Container"
import author1 from "../../assets/hero/author-1.png"
import author2 from "../../assets/hero/author-2.png"
import author3 from "../../assets/hero/author-3.png"

const Banner = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative"
    style={{ backgroundImage: `url(${banner})` }}
    >
      
     <Container className="lg:py-[120px] md:py-20 py-15">
        <div className="flex gap-2 items-center mt-[100px]">
          <span className="text-white text-[16px] font-bold font-primary tracking-[2.56px] uppercase">IT tECHNOLOGY</span>
          <hr className="w-16 h-px text-white"/>
        </div>

          <div className="mt-2 max-w-[720px]">
             <h1 className="home-heading lg:text-[96px] md:text-[80px] text-[40px] font-bold text-white lg:leading-[96px] md:leading-[85px] leading-11 tracking-[-1.92px]">Where Ideas is Become Reality
             Empowering</h1>

              <p className="mt-7 text-white text-[20px] font-normal leading-7">Technology is constantly evolving, shaping the way we live and work. It encompasses innovation </p>
               <div className="mt-12">
                 <Button hoverBgColorClass="bg-primaryBlue" className="bg-transparent border border-white text-white hover:border-primaryBlue duration-300 ease-in-out">Get Started</Button>
               </div>
          </div>


   <div className="flex flex-col gap-2 p-5 bg-[#E5E8F2]/[0.18] rounded-[20px] max-w-fit ml-auto xl:mt-[-120px] md:mt-[-90px] mt-[30px] z-10 relative">
  {/* Avatar Group */}
  <div className="flex -space-x-3">
    <img
      className="w-12 h-12 rounded-full border-2 border-white"
      src={author1}
      alt="Avatar 1"
    />
    <img
      className="w-12 h-12 rounded-full border-2 border-white"
      src={author2}
      alt="Avatar 2"
    />
    <img
      className="w-12 h-12 rounded-full border-2 border-white"
      src={author3}
      alt="Avatar 3"
    />
  </div>

  {/* Text Content */}
  <div className="flex items-center gap-2">
    <h3 className="text-white font-semibold text-[39px] font-secondary">120K</h3>
    <p className="text-white text-[12px] leading-5 font-semibold">
      Healed happy patients <br /> from every corner of the world
    </p>
  </div>
</div>

       <div className="absolute bottom-0 right-0 z-0">
        <img className="w-full h-[250px] object-contain" src={dot} alt="dot" />
      </div>

     </Container>

     
     
    </div>
  )
}

export default Banner