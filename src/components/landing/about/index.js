import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const About = () => {
  const currentPath = useLocation();
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white lg:w-full lg:max-w-2xl xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mx-auto py-10 max-w-7xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8 xl:py-28 h-full min-h-screen flex flex-col">
            <div className="sm:text-center lg:text-left flex flex-col h-full grow">
              <div className="mb-5 sm:mb-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/about"
                    className={`flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg ${
                      currentPath?.pathname == "/about"
                        ? "text-white hover:bg-indigo-700 bg-indigo-600"
                        : " text-indigo-700 hover:bg-indigo-200 bg-indigo-100"
                    }`}
                  >
                    About Me
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about/company"
                    className={`flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg ${
                      currentPath?.pathname == "/about/company"
                        ? "text-white hover:bg-indigo-700 bg-indigo-600"
                        : "text-indigo-700 hover:bg-indigo-200 bg-indigo-100"
                    }`}
                  >
                    About My Company
                  </Link>
                </div>
              </div>
              <div className="h-full flex flex-col justify-center grow">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
