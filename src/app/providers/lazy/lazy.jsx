import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"));
export const Home = lazy(() => import("../../../pages/home/home"));
export const Contact = lazy(() => import("../../../pages/contact/contact"));
export const About = lazy(() => import("../../../pages/about/about"));
export const SignUp = lazy(() => import("../../../pages/signup/signup"));
export const Cart = lazy(() => import("../../../pages/cart/cart"));
export const Checkout = lazy(() => import("../../../pages/checkout/checkout"));
export const Info = lazy(() => import("../../../pages/info/info"));
export const Login = lazy(() => import("../../../pages/login/login"));
export const Products = lazy(() => import("../../../pages/products/products"));
export const Profile = lazy(() => import("../../../pages/profile/profile"));
export const Wishlist = lazy(() => import("../../../pages/wishlist/wishlist"));
