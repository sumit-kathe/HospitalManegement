import { configureStore } from "@reduxjs/toolkit";
import userstore from "./user/user.store";
import calendarStore from "./calendar/calender-store";
import adminStore from "./admin/admin-store";

const mainStore = configureStore({

reducer:{

    user:userstore.reducer, // "userstore" is the name of variable which is created To creat the slice. and it must be "reducer"

    calender:calendarStore.reducer ,

    Doctors:adminStore.reducer

    

}





})

export default mainStore;
