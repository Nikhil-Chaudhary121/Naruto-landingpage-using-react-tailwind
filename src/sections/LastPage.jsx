import { BiDownArrow } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const LastPage = () => {
  return (
    <section className=" relative w-full">
      <div className=" relative flex w-full ">
        <img
          src="./lastpage.jpg"
          alt=""
          className=" w-[55%] h-screen object-cover left-bg"
        />
        <div className=" absolute py-20  w-[100%] flex flex-col  h-screen bg-white right-bg  ">
          <div className="w-full flex pr-20 justify-end gap-48">
            <FaFacebook className=" text-4xl" />
            <FaInstagram className=" text-4xl" />
            <FaYoutube className=" text-4xl" />
          </div>
          <div className=" w-full flex justify-end ">
            <div className="mt-60">
              <div className="h-[250px] w-[1200px] justify-center items-center flex flex-col  banner-bg bg-gray-300">
                <h1 className=" -ml-20 text-3xl leading-none font-montserrat">
                  Rs 33.000
                </h1>
                <h1 className=" text-3xl leading-normal font-montserrat">
                  stander edition
                </h1>
                <BiDownArrow className=" ml-40 mt-10 text-2xl" />
              </div>
              <div className=" absolute right-20 top-[17rem]">
                <img src="./banner.webp" className=" w-[18rem]" alt="" />
              </div>
              <div className=" flex flex-col justify-end items-end px-12 mt-80 ">
                <h1 className="text-3xl font-montserrat flex items-center gap-4">
                  Only on{" "}
                  <span className="font-bold text-4xl text-red-600">
                    NETFLIX
                  </span>
                </h1>
                <button className=" px-8 py-2 mr-52 mt-6 text-white font-semibold bg-red-600">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <img
          src="./kid.png"
          className=" absolute  z-20 top-[50%] h-[780px] left-[35%] translate-y-[-50%] translate-x-[-50%]"
          alt=""
        />
      </div>
    </section>
  );
};

export default LastPage;
