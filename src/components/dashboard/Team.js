import React from "react";

const Team = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="text-xl text-gray-500">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse. Vivamus
              fringilla.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>Leslie Alexander</h3>
                    <p className="text-indigo-600">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>Leslie Alexander</h3>
                    <p className="text-indigo-600">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>Leslie Alexander</h3>
                    <p className="text-indigo-600">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>Leslie Alexander</h3>
                    <p className="text-indigo-600">Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
