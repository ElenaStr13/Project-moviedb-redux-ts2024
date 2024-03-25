import {FC, PropsWithChildren} from "react";
import {SearchMovies} from "../components";

interface IProps extends PropsWithChildren {

}

const SearchPage: FC<IProps> = () => {
    return (
        <div>
            <SearchMovies/>
        </div>
    );
};

export {SearchPage};