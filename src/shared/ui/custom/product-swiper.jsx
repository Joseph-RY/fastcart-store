import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/features/product/productSlice";
import { addProductToCart } from "@/features/cart/cartSlice";
import { toast } from "sonner";
import WishlistButton from "./wishlist-button";
import Rates from "@shared/ui/custom/rates";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Button } from "../kit/button";
import { Link } from "react-router-dom";
import "@/app/styles/swiper-product.css";

const ProductSwiper = ({ slideCount }) => {
  const data = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleAddToCart = (id) => {
    const isAuth = Boolean(localStorage.getItem("access_token"));
    if (!isAuth) {
      toast.error("Please log in to add items to cart.");
      return;
    }

    if (id) {
      dispatch(addProductToCart(id));
    } else {
      console.warn("Invalid id for adding to cart:", id);
    }
  };

  return (
    <div>
      <Swiper
        loop={data.length >= 8}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: slideCount,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper2"
      >
        {data.map((e) => (
          <SwiperSlide key={e.id} className="!bg-white flex-col gap-2 md:!items-start">
            <div className="group bg-[#f5f5f5] w-full h-[250px] p-1 relative rounded-[4px] overflow-hidden">
              <div className="w-[90%] absolute top-[10px] left-[10px] flex justify-between items-start">
                <div className="min-h-[30px]">
                  <div className="inline-block py-1 px-2 rounded-[5px] text-white font-medium bg-[#db4444]">
                    <p>-40%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <div className="p-2 bg-white hover:bg-black hover:text-white rounded-full cursor-pointer transition-color duration-300">
                    <Link to={`/info/${e.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    <WishlistButton id={e.id} />
                  </div>
                </div>
              </div>

              <img className="w-full h-full object-cover rounded-[4px]" src={`https://store-api.softclub.tj/images/${e.image}`} alt={e.productName} />

              <Button onClick={() => handleAddToCart(e.id)} className="hidden group-hover:block absolute bottom-0 left-0 w-full z-10 bg-black hover:bg-[#000] text-white rounded-tl-none rounded-tr-none rounded-bl-[4px] rounded-br-[4px] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                Add to Cart
              </Button>
            </div>
            <div className="space-y-1 font-semibold text-sm md:text-base">
              <h3 className="text-gray-900 truncate">{e.productName}</h3>
              <div className="flex items-center gap-2">
                <p className="text-[#DB4444] text-base md:text-lg font-bold">${e.discountPrice}</p>
                <p className="line-through text-gray-500 text-sm">${e.price}</p>
              </div>
              <Rates />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
