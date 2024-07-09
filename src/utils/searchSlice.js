import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        cachedResults : {}
    },
    reducers: {
        updateCache: (state, action) => {
            const { searchQuery, results} = action.payload;
            state.cachedResults[searchQuery] = results;
        }
    }
})

export const { updateCache} = searchSlice.actions;

export default searchSlice.reducer;