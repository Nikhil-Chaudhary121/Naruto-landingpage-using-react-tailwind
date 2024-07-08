import Button from "../components/Button";
import SecondNav from "../components/SecondNav";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import Card from "../components/Card";
const MiddlePage = () => {
  return (
    <section className=" relative w-full">
      <div className=" w-full ">
        <SecondNav />
      </div>
      <div className=" w-full pt-8 flex flex-col justify-center gap-32 items-center xl:flex-row">
        <div className=" absolute bottom-[18rem] left-10">
          <div className="">
            <div className=" h-4 w-40 bg-black"></div>
            <h1 className=" mt-11 relative font-montserrat text-4xl">
              <span className=" text-8xl">01/</span>
              <span className=" absolute left-[140px] ">10</span>
            </h1>
          </div>
        </div>
        <div>
          {" "}
          <img src="./2nd.png" className=" relative " width={800} alt="" />
        </div>
        <div className=" -mt-32 flex flex-col gap-10 justify-start items-start ">
          <div className=" flex justify-center items-center gap-4">
            <div className=" h-4 w-4 rounded-full bg-black"></div>
            <div className=" h-4 w-4 rounded-full bg-slate-gray"></div>
            <div className=" h-4 w-4 rounded-full bg-slate-gray"></div>
          </div>
          <div className=" flex gap-8 items-center justify-center">
            <h1 className=" text-3xl">#1</h1>
            <h1 className=" text-2xl font-semibold">series worldwide</h1>
            <div className=" flex gap-1 ">
              <FaStar className=" text-2xl" />
              <FaStar className=" text-2xl" />
              <FaStar className=" text-2xl" />
              <FaStar className=" text-2xl" />
              <FaStar className=" text-2xl" />
            </div>
          </div>
          <h1 className="  mt-6 font-bold text-4xl font-montserrat">
            NARUTO SHIPPUDEN
          </h1>
          <div className=" mt-11 flex justify-start items-center gap-4">
            <Button content={"PLAY"} />
            <Button
              content={"MY LIST"}
              backgroundColor={"bg-white"}
              icon={<MdDone className=" text-2xl text-black" />}
            />
            <CiHeart className=" text-[40px] ml-2" />
          </div>
        </div>
      </div>
      <div className=" gap-4 bottom-0 absolute w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <Card
          botR={"NARUO: episode 1"}
          topR="Add to playlist "
          img="./card-1.webp"
        />
        <Card
          topL={"Symopsis :"}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis assumenda pariatur voluptatem minus earum quisquam nulla, molestiae distinctio, nesciunt omnis qui nobis reiciendis alias."
        />
        <Card
          topL={"Actors :"}
          des="Naruto Uzumaki, Sasuke Uchiha, Itachi Uchiha, Madra Uchiha, Kakashi Hatake, Nagato Uzumaki"
        />
        <Card btn={"yes"} botR={"Season 1"} img={"./card-4.webp"} />
      </div>
    </section>
  );
};

export default MiddlePage;
