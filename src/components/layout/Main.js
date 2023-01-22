import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/main/Header";
import Footer from "../common/main/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
