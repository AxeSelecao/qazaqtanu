import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./pages/authorization/SignIn";
import { SignUp } from "./pages/authorization/SignUp";
import { Profile } from "./pages/Profile";
import { Language } from "./pages/categories/language/Language";
import Alphabet from "./pages/categories/language/alphabet/Alphabet";
import Study from "./pages/categories/language/study/Study";
import Beginner from "./pages/categories/language/study/levels/beginner/Beginner";
import { Landing } from "./pages/Landing";
import Unit1 from "./pages/categories/language/study/levels/beginner/unit-1/Unit-1";
import Tasks_unit1 from "./pages/categories/language/study/levels/beginner/unit-1/Tasks_unit-1";
import Unit2 from "./pages/categories/language/study/levels/beginner/unit-2/Unit-2";
import Tasks_unit2 from "./pages/categories/language/study/levels/beginner/unit-2/Tasks_unit-2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/authorization",
        element: <SignIn />,
      },
      {
        path: "/registration",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/language",
        element: <Language />,
      },
      {
        path: "/language/alphabet",
        element: <Alphabet />,
      },
      {
        path: "/language/study",
        element: <Study />,
      },
      {
        path: "/language/study/beginner",
        element: <Beginner />,
        children: [
          {
            path: "/language/study/beginner/unit-1",
            element: <Unit1 />,
          },
          {
            path: "/language/study/beginner/unit-1/tasks",
            element: <Tasks_unit1 />,
          },
			 {
            path: "/language/study/beginner/unit-2",
            element: <Unit2 />,
          },
			 {
            path: "/language/study/beginner/unit-2/tasks",
            element: <Tasks_unit2 />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
