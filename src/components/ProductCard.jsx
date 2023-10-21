import { useContext } from "react";
import { BsEyeFill, BsFillCartFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Star from "./star";
import { AuthContext } from "../context/AuthContext";
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
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    const email = user.email;

    const data = {
      name,
      brandName,
      shortDescription,
      type,
      image,
      rating,
      price,
      email,
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
                  <div className=" flex-none text-sm flex gap-2 items-center text-primary-color dark:text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star rating={rating} />
                    </div>
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
                      <div className="tooltip tooltip-left" data-tip="Update">
                        <Link to={`/updateproducts/${_id}`}>
                          <BsFillPencilFill className="text-xl text-secondary-color duration-200 cursor-pointer " />
                        </Link>
                      </div>
                      <Link to={`/products/${brandName}/${_id}`}>
                        <div
                          className="tooltip tooltip-left"
                          data-tip="Details"
                        >
                          <BsEyeFill className="text-2xl text-secondary-color duration-200 cursor-pointer " />
                        </div>
                      </Link>
                      <div
                        className="tooltip tooltip-left"
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
