import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

//redux toolkit installed for creating store.bz configureStore() method is a library of redux toolkit

export const store = configureStore({
    //reducer can only update value of state in store.reducer key is predefined(object which can store more than one reducer).
    //
    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default
            counter:counterSlice
    }
})