// src/redux/redux.ts
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@/redux/counterSlice';
import serviceReducer from '@/redux/serviceSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        service: serviceReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;