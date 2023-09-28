import {createBrowserRouter} from "react-router-dom";
import Login from "./features/identity/components/login.jsx";
import Register, {registerAction} from "./features/identity/components/register.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";

const Router = createBrowserRouter([
    {
        element:<IdentityLayout/>,
        children:[
            {
                path: 'login',
                element: <Login/>
            }, {
                path: 'register',
                element: <Register/>,
                action:registerAction,
                errorElement:<Register/>
            }
        ]
    },
])
export default Router;