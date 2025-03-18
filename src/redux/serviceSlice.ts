// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {ILanguage} from "@/data/language/model/ILanguage";
import {LanguageEnglish} from "@/data/language/LanguageEnglish";
import {ITranslate} from "@/data/translate/model/ITranslate";
import {Translates} from "@/data/translate/Translates";

export interface ServiceState {
    language: ILanguage;
    translate: ITranslate;
}

const initialState: ServiceState = {
    language: LanguageEnglish,
    translate: Translates[1],
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setTranslate: (state, action) => {
            state.translate = action.payload;
        }
    },
});

export const {
    setLanguage,
    setTranslate,
} = serviceSlice.actions;

export default serviceSlice.reducer;
