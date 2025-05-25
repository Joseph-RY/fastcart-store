import React from "react";

const Title = ({ label, title }) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4 font-semibold">
        <div className="w-5 h-10 rounded-[4px] bg-[#DB4444]"></div>
        <span className="text-[#DB4444]">{label}</span>
      </div>
      <h2 className="text-4xl ">{title}</h2>
    </div>
  );
};

export default Title;
