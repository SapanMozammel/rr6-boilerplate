import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";

const nestedRoute = (route) => {
  return route?.children?.length
    ? route?.children?.map((nRoute) => (
        <Route key={Math.random()} {...nRoute}>
          {nestedRoute(nRoute)}
        </Route>
      ))
    : "";
};
const router = createBrowserRouter(
  createRoutesFromElements(
    routes?.map((layout) => (
      <Route path={layout?.path} element={layout?.element}>
        {nestedRoute(layout)}
      </Route>
    ))
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
