import React, { useEffect, useState } from "react";
import "./Products.css";
import { useNavigate, useParams } from "react-router-dom";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import ProductCard from "../../components/ProductCard";
import Spinner from "../../components/Spinner";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Button from "../../components/Button";

const Products = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const navigate = useNavigate();
  const { brand } = useParams();

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${brand}`);
        const data = await response.json();
        setBrandProducts(data);
        setLoading(false);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setBrandProducts([]);
        setError("Failed to fetch data");
      }
    };
    searchProducts();
  }, [brand]);
  return (
    <div className="my-5 md:mt-10">
      <DescribeRoute>products/{brand}</DescribeRoute>
      <div className="border-t-2 border-stone-600 overflow-hidden">
        <div className="max-w-7xl mx-4 xl:mx-auto">
          <div className="flex justify-between items-center  mt-20 gap-5">
            <h4 className="hidden lg:inline-block w-3/4 md:text-3xl lg:text-4xl xl:text-5xl uppercase leading-snug tracking-widest font-semibold text-stone-400">
              Huge Savings Await You Grab Our Limited Time Discounts Now!
            </h4>
            <div ref={sliderRef} className="keen-slider ">
              <div className="keen-slider__slide number-slide1"></div>
              <div className="keen-slider__slide number-slide2"></div>
              <div className="keen-slider__slide number-slide3"></div>
            </div>
          </div>

          {loading && <Spinner />}

          <h4 className="mt-20 mb-10 text-2xl font-semibold ">Products</h4>
          {brandProducts.length === 0 && error.length === 0 && (
            <div className="mt-36 mb-20 flex flex-col items-center gap-10">
              <h4 className="text-secondary-color font-semibold text-3xl ">
                Intel Products Coming Soon!
              </h4>
              <p className="text-sm font-semibold text-stone-600">
                Note:We are working hard to bring you the latest Intel products.
                Stay tuned for exciting additions to our lineup.
              </p>
              <Button handleNavigate={handleNavigate}>
                Explore Other Brands
              </Button>
            </div>
          )}
          {error.length > 0 && (
            <p className="text-center text-3xl font-semibold text-red-500 my-36">
              {error}
            </p>
          )}
          <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
            {brandProducts.map((brandProduct) => (
              <ProductCard key={brandProduct._id} product={brandProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
