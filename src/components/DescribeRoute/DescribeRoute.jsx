import React from "react";
import { Link } from "react-router-dom";
import "./DescribeRoute.css";

const DescribeRoute = ({ children }) => {
  return (
    <div className="max-w-7xl xl:mx-auto mx-10 mb-9">
      <Link
        to="/"
        className="underline_animation cursor-pointer relative no-underline ml-2"
      >
        Home
      </Link>
      <span> / {children}</span>
    </div>
  );
};

export default DescribeRoute;
