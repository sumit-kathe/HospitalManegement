import { createSlice } from "@reduxjs/toolkit";

const adminStore= createSlice({

name:"adminStore",
initialState:{
    doctor:[]
},

reducers:{

    allDoctor: (state,action)=>{


        console.log("action of doctor", action)

        state.doctor = action.payload;

     },

}

})


export const {allDoctor} = adminStore.actions;

export default adminStore;