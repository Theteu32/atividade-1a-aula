import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaDeCompras from "../../pages/ListaDeCompras";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "Lista_de_compras",
      element: <ListaDeCompras/>,
    },
    {
        path: "Sobre",
        element: <Sobre/>
    }
  ]);

  function AppRoutes(){
    return <RouterProvider router={router} />
  }

  export default AppRoutes;