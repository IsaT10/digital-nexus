import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      const brands = async () => {
        try {
          const response = await fetch(
            `https://digital-nexus-server.vercel.app/cart/${user.email}`
          );
          const data = await response.json();
          setCartItems(data);
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
  }, [user]);

  const addToCart = async (data) => {
    try {
      const res = await fetch("https://digital-nexus-server.vercel.app/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.acknowledged) {
        toast.success("Item added successfully!");
        setCartItems([...cartItems, { _id: result.insertedId, ...data }]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, loading, error, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
