import {IAllGenre, ISomeData} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: (): IRes<IAllGenre> => apiService.get(urls.genres.base),
    getByGenreId: (page:number, id_genre?: number): IRes<ISomeData> => apiService.get(`${urls.movies.base}?api_key=&page=${page}&with_genres=${id_genre}`)
}

export {genreService}