import React, { useEffect } from "react";
import Roadmap from "@shared/ui/custom/roadmap";
import FilterSidebar from "@/widgets/filter-sidebar";
import Rates from "@shared/ui/custom/rates";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getProduct } from "@/features/product/productSlice";
import { Button } from "@shared/ui/kit/button";
import { addProductToCart } from "@/features/cart/cartSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import WishlistButton from "@shared/ui/custom/wishlist-button";

const Products = () => {
  const data = useSelector((state) => state.products.data);
  const wishlistData = useSelector((state) => state.products.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const isAuthorized = Boolean(localStorage.getItem("access_token"));

  const showAuthToast = () => {
    toast.error("", {
      description: (
        <span className="text-[16px] text-gray-400">
          Please{" "}
          <span className="underline text-red-500 hover:text-red-800 cursor-pointer" onClick={() => navigate("/login")}>
            log in
          </span>{" "}
          to use this feature.
        </span>
      ),
      duration: 4000,
    });
  };

  const handleAddToCart = (id) => {
    if (!isAuthorized) return showAuthToast();
    dispatch(addProductToCart(id));
    toast.success("Added to cart");
  };

  const handleAddToWishlist = (e) => {
    if (!isAuthorized) return showAuthToast();

    const alreadyInWishlist = wishlistData.some((p) => p.id === e.id);
    dispatch(addToWishlist(e));
    toast.success(alreadyInWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <Roadmap road="Home" page="Explore Our Products" />
      <div className="flex flex-col justify-between md:flex-row gap-[30px] items-start">
        <div className="w-full md:w-[20%]">
          <FilterSidebar />
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-3">
          <div className="flex flex-wrap gap-5 ">
            {data.map((e) => {
              const isLiked = wishlistData?.some((p) => p.id === e.id);

              return (
                <div key={e.id} className="w-full md:w-[30%] flex flex-col gap-2 md:items-start">
                  <div className="group bg-[#f5f5f5] w-full h-[250px] p-1 relative rounded-[4px] overflow-hidden">
                    <div className="w-[90%] absolute top-[10px] left-[10px] flex justify-between items-start">
                      <div className="min-h-[30px]">
                        <div className="inline-block py-1 px-2 rounded-[5px] text-white font-medium bg-[#db4444]">
                          <p>-40%</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                        <div className="p-2 bg-white rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
