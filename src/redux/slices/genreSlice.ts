import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {genreService} from "../../services";
import {IAllGenre, IGenre, IMovie} from "../../interfaces";

interface IState {
    genres: IGenre[],
    withGenres: boolean,
    movies: IMovie[],
    activeGenreId: number | null;
    page:number
}

const initialState: IState = {
    genres: [],
    withGenres: null,
    movies: [],
    activeGenreId: null,
    page: null
};

const getAll = createAsyncThunk<IAllGenre, void> (
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);
const getByGenreId = createAsyncThunk<
    IMovie[], { page:number,id: number, }>
(
    'genresSlice/getByGenreId',
    async ({ page,id}, { rejectWithValue }) => {
        try {
            const { data } = await genreService.getByGenreId(page,id);
            return data.results
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setActiveGenreId(state, action) {
            state.activeGenreId = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres
                state.withGenres = true;
            })
            .addCase(getByGenreId.fulfilled, (state,action) => {
                state.movies = action.payload;
                state.activeGenreId = action.meta.arg.id;
            })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll,
    getByGenreId
}

export {
    genreActions,
    genreReducer
}