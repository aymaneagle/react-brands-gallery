import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx";
import BrandDetails from "../components/BrandDetails.jsx";
export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/brands/:brandId",
                element: <BrandDetails/>
            }
        ]
    }
]);