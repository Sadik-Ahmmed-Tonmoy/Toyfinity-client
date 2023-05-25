import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Components/Error/Error";
import Main from "../Layout/MainLayout/Main";
import AllToys from "../Components/AllToys/AllToys";
import Blogs from "../Components/Blogs/Blogs";
import MyToys from "../Components/MyToys/MyToys";
import AddAToy from "../Components/AddAToy/AddAToy";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import UpdateToy from "../Components/UpdateToy/UpdateToy";
import TabDetails from "../Components/TabDetails/TabDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      },
      {
        path: "/tabToys/:id",
        element: <PrivateRoute><TabDetails></TabDetails></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({params}) => fetch(`https://toyfinity-server.up.railway.app/details/${params.id}`)
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addAToy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
      },
      {
        path: "/myToy",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/logIn",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ],
  },
]);

export default router;