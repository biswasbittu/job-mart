import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Root/Rootlayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    children:[
        {index:true,
            Component:Home
        },
        {
          path:'register',
          Component:Register,
        }

        

    ]
  },
]);


export default router;