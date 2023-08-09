import React from "react";
import { stats } from "../constants";
const Stats = () => (
  <section className="flex flex-row flex-wrap justify-center items-center mb-6 sm:mb-20">
    {stats.map((stat) => (
      <div key={ stat.id} className="flex-1 flex flex-row justify-start items-center">
        <h4 className="font-poppins font-semibold text-white text-[30px] xs:text-[40px]">{stat.value}</h4>
        <p className=" font-poppins font-normal text-gradient text-[15px] xs:text-[20px] uppercase ml-3">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
