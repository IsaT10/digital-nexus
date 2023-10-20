import Swal from "sweetalert2";

const CartItem = ({ item, cartItems, setCartItems }) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });
  const { _id, name, type, image, price } = item;
  const handleDeleteFromCart = (id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",

        background: "#4C5255",
        color: "#fff",
      })
      .then((result) => {
        if (result.isConfirmed) {
          const deleteItem = async (id) => {
            try {
              const res = await fetch(
                `https://digital-nexus-server.vercel.app/cart/${id}`,
                {
                  method: "DELETE",
                }
              );
              const result = await res.json();
              if (result.deletedCount > 0) {
                setCartItems(cartItems.filter((item) => item._id !== id));
              }
            } catch (err) {
              console.log("Error ", err);
            }
          };
          deleteItem(id);
          swalWithBootstrapButtons.fire({
            title: "Deleted",
            text: "Your file has been deleted.",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "OK",
            reverseButtons: false,
            background: "#4C5255",
            color: "#FFF",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file is safe :)",
            icon: "error",
            confirmButtonText: "OK",
            background: "#4C5255",
            color: "#fff",
          });
        }
      });
  };
  return (
    <div className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-12 justify-between">
        <div className="flex items-center space-x-1 sm:space-x-2  s">
          <button
            onClick={() => handleDeleteFromCart(_id)}
            type="button"
            className="flex items-center px-2 py-1 pl-0 space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-current  p-1 text-white dark:text-black bg-secondary-color rounded-sm"
            >
              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
              <rect width="32" height="200" x="168" y="216"></rect>
              <rect width="32" height="200" x="240" y="216"></rect>
              <rect width="32" height="200" x="312" y="216"></rect>
              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
            </svg>
          </button>
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src={image}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-2 flex flex-col items-start">
              <h3 className="sm:text-lg font-semibold leading-snug ">{name}</h3>
              <p className=" bg-secondary-color text-xs px-1.5 sm:px-2 py-0.5 uppercase font-bold text-stone-200  dark:text-stone-800 rounded-full">
                {type}
              </p>
            </div>
            <div className="text-right">
              <p className="sm:text-lg font-semibold">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
