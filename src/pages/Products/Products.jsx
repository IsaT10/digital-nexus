import React, { useEffect, useState } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import ProductCard from "../../components/ProductCard";
import Spinner from "../../components/Spinner";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

  const { brand } = useParams();

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
    <>
      <div className="my-5 md:mt-10">
        <DescribeRoute>products/{brand}</DescribeRoute>
        <div className="border-t-2 max-w-7xl xl:mx-auto mx-4 border-stone-600 overflow-hidden">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">1</div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
          </div>
          {error.length > 0 && (
            <p className="text-center text-3xl font-semibold text-red-500 mt-56">
              {error}
            </p>
          )}
          {loading && <Spinner />}
          {brandProducts.length === 0 && <p> no products</p>}
          <div className="max-w-7xl xl:mx-auto mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-20">
            {brandProducts.map((brandProduct) => (
              <ProductCard key={brandProduct._id} product={brandProduct} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
