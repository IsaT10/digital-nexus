import Faq from "../../components/Faq";
import Brands from "../../components/Brands";
import Spinner from "../../components/Spinner";
import useGetdata from "../../hooks/useGetData";
import FindMore from "../../components/FindMore";

const Home = () => {
  const { allData: brands, loading, error } = useGetdata("brands");

  return (
    <>
      <div className="overflow-hidden">
        {error.length > 0 && (
          <p className="text-center text-3xl font-semibold text-red-500 my-56">
            {error}
          </p>
        )}
        {loading ? <Spinner /> : <Brands brands={brands} />}
        <FindMore />
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
