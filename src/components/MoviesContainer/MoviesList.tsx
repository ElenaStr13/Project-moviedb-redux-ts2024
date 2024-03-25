import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "./Movie";
import css from './MoviesList.module.css';

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useAppDispatch();
    const [previous, setPrevious] = useState( 0);
    const page = +query.get('page');


    useEffect(() => {
        dispatch(movieActions.getAll(page));
    }, [page]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            console.log("prev" + page)
            setPrevious(page);
            return prev
        })
    }

    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString());
            return next
        })
    }

    return (
        <div className={css.allMoviesList}>
            <div className={css.moviesList}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={prev} className={css.button}>Prev page</button>
                <div>{page}</div>
                <button onClick={next} className={css.button}>Next page</button>
            </div>
        </div>
    );
};

export {MoviesList};