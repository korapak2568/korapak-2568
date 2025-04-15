// src/redux/redux.ts
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@/provider/redux/CounterSlice';
import appReducer from '@/provider/redux/AppSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        app: appReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;