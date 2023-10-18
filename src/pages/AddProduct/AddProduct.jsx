import { useState } from "react";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";

const AddProduct = () => {
  const [toggleLabel, setToogleLabel] = useState(false);
  const [productInfo, setProductInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNameChange = (e) => {
    setProductInfo({ ...productInfo, name: e.target.value });

    handleToogle.call(productInfo);
  };
  const handleToogle = () => {
    // if (productInfo.name.length === 0) {
    //   setToogleLabel(true);
    // } else if (productInfo.name.length > 0) {
    //   setToogleLabel(true);
    // }
    console.log(productInfo.name);
    console.log(productInfo.name.length);
  };

  //   console.log(productInfo.name.length);

  return (
    <div className="my-5 md:mt-10">
      <DescribeRoute>addproduct</DescribeRoute>
      <div className="border-t-2 border-stone-600">
        <form className="max-w-7xl xl:mx-auto mx-10  my-12 flex flex-col gap-20">
          <div className="flex gap-10">
            <div className="w-1/2">
              {toggleLabel ? <label>ssd</label> : ""}
              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
                type="text"
                value={productInfo.name}
                onKeyDown={handleNameChange}
                placeholder="Your e-mail"
              />
            </div>
            <div className="w-1/2">
              {toggleLabel ? <label>ssd</label> : ""}

              <input
                className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
                type="text"
                placeholder="Your e-mail"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <input
              className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
              type="text"
              placeholder="Your e-mail"
            />
            <input
              className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
              type="text"
              placeholder="Your e-mail"
            />
          </div>
          <div className="flex gap-10">
            <input
              className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
              type="text"
              placeholder="Your e-mail"
            />
            <input
              className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
              type="text"
              placeholder="Your e-mail"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
