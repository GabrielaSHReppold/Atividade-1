import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../src/pages/Login";
import Home from "../../src/pages/Home";
import ListaDeMercado from "../../src/pages/ListaDeMercado";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,      
    },
    {
      path: "/Login",
      element: < Login />,
    },
    {
      path: "/ListaDeMercado",
      element: < ListaDeMercado />,
    },
  ]);

function AppRoutes(){
    return <RouterProvider router={router} />
}

export default AppRoutes;




