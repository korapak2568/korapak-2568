// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {ILanguage} from "@/data/model/language/ILanguage";
import {LanguageDefault} from "@/data/info/Language/LanguageDefault";

export interface ServiceState {
    language: ILanguage;
}

const initialState: ServiceState = {
    language: LanguageDefault
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
});

export const {
    setLanguage,
} = serviceSlice.actions;

export default serviceSlice.reducer;
