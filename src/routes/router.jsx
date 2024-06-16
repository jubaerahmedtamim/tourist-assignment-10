import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import AllTouristSpots from "../Components/AllTouristSpots";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList from "../pages/MyList";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ErrorElement from "../pages/shared/ErrorElement";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/register',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <SignIn></SignIn>
            },
            {
                path:'/allTouristSpot',
                element: <AllTouristSpots></AllTouristSpots>,
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoutes><AddTouristSpot></AddTouristSpot></PrivateRoutes>,
            },
            {
                path: '/myList',
                element: <PrivateRoutes><MyList></MyList></PrivateRoutes>
            }
        ]
    },

])
export default router;