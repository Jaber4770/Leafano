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
                // HydrateFallback: <Loader />

            },
            {
                path: '/mytips',
                element: <MyTips></MyTips>,
                // HydrateFallback: <Loader />
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
                element: <ShareTips></ShareTips>,
                // HydrateFallback: <Loader />
            },
            {
                path: '/login',
                element: <Login></Login>,
                // HydrateFallback: <Loader />
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
                // HydrateFallback: <Loader />
            },
            {
                path: '/terms',
                element: <Terms></Terms>
                // HydrateFallback: <Loader />
            }
        ]
    },
]);