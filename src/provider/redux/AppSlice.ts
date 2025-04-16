// src/redux/AppSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {fallbackAppState} from "@/provider/redux/initial/InitialAppState";
import {LanguageOptionRecord} from "@/data/translate/LanguageOptionRecord";

export const appSlice = createSlice({
    name: 'app',
    initialState: fallbackAppState, // this will be overridden if preloadedState is passed
    reducers: {
        setLanguageOption: (state, action: { payload: { language: string } }) => {
            state.languageOption = LanguageOptionRecord[action.payload.language]
            state.language = action.payload.language
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
    setLanguageOption,
    toggleMobileMenuVisible,
    toggleLanguageMenuVisible,
} = appSlice.actions;

export default appSlice.reducer;
