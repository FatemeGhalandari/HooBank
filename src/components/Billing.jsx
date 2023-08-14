import React from "react";
import { apple, bill, google } from "../assets";
const Billing = () => (
  <section
    id="Billing"
    className="flex flex-col-reverse md:flex-row py-6 sm:py-16"
  >
    <div className="flex  flex-1 relative justify-center items-center mt-10 mr-0 md:mr-10 md:mt-0">
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="white__gradient absolute rounded-full top-0 -left-1/2 w-[50%] h-[50%] z-[3]" />
      <div className="pink__gradient absolute rounded-full bottom-0 -left-1/2 w-[50%] h-[50%] z-[0]" />
    </div>
    <div className="flex flex-1 flex-col justify-center items-start">
      <h2 className="font-poppins font-semibold text-white text-[40px] sm:text-[48px] xs:leading-[80px] leading-[67px] w-full ">
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] max-w-[470px] mt-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row mt-5 sm:mt-10 flex-wrap">
        <img src={apple} alt="apple" className="w-[128px] h-[42px] mr-5 cursor-pointer" />
        <img src={google} alt="google" className="w-[128px] h-[42px] cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
