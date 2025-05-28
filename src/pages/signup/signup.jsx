import { Button } from "@shared/ui/kit/button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "@/entities/auth/authSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    let newAccount = {
      userName: name,
      phoneNumber: phone,
      email: email,
      password: password,
      confirmPassword: confirm,
    };

    const result = await dispatch(registerUser(newAccount));

    if (registerUser.fulfilled.match(result)) {
      navigate("/login");
    }
  };
  return (
    <div className="my-[15px] py-[15px] w-[90%] md:w-[35%] flex flex-col gap-12 mx-auto">
      <div>
        <h2 className="text-[36px] font-medium">Create an account</h2>
        <p className="text-[18px]">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <input value={name} onChange={(e) => setName(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Name" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Phone number" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Password" />
          <input value={confirm} onChange={(e) => setConfirm(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Confirm Password" />
        </div>
        <div className="space-y-3">
          <Button onClick={handleRegister} className="w-full h-[50px] text-[18px] font-semibold">
            Create Account
          </Button>

          <p className="text-center">
            Already have account?{" "}
            <Link className="text-[18px] text-gray-500 pb-[2px] border-b-gray-500 border-b-[1px]" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
