import React, { useEffect } from 'react';
import './App.css';
import MainComponent from './Maincomponent/Maincomponent';
import Doctors from './components/Doctor/Doctor';
import Patient from './components/Patient/Patient';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import { error } from 'console';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from './mainstore/user/user.action';
import Login from './components/login_signin/Login';
import Signin from './components/login_signin/Signin';

function App() {

 const {userData} = useSelector((state:any)=> state.user)

 const dispatch:any = useDispatch()


 /*  same as of upper line object destructuring iss going on here 

 const userLoginData= useSelector((state:any)=> state.user.userData) */

 console.log("data from redux  toolkit ",userData)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainComponent />,
      children: [
        {
          path: '/',
          element: <Admin />
        },
        {
          path: '/doctor',
          element: <Doctors />
        },
        {
          path: '/patint',
          element: <Patient />
        },
        {
          path: '/login',
          element: <Login />
        }, {
          path: '/signin',
          element: <Signin />
        },

      ]
    }
    
  ]);
  
 

   
  
  useEffect(()=>{


    dispatch(loginUser({  
      
      "email": "user1@h.com",
        "password": "Pass@123"


    }))

  },[])


  return (
   <>

<RouterProvider router={router} />

    </>)}
  


export default App;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

