// src/redux/serviceSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {INFO} from "@/data/INFO";
import {ELanguage} from "@/data/enum/ELanguage";
import {IAiAll} from "@/data/model/ai/IAi";
import {AiEnglish} from "@/data/info/AI/AiEnglish";
import {AiThai} from "@/data/info/AI/AiThai";
import {AiChinese} from "@/data/info/AI/AiChinese";
import {AiJapanese} from "@/data/info/AI/AiJapanese";
import {AiKorean} from "@/data/info/AI/AiKorean";

export interface ServiceState {
    value: any;
    lang: ELanguage
    ai: IAiAll
}

const initialState: ServiceState = {
    value: INFO,
    lang: ELanguage.english,
    ai: AiEnglish
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        aiThai: (state) => {
            state.ai = AiThai;
        },
        aiEnglish: (state) => {
            state.ai = AiEnglish;
        },
        aiChinese: (state) => {
            state.ai = AiChinese;
        },
        aiJapanese: (state) => {
            state.ai = AiJapanese;
        },
        aiKorean: (state) => {
            state.ai = AiKorean;
        },
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
    aiThai,
    aiEnglish,
    aiChinese,
    aiJapanese,
    aiKorean,
} = serviceSlice.actions;

export default serviceSlice.reducer;
