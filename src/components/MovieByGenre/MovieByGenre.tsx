import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import css from "./Movie.module.css";
import {baseUrlImage} from "../../constants";
import {StarsRating} from "../StarsRaring";

interface IProps extends PropsWithChildren {
    movieByGenre: IMovie;
}

const MovieByGenre: FC<IProps> = ({movieByGenre}) => {
    const {title, poster_path, vote_average, id} = movieByGenre;
    const navigate = useNavigate();

    return (
        <div className={css.moviesByGenreCard} onClick={() => navigate(`/3/movie/${id.toString()}`, {state: {movieByGenre}})}>
            {(baseUrlImage + poster_path)?
                <img src={baseUrlImage + poster_path} alt={title}></img>
                :
                <img src='./logo.png' alt='null'></img>}
            <StarsRating voteAverage={vote_average} />
            <p>{title}</p>
        </div>
    );
};

export {MovieByGenre};