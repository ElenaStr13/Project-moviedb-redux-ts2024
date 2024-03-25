import {Outlet} from "react-router-dom";

import {useAppSelector} from "../hooks";
import {Header} from "../components";


const MainLayout = () => {
    const {withGenres} = useAppSelector(state => state.genres);

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};