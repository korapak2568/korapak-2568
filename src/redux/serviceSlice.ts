// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {INFO} from "@/data/INFO";
import {ILanguage} from "@/data/model/language/ILanguage";
import {LanguageDefault} from "@/data/info/Language/LanguageDefault";

export interface ServiceState {
    value: any;
    language: ILanguage;
}

const initialState: ServiceState = {
    value: INFO,
    language: LanguageDefault
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
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

export const {
    setLanguage,
} = serviceSlice.actions;

export default serviceSlice.reducer;
