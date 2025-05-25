import React from "react";

const Roadmap = ({ road, page }) => {
  return (
    <div className="font-semibold text-[18px] flex gap-3">
      <span className="opacity-50">{road}</span>/<span className="font-semibold tracking-[1px]">{page}</span>
    </div>
  );
};

export default Roadmap;
