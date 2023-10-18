import React from "react";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
  if (brands.length <= 0) return;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-36">
      {brands?.map((brand) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </div>
  );
};

export default Brands;
