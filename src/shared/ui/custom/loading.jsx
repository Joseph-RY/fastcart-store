import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#DB4444]">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-16 h-16 border-4 border-[#FAFAFA] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-3xl font-semibold text-[#FAFAFA] tracking-wide">Загрузка...</p>
      </div>
    </div>
  );
};

export default Loading;
