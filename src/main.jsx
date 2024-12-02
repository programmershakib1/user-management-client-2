import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/AddUser.jsx";
import AllUser from "./components/AllUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllUser></AllUser>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: "/addUser",
    element: <AddUser></AddUser>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
