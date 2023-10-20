import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="h-[80vh] md:h-screen flex flex-col items-start justify-center max-w-7xl xl:mx-auto mx-4">
      <h2 className="text-3xl text-white sm:text-4xl md:text-6xl leading-tight mb-6 lg:mb-9 md:-mt-12">
        Follow the digiral trends <br /> and lead the change
      </h2>
      <Button>View More</Button>
    </div>
  );
};

export default Banner;
