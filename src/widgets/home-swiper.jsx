import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

import "@/app/styles/swiper-home.css";

import mainSwaiperImg from "@shared/images/swiper-home.png";
import appleIcon from "@shared/images/apple-gray-logo.png";
import { Button } from "@shared/ui/kit/button";

const HomeSwiper = () => {
  return (
    <div className="w-full md:w-[77%]">
      <Swiper pagination={true} loop={true} modules={[Pagination]} className="bg-black">
        <SwiperSlide className="flex-col-reverse md:flex-row !justify-evenly">
          <div className="w-full md:w-[50%] text-white space-y-5 p-10">
            <div className="flex items-center gap-6">
              <div>
                <img src={appleIcon} alt="" />
              </div>
              <p>iPhone 14 Series</p>
            </div>
            <h2 className="text text-[50px] font-semibold spacing-[4px]">
              Up to 10% <br /> off Voucher
            </h2>
            <div className="flex gap-3 items-center">
              <Button variant="link" className="!border-b-white !border-b-[2px] text-white text-[20px]">
                Show Now
              </Button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
          <div className="w-[70%] pt-10 md:pt-0 md:w-[40%]">
            <img src={mainSwaiperImg} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex-col-reverse md:flex-row !justify-evenly">
          <div className="w-full md:w-[50%] text-white space-y-5 p-10">
            <div className="flex items-center gap-6">
              <div>
                <img src={appleIcon} alt="" />
              </div>
              <p>iPhone 14 Series</p>
            </div>
            <h2 className="text text-[50px] font-semibold spacing-[4px]">
              Up to 10% <br /> off Voucher
            </h2>
            <div className="flex gap-3 items-center">
              <Button variant="link" className="!border-b-white !border-b-[2px] text-white text-[20px]">
                Show Now
              </Button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
          <div className="w-[70%] pt-10 md:pt-0 md:w-[40%]">
            <img src={mainSwaiperImg} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex-col-reverse md:flex-row !justify-evenly">
          <div className="w-full md:w-[50%] text-white space-y-5 p-10">
            <div className="flex items-center gap-6">
              <div>
                <img src={appleIcon} alt="" />
              </div>
              <p>iPhone 14 Series</p>
            </div>
            <h2 className="text text-[50px] font-semibold spacing-[4px]">
              Up to 10% <br /> off Voucher
            </h2>
            <div className="flex gap-3 items-center">
              <Button variant="link" className="!border-b-white !border-b-[2px] text-white text-[20px]">
                Show Now
              </Button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
          <div className="w-[70%] pt-10 md:pt-0 md:w-[40%]">
            <img src={mainSwaiperImg} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
