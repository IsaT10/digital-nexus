import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import { BsStarFill } from "react-icons/bs";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        console.log(data);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setProduct({});
        setError("Failed to fetch data");
      }
    };
    getProducts();
  }, [id]);
  const { name, brandName, shortDescription, type, image, rating, price } =
    product;

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
    const addToCart = async (data) => {
      try {
        const res = await fetch("http://localhost:5000/cart", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log("success:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    addToCart(data);
  };
  return (
    <div className="my-5 md:mt-10">
      <DescribeRoute>products / {name}</DescribeRoute>
      <div className="border-t-2 border-stone-600 overflow-hidden">
        <div className="max-w-7xl mx-4 xl:mx-auto  md:flex justify-between my-20 gap-8">
          <img
            className="rounded-sm md:w-1/2 object-cover h-[425px]"
            src={image}
            alt=""
          />
          <div className="md:w-5/12 justify-between rounded-sm bg-stone-600 py-8 px-7 flex flex-col gap-4">
            <h3 className="text-3xl font-semibold">{name}</h3>
            <h5 className="text-xl font-semibold">{price}</h5>
            <p className=" font-semibold tracking-wider text-stone-300 pr-36">
              {shortDescription}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <BsStarFill className="text-red-500" />
                <span className="text-sm text-stone-400 font-semibold">
                  {rating}
                </span>
              </div>
              <span className="flex items-center bg-red-500 text-xs px-2 py-0.5 ml-3 uppercase font-bold text-stone-800 rounded-full">
                {type}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black   py-2 md:py-3 rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
