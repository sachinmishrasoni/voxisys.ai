import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PageNotFound from "../Components/Common/Errors/PageNotFound";
import Chats from "../Pages/Chats";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Navigate to="/chats" />,
            },
            {
                path: "/chats",
                element: <Chats />
            },
        ]
    },
    {
        path: "*",
        element: <PageNotFound />,
    }
]);

export default router;