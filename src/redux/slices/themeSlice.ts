import {createSlice} from "@reduxjs/toolkit";

interface IState {
    mode: string;
}

const initialState: IState = {
    mode: 'dark'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'light'? 'dark' : 'light'
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

const {reducer: themeReducer} = themeSlice;

export {
    themeReducer
}