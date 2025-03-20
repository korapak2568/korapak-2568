// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {ITranslate} from "@/data/translate/model/ITranslate";
import {Translates} from "@/data/translate/Translates";

export interface ServiceState {
    translate: ITranslate;
}

const initialState: ServiceState = {
    translate: Translates[0],
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setTranslate: (state, action) => {
            state.translate = action.payload;
        }
    },
});

export const {
    setTranslate,
} = serviceSlice.actions;

export default serviceSlice.reducer;
