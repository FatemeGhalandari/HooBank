import { discount } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className=" flex-1 items-start justify-center flex flex-col xl:px-0 sm:px-16 px-6">
      <div className="flex rounded-[10px] mb-2 flex-row items-center bg-discount-gradient py-[6px] px-4 ">
        <img src={discount} alt="discount " className="w-[32px] h-[32px]" />
        <p className="font-poppins font-normal text-dimWhite ml-2 text-[18px] leading-[30px]">
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 text-white font-poppins font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px]">
          The Next <br className=" sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
