import React from "react";
import {useEffect, useState} from "react";
import FilmData from "./movie_page_interfaces/FilmData";
import Genres from "./movie_page_interfaces/Genres";
import ProductionCompanies from "./movie_page_interfaces/ProductionCompanies";
import ProductionCountries from "./movie_page_interfaces/ProductionCountries";
import SpokenLanguages from "./movie_page_interfaces/SpokenLanguages";
import Providers from "./movie_page_interfaces/Providers";
import Monetization from "./movie_page_interfaces/Monetization";

export default function MoviePage(props: any) {
    const [movie, setMovie] = useState<FilmData>();
    const [provider, setProvider] = useState<Monetization>();
    function MovieData(movieId: number) {
        const movieUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US";
        fetch(movieUrl).then((response) =>{
           return response.json();
        }).then((data) => {
            setMovie(data);
        });
    }
    function providerData(providerId: number) {
        let providerUrl = "https://api.themoviedb.org/3/movie/" + providerId + "/watch/providers?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-us";
        fetch(providerUrl)
            .then(response => response.json())
            .then(data => setProvider(data.results.US));
    }
    useEffect(() => {
        MovieData(props.match.params.movieId);
        providerData(props.match.params.movieId);
    },[props.match.params.movieId]);
    return(
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w780' + movie?.backdrop_path} alt={'Movie Backdrop'}/>
                </div>
                <div className={'col-4'}>
                    <h3>{movie?.original_title}</h3>
                    <h3>Release Date {movie?.release_date}</h3>
                    <h3>Status {movie?.status}</h3>
                </div>
                <div className={'col-4'}>
                    <a href={movie?.homepage}>Movie Homepage</a>
                    <p>{movie?.overview}</p>
                    <h3>Movie Genre</h3>
                    {movie?.genres.map((genre: Genres, index: number) => {
                        return(
                            <p key={index}>{genre.name}</p>
                        )
                    })}
                </div>
                <div className={'col-12'}>
                    <h1 className={'text-center'}>Where to watch</h1>
                    <p className={'text-center'}>Data source Just Watch</p>
                </div>
                    <div className={'col-2'}>
                        <a className={'text-black align-content-center'} href={provider?.link}>The Moviedb movie page</a>
                    </div>
                    <div className={'col-2'}>
                        <h1 className={'align-content-center'}>Flatrate</h1>
                        {provider?.flatrate !== undefined && provider?.flatrate.map((company: Providers, index: number) => {
                            return(
                                <React.Fragment key={index}>
                                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                    <h3>{company.provider_name}</h3>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className={'col-2'}>
                        <h1 className={'align-content-center'}>Buy</h1>
                        {provider?.buy !== undefined && provider?.buy.map((company: Providers, index: number) => {
                            return(
                                <React.Fragment key={index}>
                                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                    <h3>{company.provider_name}</h3>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className={'col-2'}>
                        <h1 className={'align-content-center'}>For rent</h1>
                        {provider?.rent !== undefined && provider?.rent.map((company: Providers, index: number) => {
                            return(
                                <React.Fragment key={index}>
                                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                    <h3>{company.provider_name}</h3>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className={'col-2'}>
                        <h1 className={'align-content-center'}>Free with ads</h1>
                        {provider?.ads !== undefined && provider?.ads.map((company: Providers, index: number) => {
                            return(
                                <React.Fragment key={index}>
                                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                    <h3>{company.provider_name}</h3>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className={'col-2'}>
                        <h1 className={'align-content-center'}>Free</h1>
                        {provider?.free !== undefined && provider?.free.map((company: Providers, index: number) => {
                            return(
                                <React.Fragment key={index}>
                                    <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                    <h3>{company.provider_name}</h3>
                                </React.Fragment>
                            )
                        })}
                    </div>
                <div className={'col-4'}>
                    <h4>Production Companies</h4>
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
                    <h4>Production Countries</h4>
                    {movie?.production_countries.map((country: ProductionCountries, index: number) => {
                        return (
                            <p key={index}>{country.name}</p>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h4>Spoken Languages</h4>
                    {movie?.spoken_languages.map((language: SpokenLanguages, index) => {
                        return(
                                <p key={index}>{language.english_name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
