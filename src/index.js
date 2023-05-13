import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import Footer from "./component/Footer";
import Body from "./component/Body";
import App from "./App";
import * as ReactDOM from "react-dom";
import InputForm from "./component/Form";
import BodyPrint from "./component/BodyPrint";
import Counter from "./component/Counter";
import FetchData from "./component/FetchData/FetchData";
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
        element: <InputForm  />,
      },
      {
        path: "/bodyPrint",
        element: <BodyPrint />,
      },
      {
        path: "/counter",
        element: <Counter/>,
      },
      {
        path: "/fetchdata",
        element: <FetchData/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
