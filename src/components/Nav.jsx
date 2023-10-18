import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
// import avatar from "../../assets/user8.png";
import { AuthContext } from "../context/AuthContext";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);

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
    <div className="px-2 lg:px-0 bg-transparent text-white pt-4 md:pt-7">
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
              className="menu menu-compact dropdown-content -left-14 mt-3 p-2 shadow bg-base-100 rounded-box w-24 mr-10 z-40"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Add Product</Link>
              </li>
              <li>
                <Link to="/gallery">Cart(0)</Link>
              </li>
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
                    ? " underline font-semibold text-lg"
                    : "font-semibold text-lg"
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
                    ? " underline font-semibold text-lg"
                    : "font-semibold text-lg"
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
                    ? " underline font-semibold text-lg"
                    : "font-semibold text-lg"
                }
              >
                Cart(0)
              </NavLink>
            </li>

            {user?.email ? (
              <>
                <button
                  className="bg-transparent border-2 text-sm md:text-base border-white rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5.5 text-stone font-semibold"
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
                  <div className="">
                    <div className="w-10 rounded-full bg-transparent">
                      <img src={""} alt="asdsa" />
                    </div>
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
                        ? " underline font-semibold text-lg"
                        : "font-semibold text-lg"
                    }
                  >
                    Sign up
                  </NavLink>
                </li>
                <Link
                  to="/login"
                  className="bg-transparent border-2 text-sm md:text-base border-white rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5.5  font-semibold"
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
