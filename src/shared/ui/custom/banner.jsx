import React from "react";
import { Button } from "../kit/button";
import jbl from "@shared/images/jbl.png";
import flash from "@shared/images/flash.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="px-4 md:px-15 bg-black w-full flex flex-col md:flex-row items-center md:justify-between gap-8 py-10">
      <div className="w-full md:w-[40%] space-y-6 text-center md:text-left">
        <p className="text-[#00FF66] font-semibold text-sm md:text-base">Categories</p>
        <h4 className="text-[28px] md:text-[48px] font-semibold text-[#FAFAFA] leading-tight">
          Enhance Your <br className="hidden md:block" /> Music Experience
        </h4>
        <div className="flex justify-center md:justify-start gap-4 md:gap-6 flex-wrap">
          <div className="w-15 h-15 bg-white rounded-full flex flex-col items-center justify-center">
            <p className="font-bold text-[14px]">23</p>
            <p className="text-[12px]">Hours</p>
          </div>
          <div className="w-15 h-15 bg-white rounded-full flex flex-col items-center justify-center">
            <p className="font-bold text-[14px]">05</p>
            <p className="text-[12px]">Days</p>
          </div>
          <div className="w-15 h-15 bg-white rounded-full flex flex-col items-center justify-center">
            <p className="font-bold text-[14px]">59</p>
            <p className="text-[12px]">Minutes</p>
          </div>
          <div className="w-15 h-15 bg-white rounded-full flex flex-col items-center justify-center">
            <p className="font-bold text-[14px]">35</p>
            <p className="text-[12px]">Seconds</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link to="/">
          <Button className="w-[150px] md:w-[170px] h-[50px] md:h-[56px] bg-[#00FF66] text-black hover:bg-[#00ff6696]">Buy Now!</Button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <div className="relative h-[300px] md:h-[450px] flex items-center justify-center">
          <img src={flash} alt="flash effect" className="absolute inset-0 w-full h-full object-contain opacity-70 blur-sm pointer-events-none" />
          <img src={jbl} alt="jbl speaker" className="relative z-10 max-h-[80%] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
