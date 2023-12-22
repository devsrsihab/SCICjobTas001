import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Error from './Pages/Error/Error'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:([
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/login",
        element:<Login></Login>
        
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ])

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
