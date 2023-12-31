import { BsFillPlayFill } from "react-icons/bs";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` font-semibold px-3 py-2 md:px-5 rounded-full hover:scale-x-105 duration-300 md:py-3 flex justify-center items-center gap-1.5 leading-4 text-center ${
        className ||
        "bg-gradient-to-r text-white from-secondary-color from-10% via-stone-600 via-40%  to-primary-color to-90%"
      }`}
    >
      <span>{children}</span>
      <BsFillPlayFill className="mt-1" />
    </button>
  );
};

export default Button;
