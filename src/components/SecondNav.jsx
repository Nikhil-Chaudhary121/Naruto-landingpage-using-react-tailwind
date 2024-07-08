import { FaHouse } from "react-icons/fa6";
const SecondNav = () => {
  return (
    <header className=" w-full absolute z-10  px-16">
      <nav className=" w-full  flex justify-between items-center ">
        <h1 className=" text-2xl font-montserrat ">emiamlwt</h1>
        <div className="  w-full flex justify-end items-center gap-12 ">
          <h1 className=" text-2xl font-montserrat ">My list</h1>
          <h1 className=" text-2xl font-montserrat ">Recently Added</h1>
          <h1 className=" text-2xl font-montserrat ">Originals</h1>
          <h1 className=" text-2xl font-montserrat ">Films</h1>
          <h1 className=" text-2xl font-montserrat ">Home</h1>
          <FaHouse className=" text-3xl" />
        </div>
      </nav>
    </header>
  );
};

export default SecondNav;
