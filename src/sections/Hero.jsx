import { FaChevronDown } from "react-icons/fa";
const Hero = () => {
  return (
    <section className=" relative w-full px-20 min-h-screen flex justify-center items-center flex-col xl:flex-row gap-6">
      <div className=" relative xl:w-3/5 -bottom-40 flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40">
        <img src="./hero.png" width={1000} height={880} alt="" />
      </div>
      <div className="relative -bottom-40 flex flex-col justify-center items-start ">
        <h1 className=" font-montserrat font-bold text-4xl">
          NARUTO SHIPPUDEN
        </h1>
        <p className="mt-8 info-text">
          Naruto is a manga series by Masashi Kishimoto which <br />
          was adapted into a anime series. The Naruto manga <br /> tells the
          story of the life of main character, Naruto <br /> Uzumaki, a
          hyperactive ninja
        </p>
      </div>
      <div className=" absolute bottom-0 right-0">
        <FaChevronDown className=" text-4xl" />
      </div>
    </section>
  );
};

export default Hero;
