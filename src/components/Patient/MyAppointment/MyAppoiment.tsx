import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MybookAppointermtFun } from "../../../mainstore/user/events";


const MyAppoiment =()=>{

    const data=useSelector((state:any)=>state.user)
    const {events , userData  }=data;
    
   console.log("userData id nikalni he ",userData)

    const dispatch:any= useDispatch();

    useEffect(()=>{

        dispatch(MybookAppointermtFun(userData.id))


    },[])

    return(


        <>
        <div>MyAppoiment section ------------------</div>
        
        </>
    )
}

export default MyAppoiment;