import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PageNotFound from "../Components/Common/Errors/PageNotFound";
import Chats from "../Pages/Chats";

const router = createBrowserRouter([
    {
        // http://localhost:5173/voxisys.ai/
        path: "/voxisys.ai/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Navigate to="/voxisys.ai/chats" />,
            },
            {
                path: "/voxisys.ai/chats",
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