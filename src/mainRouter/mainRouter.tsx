import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../Maincomponent/Maincomponent";
import Login from "../components/login_signin/Login";
import Signin from "../components/login_signin/Signin";
import MyAppoiment from "../components/Patient/MyAppointment/MyAppoiment";
import BookAppoinment from "../components/Patient/BookAppoointment/BookAppoinment";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import DoctorList from "../components/Admin/DoctorList/DoctorList";
import PatientList from "../components/Admin/PatientList/PatientList";
import DocMyAppointment from "../components/Doctor/DocMyAppointment/DocMyAppointment";
import SetAppointment from "../components/Doctor/SetAppointment/SetAppointment";
import DoctorProfile from "../components/Doctor/DocProfile/DoctorProfile";
import PatientProfile from "../components/Patient/Profile/PatientProfile";
import Erorr from "../common/Erorr";

//extension of this file must be "tsx" bcz yaha par componenet arahe he sabhi 

 const mainRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
   {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/errorr',
    element: <Erorr />
  },
    
    {
      path: '/',
      element: <MainComponent />,
      children: [
        {
          path: '/admin',
          element: <Dashboard />
        },
        {
          path: '/admin/doctor',
          element: <DoctorList />
        },
        {
          path: '/admin/patint',
          element: <PatientList />
        },
       

      ]
    }, 
    {
      path: '/doctor',
      element: <MainComponent />,
      children: [
        {
          path: '/doctor/profile',
          element: <DoctorProfile />
        },
        {
          path: '/doctor/myappointment',
          element: <DocMyAppointment />
        },
        {
          path: '/doctor/setappointment',
          element: <SetAppointment />
        },
       

      ]
    },
    {
      path: '/user',
      element: <MainComponent />,
      children: [
        {
          path: '/user/profile',
          element: <PatientProfile />
        },
        {
          path: '/user/myappointment',
          element: <MyAppoiment />
        },
        {
          path: '/user/bookappointment',
          element: <BookAppoinment />
        },
       

      ]
    }
    
  ]);
  

  export default mainRouter;