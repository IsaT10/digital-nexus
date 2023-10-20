import { useContext } from "react";
import { BsEyeFill, BsFillCartFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const ProductCard = ({
  product: {
    _id,
    price,
    type,
    image,
    rating,
    name,
    brandName,
    shortDescription,
  },
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const data = {
      name,
      brandName,
      shortDescription,
      type,
      image,
      rating,
      price,
    };
    addToCart(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="container">
          <div className=" mx-auto sm:w-full bg-stone-300 dark:bg-primary-color shadow-lg rounded-md ">
            <div className="flex flex-col ">
              <img
                src={image}
                alt="Just a flower"
                className=" w-full sm:h-[300px] md:h-[350px] object-cover  rounded-md"
              />
              <div className="flex-auto p-4 justify-evenly">
                <div className="flex justify-between items-center">
                  <div className=" flex-none text-sm flex items-center text-primary-color dark:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-primary-color dark:text-gray-400 font-semibold whitespace-nowrap mr-3">
                      {rating}
                    </span>
                  </div>
                  <p className="flex items-center bg-secondary-color text-xs px-2 py-0.5 ml-3 uppercase font-bold text-stone-300 dark:text-primary-color rounded-full">
                    {type}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-lg mr-auto text-primary-color dark:text-stone-200  truncate ">
                      {name}
                    </h2>
                    <h2 className="text-primary-color dark:text-gray-300 text-lg">
                      Brand Name : {brandName}
                    </h2>
                    <h5 className="text-lg text-red-500 font-bold mt-1">
                      {price}
                    </h5>
                  </div>
                  <div className="flex  space-x-2 text-sm font-medium items-center justify-between">
                    <div className="flex items-center flex-col  gap-2">
                      <div className="tooltip tooltip-right" data-tip="Update">
                        <Link to={`/updateproducts/${_id}`}>
                          <BsFillPencilFill className="text-xl text-secondary-color duration-200 cursor-pointer " />
                        </Link>
                      </div>
                      <Link to={`/products/${brandName}/${_id}`}>
                        <div
                          className="tooltip tooltip-right"
                          data-tip="Details"
                        >
                          <BsEyeFill className="text-2xl text-secondary-color duration-200 cursor-pointer " />
                        </div>
                      </Link>
                      <div
                        className="tooltip tooltip-right"
                        data-tip="Add To cart"
                      >
                        <BsFillCartFill
                          onClick={handleAddToCart}
                          className="text-2xl text-secondary-color duration-200 cursor-pointer "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
