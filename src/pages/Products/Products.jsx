import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { brand } = useParams();
  console.log(brand);
  console.log(brandProducts);
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
        setError("Failed to fetch data");
      }
    };
    searchProducts();
  }, [brand]);
  return <div>{brandProducts.length}</div>;
};

export default Products;
