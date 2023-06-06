import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../mainstore/user/user.Login';

const Login = () => {

  const navigateto = useNavigate();
    const dispatch: any = useDispatch();
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
    // console.log(email, password)

  //  { <NavLink to="/admin"  />}
 const sendToDispatch = {
  email,
  password
}

    dispatch(
        loginUser(sendToDispatch,navigateto ));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 p-8 bg-white  shadow-lg  rounded-md  border-2 border-solid border-sky-500 " onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
