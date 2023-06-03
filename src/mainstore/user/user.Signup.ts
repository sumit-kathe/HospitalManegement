import { signupUser } from "./user.store"

export const  siginupUser= (userDetails:any)=>{



    // reeturn me dispatch kese aya ? --> ye hua devtool ke wajese  humne nahi kiya 

    // aur humne return ko ke arroe function bana diya uske andar hum API call karenge isliye hume use "async" laga na padenga to perform "Await" operation



    return async (dispatch:any)=>{
                 
 
        const userpaylod = JSON.stringify(userDetails)

        const userRes:any= await fetch("http://localhost:3001/signup",{
          
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

        dispatch(signupUser(userData.userData))


        }
        else{
         
            console.log("Error in reesponse while checking the status and making dispatch call ",userData)
    
        }
      }
      
        


    }


}
