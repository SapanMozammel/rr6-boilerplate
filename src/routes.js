import Landing from "./components/layout/Landing";
import Home from "./components/landing/home";
import About from "./components/landing/about";
import AboutMe from "./components/landing/about/AboutMe";
import AboutCompany from "./components/landing/about/AboutCompany";
import Portfolio from "./components/landing/portfolio";
import SinglePortfolio from "./components/landing/portfolio/SinglePortfolio";

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
];
