import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../redux/component/counter/counterSlice';
export const store = configureStore({
    reducer: {
       counterReducer: counterSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;