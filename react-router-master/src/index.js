import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import Footer from "./component/Footer";
import Body from "./component/Body";
import App from "./App";
import * as ReactDOM from "react-dom";
import Form from "./component/Form";
import BodyPrint from "./component/BodyPrint";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyPrint />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/bodyPrint",
        element: <BodyPrint />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
