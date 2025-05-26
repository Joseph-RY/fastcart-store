import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/entities/category/categorySlice";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "@/app/styles/swiper-product.css";

const CategorySwiper = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categories.data);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {data.map((e) => {
          return (
            <SwiperSlide key={e.id} className="w-44 h-45 p-4 rounded-2xl border border-gray-100 shadow-md bg-white flex flex-col items-center justify-between">
              <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 shadow">
                <img src={`https://store-api.softclub.tj/images/${e.categoryImage}`} alt={e.categoryName} className="max-w-full max-h-full object-contain" />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-gray-900 leading-snug min-h-[2.5rem] line-clamp-2">{e.categoryName}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
