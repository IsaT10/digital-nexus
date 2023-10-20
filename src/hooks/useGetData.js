import { useEffect, useState } from "react";

const useGetdata = (route) => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (route) {
      const brands = async () => {
        try {
          const response = await fetch(
            `https://digital-nexus-server.vercel.app/${route}`
          );
          const data = await response.json();
          // Only update the state if the component is still mounted
          setAllData(data);
          setLoading(false);
          setError("");
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
          setError("Failed to fetch data");
        }
      };
      brands();
    }
  }, [route]);

  return { allData, loading, error, setAllData };
};

export default useGetdata;
