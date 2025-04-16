// src/redux/redux.ts
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@/provider/redux/CounterSlice';
import appReducer from '@/provider/redux/AppSlice';
import {createAppStateInitial} from "@/provider/redux/initial/InitialAppState";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        app: appReducer
    },
});

export const createStoreWithLang = (lang: string) => configureStore({
    reducer: {
        app: appReducer,
        counter: counterReducer,
    },
    preloadedState: {
        app: createAppStateInitial(lang),
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;