import { createBrowserRouter } from "react-router";
import GardenerDetails from "./components/GardenerDetails";
import Loader from "./components/Loader";
import MyTipsDetails from "./components/MyTipsDetails";
import Terms from "./components/Terms";
import TipsDetails from "./components/TipsDetails";
import UpdateProfile from "./components/UpdateProfile";
import UpdateTip from "./components/UpdateTip";
import Root from "./Layout/Root";
import BrowseTips from "./pages/BrowseTips";
import ErrorPage from "./pages/ErrorPage";
import ExploreGardeners from "./pages/ExploreGardeners";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyTips from "./pages/MyTips";
import ShareTips from "./pages/ShareTips";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                index: true,
                // loader: () => fetch('/users'),
                element: <Home></Home>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/browsetips',
                element: <BrowseTips></BrowseTips>,
                hydrateFallbackElement: <Loader></Loader>

            },
            {
                path: 'tipsDetails/:id',
                element: <PrivateRoute><TipsDetails></TipsDetails></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/mytips',
                element: <PrivateRoute><MyTips></MyTips></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: "/mytipsdetails/:id",
                element: <PrivateRoute><MyTipsDetails></MyTipsDetails></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/exploregardeners',
                element: <ExploreGardeners></ExploreGardeners>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/gardenerDetails/:id',
                element: <PrivateRoute><GardenerDetails></GardenerDetails></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/sharetips',
                element: <PrivateRoute><ShareTips></ShareTips></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/login',
                element: <Login></Login>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/terms',
                element: <Terms></Terms>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: "/updateProfile/:id",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/updateTip/:id',
                element: <PrivateRoute><UpdateTip></UpdateTip></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            }
        ]
    },
]);