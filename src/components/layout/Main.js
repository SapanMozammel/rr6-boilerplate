import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/main/Header";
import Footer from "../common/main/Footer";

const Main = () => {
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

export default Main;
