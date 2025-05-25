import React from "react";
import hero from "@shared/images/hero.png";
import worker from "@shared/images/user(1).png";
import worker2 from "@shared/images/user(2).png";
import worker3 from "@shared/images/user(3).png";
import Services from "@shared/ui/custom/services";
import Roadmap from "@shared/ui/custom/roadmap";

const About = () => {
  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <Roadmap road="Home" page="About" />
      <section className="flex md:flex-row flex-col justify-between my-10 md:gap-0 gap-5">
        <aside className="md:w-[40%] space-y-5">
          <h1 className="md:text-[60px] text-4xl font-bold">Our Story</h1>
          <p className="text-xl">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /> <br />
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
          </p>
        </aside>
        <img className="md:w-[40%]" src={hero} alt="" />
      </section>
      <section className="my-10 md:my-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="group h-[280px] border-2 rounded-md hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center gap-4 transition-colors">
          <div className="bg-black p-3 border-[10px] rounded-full border-gray-400 text-white group-hover:bg-white group-hover:text-black group-hover:border-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21M2.36 21H13.5H18h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614M3.75 9.349a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">10.5k</h2>
          <p className="text-center text-sm">Sellers on our site</p>
        </div>

        <div className="group h-[280px] border-2 rounded-md hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center gap-4 transition-colors">
          <div className="bg-black p-3 border-[10px] rounded-full border-gray-300 text-white group-hover:bg-white group-hover:text-black group-hover:border-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">33k</h2>
          <p className="text-center text-sm">Monthly sales</p>
        </div>

        <div className="group h-[280px] border-2 rounded-md hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center gap-4 transition-colors">
          <div className="bg-black p-3 border-[10px] rounded-full border-gray-300 text-white group-hover:bg-white group-hover:text-black group-hover:border-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">45.5k</h2>
          <p className="text-center text-sm">Active customers</p>
        </div>

        <div className="group h-[280px] border-2 rounded-md hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center gap-4 transition-colors">
          <div className="bg-black p-3 border-[10px] rounded-full border-gray-300 text-white group-hover:bg-white group-hover:text-black group-hover:border-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">25k</h2>
          <p className="text-center text-sm">Annual revenue</p>
        </div>
      </section>

      <section className="flex md:flex-row flex-col items-baseline md:gap-0 gap-10 justify-between">
        <div className="md:w-[26%] flex flex-col items-start gap-5">
          <img className="w-[100%]" src={worker} alt="" />
          <h2 className="md:text-5xl text-3xl font-bold">Tom Cruise</h2>
          <p className="text-2xl">Founder & Chairman</p>
        </div>
        <div className="md:w-[26%] flex flex-col items-start gap-5">
          <div className="bg-[#F5f5f5]">
            <img className="w-[100%]" src={worker2} alt="" />
          </div>
          <h2 className="md:text-5xl text-3xl font-bold">Emma Watson</h2>
          <p className="text-2xl">Managing Director</p>
        </div>
        <div className="md:w-[26%] flex flex-col items-start gap-5">
          <div className="bg-[#F5f5f5]">
            <img className="w-[100%]" src={worker3} alt="" />
          </div>
          <h2 className="md:text-5xl text-3xl font-bold">Will Smith</h2>
          <p className="text-2xl">Product Designer</p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-5 items-center justify-between py-[10%]">
        <Services
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          }
          title="Free and fast delivery"
          text="Free delivery for all order as over $140"
        />
        <Services
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          }
          title="24/7 customer service"
          text="Friendly 24/7 customer support"
        />
        <Services
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          }
          title="Money back guard"
          text="We reurn money within 30 days"
        />
      </div>
    </div>
  );
};

export default About;
