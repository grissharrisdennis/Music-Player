import {createBrowserRouter} from "react-router-dom";
import App from '../App'
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        // {
        //     path:'/',
        //     element:<div>dasdasdasdasd</div>
        // },
        {
            path:'/music',
            element:<div>dasdasdasdasd</div>
        },
        {
            path:'/podcast',
            element:<div>dasdasdasdasd</div>
        },
        {
            path:'/live',
            element:<div>dasdasdasdasd</div>
        },
        {
            path:'/radio',
            element:<div>dasdasdasdasd</div>
        }
      ]
    },
  ]);

  export default router;