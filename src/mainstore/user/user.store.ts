import {createSlice}  from '@reduxjs/toolkit';


const userstore = createSlice({

    name:"userStore",
    initialState:{
 
        userData:{},
        events:[],
        bookedAppointment: []

    },
    reducers:{

         saveUser: (state,action)=>{

            state.userData = action.payload;

         },
         signupUser: (state,action)=>{

            state.userData = action.payload;

         },
        dataofallEvent: (state,action)=>{

              state.events=action.payload.events;

        },
        bookedAppointment:(state,action) => {
            state.bookedAppointment = action.payload.bookedAppointment
        },
        

    }
})

//ya ha par export karte samaya const <variable name > = creatSlice() jo variable name diya he wo aur uskie andar actions hoti he "default" use export kar rahe he hum it is not "action" it is "actions"

// aur jo bhi curlibaracese ke andar he o hamara reducerfunction{saveUser} he wo same name se export hota he 

export const  {saveUser,signupUser,dataofallEvent,bookedAppointment} =userstore.actions;

export default userstore;