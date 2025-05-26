import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "@/app/styles/swiper-info.css";

import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/features/product/productSlice";
import { useParams } from "react-router";

const InfoSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  const images = useSelector((state) => state.products.product?.images ?? []);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center max-h-[600px] h-[600px] justify-between gap-4">
      <div className="w-[15%] h-[50vh] flex flex-col">
        <Swiper onSwiper={setThumbsSwiper} direction="vertical" spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="flex-1 hidden md:block">
          {images.map((e) => (
            <SwiperSlide key={e.id}>
              <img src={`https://store-api.softclub.tj/images/${e.images}`} alt="" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[85%]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className=""
        >
          {images.map((e) => (
            <SwiperSlide key={e.id}>
              <img src={`https://store-api.softclub.tj/images/${e.images}`} alt="" className="w-full h-full object-cover" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InfoSwiper;
