import Roadmap from "@shared/ui/custom/roadmap";
import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function feedBack() {
    const isAuth = !!localStorage.getItem("access_token");

    if (!isAuth) {
      toast.warning("You must be logged in to send a message.");
      return;
    }

    if (!name.trim()) {
      toast.warning("Please enter your name.");
      return;
    }

    toast.success("Thank you! Your message has been received.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <Roadmap road="Home" page="Contact" />
      <div className="flex flex-col md:flex-row gap-10 py-10">
        <div className="w-full md:w-[35%] space-y-6 shadow-lg p-6 rounded-lg border">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#DB4444] rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call To Us</h3>
              <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-sm text-gray-600">Phone: +8801611112222</p>
            </div>
          </div>
          <hr />
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#DB4444] rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Write To Us</h3>
              <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-sm text-gray-600">Emails: customer@exclusive.com</p>
              <p className="text-sm text-gray-600">support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[60%] shadow-lg p-6 rounded-lg border space-y-4">
          <div className="flex flex-col md:flex-row gap-3 overflow-hidden min-w-0">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="flex-1 border px-4 py-2 rounded-md outline-none" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="flex-1 border px-4 py-2 rounded-md outline-none" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className="flex-1 border px-4 py-2 rounded-md outline-none" />
          </div>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="w-full border px-4 py-3 rounded-md outline-none h-32 resize-none"></textarea>
          <button onClick={feedBack} className="px-6 py-2 bg-[#DB4444] text-white rounded-md w-fit">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
