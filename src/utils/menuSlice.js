import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        showMenu: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu;
        },
        hideMenu: (state) => {
            state.showMenu = false;
        },
        showMenu: (state) => {
            state.showMenu = true;
        }
    },
});

export const { toggleMenu, hideMenu, showMenu } = menuSlice.actions;

export default menuSlice.reducer;