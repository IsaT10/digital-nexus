import { Link } from "react-router-dom";

const DescribeRoute = ({ children }) => {
  return (
    <div className="max-w-7xl xl:mx-auto mx-10 mb-9">
      <Link
        to="/"
        className="group relative text-primary-color dark:text-white"
      >
        Home
        <span className="block absolute bottom-0 left-0 w-0 h-[1px] bg-primary-color dark:bg-white   dark:text-white transition-width duration-300 group-hover:w-full"></span>
      </Link>

      <span> / {children}</span>
    </div>
  );
};

export default DescribeRoute;
