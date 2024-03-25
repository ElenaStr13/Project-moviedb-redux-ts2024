import {useEffect} from "react";
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {RootState} from "../../types";
import {toggleTheme} from "../../redux";
import css from "./Theme.module.css";


const ThemeCheckbox = () => {
    const theme = useAppSelector((state:RootState) => state.theme.mode);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        dispatch(toggleTheme())
    }

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);

    return (
        <div className={css.forCheckbox} >
            <Link to={'/movie'}>Theme</Link>
            <input type="checkbox" id="switch" onClick={changeTheme}/>
            <label htmlFor="switch">Toggle</label>
        </div>
    );
};

export {ThemeCheckbox};