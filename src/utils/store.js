import { configureStore } from "@reduxjs/toolkit";
import menuRedcuer from "./menuSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        menu: menuRedcuer,
        search: searchReducer
    },
});

export default store;