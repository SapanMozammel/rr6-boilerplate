import { useState } from "react";
import Sidebar from "../common/dashboard/Sidebar";
import Header from "../common/dashboard/Header";
import Footer from "../common/dashboard/Footer";

const User = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col md:pl-64 min-h-screen">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default User;
