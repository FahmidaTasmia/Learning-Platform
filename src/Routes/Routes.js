import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Shared/Login/Login/Login";
import Register from "../pages/Shared/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            

            {
                path:'/blog',
                element:<Blog></Blog>
            },

            
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            
            {
                path:'/faq',
                element:<Faq></Faq>
            },

            
            {
                path:'/checkout',
                element:<CheckOut></CheckOut>
            },

             
            {
                path:'/login',
                element:<Login></Login>
            },

            {
                path:'/register',
                element:<Register></Register>
            },

        ]
    }
])