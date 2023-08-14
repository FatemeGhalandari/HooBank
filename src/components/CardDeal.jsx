import React from "react";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => (
  <section className="flex flex-col md:flex-row py-6 sm:py-16  w-full">
    <div className="flex flex-1 flex-col justify-center items-start">
      <h2 className="font-poppins font-semibold text-[40px] sm:text-[50px] text-white  xs:leading-[80px] leading-[70px]">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className="font-poppins font-normal text-[20px] text-dimWhite max-w-[470px]  leading-[30px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className="flex flex-1 ml-0 mt-10 md:ml-10 md:mt-0">
      <img src={card} alt="card" className="h-[100%] w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
