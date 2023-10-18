import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const BrandCard = ({ brand: { _id, imageURL, brandName } }) => {
  return (
    <div>
      <div className="w-[320px] mx-auto relative rounded overflow-hidden shadow-lg bg-secondary-color">
        <img
          className="w-[320px] h-[300px] object-cover"
          src={imageURL}
          alt="Card"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary-color opacity-0 hover:opacity-75 transition-opacity duration-200">
          <Link to={`/products/${brandName}`}>
            <Button>See products</Button>
          </Link>
        </div>

        <h6
          className="text-left text-2xl text-stone-300 font-semibold mt-4 mb-4 px-3
        "
        >
          {brandName}
        </h6>
      </div>
    </div>
  );
};

export default BrandCard;
