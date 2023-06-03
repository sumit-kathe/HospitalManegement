import { NavLink } from "react-router-dom";


const Dashboard =()=>{


    const cssclassNotactive="px-4 py-2 hover:border-solid hover:border-2 hover:border-gray-800 hover:px-[1.2rem] hover:py-[0.6rem] hover:border rounded-md text-sm mr-2  bg-blue-500 ";

    return(


        <>
        <div>Dashboard section</div>


        <div className="flex justify-end">
        <NavLink to="/login">


<button className={cssclassNotactive}>  LogIn</button>

 </NavLink>
 <br></br>
 <br></br>
 <br></br>

 <NavLink to="/signin">


<button className={cssclassNotactive} >  SignUp</button>

</NavLink>
        </div>

      
        
        </>
    )
}

export default Dashboard;