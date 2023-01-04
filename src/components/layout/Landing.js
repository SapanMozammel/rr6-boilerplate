import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/landing/Header";
import Footer from "../common/landing/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
