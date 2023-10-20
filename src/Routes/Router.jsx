import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      { path: "/products/:brand", element: <Products /> },
      { path: "/updateproducts/:id", element: <UpdateProduct /> },
      {
        path: "/products/:brandName/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
