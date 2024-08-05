// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {INFO} from "@/data/INFO";

export interface ServiceState {
    value: any;
}

const initialState: ServiceState = {
    value: INFO,
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

export const {} = serviceSlice.actions;
export default serviceSlice.reducer;
