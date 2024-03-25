const baseURL: string = 'https://api.themoviedb.org/3';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

const movies: string = '/discover/movie';
const genres: string = '/genre/movie/list';
const search: string = '/search/movie?query=';

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `movie/${id}`
    },
    genres: {
        base: genres,
        byGenreId: (genreId: number) => `${movies}?with_genres=${genreId}`
    },
    search
}

export {
    baseURL,
    urls,
    baseUrlImage
}