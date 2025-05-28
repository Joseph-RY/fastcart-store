import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategorySidebar from "@/widgets/category-sidebar";
import CategorySwiper from "@/widgets/category-swiper";
import HomeSwiper from "@/widgets/home-swiper";
import Banner from "@/widgets/banner";
import Grid from "@/widgets/grid";
import Title from "@shared/ui/custom/title";
import Rates from "@shared/ui/custom/stars";
import { Button } from "@shared/ui/kit/button";
import Services from "@shared/ui/custom/services";
import ProductSwiper from "@shared/ui/custom/product-swiper";
import WishlistButton from "@shared/ui/custom/wishlist-button";
import { getProduct } from "@/entities/product/productSlice";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const data = useSelector((state) => state.products.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = new Date("2025-06-10T23:59:59").getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: days > 0 ? days : 0,
      hours: hours > 0 ? hours : 0,
      minutes: minutes > 0 ? minutes : 0,
      seconds: seconds > 0 ? seconds : 0,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleAddToCart = (id) => {
    const isAuth = Boolean(localStorage.getItem("access_token"));
    if (!isAuth) {
      toast.error("", {
        description: (
          <span className="text-[16px] text-gray-400">
            Please{" "}
            <span className="underline text-red-500 hover:text-red-800 cursor-pointer" onClick={() => navigate("/login")}>
              log in
            </span>{" "}
            to add items to cart.
          </span>
        ),
        duration: 2000,
      });
      return;
    }

    if (id) {
      dispatch(addProductToCart(id));
    } else {
      console.warn("Invalid id for adding to cart:", id);
    }
  };

  return (
    <div className="space-y-10 px-[0px] md:px-[10%]">
      <section className="flex flex-col md:flex-row justify-between space-y-5">
        {/* <div className="md:hidden py-[10px] px-[5%] mx-[5%] md:mx-0 bg-[#F5F5F5] rounded-[4px] flex justify-between items-center">
          <input className="bg-transparent border-none outline-none w-[80%]" type="text" placeholder="Search..." />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div> */}
        <CategorySidebar />
        <HomeSwiper />
      </section>
      <section className="space-y-5 px-3 md:px-0">
        <div>
          <Title label="Today`s" title=" " />
          <div className="flex md:items-center md:gap-20 md:flex-row flex-col m-auto">
            <h2 className="text-4xl font-semibold">Flash Sales</h2>
            <div className="flex items-center gap-5">
              <div className="text-start">
                <h2 className="text-[15px] font-bold">Days</h2>
                <h2 className="text-4xl font-bold">{timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days}</h2>
              </div>
              <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
              <div className="text-start">
                <h2 className="text-[15px] font-bold">Hours</h2>
                <h2 className="text-4xl font-bold">{timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours}</h2>
              </div>
              <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
              <div className="text-start">
                <h2 className="text-[15px] font-bold">Minutes</h2>
                <h2 className="text-4xl font-bold">{timeLeft.minutes <= 9 ? `0${timeLeft.minutes}` : timeLeft.minutes}</h2>
              </div>
              <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
              <div className="text-start">
                <h2 className="text-[15px] font-bold">Seconds</h2>
                <h2 className="text-4xl font-bold">{timeLeft.seconds <= 9 ? `0${timeLeft.seconds}` : timeLeft.seconds}</h2>
              </div>
            </div>
          </div>
        </div>
        <ProductSwiper slideCount={4} hasDiscount={true} textSide={"!text-start"} />
        <div className="flex justify-center">
          <Link to="/products">
            <Button className={"rounded-none py-2 px-3 w-[200px] h-11"}>View All Products</Button>
          </Link>
        </div>
      </section>
      <section className="space-y-5 px-3 md:px-0">
        <Title label="Categories" title="Browse By Category" />
        <CategorySwiper />
      </section>
      <section className="space-y-5 px-3 md:px-0">
        <Title label="This Month" title="Best Selling Products" />
        <ProductSwiper slideCount={4} hasDiscount={false} textSide={"!text-start"} />
      </section>
      <Banner />
      <section className="space-y-5 px-3 md:px-0">
        <Title label="Our Products" title="Explore Our Products" />
        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-5">
          {data?.slice(0, 8).map((e) => {
            return (
              <div key={e.id} className="!bg-white w-[90%] md:w-[20%] flex flex-col gap-2 md:!items-start">
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

                  <Button onClick={() => handleAddToCart(e.id)} className="hidden group-hover:block absolute bottom-0 left-0 w-full z-10 bg-black text-white rounded-tl-none rounded-tr-none rounded-bl-[4px] rounded-br-[4px] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
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
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link to="/products">
            <Button className={"rounded-none py-2 px-3 w-[200px] h-11"}>View All Products</Button>
          </Link>
        </div>
      </section>
      <section className="space-y-5 px-3 md:px-0">
        <Title label="Featured" title="New Arrival" />
        <Grid />
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between py-[10%]">
          <Services
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            }
            title="Free and fast delivery"
            text="Free delivery for all order as over $140"
          />
          <Services
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            }
            title="24/7 customer service"
            text="Friendly 24/7 customer support"
          />
          <Services
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            }
            title="Money back guard"
            text="We reurn money within 30 days"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
