import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "@/features/product/productSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const WishlistButton = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistData = useSelector((state) => state.products.wishlist);
  const isAuthorized = Boolean(localStorage.getItem("access_token"));

  const isLiked = wishlistData.includes(id);

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
      duration: 2000,
    });
  };

  const handleToggleWishlist = () => {
    if (!isAuthorized) return showAuthToast();
    dispatch(addToWishlist(id));
  };

  return (
    <div
      onClick={handleToggleWishlist}
      className={`
    p-2 rounded-full cursor-pointer transition-colors duration-300
    ${isLiked ? "bg-[#DB4444] text-white" : "bg-white text-black"}
    hover:bg-[#DB4444] hover:text-white
  `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    </div>
  );
};

export default WishlistButton;
