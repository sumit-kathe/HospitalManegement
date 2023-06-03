import { configureStore } from "@reduxjs/toolkit";
import userstore from "./user/user.store";

const mainStore = configureStore({

reducer:{

    user:userstore.reducer // "userstore" is the name of variable which is created To creat the slice.

    

}





})

export default mainStore;
