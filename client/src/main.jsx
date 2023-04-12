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
import Unit1_Topic1 from "./pages/categories/language/study/levels/beginner/unit-1/Topic-1";
import Unit2_Topics from "./pages/categories/language/study/levels/beginner/unit-2/Topics";
import Unit3_Topics from "./pages/categories/language/study/levels/beginner/unit-3/Topics";
import Unit4_Topics from "./pages/categories/language/study/levels/beginner/unit-4/Topics";
import Unit5_Topics from "./pages/categories/language/study/levels/beginner/unit-5/Topics";
import Unit6_Topics from "./pages/categories/language/study/levels/beginner/unit-6/Topics";
import Test_Unit2 from "./pages/categories/language/study/levels/beginner/unit-2/Test_unit-2";
import Test_Unit3 from "./pages/categories/language/study/levels/beginner/unit-3/Test_unit-3";
import Task_Unit3 from "./pages/categories/language/study/levels/beginner/unit-3/Task_unit-3";
import Task_Unit4 from "./pages/categories/language/study/levels/beginner/unit-4/Task_unit-4";
import Test_Unit4 from "./pages/categories/language/study/levels/beginner/unit-4/Test_unit-4";
import Task_Unit5 from "./pages/categories/language/study/levels/beginner/unit-5/Task_unit-5";
import Test_Unit5 from "./pages/categories/language/study/levels/beginner/unit-5/Test_unit-5";
import Task_Unit6 from "./pages/categories/language/study/levels/beginner/unit-6/Task_unit-6";
import Test_Unit6 from "./pages/categories/language/study/levels/beginner/unit-6/Test_unit-6";
import Unit7_Topics from "./pages/categories/language/study/levels/beginner/unit-7/Topics";
import Task_Unit7 from "./pages/categories/language/study/levels/beginner/unit-7/Task_unit-6";
import Unit8_Topics from "./pages/categories/language/study/levels/beginner/unit-8/Topics";
import Unit9_Topics from "./pages/categories/language/study/levels/beginner/unit-9/Topics";

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
            path: "/language/study/beginner/unit-1/test/:num",
            element: <Test_Unit1 />,
          },
          {
            path: "/language/study/beginner/unit-2/topic/:num",
            element: <Unit2_Topics />,
          },
          {
            path: "/language/study/beginner/unit-2/test/:num",
            element: <Test_Unit2 />,
          },
          {
            path: "/language/study/beginner/unit-3/topic/:num",
            element: <Unit3_Topics />,
          },
          {
            path: "/language/study/beginner/unit-3/test/:num",
            element: <Test_Unit3 />,
          },
          {
            path: "/language/study/beginner/unit-3/task/:num",
            element: <Task_Unit3 />,
          },
          {
            path: "/language/study/beginner/unit-4/topic/:num",
            element: <Unit4_Topics />,
          },
          {
            path: "/language/study/beginner/unit-4/task/:num",
            element: <Task_Unit4 unit={4 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-4/test/:num",
            element: <Test_Unit4 unit={4 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-5/topic/:num",
            element: <Unit5_Topics />,
          },
          {
            path: "/language/study/beginner/unit-5/task/:num",
            element: <Task_Unit5 unit={5 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-5/test/:num",
            element: <Test_Unit5 unit={5 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-6/topic/:num",
            element: <Unit6_Topics />,
          },
          {
            path: "/language/study/beginner/unit-6/task/:num",
            element: <Task_Unit6 unit={6 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-6/test/:num",
            element: <Test_Unit6 unit={6 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-7/topic/:num",
            element: <Unit7_Topics unit={7 - 1} />,
          },
			 {
            path: "/language/study/beginner/unit-7/task/:num",
            element: <Task_Unit7 unit={7 - 1} />,
          },
          {
            path: "/language/study/beginner/unit-7/test/:num",
            element: <Test_Unit6 unit={6 - 1} />,
          },
			 {
            path: "/language/study/beginner/unit-8/topic/:num",
            element: <Unit8_Topics unit={8 - 1} />,
          },
			 {
            path: "/language/study/beginner/unit-9/topic/:num",
            element: <Unit9_Topics unit={9 - 1} />,
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
