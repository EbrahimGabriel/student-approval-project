import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './general_pages/signin';
import SignUp from './general_pages/signup';
import Root from './general_pages/root';
import Home from './general_pages/home';
import AdminRoot from './admin_pages/admin_root';
import AdminHome from './admin_pages/admin_home';
import StudentApplicationDetails from './student_pages/student_application_details';

const router = createBrowserRouter([
  {path: "/", element: <SignIn />},
  {path: "/signup", element: <SignUp />},
  {path: "/student", element: <Root />, children:[
    {path: "/student", element: <Home />},
    {path: "/student/application-details", element: <StudentApplicationDetails />},
    //add other pages here once its done
  ]},
  {path: "/admin", element: <AdminRoot />, children:[
    {path: "/admin", element: <AdminHome />}
  ]} //very secure!
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);