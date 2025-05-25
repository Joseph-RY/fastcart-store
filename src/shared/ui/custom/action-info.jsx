import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, addToWishlist } from "@/features/product/productSlice";
import { Button } from "@shared/ui/kit/button";
import { addProductToCart } from "@/features/cart/cartSlice";
import { toast } from "sonner";

const ActionInfo = () => {
  const product = useSelector((state) => state.products.product);
  const wishlistData = useSelector((state) => state.products.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

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

  const handleAddToCart = () => {
    if (!isAuthorized) return showAuthToast();
    dispatch(addProductToCart(product.id));
    toast.success("Added to cart");
  };

  const handleAddToWishlist = () => {
    if (!isAuthorized) return showAuthToast();
    dispatch(addToWishlist(product.id));
  };

  const isLiked = wishlistData.includes(product.id);

  return (
    <div className="flex gap-4">
      <Button onClick={handleAddToCart} className="text-base font-semibold h-[40px]">
        Add To Cart
      </Button>

      <Button onClick={handleAddToWishlist} className={`h-10 bg-transparent text-black hover:text-white transition-colors duration-200 ${isLiked ? "bg-[#DB4444] text-white hover:bg-[#B33333]" : ""}`} aria-label="Add to wishlist">
        <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </Button>
    </div>
  );
};

export default ActionInfo;
