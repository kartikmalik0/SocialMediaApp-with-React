import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dashboard from "../components/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import Users from "../components/allUsers/Users";
import Profile from "../components/profile/Profile";
import Comments from "../components/comments/Comments";
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";
export const routes = createBrowserRouter([
    { path: ROOT, element: < Login / > },
    { path: LOGIN, element: < Login / > },
    { path: REGISTER, element: < Register / > },
    {
        path: PROTECTED,
        element: < Layout / > ,
        children: [{
                path: DASHBOARD,
                element: < Dashboard / > ,
            },
            {
                path: USERS,
                element: < Users / > ,
            },
            {
                path: PROFILE,
                element: < Profile / > ,
            },
            {
                path: COMMENTS,
                element: < Comments / > ,
            },
        ],
    },
]);