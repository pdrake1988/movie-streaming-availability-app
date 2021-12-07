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
    document.body.classList.add('bg-dark', 'text-white', 'fw-bold');
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
                    <a className={'text-primary align-content-center'} href={provider?.link}>The Moviedb movie page</a>
                </div>
                <div className={'col-2'}>
                    <h1 className={'text-center d-none d-sm-none d-md-block'}>Flatrate</h1>
                    <h3 className={'text-center d-sm-block d-md-none'}>Flatrate</h3>
                    {provider?.flatrate !== undefined && provider?.flatrate.map((company: Providers, index: number) => {
                        return(
                            <React.Fragment key={index}>
                                <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                                <h3 className={'d-none d-sm-none d-md-block text-center'}>{company.provider_name}</h3>
                                <h6 className={'d-sm-block d-md-none text-center'}>{company.provider_name}</h6>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={'col-2'}>
                    <h1 className={'text-center d-none d-sm-none d-md-block'}>Buy</h1>
                    <h3 className={'text-center d-sm-block d-md-none'}>Buy</h3>
                    {provider?.buy !== undefined && provider?.buy.map((company: Providers, index: number) => {
                        return(
                            <React.Fragment key={index}>
                                <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                                <h3 className={'d-none d-sm-none d-md-block text-center'}>{company.provider_name}</h3>
                                <h6 className={'d-sm-block d-md-none text-center'}>{company.provider_name}</h6>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={'col-2'}>
                    <h1 className={'text-center d-none d-sm-none d-md-block'}>For Rent</h1>
                    <h3 className={'text-center d-sm-block d-md-none'}>For Rent</h3>
                    {provider?.rent !== undefined && provider?.rent.map((company: Providers, index: number) => {
                        return(
                            <React.Fragment key={index}>
                                <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                                <h3 className={'d-none d-sm-none d-md-block text-center'}>{company.provider_name}</h3>
                                <h6 className={'d-sm-block d-md-none text-center'}>{company.provider_name}</h6>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={'col-2'}>
                    <h1 className={'text-center d-none d-sm-none d-md-block'}>Free with Ads</h1>
                    <h3 className={'text-center d-sm-block d-md-none'}>Free with Ads</h3>
                    {provider?.ads !== undefined && provider?.ads.map((company: Providers, index: number) => {
                        return(
                            <React.Fragment key={index}>
                                <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                                <h3 className={'d-sm-none d-md-block text-center'}>{company.provider_name}</h3>
                                <h6 className={'d-none d-sm-block d-md-none text-center'}>{company.provider_name}</h6>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={'col-2'}>
                    <h1 className={'text-center d-none d-sm-none d-md-block'}>Free</h1>
                    <h3 className={'text-center d-sm-block d-md-none'}>Free</h3>
                    {provider?.free !== undefined && provider?.free.map((company: Providers, index: number) => {
                        return(
                            <React.Fragment key={index}>
                                <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                                <h3 className={'d-none d-sm-none d-md-block text-center'}>{company.provider_name}</h3>
                                <h6 className={'d-sm-block d-md-none text-center'}>{company.provider_name}</h6>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h4 className={'text-center'}>Production Companies</h4>
                    {movie?.production_companies.map((company: ProductionCompanies, index) => {
                        return(
                            <div key={index}>
                                <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                                <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                                <p className={'text-center'}>{company.name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h4 className={'text-center'}>Production Countries</h4>
                    {movie?.production_countries.map((country: ProductionCountries, index: number) => {
                        return (
                            <p className={'text-center'} key={index}>{country.name}</p>
                        )
                    })}
                </div>
                <div className={'col-4'}>
                    <h4 className={'text-center'}>Spoken Languages</h4>
                    {movie?.spoken_languages.map((language: SpokenLanguages, index) => {
                        return(
                                <p className={'text-center'} key={index}>{language.english_name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
