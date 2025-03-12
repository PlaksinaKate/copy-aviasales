import React from "react";
import { PATHS } from "helpers/consts";
import { Home } from "routes/Home/Home";

export default [
  {
    path: PATHS.home,
    element: <Home />,
    children: [
      {
        path: PATHS.home,
        index: true,
        element: <Home />,
      },
    ],
  },
];
