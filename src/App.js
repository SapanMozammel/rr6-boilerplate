import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import NotFound from "./components/errors/NotFound";

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
    <>
      {routes?.map((layout) => (
        <Route
          key={Math.random()}
          path={layout?.path}
          element={layout?.element}
          errorElement={<NotFound />}
        >
          {nestedRoute(layout)}
        </Route>
      ))}
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
