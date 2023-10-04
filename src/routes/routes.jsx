import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login/Login";
import Destination from "../pages/Destination/Destination";
import Registration from "../pages/Registration/Registration";
import Hotels from "../pages/Hotels/Hotels";
import NewHotels from "../pages/NewHotels/NewHotels";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:"registration",
                element:<Registration/>
            },
            {
                path:'destination',
                element:<Destination/>,
                loader:()=>fetch('http://localhost:5500/places')
            },
            {
                path:'destination/:id',
                element:<PrivateRoutes><Hotels/></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5500/places/${params.id}`)
            }
           
        ]
    }
])

export default router