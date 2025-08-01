

import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/dashboard/Home";

export const routes = [
    {
        path: 'signup',
        element: <Register />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
           
            // {
            //     path: "result",
            //     element:(<ProtectedRoute><AptitudeResult /></ProtectedRoute>) ,
            //     errorElement: (
            //       <Error
            //         title="Result Error"
            //         message="Failed to load aptitude results."
            //         showGoBack={true}
            //         showGoHome={true}
            //       />
            //     ),
            //   },
        ]
    }
]