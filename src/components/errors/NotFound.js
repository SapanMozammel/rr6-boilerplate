import React from "react";
import {
  Link,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

const errorMessage = [
  {
    status: 404,
    message: "This page doesn't exist!",
  },
  {
    status: 401,
    message: "You aren't authorized to see this",
  },
  {
    status: 503,
    message: "Looks like our API is down",
  },
  {
    status: 418,
    message: "🫖",
  },
];

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 min-h-screen">
      <div className="w-full xl:w-1/2 relative pb-6 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                {console.log(error)}
                {isRouteErrorResponse(error)
                  ? `${error.status}! ${
                      errorMessage.find((e) => e.status == error.status)
                        ?.message
                    }`
                  : `404! ${errorMessage.find((e) => e.status == 404).message}`}
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="sm:w-full lg:w-auto border rounded-md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 inline-flex"
                >
                  Back to Previous Page
                </button>
                <Link
                  to="/"
                  className="sm:w-full lg:w-auto border rounded-md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 inline-flex"
                >
                  Go to HomePage
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};

export default NotFound;
