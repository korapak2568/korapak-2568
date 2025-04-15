// src/redux/AppSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {ITranslate} from "@/data/translate/model/ITranslate";
import {Translates} from "@/data/translate/Translates";

export interface AppState {
    translate: ITranslate;
    mobileMenuVisible: boolean
    languageMenuVisible: boolean
}

const AppStateDefault: AppState = {
    translate: Translates[0],
    mobileMenuVisible: true,
    languageMenuVisible: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState: AppStateDefault,
    reducers: {
        setTranslate: (state, action) => {
            state.translate = action.payload;
        },
        setMobileMenuVisible: (state, action) => {
            state.mobileMenuVisible = action.payload;
        },
        setLanguageMenuVisible: (state, action) => {
            state.languageMenuVisible = action.payload;
        },
        toggleMobileMenuVisible: (state) => {
            state.mobileMenuVisible = !state.mobileMenuVisible;
        },
        toggleLanguageMenuVisible: (state) => {
            state.languageMenuVisible = !state.languageMenuVisible;
        }
    },
});

export const {
    setTranslate,
    setMobileMenuVisible,
    setLanguageMenuVisible,
    toggleMobileMenuVisible,
    toggleLanguageMenuVisible,
} = appSlice.actions;

export default appSlice.reducer;
