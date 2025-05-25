import React from "react";

const Services = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-6 text-center">
      <div className="w-20 h-20 mx-auto bg-black border-[10px] border-gray-200 flex items-center justify-center rounded-full">{icon}</div>
      <div>
        <h3 className="uppercase text-[20px] font-semibold">{title}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Services;
