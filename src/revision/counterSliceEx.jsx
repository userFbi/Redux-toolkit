import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        incre: (state) => {
            state.value += 1
        },
        decre: (state) => {
            state.value -= 1
        }
    }
})

export const { incre, decre } = counter.actions
export default counter.reducer