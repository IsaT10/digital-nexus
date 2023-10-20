import { useEffect, useState } from "react";

const useGetQueryData = (route, query) => {
  const [queryData, setQueryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await fetch(
          `https://digital-nexus-server.vercel.app/${route}/${query}`
        );
        const data = await response.json();
        setQueryData(data);
        setLoading(false);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setQueryData([]);
        setError("Failed to fetch data");
      }
    };
    searchProducts();
  }, [route, query]);
  return { queryData, loading, error };
};

export default useGetQueryData;
