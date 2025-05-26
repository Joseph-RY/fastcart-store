import { Link } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/entities/category/categorySlice";

const CategorySidebar = () => {
  const category = useSelector((state) => state.categories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <ul className="w-full md:w-[20%] flex flex-row flex-wrap md:flex-col gap-4 px-[5%] md:px-0 md:pr-5 md:border-r-[1px] md:border-gray-300">
      {category.map((e) => (
        <Link key={e.id} to="products">
          <div className="flex md:flex-nowrap items-center gap-1 justify-between">
            <p>{e.categoryName}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default CategorySidebar;
