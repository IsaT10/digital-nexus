import React from "react";
import Nav from "../components/Nav";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const locction = useLocation();
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default MainLayout;
