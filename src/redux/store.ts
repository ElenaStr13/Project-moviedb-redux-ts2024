import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieDetailsReducer, movieReducer, themeReducer} from "./slices";
import {searchReducer} from "./slices/searchSlice";


const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieDetails: movieDetailsReducer,
        genres: genreReducer,
        search: searchReducer,
        theme: themeReducer
    }
});

export {
    store
}