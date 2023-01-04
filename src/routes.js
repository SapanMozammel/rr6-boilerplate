import Landing from "./components/layout/Landing";
import Home from "./components/landing/home";
import About from "./components/landing/about";
import AboutMe from "./components/landing/about/children/AboutMe";
import AboutCompany from "./components/landing/about/children/AboutCompany";

export const routes = [
  {
    layout: "landing",
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        // exact: true,
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
        element: <About />,
        children: [
          {
            path: ":id/",
            index: false,
            name: "Portfolio Details",
            element: <AboutCompany />,
            navbar: false,
          },
        ],
      },
    ],
  },
];
