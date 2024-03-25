import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

import css from './Header.module.css';
import {UserInfo} from "../UserContainer/UserInfo";
import {useAppDispatch} from "../../hooks";
import {searchActions} from "../../redux";
import {ThemeCheckbox} from "../ThemeCheckbox";



const Header = () => {
    const [query, setQuery] = useState<string>('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(ev.target.value)
    };

    const searchTitle = () => {
        dispatch(searchActions.getAll(query))
        navigate('/3/search/movie')
    }

    return (
        <div className={css.header}>
            <Link to={'/movie'} className={css.logo}><img src='./logo.png' alt='photo' /></Link>
            <Link to={'/movie'}>Movies</Link>
            <Link to={'genres'}>Genres</Link>
            <div>
                <input
                    type='text'
                    placeholder='Search...'
                    value={query}
                    onChange={handleChange}
                    className={css.search}
                />
                <button onClick={searchTitle} className={css.btnSearch}>Search</button>
            </div>
            <ThemeCheckbox/>
            <UserInfo/>
        </div>
    );
};

export {Header};