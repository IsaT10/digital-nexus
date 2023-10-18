import { useLoaderData } from "react-router-dom";
import Faq from "../../components/Faq";
import Brands from "../../components/Brands";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const Home = () => {
  // const brands = useLoaderData() || [];

  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const brands = async () => {
      try {
        const response = await fetch("http://localhost:5000/brands");
        const data = await response.json();
        setBrands(data);
        setLoading(false);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError("Failed to fetch data");
        // setService(null);
      }
    };
    brands();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        {error.length > 0 && (
          <p className="text-center text-3xl font-semibold text-red-500 mt-56">
            {error}
          </p>
        )}
        {loading ? <Spinner /> : <Brands brands={brands} />}
        <Faq />
      </div>
      {/* <div className="overflow-hidden">
        <Brands brands={brands} />
        <Faq />
      </div> */}
    </>
  );
};

export default Home;
