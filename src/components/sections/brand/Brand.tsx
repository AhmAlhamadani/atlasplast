import Container from "../../common/Container"
import { companyLogos, type CompanyLogo } from "../../../data/companyData.ts"
import Marquee from "react-fast-marquee"

const Brand = () => {
  return (
   
        <Container className="section-gap">
         <section className="rounded-[20px] md:py-[50px] py-[30px] bg-sectionBg px-4">
         <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
        >
          {companyLogos.map((company: CompanyLogo) => (
            <div key={company.id} className="mx-[55px] min-w-[120px]">
              <img
                src={company.image}
                alt={`Company ${company.id}`}
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
         </section>
      </Container>
   
  )
}

export default Brand