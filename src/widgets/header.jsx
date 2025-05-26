import React, { useEffect } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui/kit/popover";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@shared/ui/kit/sheet";

import logo from "@/shared/images/logo.png";
import { getCart } from "@/entities/cart/cartSlice";
import { resetWishlist } from "@/entities/product/productSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.totalCount);
  const wishes = useSelector((state) => state.products.wishlist);

  const token = localStorage.getItem("access_token");

  const isActive = (path) => (location.pathname == path ? "border-b-[#DB4444] text-[#DB4444] font-semibold" : "hover:border-b-[#DB4444]");
  const authTrigger = token ? "bg-[#db4444] rounded-full p-1 text-white" : "text-black";

  const goTo = (path) => {
    if (!token) {
      toast.error("", {
        description: (
          <span className="text-[16px] text-gray-400">
            Please{" "}
            <Link to="/login" className="underline text-red-500 hover:text-red-800">
              Log In
            </Link>{" "}
            to view this page.
          </span>
        ),
        duration: 5000,
      });
    } else {
      navigate(path);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("wishlist");
    dispatch(resetWishlist());
    navigate("/login");
  };

  const isAuth = (e) => {
    if (!token) {
      e.preventDefault();
      toast.error("", {
        description: (
          <span className="text-[16px] text-gray-400">
            Please{" "}
            <Link to="/login" className="underline text-red-500 hover:text-red-800">
              Log In
            </Link>{" "}
            view your account.
          </span>
        ),
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <nav className="py-[25px] px-[5%] md:px-[10%] flex items-center justify-between">
      <div className="md:hidden flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <div className=" flex flex-col gap-[6px]">
              <hr className="w-9 rounded-xl border-[2px] border-[#141416]" />
              <hr className="w-9 rounded-xl border-[2px] border-[#141416]" />
              <hr className="w-9 rounded-xl border-[2px] border-[#141416]" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>This action cannot be undone. This will remove you from the navigation menu and disable all related features on the platform.</SheetDescription>
            </SheetHeader>
            <div className="px-[20px] space-y-4">
              <ul className=" flex flex-col gap-2 text-[18px]">
                <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/")}`}>
                  <Link to="/">Home</Link>
                </li>
                <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/contact")}`}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/about")}`}>
                  <Link to="/about">About</Link>
                </li>
                <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/signup")}`}>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
        <h2 className="block md:hidden text-[28px] font-bold">Fastcart</h2>
      </div>
      <div className="hidden md:flex items-center gap-[80px]">
        <img src={logo} alt="Logo" />
        <ul className="flex gap-8 text-[18px]">
          <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/")}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/contact")}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/about")}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`pb-[1px] border-transparent border-b-[2px] ${isActive("/signup")}`}>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        {/* <div className="py-[10px] px-5 bg-[#F5F5F5] rounded-[4px] hidden md:flex items-center gap-8">
          <input className="bg-transparent border-none outline-none" type="text" placeholder="What are you looking for?" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div> */}
        <div className="flex items-center gap-6">
          <div onClick={() => goTo("/wishlist")}>
            <div className="hidden md:block relative">
              {token && <div className="absolute bottom-3 left-3 w-6 h-6 flex items-center justify-center bg-[#DB4444] text-white text-[18px] rounded-full">{wishes.length}</div>}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </div>
          <div onClick={() => goTo("/cart")}>
            <div className="relative">
              {token && <div className="absolute bottom-3 left-3 w-6 h-6 flex items-center justify-center bg-[#DB4444] text-white text-[18px] rounded-full">{products}</div>}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div onClick={isAuth} className={authTrigger}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="py-4 px-5 rounded-[4px] flex flex-col gap-4 bg-black bg-opacity-65 backdrop-blur-lg">
                <Link to="/profile">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p>Account</p>
                  </div>
                </Link>
                <Link to="/checkout">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p>My Order</p>
                  </div>
                </Link>
                <Link className="block md:hidden" to="/wishlist">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>Wishlist ({wishes.length})</p>
                  </div>
                </Link>
                <div onClick={logout} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                  <p>Logout</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Header;
