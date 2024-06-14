import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <div>Hello</div>
            },
            {
                path:'/register',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <SignIn></SignIn>
            }
        ]
    },

])
export default router;