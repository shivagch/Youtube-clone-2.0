import { configureStore } from "@reduxjs/toolkit";
import menuRedcuer from "./menuSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
    reducer: {
        menu: menuRedcuer,
        search: searchReducer,
        chat: chatReducer,
    },
});

export default store;