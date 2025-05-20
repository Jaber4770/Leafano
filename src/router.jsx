import { createBrowserRouter } from "react-router";
import Root from "./Layout/Root";
import Home from "./pages/Home";
import BrowseTips from "./pages/BrowseTips";
import ExploreGardeners from "./pages/ExploreGardeners";
import ErrorPage from "./pages/ErrorPage";
import MyTips from "./pages/MyTips";
import ShareTips from "./pages/ShareTips";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home></Home>
            },
            {
                path: '/browsetips',
                element: <BrowseTips></BrowseTips>

            },
            {
                path: '/mytips',
                element: <MyTips></MyTips>
            },
            {

                path: '/exploregardeners',
                element: <ExploreGardeners></ExploreGardeners>
            },
            {
                path: '/sharetips',
                element: <ShareTips></ShareTips>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);