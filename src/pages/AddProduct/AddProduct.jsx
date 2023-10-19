import { useState } from "react";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import Button from "../../components/Button";

const AddProduct = () => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    brandName: "",
    type: "",
    price: "",
    shortDescription: "",
    rating: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...productInfo };
    console.log(product);

    const addProduct = async (data) => {
      try {
        const res = await fetch("http://localhost:5000/products", {
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
    addProduct(product);
  };

  return (
    <div className="my-5 md:mt-10">
      <DescribeRoute>addproduct</DescribeRoute>
      <div className="border-t-2 border-stone-600">
        <form
          onSubmit={handleSubmit}
          className="max-w-7xl xl:mx-auto mx-10 my-6 sm:my-12 flex flex-col sm:gap-20 gap-10"
        >
          <div className="flex sm:flex-row flex-col gap-10 ">
            <div className="sm:w-1/2 ">
              <label className="text-stone-400">Name</label>

              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3"
                type="text"
                value={productInfo.name}
                onChange={(e) => {
                  setProductInfo({ ...productInfo, name: e.target.value });
                }}
                //
              />
            </div>
            <div className="sm:w-1/2">
              <label className="text-stone-400">Brand name</label>

              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3"
                type="text"
                value={productInfo.brandName}
                onChange={(e) => {
                  setProductInfo({ ...productInfo, brandName: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-10 ">
            <div className="sm:w-1/2">
              <label className="text-stone-400">Type</label>
              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3"
                type="text"
                value={productInfo.type}
                onChange={(e) => {
                  setProductInfo({ ...productInfo, type: e.target.value });
                }}
              />
            </div>
            <div className="sm:w-1/2">
              <label className="text-stone-400">Price</label>

              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3"
                value={productInfo.price}
                onChange={(e) => {
                  setProductInfo({ ...productInfo, price: e.target.value });
                }}
                type="text"
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-10 ">
            <div className="sm:w-1/2">
              <label className="text-stone-400">Short description</label>
              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3"
                type="text"
                value={productInfo.shortDescription}
                onChange={(e) => {
                  setProductInfo({
                    ...productInfo,
                    shortDescription: e.target.value,
                  });
                }}
              />
            </div>
            <div className="sm:w-1/2">
              <label className="text-stone-400">Rating</label>

              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3 "
                value={productInfo.rating}
                onChange={(e) => {
                  setProductInfo({ ...productInfo, rating: e.target.value });
                }}
                type="text"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-stone-400">Image URL</label>
            <input
              className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-300  placeholder:text-stone-400 placeholder:pl-3 mb-4"
              type="text"
              value={productInfo.image}
              onChange={(e) => {
                setProductInfo({
                  ...productInfo,
                  image: e.target.value,
                });
              }}
            />
          </div>
          <Button>Add Product</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
