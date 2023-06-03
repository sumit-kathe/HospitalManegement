import {createSlice}  from '@reduxjs/toolkit';


const userstore = createSlice({

    name:"userStore",
    initialState:{
 
        userData:{}

    },
    reducers:{

         saveUser: (state,action)=>{

            state.userData = action.payload;

         },
         signupUser: (state,action)=>{

            state.userData = action.payload;

         },
         SetEvent: (state,action)=>{

            state.userData = action.payload;

         }
        
        

    }
})

//ya ha par export karte samaya const <variable name > = creatSlice() jo variable name diya he wo aur uskie andar actions hoti he "default" use export kar rahe he hum it is not "action" it is "actions"

// aur jo bhi curlibaracese ke andar he o hamara reducerfunction{saveUser} he wo same name se export hota he 

export const  {saveUser,signupUser,SetEvent} =userstore.actions;

export default userstore;