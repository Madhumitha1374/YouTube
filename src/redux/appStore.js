import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import subscriberSlice from "./subscriberSlice";
import chatSlice from "./chatSlice"

const appStore = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        subscribe : subscriberSlice,
        chat : chatSlice
    }
});

export default appStore