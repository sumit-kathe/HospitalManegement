import { NavLink } from "react-router-dom";


const Admin =()=>{


    const cssclassNotactive="px-4 py-2 hover:border-solid hover:border-2 hover:border-gray-800 hover:px-[1.2rem] hover:py-[0.6rem] hover:border rounded-md text-sm mr-2  bg-blue-500 ";

    return(


        <>
        <div>Admin section</div>

        <NavLink to="/login">


       <button className={cssclassNotactive}>  LogIn</button>

        </NavLink>
        <br></br>
        <br></br>
        <br></br>

        <NavLink to="/signin">


<button className={cssclassNotactive} >  Sign IN</button>

 </NavLink>
        
        </>
    )
}

export default Admin;