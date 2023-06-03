import  { useEffect } from 'react';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from './mainstore/user/user.Login';
import mainRouter from './mainRouter/mainRouter';

function App() {

//  const {userData} = useSelector((state:any)=> state.user)

//  const dispatch:any = useDispatch()


 /*  same as of upper line object destructuring iss going on here 

 const userLoginData= useSelector((state:any)=> state.user.userData) */

//  console.log("data from redux  toolkit ",userData)


 

   
  
  // useEffect(()=>{


  //   dispatch(loginUser({  
      
  //     "email": "user1@h.com",
  //       "password": "Pass@123"


  //   }))

  // },[])


  return (
   <>

<RouterProvider router={mainRouter} />

    </>)}
  


export default App;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

