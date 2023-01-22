import { useState } from "react";
import Sidebar from "../common/dashboard/Sidebar";
import Header from "../common/dashboard/Header";
import Footer from "../common/dashboard/Footer";
import { Outlet } from "react-router-dom";

const User = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col md:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default User;
