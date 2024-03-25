export  interface  IMovie {
    adult?: boolean,
    backdrop_path?: string,
    genre_ids?: number[],
    id?: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    runtime: number,
    genres: IGenres[]
}
export interface IGenres {
    id:number,
    name:string
}
export  interface  ISomeData {
    page: number,
    results: IMovie[]
}