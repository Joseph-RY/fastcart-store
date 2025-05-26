import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@shared/ui/kit/button";
import PS from "@shared/images/grid(1).png";
import Woman from "@shared/images/grid(2).jpg";
import Spiker from "@shared/images/grid(3).png";
import Perfume from "@shared/images/grid(4).png";

const HomeGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-full">
      <div className="relative bg-black bg-center bg-no-repeat bg-cover md:col-span-2 md:row-span-2 aspect-[2/1] md:aspect-auto">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${PS}')` }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>PlayStation 5</h3>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <Link to="/product">
            <Button variant="link" className="text-white p-0 mb-[-2px] underline hover:no-underline">
              Shop now
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative bg-black md:col-span-2 aspect-[2/1] md:aspect-auto">
        <img src={Woman} alt="Woman" className="absolute w-full h-full object-cover" style={{ transform: "scaleX(-1)" }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>Women’s Collections</h3>
          <p>Featured woman collections that give you another vibe.</p>
          <Link to="/product">
            <Button variant="link" className="text-white p-0 mb-[-2px] underline hover:no-underline">
              Shop now
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative bg-black bg-center bg-no-repeat bg-cover aspect-square">
        <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url('${Spiker}')` }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>Speakers</h3>
          <p>Amazon wireless speakers</p>
          <Link to="/product">
            <Button variant="link" className="text-white p-0 mb-[-2px] underline hover:no-underline">
              Shop now
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative bg-black bg-center bg-no-repeat bg-cover aspect-square">
        <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url('${Perfume}')` }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>Perfume</h3>
          <p>GUCCI INTENSE OUD EDP</p>
          <Link to="/product">
            <Button variant="link" className="text-white p-0 mb-[-2px] underline hover:no-underline">
              Shop now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
