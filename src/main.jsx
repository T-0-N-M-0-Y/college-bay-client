import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login & Signup/Login.jsx';
import Signup from './components/Login & Signup/Signup.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CollegeDetails from './components/Home/LoadColleges/CollegeDetails.jsx';
import AllColleges from './components/Home/LoadColleges/AllColleges.jsx';
import Admission from './components/Routes/Admission.jsx';
import Apply from './components/Routes/Apply.jsx';
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx';
import MyCollege from './components/Routes/MyCollege.jsx';
import Addreview from './components/Routes/Addreview.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <AllColleges></AllColleges>,
      },
      {
        path: "/collegeDetails/:id",
        element: <PrivateRoutes><CollegeDetails></CollegeDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://college-bay-server-t-0-n-m-0-y.vercel.app/colleges/${params.id}`)
      },
      {
        path: "/admission",
        element: <PrivateRoutes><Admission></Admission></PrivateRoutes>,
      },
      {
        path: "/mycollege",
        element: <PrivateRoutes><MyCollege></MyCollege></PrivateRoutes>,
      },
      {
        path: "/apply/:id",
        element: <Apply></Apply>,
        loader: ({ params }) => fetch(`https://college-bay-server-t-0-n-m-0-y.vercel.app/colleges/${params.id}`)
      },
      {
        path: "/addreview/:id",
        element: <Addreview></Addreview>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
