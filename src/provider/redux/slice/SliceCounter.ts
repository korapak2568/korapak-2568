// src/features/SliceCounter.ts
import {createSlice} from '@reduxjs/toolkit';
import {fallbackStateCounter} from "@/provider/redux/state/StateCounter";

export const sliceCounter = createSlice({
    name: 'counter',
    initialState: fallbackStateCounter,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    incrementByAmount
} = sliceCounter.actions;

export default sliceCounter.reducer;
