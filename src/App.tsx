import React from 'react';
import './App.css';
import MainComponent from './Maincomponent/Maincomponent';
import Doctors from './components/Doctor/Doctor';
import Patient from './components/Patient/Patient';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './components/Admin/Admin';

function App() {


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
      ]
    }
    
  ]);


  return (
   <>

<RouterProvider router={router} />

    </>)}
  


export default App;
