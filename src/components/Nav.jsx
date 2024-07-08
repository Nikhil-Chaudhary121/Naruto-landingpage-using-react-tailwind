import { IoSearch } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
const Nav = () => {
  return (
    <header className=" absolute z-10 w-full px-24">
      <nav className="flex w-full justify-between items-center ">
        <div>
          <CiMenuFries className="text-[60px] leading-[62px] font-bold" />
        </div>
        {/* <h1 className="text-white text-4xl font-bold">Icon</h1> */}
        <img src={"./nav-logo.png"} alt="" />
        <div>
          <IoSearch className=" text-[60px] leading-[62px] font-bold" />
        </div>
        {/* <h1 className="text-white text-4xl font-bold">{}</h1> */}
      </nav>
    </header>
  );
};

export default Nav;
