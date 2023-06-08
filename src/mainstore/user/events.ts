import { dataofallEvent } from "./user.store";


export const totalEvent=()=>{



    return async (dispatch:any)=>{


        const allEventFetch= await fetch("http://localhost:3001/allevents");

        const dataofAllEventRes = await allEventFetch.json();

        console.log("all events",dataofAllEventRes);
    
        dispatch(dataofallEvent({events:dataofAllEventRes.events}))


    }
}

export const bookAppointermtFun=(events:any, userId:any)=>{


    return async(dispatch:any)=>{

        const bookAppointmentPayload =  JSON.stringify( {

            ...events,
            bookingId:userId,


        }
     
        )

        const bookiAppointemntAPI:any= await fetch("http://localhost:3001/bookAppointment",{
          
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : bookAppointmentPayload
      
      
        })
        .catch((err)=>{
          console.log("server error while fatching the data", err)
          //this is our server error
        })

        const bookiAppointemntRES = await bookiAppointemntAPI.json()

        console.log("bookiAppointemntResponse ", bookiAppointemntRES)
    }
}


export const MybookAppointermtFun=(userId:any)=>{


    return async(dispatch:any)=>{

        const userBookedPayload = JSON.stringify({userId})
        

        const bookiAppointemntAPI:any= await fetch('http://localhost:3001/users/bookedAppointment',{
        
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : userBookedPayload
      
      
        })
        .catch((err)=>{
          console.log("server error while fatching the data", err)
          //this is our server error
        })


//         const myapointmentRESPONSE = await bookiAppointemntAPI.json();

        
//    console.log("myapointmentRESPONSE inside the function",myapointmentRESPONSE)
 
        const {events} = await bookiAppointemntAPI.json();

        console.log('getAllBookAppointmentRes',events)
    }
}

