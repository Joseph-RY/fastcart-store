import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/features/cart/cartSlice";
import { addToWishlist } from "@/features/product/productSlice";
import { Button } from "@shared/ui/kit/button";
import Title from "@shared/ui/custom/title";
import ProductSwiper from "@shared/ui/custom/product-swiper";
import { toast } from "sonner";
import WishlistButton from "@shared/ui/custom/wishlist-button";

const Wishlist = () => {
  const wishlistIds = useSelector((state) => state.products.wishlist);
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const wishes = wishlistIds.map((id) => products.find((p) => p.id.toString() === id.toString())).filter(Boolean);

  const handleAddToCart = (id) => {
    dispatch(addProductToCart(id));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <div className="px-[3%] md:px-[10%] space-y-10 py-10">
      <h5 className="text-[22px]">Wishlist ({wishes.length})</h5>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {wishes.map((e) => (
          <div key={e.id} className="w-full md:w-[25%] flex flex-col gap-3 md:items-start">
            <div className="group bg-[#f5f5f5] w-[90%] h-[250px] p-1 relative rounded-[4px]">
              <div className="w-[90%] absolute top-[10px] left-[10px] flex justify-between items-start">
                <div className="min-h-[30px]"></div>
                <div className="hidden group-hover:flex flex-col gap-3">
                  <WishlistButton id={e.id} />
                </div>
              </div>
              <img className="object-cover h-[100%] w-[100%]" src={`https://store-api.softclub.tj/images/${e.image}`} alt={e.productName} />
              <Button onClick={() => handleAddToCart(e.id)} className="hidden group-hover:block absolute rounded-tl-none rounded-tr-none rounded-bl-[4px] rounded-br-[4px] bottom-0 left-0 w-full z-10 bg-black hover:bg-[#000] text-white">
                Add to Cart
              </Button>
            </div>
            <div className="space-y-2 font-semibold">
              <h3>{e.productName}</h3>
              <div className="flex gap-3">
                <p className="text-[#DB4444]">${e.discountPrice}</p>
                <p className="line-through text-gray-700">${e.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Title label="Just For You" />
      <ProductSwiper hasDiscount={true} slideCount={4} />
    </div>
  );
};

export default Wishlist;
