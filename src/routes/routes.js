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
import AuthRole from "./AuthRole";


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element:<NavBarLayout /> ,
      children: [
        { index:true, element: <Main /> },
        { path: "view", element: <Listing /> },
        { path: "post", element: <Post /> },
      ],
    },
    {
      path: "/",
       //element:<AuthRequire><NavBarLayout /></AuthRequire> ,
       element:<NavBarLayout /> ,
      children: [
        { path: "viewed", element: <Viewed /> },
        { path: "view", element: <Navigate to="/view" /> },
        { path: "post", element: <Navigate to="/post" /> },
        { path: "users", element: <UserSetting /> },
        //{ path: "users/me", element: <UserProfilePage /> },
        //{ path: "users/:userId", element: <UserProfilePage /> },
        //{ path: "users/me/update", element: <UserSetting /> },
        //{ path: "delete/:userId", element: <AuthRole><UserProfilePage /></AuthRole> },
        //{ path: "role/all", element: <AuthRole><UserProfilePage /></AuthRole> },
        //{ path: "post/create", element: <Navigate to="nav/post" /> },
        //{ path: "post/postlist/:userId", element: <Navigate to="nav/post" /> },
        //{ path: "post/:id", element: <Navigate to="nav/post" /> },
        // { path: "friend", element: <Navigate to="users/friend" /> },
        // { path: "friend", element: <Navigate to="users/friend/requests/:userId" /> },
        // { path: "friend", element: <Navigate to="users/friend/friendlist" /> },
        // { path: "friend", element: <Navigate to="users/friend/:userId" /> },
      ],
    },
    {
      path: "/",
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
