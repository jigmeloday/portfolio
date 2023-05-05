import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

type CounterState = {
    navState: boolean;
    value: number;
};

export const initialState = {
    value: 1,
    navState: false,
} as CounterState;

export const shared = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        setNavState: (state, action: PayloadAction<boolean>) => {
            state.navState = action.payload;
        }
    },
});

export const {
    increment,
    setNavState,
    incrementByAmount,
    decrement,
    decrementByAmount,
    reset,
} = shared.actions;

export const testValue = (state: RootState) => state.sharedReducer.value;
export const selectCurrentNav = (state: RootState) => state.sharedReducer.navState;
export default shared.reducer;
