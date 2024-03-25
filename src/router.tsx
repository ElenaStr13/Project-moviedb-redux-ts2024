import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MoviesByGenrePage, MoviesDetailsPage, MoviesPage, SearchPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <MoviesPage/>
            },
            {
                path: 'movie', element: <MoviesPage/>
            },
            {
                path: '/3/movie/:id', element: <MoviesDetailsPage/>
            },
            {
                path: '/genres', element: <GenresPage/>, children: [
                    {
                        path: ':id', element: <MoviesByGenrePage/>
                    }
                ]
            },
            {
                path: '/3/search/movie', element: <SearchPage/>
            }
        ]
    }
])

export {
    router
}