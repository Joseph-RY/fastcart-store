import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@shared/ui/kit/button";
import { loginUser } from "@/entities/auth/authSlice";
import { toast } from "sonner";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ userName: name, password }));
    toast.success(
      <span className="text-[16px]">
        Logged in successfully.{" "}
        <Link to="/" className="underline text-[#DB4444]">
          Go to Home
        </Link>
      </span>
    );
    setName("");
    setPassword("");
  };

  return (
    <div className="my-[15px] py-[15px] w-[90%] md:w-[35%] flex flex-col gap-12 mx-auto">
      <div>
        <h2 className="text-[36px] font-medium">Log in to Fastcart</h2>
        <p className="text-[18px]">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <input value={name} onChange={(e) => setName(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Enter Name" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Enter Password" />
        </div>
        <div className="space-y-3">
          <p className="text-center">
            Don't have an account yet?{" "}
            <Link className="text-[18px] text-gray-500 pb-[2px] border-b-gray-500 border-b-[1px]" to="/signup">
              Sign Up
            </Link>
          </p>
          <Button onClick={handleLogin} className="w-full h-[50px] text-[18px] font-semibold">
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
