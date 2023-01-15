import React from "react";
import { Link } from "react-router-dom";

const ResetSuccess = () => {
  return (
    <div className="mt-20">
      <h2 className="text-lg font-semibold text-gray-900">
        Reset Password Successfully.
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Your Password Reset Successfully. You Can{" "}
        <Link
          className="font-medium text-blue-600 hover:underline"
          to="/auth/login"
        >
          Login
        </Link>{" "}
        to your account now.
      </p>
    </div>
  );
};

export default ResetSuccess;
