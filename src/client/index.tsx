import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store/store";

import { Header } from "./components";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element with id root is missing");
const root = createRoot(rootEl);

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      { path: "/mojito", element: <App /> },
      { path: "/a1", element: <App /> },
      { path: "/kir", element: <App /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
