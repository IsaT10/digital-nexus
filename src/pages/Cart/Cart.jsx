import Button from "../../components/Button";
import DescribeRoute from "../../components/DescribeRoute/DescribeRoute";
import Spinner from "../../components/Spinner";
import CartItem from "../../components/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { setCartItems, loading, error, cartItems } = useContext(CartContext);
  return (
    <div className="my-5 md:mt-10">
      <DescribeRoute>cart</DescribeRoute>
      <div className="border-t-2 border-stone-600">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error.length > 0 ? (
              <p className="text-center text-3xl font-semibold text-red-500 my-36">
                {error}
              </p>
            ) : (
              <>
                {cartItems.length > 0 ? (
                  <div className="max-w-7xl xl:mx-auto mx-6 my-8">
                    <ul className="flex flex-col divide-y divide-secondary-color">
                      {cartItems.map((item, index) => (
                        <li key={index}>
                          <CartItem
                            item={item}
                            setCartItems={setCartItems}
                            cartItems={cartItems}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="max-w-7xl xl:mx-auto mx-10 flex flex-col justify-center items-center h-[50vh] gap-7">
                    <h3 className="text-xl sm:text-2xl md:text-3xl">
                      Your cart is currently empty.
                    </h3>
                    <Button>Return to shop</Button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
