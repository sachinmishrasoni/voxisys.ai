import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PageNotFound from "../Components/Common/Errors/PageNotFound";
import Chats from "../Pages/Chats";
import Bookmark from "../Pages/Bookmark";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import ProtectedRoute from "../Components/Common/ProtectedRoute ";
import Signup from "../Pages/Auth/Signup";
import ForgetPassword from "../Pages/Auth/ForgetPassword";

// http://localhost:5173/voxisys.ai/

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/voxisys.ai" replace />,  
    },
    {
        path: "/voxisys.ai",
        element: <Home />
    },
    {
        path: "/voxisys.ai/login",
        element: <Login />
    },
    {
        path: "/voxisys.ai/signup",
        element: <Signup />
    },
    {
        path: "/voxisys.ai/forgot-password",
        element: <ForgetPassword />
    },
    {
        path: "/voxisys.ai",
        element: <ProtectedRoute element={<App />} />,
        children: [
            // {
            //     path: "", // Default redirect to /chats
            //     element: <Navigate to="/voxisys.ai/chats" replace />,
            // },
            {
                path: "chats",
                element: <Chats />,
                children: [
                    
                ]
            },
            {
                path: "chats/bookmark",
                element: <Bookmark />
            },
        ]
    },
    {
        path: "*",
        element: <PageNotFound />,
    }
]);

export default router;