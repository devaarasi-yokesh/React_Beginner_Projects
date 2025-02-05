import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 19;
        },
        decrement: (state) => {
            state.value -= 19;
        },
    },
   
})

export const {increment, decrement, change } = counterSlice.actions;

export default counterSlice.reducer;
