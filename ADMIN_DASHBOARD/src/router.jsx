import {createBrowserRouter} from "react-router-dom";
import Login, {loginAction} from "./features/identity/components/login.jsx";
import Register, {registerAction} from "./features/identity/components/register.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";
import MainLayout from "./layouts/mainLayout/main-layout.jsx";
import Courses from "./pages/courses.jsx";

const Router = createBrowserRouter([
    {
      path:'/',
        element:<MainLayout/>,
        children:[
            {
                element: <Courses/>,
                index:true
            }
        ]
    },
    {
        element:<IdentityLayout/>,
        children:[
            {
                path: 'login',
                element: <Login/>,
                action:loginAction,
                errorElement:<Login/>
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