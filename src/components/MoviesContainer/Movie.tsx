import {useNavigate} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../interfaces";
import {baseUrlImage} from "../../constants";
import css from "./Movie.module.css";
import {StarsRating} from "../StarsRaring";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const {
        poster_path,
        id,
        original_title,
        vote_average
    } = movie;
    const navigate = useNavigate();

    return (
        <div className={css.moviesCard} onClick={() => navigate(`/3/movie/${id.toString()}`, {state: {movie}})}>
            {(baseUrlImage + poster_path)?
                <img src={baseUrlImage + poster_path} alt={original_title}></img>
                :
                <img src='./logo.png' alt='null'></img>}
            <StarsRating voteAverage={vote_average} />
            <p>{original_title}</p>
        </div>
    );
};

export {Movie};