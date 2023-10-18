import React from "react";
import Nav from "../components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const MainLayout = () => {
  const locction = useLocation();

  return (
    <>
      <header className={locction.pathname === "/" ? "bg-img" : ""}>
        <div className="">
          <Nav />
        </div>
        {locction.pathname === "/" && <Banner />}
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
