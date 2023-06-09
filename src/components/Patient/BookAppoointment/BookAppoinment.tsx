import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointermtFun, totalEvent } from "../../../mainstore/user/events";
import moment from "moment";

const BookAppoinment =()=>{

    const dispatch:any= useDispatch();
    const data=useSelector((state:any)=>state.user)
  const {events , userData  }=data;

  console.log("all state in store",data)

    // console.log("events from selector",events)
    useEffect(()=>{

        dispatch(totalEvent());


    },[])
    const bookAppointemnt:any = (event:any)=>{

        console.log("clicked on" , event)
        console.log("clicked on userData" , userData);

        dispatch(bookAppointermtFun(event,userData.id))

    }


    const allButton = events.map((event:any, index:any)=>{

       
        const eventStart= moment(event.start).format('MMMM Do YYYY, h:mm');
        const eventEnd= moment(event.end).format(' h:mm');


        // console.log("eventStart invalid check",eventStart) checking if the daTE IS invalid or not 

        if (eventStart != "Invalid date"){
            
        return(
            <>
 <button key={index}  className=" bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>bookAppointemnt(event)}>{`${event.title} - ${eventStart} to ${eventEnd}`}</button></>
           
            
            
        )

        }



    })


    return(


        <>
        <div>**********BookAppoinment section ***********</div>

<div className="flex gap-3 flex-row w-[650px] flex-wrap">

{allButton}

</div>
        
        </>
    )
}

export default BookAppoinment;