import {IMovie} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchService} from "../../services/searchService";
import {AxiosError} from "axios";

interface iState {
    page: number | null,
    movies: IMovie[]
}

const initialState: iState = {
    page: null,
    movies: []
}

const getAll = createAsyncThunk<IMovie[], string>(
    'searchSlice/getAll',
    async (query, {rejectWithValue}) => {
        if(query.trim() !== "")
            try {
            const {data} = await searchService.getAll(query)
                return data.results
            } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
            }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
})

const {reducer: searchReducer, actions} = searchSlice;
const searchActions = {
    ...actions,
    getAll
}

export {
    searchReducer,
    searchActions
}