import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store/store";

import { Drink, Header } from "./components";
import NotFound from "./components/NotFound";
import { cocktailEnum } from "../types";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element with id root is missing");
const root = createRoot(rootEl);

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const getRoutes = () => {
  return [
    { path: "*", element: <NotFound /> },
    ...Object.keys(cocktailEnum).map((cocktail) => {
      return {
        path: cocktail === cocktailEnum.margarita ? "/" : `/${cocktail}`,
        element: <Drink />,
      };
    }),
  ];
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [...getRoutes()],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
