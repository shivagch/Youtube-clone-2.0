import { configureStore } from "@reduxjs/toolkit";
import menuRedcuer from "./menuSlice";

const store = configureStore({
    reducer: {
        menu: menuRedcuer,
    },
});

export default store;