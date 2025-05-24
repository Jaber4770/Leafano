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
import Loader from "./components/Loader";
import Terms from "./components/Terms";
import GardenerDetails from "./components/GardenerDetails";
import TipsDetails from "./components/TipsDetails";
import MyTipsDetails from "./components/MyTipsDetails";
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
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/users'),
                hydrateFallbackElement:<Loader></Loader>
            },
            {
                path: '/browsetips',
                element: <BrowseTips></BrowseTips>,
                hydrateFallbackElement: <Loader></Loader>

            },
            {
                path: 'tipsDetails/:id',
                element: <TipsDetails></TipsDetails>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/mytips',
                element: <PrivateRoute><MyTips></MyTips></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: "/mytipsdetails/:id",
                element: <MyTipsDetails></MyTipsDetails>,
                hydrateFallbackElement:<Loader></Loader>
            },
            {
                path: '/exploregardeners',
                element: <ExploreGardeners></ExploreGardeners>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/gardenerDetails/:id',
                element: <GardenerDetails></GardenerDetails>,
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
            }
        ]
    },
]);