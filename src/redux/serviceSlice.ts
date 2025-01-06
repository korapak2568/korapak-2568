// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {ILanguage} from "@/data/language/model/ILanguage";
import {LanguageEnglish} from "@/data/language/LanguageEnglish";

export interface ServiceState {
    language: ILanguage;
}

const initialState: ServiceState = {
    language: LanguageEnglish
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        // setLanguage: (state, action) => {
        //     state.language = action.payload;
        // },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
});

export const {
    setLanguage,
} = serviceSlice.actions;

export default serviceSlice.reducer;
