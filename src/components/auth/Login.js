import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/user");
  };

  return (
    <>
      <div className="mt-20">
        <h2 className="text-lg font-semibold text-gray-900">
          Log in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            className="font-medium text-blue-600 hover:underline"
            to="/auth/register"
          >
            Sign up
          </Link>{" "}
          for a free trial.
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mt-10 grid grid-cols-1 gap-y-8"
      >
        <div className="">
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required=""
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="">
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            required=""
            className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
          <p className="mt-2 text-sm text-gray-700">
            <Link
              className="font-medium text-blue-600 hover:underline"
              to="/auth/forget-password"
            >
              Forget Password?
            </Link>{" "}
          </p>
        </div>
        <div>
          <button
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
            type="submit"
          >
            <span>
              Log in <span aria-hidden="true">→</span>
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
