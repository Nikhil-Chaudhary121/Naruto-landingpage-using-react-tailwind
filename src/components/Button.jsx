import { FaPlay } from "react-icons/fa";
const Button = ({
  backgroundColor,
  textColor,
  icon,
  borderColor,
  borderSize,
  content,
}) => {
  return (
    <button
      className={`flex font-semibold items-center gap-2 py-2 px-4 border-2 border-black ${
        backgroundColor ? " bg-white text-black" : "bg-black text-white"
      } `}
    >
      {icon && icon}
      {!icon && <FaPlay />}
      {content}
    </button>
  );
};

export default Button;
