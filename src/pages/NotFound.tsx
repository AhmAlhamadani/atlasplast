import { Link } from "react-router-dom"
import Container from "../components/common/Container"
import error from "../assets/error/404.svg"
const NotFound = () => {
  return (
    <section className='section-gap'>
    <Container>
      <div className='flex flex-col items-center justify-center'>
        <img className='w-[400px] h-[320px] object-contain' src={error} alt='error image'/>
         <h2 className='mt-10 mb-3'>Oops...That link is broken.
         </h2>
         <p>Sorry for the inconvenience. Go to our homepage to check out our latest collections.</p>
         <Link to={'/'} className="mt-10 bg-primary px-10 py-4 rounded-[30px] text-white text-[16px] font-semibold border-[1px] border-primary hover:bg-transparent hover:text-primary duration-300 ease-in-out cursor-pointer font-primary">Return Home </Link>
      </div>
    </Container>
  </section>
  )
}

export default NotFound