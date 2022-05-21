import { Navigate, useRoutes } from "react-router-dom";
// layouts
import NavBarLayout from "../layouts/Navbars";
import BlankLayout from "../layouts/BlankLayout";
//
import Post from "../pages/Post";
import Viewed from "../pages/Viewed";
import Login from "../pages/Login";
import NotFound from "../pages/404Page";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Listing from "../pages/Article";
import UserSetting from "../pages/UserSetting";
import UserProfilePage from "../pages/UserProfile";
import AuthRequire from "./AuthRequire";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/nav",
       element:<AuthRequire><NavBarLayout /></AuthRequire> ,
       //element:<NavBarLayout /> ,
      children: [
        { path: "main", element: <Main /> },
        { path: "viewed", element: <Viewed /> },
        { path: "view", element: <Listing /> },
        { path: "posts", element: <Post /> },
        { path: "users", element: <UserProfilePage /> },
        { path: "users/setting", element: <UserSetting /> },
      ],
    },
    {
    element: <BlankLayout/>,
    children: [
      { path: '/', element: <Navigate to="/nav/main" /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "404", element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
