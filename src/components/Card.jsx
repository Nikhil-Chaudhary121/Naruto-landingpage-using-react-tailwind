import { FaCaretDown } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
const Card = ({ img, topR, topL, des, btn, botR }) => {
  return (
    <div className="relative h-56 w-full">
      {img && (
        <img src={img} alt="card" className="h-full w-full object-cover" />
      )}
      <div className=" absolute h-full w-full opacity-[0.6]  bg-zinc-900 z-10 top-0 left-0"></div>
      <div className=" px-6 py-4 w-full z-20 top-0 left-0 h-full absolute flex flex-col items-center justify-start">
        <div className=" w-full flex justify-between items-center">
          <h1 className="text-white text-xl flex items-center gap-2 font-montserrat font-normal opacity-80 ">
            {topL && topL}
          </h1>
          <h1 className="text-white text-xl flex items-center gap-2 font-montserrat font-normal opacity-80 ">
            {topR && topR}
            {topR && <FaCaretDown />}
          </h1>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className=" text-center font-montserrat text-lg leading-7 text-white">
            {des && des}
            {!des && !btn && (
              <FaRegCirclePlay className="text-white text-[60px]" />
            )}
            {!des && btn && (
              <FaRegCirclePlay className=" text-red-500 text-[90px] mt-10 " />
            )}
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-xl flex items-center gap-2 font-montserrat font-normal opacity-80 ">
            {botR && botR}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
