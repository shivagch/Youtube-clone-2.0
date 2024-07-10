import { createSlice } from "@reduxjs/toolkit"
import { MESSAGES_COUNT } from "./constants"

const chatSlice = createSlice({
    name: 'chat',
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            state.splice(MESSAGES_COUNT, 1)
            state.unshift(action.payload)
        },
    }
})

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer