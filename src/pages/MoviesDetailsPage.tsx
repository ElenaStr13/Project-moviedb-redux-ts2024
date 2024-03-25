import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieDetailsActions} from "../redux";
import {IGenre} from "../interfaces";
import {MovieInfo} from "../components";
import css from '../components/MovieInfo/MovieInfo.module.css'

const MoviesDetailsPage = () => {
    const {movieDetails} = useAppSelector(state => state.movieDetails);
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
         dispatch(movieDetailsActions.getById(+id));
    }, [id, dispatch]);

    const [, setSelectedGenre] = useState<IGenre | null>(null);

    const handleGenreClick = (genre:IGenre) => {
        setSelectedGenre(genre);
    }

    const goBack = () => {
        navigate(-1);
    };


   return (
        <div >
            <button onClick={goBack} className={css.goBackBtn}>Back</button>
            {movieDetails && <MovieInfo movieDetails={movieDetails} onGenreClick={handleGenreClick}/>}
        </div>
    );
};

export {MoviesDetailsPage};