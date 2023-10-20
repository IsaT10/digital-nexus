import Button from "../../components/Button";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import { useNavigate, useParams } from "react-router-dom";
import useGetQueryData from "../../hooks/useGetQueryData";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const { queryData } = useGetQueryData("product", id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brandName = e.target.brandName.value;
    const rating = e.target.rating.value;
    const type = e.target.type.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const shortDescription = e.target.shortDescription.value;

    const product = {
      name,
      brandName,
      rating,
      type,
      price,
      image,
      shortDescription,
    };

    const updateProduct = async (data) => {
      try {
        const res = await fetch(
          `https://digital-nexus-server.vercel.app/products/${id}`,
          {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        if (result.modifiedCount > 0) {
          toast.success("Update product successfully");
          navigate(-1);
        }
      } catch (err) {
        console.log("Error ", err);
      }
    };
    updateProduct(product);
  };
  return (
    <div className="my-5 md:mt-10">
      <DescribeRoute>updateproduct</DescribeRoute>
      <div className="border-t-2 border-stone-600">
        <form
          onSubmit={handleSubmit}
          className="max-w-7xl xl:mx-auto mx-10 my-6 sm:my-12 flex flex-col sm:gap-20 gap-10"
        >
          <div className="flex sm:flex-row flex-col gap-10 ">
            <div className="sm:w-1/2 ">
              <label className="dark:text-stone-400 text-secondary-color">
                Name
              </label>

              <input
                className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3"
                type="text"
                name="name"
                defaultValue={queryData.name}
              />
            </div>
            <div className="sm:w-1/2">
              <label className="dark:text-stone-400 text-secondary-color">
                Brand name
              </label>

              <input
                className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3"
                type="text"
                name="brandName"
                defaultValue={queryData.brandName}
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-10 ">
            <div className="sm:w-1/2">
              <label className="dark:text-stone-400 text-secondary-color">
                Type
              </label>
              <input
                className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3"
                type="text"
                name="type"
                defaultValue={queryData.type}
              />
            </div>
            <div className="sm:w-1/2">
              <label className="dark:text-stone-400 text-secondary-color">
                Price
              </label>

              <input
                className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3"
                name="price"
                defaultValue={queryData.price}
                type="text"
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-10 ">
            <div className="sm:w-1/2">
              <label className="dark:text-stone-400 text-secondary-color">
                Short description
              </label>
              <input
                className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3"
                type="text"
                name="shortDescription"
                defaultValue={queryData.shortDescription}
              />
            </div>
            <div className="sm:w-1/2">
              <label className="dark:text-stone-400 text-secondary-color">
                Rating
              </label>

              <input
                className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3 "
                name="rating"
                defaultValue={queryData.rating}
                type="text"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="dark:text-stone-400 text-secondary-color">
              Image URL
            </label>
            <input
              className="bg-white dark:bg-black border-b-[1px] border-primary-color dark:border-stone-400 outline-none w-full pb-2 text-primary-color dark:text-stone-300   placeholder:pl-3 mb-4"
              type="text"
              name="image"
              defaultValue={queryData.image}
            />
          </div>
          <Button>Update Product</Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
