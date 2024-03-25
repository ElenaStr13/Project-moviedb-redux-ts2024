import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genre.module.css';

interface IProps extends PropsWithChildren {
    genre: IGenre,
    onGenreClick: (genre: IGenre) => void;
    isActive: boolean
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate();

    return (
        <div >
            <button className={css.genre}
                    onClick={() => navigate(`/genres/${id}`)}>
                {name}</button>
        </div>
    );
};

export {Genre};