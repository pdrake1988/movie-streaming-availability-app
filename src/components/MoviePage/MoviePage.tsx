import React from "react";
import {useEffect, useState} from "react";
import FilmData from "./FilmData";
import Genres from "./Genres";
import ProductionCompanies from "./ProductionCompanies";
import ProductionCountries from "./ProductionCountries";
import SpokenLanguages from "./SpokenLanguages";

export default function MoviePage(props: any) {
    const [movie, setMovie] = useState<FilmData>();
    function MovieData(movieId: number) {
        const movieUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US";
        fetch(movieUrl).then((response) =>{
           return response.json();
        }).then((data) => {
            setMovie(data);
        });
    }
    useEffect(() => {
        MovieData(props.match.params.movieId);
    },[props.match.params.movieId]);
    return(
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-5'}>
                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w780' + movie?.backdrop_path} alt={'Movie Backdrop'}/>
                </div>
                <div className={'col-7'}>
                    <h3>{movie?.original_title}</h3>
                </div>
                <div className={'col-4'}>
                    <h3>Release Date {movie?.release_date}</h3>
                    <h3>Status {movie?.status}</h3>
                </div>
                <div className={'col-5'}>
                    <a href={movie?.homepage}>Movie Homepage</a>
                    <p>{movie?.overview}</p>
                </div>
                <div className={'col-3'}>
                    <h3>Movie Genres</h3>
                    {movie?.genres.map((genre: Genres) => {
                        return(
                            <h3>{genre.name}</h3>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h3>Production Companies</h3>
                    {movie?.production_companies.map((company: ProductionCompanies, index) => {
                        return(
                            <React.Fragment key={index}>
                                <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <h3>{company.name}</h3>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h3>Production Countries</h3>
                    {movie?.production_countries.map((country: ProductionCountries) => {
                        return (
                            <h3>{country.name}</h3>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h3>Spoken Languages</h3>
                    {movie?.spoken_languages.map((language: SpokenLanguages) => {
                        return(
                            <React.Fragment>
                                <h3>{language.english_name}</h3>
                                <h3>{language.name}</h3>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
