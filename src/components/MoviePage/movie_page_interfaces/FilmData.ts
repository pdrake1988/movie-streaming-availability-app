import SpokenLanguages from "./SpokenLanguages";

export default interface FilmData {
    original_title: string;
    backdrop_path: string;
    homepage: string;
    budget: number;
    genres: [];
    overview: string;
    production_companies: [];
    production_countries: [];
    release_date: Date;
    status: string;
    spoken_languages: SpokenLanguages[];
    vote_average: number;
    vote_count: number;
}
