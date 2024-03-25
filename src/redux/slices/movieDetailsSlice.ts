import {IMovie} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

interface IState {
    movieDetails: IMovie

}

const initialState: IState = {
    movieDetails: null
};

const getById = createAsyncThunk(
    'movieDetailsSlice/getById',
    async (movie_id:number, thunkAPI) => {
        try {
            const {data} = await movieService.getById(+movie_id)
            return data
        } catch (e) {
            console.log(thunkAPI.rejectWithValue(e))
            }
    }
)

const movieDetailsSlice = createSlice({
    name: 'movieDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state,action) => {
                state.movieDetails = action.payload
            })
})

const {reducer: movieDetailsReducer, actions} = movieDetailsSlice;

const movieDetailsActions = {
    ...actions,
    getById
}

export {
    movieDetailsActions,
    movieDetailsReducer
}