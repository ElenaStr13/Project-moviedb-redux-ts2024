import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import css from "./Genres.module.css";
import {Genre} from "./Genre";
import {IGenre} from "../../interfaces";

const Genres = () => {
    const {genres, activeGenreId} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);
    const changeGenreClick = (genre: IGenre) => {
        dispatch(genreActions.setActiveGenreId(genre.id));
    };

    return (
        <div className={css.genres}>
            {genres.map(genre => <Genre key={genre.id}
                                        genre={genre}
                                        onGenreClick={changeGenreClick}
                                        isActive={genre.id === activeGenreId}/>)}
        </div>
    );
};

export {Genres};