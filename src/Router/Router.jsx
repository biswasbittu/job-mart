import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Root/Rootlayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import Jobdetails from "../Pages/Jobdetails/Jobdetails";
import JobApply from "../Pages/JobApply/JobApply";
import Privateroutes from "../Private/Privateroutes";

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
        },
        {
          path:'signin',
          Component:Signin,
        },

        {
          path:'/jobs/:id',
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
          Component:Jobdetails,
        }

        ,
        {
          path:'/jobApply/:id',
          element:<Privateroutes><JobApply/></Privateroutes>

        }

        

    ]
  },
]);


export default router;