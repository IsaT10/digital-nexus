import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import avatar from "../assets/user8.png";

const Nav = () => {
  const [isDark, setIsDark] = useState(true);
  const { logOut, user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const dark = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-2 lg:px-0 bg-white dark:bg-transparent text-primary-color dark:text-white py-2 md:py-6">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="md:navbar-start  w-full flex justify-between items-center">
          <div className="flex gap-2 md:gap-2 lg:gap-5 items-center">
            <Link to="/">
              <h1 className="text-lg md:text-xl lg:text-2xl  font-semibold ">
                DigitalNexus
              </h1>
            </Link>
          </div>

          <div className="dropdown ">
            <label tabIndex={0} className="btn  btn-ghost md:hidden  focus:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content -left-14 mt-3 p-2 shadow bg-base-100 rounded-box w-24 mr-10 z-40 dark:text-white text-black dark:bg-primary-color"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addproduct">Add Product</Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart{user?.email && `(${cartItems.length})`}
                </Link>
              </li>
              <button onClick={dark}>
                {isDark ? <li>Dark</li> : <li>Light</li>}
              </button>
              {user?.email ? (
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/login">login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden md:flex ">
          <ul className="flex gap-6 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-l-8 border-primary-color dark:border-stone-300 pl-1 lg:text-lg font-semibold"
                    : "font-semibold lg:text-lg"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-l-8 border-primary-color  dark:border-stone-300 pl-1 lg:text-lg font-semibold"
                    : "font-semibold lg:text-lg"
                }
              >
                Add product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-l-8 border-primary-color dark:border-stone-300 pl-1 lg:text-lg font-semibold"
                    : "font-semibold lg:text-lg"
                }
              >
                Cart{user?.email && `(${cartItems.length})`}
              </NavLink>
            </li>

            <button onClick={dark}>
              {isDark ? (
                <svg
                  className="swap-on fill-current w-7 h-7 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              ) : (
                <svg
                  className="swap-off fill-current w-7 h-7 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </button>

            {user?.email ? (
              <>
                <button
                  className="bg-transparent border-2 text-sm md:text-base border-primary-color dark:border-white rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5.5 text-stone font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>

                <li className="font-semibold uppercase">{user?.displayName}</li>

                {user?.photoURL ? (
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="w-10 rounded-full bg-transparent">
                    <img src={avatar} alt="asdsa" />
                  </div>
                )}
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " border-l-8 border-primary-color dark:border-stone-300 pl-1 lg:text-lg font-semibold"
                        : "font-semibold lg:text-lg"
                    }
                  >
                    Sign up
                  </NavLink>
                </li>
                <Link
                  to="/login"
                  className="bg-transparent border-2 text-sm md:text-base border-primary-color dark:border-white rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5.5  font-semibold"
                >
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
