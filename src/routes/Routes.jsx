import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
// import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import TaskCreation from '../components/Dashboard/TaskCreation/TaskCreation'
import Welcome from '../components/Dashboard/Welcome/Welcome'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute> ,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: 'welcome',
        element: <Welcome/>
      },
      {
        path: 'task-creation',
        element: <TaskCreation/>
      },

    ]
    
  }
])
