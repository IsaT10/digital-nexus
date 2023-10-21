import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <AiFillStar className="text-red-500 text-lg" />
        ) : rating >= number ? (
          <BsStarHalf className="text-red-500 text-lg" />
        ) : (
          <AiOutlineStar className="text-red-500 text-lg" />
        )}
      </span>
    );
  });
  return <div className="flex">{ratingStar}</div>;
};

export default Star;
