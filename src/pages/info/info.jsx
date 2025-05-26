import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/features/product/productSlice";
import Delivery from "@/widgets/delivery";
import Title from "@shared/ui/custom/title";
import Rates from "@shared/ui/custom/rates";
import InfoSwiper from "@/widgets/info-swiper";
import Roadmap from "@/shared/ui/custom/roadmap";
import ActionInfo from "@shared/ui/custom/action-info";
import ProductSwiper from "@shared/ui/custom/product-swiper";

const Info = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <Roadmap road="Account / Product" page={`${product.productName}`} />
      <div className="flex gap-3 justify-between">
        <div className="w-[60%] h-[650px]">
          <InfoSwiper />
        </div>
        <div className="w-[35%] flex flex-col gap-7">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">{product.productName}</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Rates />
                <p className="text-[18px] text-[#BFBFBF] ">(150 Reviews)</p>
              </div>
              <div className="pl-4 border-l-[2px] border-[#BFBFBF]">
                <p className={`font-semibold text-[18px] ${product.productInMyCart ? "text-[#12CA5B]" : "text-[#DB4444]"}`}>{product.productInMyCart ? "InStock" : "OutStock"}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-2xl font-bold">${product.discountPrice}</p>
              <p className="text-2xl font-bold line-through text-[#BFBFBF]">${product.price}</p>
            </div>
            <p className="opacity-60 text-[18px]">Lorem ipsum dolor sit amet High-quality lorem text with balanced rhythm for design previews & seamless visual alignment in any layout.</p>
            <hr className="h-[2px] bg-[#BFBFBF] border-none" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-[20px]">Colours:</p>
              <div className="flex pt-[5px] gap-2">
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": product.color,
                  }}
                />
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": "#DB4444",
                  }}
                />
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": "#BFBFBF",
                  }}
                />
                <input
                  type="radio"
                  name="color"
                  className="w-5 h-5 rounded-full border-2 border-transparent bg-[var(--accent)] appearance-none checked:border-black"
                  style={{
                    "--accent": "#12CA5B",
                  }}
                />
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <p className="text-[20px]">Sizes:</p>
              <p className="text-[20px]">{product.size}</p>
            </div>
          </div>
          <ActionInfo />
          <Delivery />
        </div>
      </div>
      <Title title="" label="Releated Item" />
      <ProductSwiper hasDiscount={false} slideCount={4} textSide={"!text-start"} />
    </div>
  );
};

export default Info;
