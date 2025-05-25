import { Button } from "@shared/ui/kit/button";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  async function register() {
    let newAccount = {
      userName: name,
      phoneNumber: phone,
      email: email,
      password: password,
      confirmPassword: confirm,
    };

    try {
      let { data } = await axios.post("https://store-api.softclub.tj/Account/register", newAccount);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirm("");
  }

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
          <input value={confirm} onChange={(e) => setConfirm(e.target.value)} className="py-3 px-2 border-[1px] border-gray-400 text-[18px] placeholder:text-[16px]" type="text" placeholder="Cofirm Password" />
        </div>
        <div className="space-y-3">
          <Button
            onClick={() => {
              try {
                register();
                toast.success("", {
                  description: (
                    <span className="text-[18px] text-gray-600">
                      Registered successfully.{" "}
                      <Link to="/login" className="underline text-red-500 hover:text-red-800">
                        Log In
                      </Link>
                    </span>
                  ),
                  duration: 5000,
                });
              } catch (error) {
                toast.error("Ошибка при регистрации");
              }
            }}
            className="w-full h-[50px] text-[18px] font-semibold"
          >
            Create Account
          </Button>

          <p className="text-center">
            Already have account{" "}
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
