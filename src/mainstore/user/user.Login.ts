import { useSelector } from "react-redux"
import { saveUser } from "./user.store"

export const  loginUser= (userDetails:any,navigateto:any)=>{

 
    // reeturn me dispatch kese aya ? --> ye hua devtool ke wajese  humne nahi kiya 

    // aur humne return ko ke arroe function bana diya uske andar hum API call karenge isliye hume use "async" laga na padenga to perform "Await" operation



    return async (dispatch:any)=>{

                 
 
        const userpaylod = JSON.stringify(userDetails)

        const userRes:any= await fetch("http://localhost:3001/login",{
          
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : userpaylod
      
      
        })
        .catch((err)=>{
          console.log("server error while fatching the data", err)
          //this is our server error
        })
      
       const userData =  await userRes.json();

      if(userRes){

        if (userData.status==200){
          
        dispatch(saveUser(userData.userData))
        // console.log("from login tsx",userData.type)


          // userData.type==="user" ?  navigateto('/user/profile') : userData.type==="doctor" ?  navigateto('/doctor/profile') : userData.type==="admin"? navigateto('/admin') : navigateto('/erorr') 
          

          // navigateto('/doctor/profile')


        if(userData.type === "user"){
          navigateto('/user/profile')
      }else if(userData.type === 'doctor') {
        navigateto('/doctor/profile')
      }else if(userData.type === 'admin') {
        navigateto('/admin') 
      }else {
        navigateto('/') 
      }


        }
        else{
         
            console.log("Error in reesponse while checking the status and making dispatch call ",userData)
    
        }
      }
      
        


    }


}
