import { saveEvents } from "./calender-store"

export const saveEvent =(event:any)=>{


return async (dispatch:any)=>{

    const eventpayload = JSON.stringify(event)

    const eventAPI:any= await fetch("http://localhost:3001/saveevent",{
      
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : eventpayload
  
  
    })
    .catch((err)=>{
      console.log("server error while fatching the data", err)
      //this is our server error
    })


  const    eventResponse = await eventAPI.json();

  dispatch(getEvents(event.userId)) // for this reeson hum ne userid bheji he event set karte samaya me 

  console.log("event response " , eventResponse)



}

}

export const getEvents =(userId:any)=>{


    return async (dispatch:any)=>{
    
        const getEventpayload = JSON.stringify({userId})
    
        const getEventAPI:any= await fetch("http://localhost:3001/getevent",{
          
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : getEventpayload
      
      
        })
        .catch((err)=>{
          console.log("server error while fatching the data", err)
          //this is our server error
        })
    
    
      const   {userEvent} = await getEventAPI.json();

      console.log("userEvents checkkkkkkk",userEvent)


      // const   getEventRes = await getEventAPI.json();
    
      // console.log("event response check " , getEventRes)
    
      dispatch(saveEvents({userEvent})) // isline ke madat se hum ne  store me data save kr diya ab hum ise kahi par bhi use kar sakte he purefile me
    // aur o object honga Q ki arrye me store karna he multiple objevt ko sevevent ke
    
    }
    
    }