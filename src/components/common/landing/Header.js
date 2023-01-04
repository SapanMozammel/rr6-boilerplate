import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";

const Header = () => {
  const landingLinks = routes.find((navLink) => navLink.layout === "landing");
  const navLinks = landingLinks?.children?.length
    ? landingLinks?.children?.filter((navLink) => navLink?.navbar === true)
    : [];

  return (
    <header className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto block"
                src="https://assets.wpdeveloper.com/2021/10/templately-1.png"
                alt="Your Company"
              />
            </div>
            <div className="ml-6 flex w-full">
              <nav className="flex space-x-4 ml-auto">
                {navLinks?.length &&
                  navLinks?.map((navLink) => (
                    <NavLink
                      key={Math.random()}
                      to={navLink?.path ?? "/"}
                      className={(link) =>
                        `px-3 py-2 rounded-md text-sm font-medium ${
                          link?.isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white "
                        }`
                      }
                    >
                      {navLink?.name}
                    </NavLink>
                  ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
