import { useParams } from "react-router-dom";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import { BsStarFill } from "react-icons/bs";
import useGetQueryData from "../../hooks/useGetQueryData";
import Spinner from "../../components/Spinner";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Star from "../../components/star";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const { queryData: product, loading, error } = useGetQueryData("product", id);
  const { name, brandName, shortDescription, type, image, rating, price } =
    product;
  const {
    user: { email },
  } = useContext(AuthContext);

  const handleAddToCart = () => {
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
    <div className="my-5 md:mt-10">
      <DescribeRoute>products / {name}</DescribeRoute>
      <div className="border-t-2 border-stone-600 overflow-hidden">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error.length > 0 ? (
              <p className="text-center text-3xl font-semibold text-red-500 my-36">
                {error}
              </p>
            ) : (
              <div className="max-w-7xl mx-4 xl:mx-auto  md:flex justify-between my-20 gap-8">
                <img
                  className="rounded-sm md:w-1/2 object-cover h-[425px]"
                  src={image}
                  alt=""
                />
                <div className="md:w-5/12 justify-between rounded-sm bg-stone-200 dark:bg-stone-600 py-8 px-7 flex flex-col gap-4">
                  <h3 className="text-3xl font-semibold">{name}</h3>
                  <h5 className="text-xl font-semibold">{price}</h5>
                  <p className=" font-semibold tracking-wider text-secondary-color dark:text-stone-300 pr-36">
                    {shortDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star rating={rating} />
                    </div>
                    <span className="flex items-center bg-red-500 text-xs px-2 py-0.5 ml-3 uppercase font-bold text-primary-color dark:text-stone-800 rounded-full">
                      {type}
                    </span>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-secondary-color text-stone-100 dark:bg-black   py-2 md:py-3 rounded-md"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
