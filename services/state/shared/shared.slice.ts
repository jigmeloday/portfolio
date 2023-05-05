import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

type SharedState = {
    navState: boolean;
};

export const initialState = {
    navState: false,
} as SharedState;

export const shared = createSlice({
    name: 'shared',
    initialState,
    reducers: {
        reset: () => initialState,
        setNavState: (state, action: PayloadAction<boolean>) => {
            state.navState = action.payload;
        }
    },
});

export const {
    setNavState,
    reset,
} = shared.actions;

export const selectCurrentNav = (state: RootState) => state.sharedReducer.navState;
export default shared.reducer;
