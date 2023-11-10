import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[650px] bg-hero bg-no-repeat bg-cover bg-center py-24 backdrop-blur-sm">
      <div className="container mx-auto flex justify-start h-full "> 
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center">
            <div className="w-10 h-[2px] bg-primary mr-3"></div>New Store
          </div>
          <h1 className="text-[60px]  leading-[1.1] font-light mb-4 uppercase">
            Discover Your <br />
            <span className="font-semibold uppercase">Perfect Look</span>
          </h1>
          <Link
            to={"/category"}
            
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Shopping Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
