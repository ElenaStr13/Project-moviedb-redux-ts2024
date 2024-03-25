import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "../MoviesContainer";
import css from "../MoviesContainer/MoviesList.module.css";
import {searchActions} from "../../redux";

const SearchMovies = () => {
    const {movies} = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchActions.getAll(''))
    }, [dispatch]);

    return (
        <div className={css.moviesList}>
            {movies && movies.map((movie => (
                <Movie key={movie.id} movie={movie}/>
            )))}
        </div>
    );
};

export {SearchMovies};