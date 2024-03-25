import {IMovie} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[],
    trigger: boolean,
    movieDetails: IMovie,
    page: number | null
}

const initialState: IState = {
    movies: [],
    trigger: null,
    movieDetails: null,
    page: null
};

const getAll = createAsyncThunk< IMovie[], number> (
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data.results
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data);
        }
}
);

 const getByGenreId = createAsyncThunk<
     IMovie[], {page:number, id_genre:string} >(
    'moviesSlice/getByGenreId',
    async ({page, id_genre}, { rejectWithValue }) => {
        try {
            const {data} = await movieService.getByGenre(page, id_genre);
            return data.results
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);

        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
             .addCase(getByGenreId.fulfilled, (state,action) => {
                 state.movies = action.payload
             })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getByGenreId
}

export {
    movieActions,
    movieReducer
}