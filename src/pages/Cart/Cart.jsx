import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Cart = () => {
  const [item, setItem] = useState(0);
  return (
    <div className=" my-5 md:mt-10  ">
      <div className="max-w-7xl xl:mx-auto mx-10 mb-9">
        <Link
          to="/"
          className="underline_animation cursor-pointer relative no-underline ml-2"
        >
          Home
        </Link>
        <span> / cart</span>
      </div>
      <div className="border-t-2 border-stone-600">
        <div className="max-w-7xl xl:mx-auto mx-10 flex flex-col justify-center items-center h-[50vh] gap-7">
          <h3 className="text-xl sm:text-2xl md:text-3xl">
            Your cart is currently empty.
          </h3>
          <Button>Return to shop</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
