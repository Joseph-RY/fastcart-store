import React from "react";
import Header from "../../../widgets/header";
import Footer from "../../../widgets/footer";
import { Outlet } from "react-router";
import { Toaster } from "@shared/ui/kit/sonner";

const Layout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;

