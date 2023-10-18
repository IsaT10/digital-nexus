import { useLoaderData } from "react-router-dom";
import Faq from "../../components/Faq";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div className="relative text-5xl text-right pb-5 overflow-hidden">
      <h2 className="hover:text-gray-400">Home rutgly</h2>
      <Faq />
    </div>
  );
};

export default Home;
