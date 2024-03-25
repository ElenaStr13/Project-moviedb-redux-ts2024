import {IRes} from "../types";
import {IMovie, ISomeData} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page: number): IRes<ISomeData> => apiService.get(urls.movies.base, {params: {page}}),
    getById:(movie_id:number):IRes<IMovie> => apiService.get(urls.movies.byId(movie_id)),
    getByGenre: (page:number, id_genre?: string): IRes<ISomeData> => apiService.get(`${urls.movies.base}?api_key=&page=${page}&with_genres=${id_genre}`)
}

export {movieService}