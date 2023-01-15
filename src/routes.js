import Landing from "./components/layout/Landing";
import Home from "./components/landing/home";
import About from "./components/landing/about";
import AboutMe from "./components/landing/about/AboutMe";
import AboutCompany from "./components/landing/about/AboutCompany";
import Portfolio from "./components/landing/portfolio";
import SinglePortfolio from "./components/landing/portfolio/SinglePortfolio";

import Auth from "./components/layout/Auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import ResetSuccess from "./components/auth/ResetSuccess";

import User from "./components/layout/User";

export const routes = [
  {
    layout: "landing",
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        name: "Home",
        navbar: true,
        element: <Home />,
      },
      {
        path: "about",
        index: false,
        name: "About",
        navbar: true,
        element: <About />,
        children: [
          {
            index: true,
            name: "About Me",
            navbar: true,
            element: <AboutMe />,
          },
          {
            path: "company",
            index: false,
            name: "About WPDeveloper",
            element: <AboutCompany />,
            navbar: true,
          },
        ],
      },
      {
        path: "portfolio",
        index: false,
        name: "Portfolio",
        navbar: true,
        element: <Portfolio />,
      },
      {
        path: "portfolio/:id",
        index: false,
        name: "Single Portfolio",
        element: <SinglePortfolio />,
        navbar: false,
      },
    ],
  },
  {
    layout: "auth",
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        index: false,
        name: "Login",
        element: <Login />,
      },
      {
        path: "register",
        index: false,
        name: "Sign Up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        index: false,
        name: "Forget Password",
        element: <ForgetPassword />,
      },
      {
        path: "reset-password",
        index: false,
        name: "Reset Password",
        element: <ResetPassword />,
      },
      {
        path: "reset-success",
        index: false,
        name: "Password Reset Successfully",
        element: <ResetSuccess />,
      },
    ],
  },
  {
    layout: "user",
    path: "/user",
    element: <User />,
  },
];
