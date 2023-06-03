

// const Signin =()=>{


//     const cssinput="  text-black   border-solid  rounded-md p-2 bg-gray-200";
//     const cssclassbutton="px-4 py-2 hover:border-solid hover:border-2 hover:border-sky-500 hover:px-[0.8rem] hover:py-[0.6rem] hover:border font-bold rounded-md text-sm mr-2 mt-5 text-white  bg-blue-500 ";

//     return(

//         <><div>

// <form className=" mt-32 ml-80 shadow-lg rounded-md  border-2 border-solid border-sky-500 flex flex-col p-5 w-[350px] ">

//            <h1 className=" font-bold text-black text-center mb-3 text-lg   "> Sign Up </h1>


//     <input className={cssinput}  type="text" placeholder="Enter your name "/>
//     <br></br>
//     <input className={cssinput} type="email" placeholder="Enter your Email  "/>

//     <br/>
//     <input className={cssinput}  type="password" placeholder="Creat your Pasword "/>

//     <button className= {cssclassbutton}>Sign up</button>




// </form>







//         </div>
        
        
//         </>



//     )
// }

// export default Signin;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { siginupUser } from '../../mainstore/user/user.Signup';

const Signin = () => {
    const dispatch: any = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();


    // Q this very IMPORTANT Quation in interview  what isthe use of Above line .
    // deafult event jo bhi he un sab ko ke band kardinga stop karenga 
    // even ke jo bhi default feature he o sab Block karega 

    //konse event  


    //1> jese hi form ka dadta submit karte ho to o url dhundata he  ki  kaha jana he aur sabhi data jo he o url me visible karta he value attribute ke andar ka 
    //2) security issue 

    // 3) react is single page application o sab url ko distrub kraenga  

    //4)  state change karenga  to wo sab raect ke rule ko unfollow karnge 

    // how to do 2 way data binding using react state HOOK




    // Perform login logic here
    console.log(email, password)
   { <NavLink to="/admin"  />}
    dispatch(
        siginupUser({
            name,
            email,
            password
        })
      );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 p-6 bg-white  shadow-lg  rounded-md  border-2 border-solid border-sky-500 " onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">SignUp</h2>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-1">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-7">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signin;
