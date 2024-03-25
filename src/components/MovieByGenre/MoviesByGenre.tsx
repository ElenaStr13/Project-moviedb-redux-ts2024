import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {MovieByGenre} from "./MovieByGenre";
import css from "../MoviesContainer/MoviesList.module.css";

const MoviesByGenre = () => {
    const {movies} = useAppSelector(state => state.genres);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [previous, setPrevious] = useState( 0);
    const page = +query.get('page');
    const dispatch = useAppDispatch();
    const {id} = useParams<{ id?: string }>();

    useEffect(() => {
        dispatch(genreActions.getByGenreId({id: parseInt(id), page: page}))
        console.log(movies)
    }, [dispatch, id, page]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
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
            {movies.map(movieByGenre => <MovieByGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
        </div>
            <div className={css.buttons}>
                <button onClick={prev} className={css.button}>Prev page</button>
                <div>{page}</div>
                <button onClick={next} className={css.button}>Next page</button>
            </div>
        </div>
    );
};

export {MoviesByGenre};