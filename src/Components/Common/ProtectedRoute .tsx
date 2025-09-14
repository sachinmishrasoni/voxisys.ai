

// Example auth check function (you should implement your real auth check)
// const isAuthenticated = () => {
//     // Replace this with real auth logic, like checking a token or state
//     return localStorage.getItem('authToken'); // Example: checking if a token exists
// };

const ProtectedRoute = ({ element }: {
    element: JSX.Element
}) => {
    // If the user is not authenticated, redirect to login
    // if (false) {
    //     return <Navigate to="/voxisys.ai/login" replace />;
    // }

    // If the user is authenticated, render the passed component
    return element;
};

export default ProtectedRoute;
