import { IoSearchOutline } from "react-icons/io5"

const BlogSearch = () => {
  return (
    <div className="bg-white shadow-navbar-shadow rounded-[10px] border-t border-primaryBorder md:p-10 p-7">
    <form className="relative">
    <input type="text" className=" bg-[#F2F4F8] w-full rounded-[30px] pl-5 h-[60px] text-[16px] border-[1px] border-[#F2F4F8] text-secondaryColor font-primary outline-0 hover:border-primaryBlue focus:border-primaryBlue duration-300 ease-in-out" placeholder="Search.." />
      <span><IoSearchOutline className="text-[24px] text-primaryBlue absolute top-5 right-5" /> </span>
    </form>
</div>
  )
}

export default BlogSearch