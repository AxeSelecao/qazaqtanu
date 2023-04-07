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
import Test_Unit1 from "./pages/categories/language/study/levels/beginner/unit-1/Test_unit-1";
import Tasks_unit2 from "./pages/categories/language/study/levels/beginner/unit-2/Tasks_unit-2";
import Tasks_unit3 from "./pages/categories/language/study/levels/beginner/unit-3/Tasks_unit-3";
import Unit1_Topic1 from "./pages/categories/language/study/levels/beginner/unit-1/Topic-1";
import Unit2_Topics from "./pages/categories/language/study/levels/beginner/unit-2/Topics";
import Unit3_Topics from "./pages/categories/language/study/levels/beginner/unit-3/Topics";
import Unit4_Topics from "./pages/categories/language/study/levels/beginner/unit-4/Topics";
import Tasks_unit4 from "./pages/categories/language/study/levels/beginner/unit-4/Tasks_unit-4";
import Unit5_Topics from "./pages/categories/language/study/levels/beginner/unit-5/Topics";
import Unit6_Topics from "./pages/categories/language/study/levels/beginner/unit-6/Topics";

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
            path: "/language/study/beginner/unit-1/topic/:num",
            element: <Unit1_Topic1 />,
          },
          {
            path: "/language/study/beginner/unit-1/test",
            element: <Test_Unit1 />,
          },
          {
            path: "/language/study/beginner/unit-2/topic/:num",
            element: <Unit2_Topics />,
          },
          {
            path: "/language/study/beginner/unit-2/task/:num",
            element: <Tasks_unit2 />,
          },
          {
            path: "/language/study/beginner/unit-3/topic/:num",
            element: <Unit3_Topics />,
          },
			 {
            path: "/language/study/beginner/unit-3/task/:num",
            element: <Tasks_unit3 />,
          },
			 {
            path: "/language/study/beginner/unit-4/topic/:num",
            element: <Unit4_Topics />,
          },
			 {
            path: "/language/study/beginner/unit-4/task/:num",
            element: <Tasks_unit4 />,
          },
			 {
            path: "/language/study/beginner/unit-5/topic/:num",
            element: <Unit5_Topics />,
          },
			 {
            path: "/language/study/beginner/unit-6/topic/:num",
            element: <Unit6_Topics />,
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
