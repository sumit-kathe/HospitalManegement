import { configureStore } from "@reduxjs/toolkit";
import userstore from "./user/user.store";

const mainStore = configureStore({

reducer:{

    user:userstore.reducer

}


})

export default mainStore;
