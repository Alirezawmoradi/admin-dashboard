import Login from "./features/identity/components/login.jsx";
import Register from "./features/identity/components/register.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";

function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
