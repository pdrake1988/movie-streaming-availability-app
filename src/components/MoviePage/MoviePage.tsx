import React from "react";
import {useEffect, useState} from "react";
import FilmData from "./movie_page_interfaces/FilmData";
import axios from "axios";
import {useParams} from "react-router-dom";
import MovieParams from "./movie_page_interfaces/MovieParams";
import Monetization from "./movie_page_interfaces/Monetization";
import Languages from "./Footer/Languages";
import Countries from "./Footer/Countries";
import Companies from "./Footer/Companies";
import Free from "./Providers/Free";
import FreeWithAds from "./Providers/FreeWithAds";
import Rent from "./Providers/Rent";
import Buy from "./Providers/Buy";
import FlatRate from "./Providers/FlatRate";
import ProviderLink from "./Providers/ProviderLink";
import ProviderHeader from "./Providers/ProviderHeader";
import MovieInfo from "./Header/MovieInfo";
import MovieTitle from "./Header/MovieTitle";
import Backdrop from "./Header/Backdrop";


export default function MoviePage() {
    document.body.classList.add('bg-dark', 'text-white', 'fw-bold');
    let { movieId } = useParams<MovieParams>()
    const [movie, setMovie] = useState<FilmData>();
    const [provider, setProvider] = useState<Monetization>();
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/" + movieId +
            "/watch/providers?api_key=e2e4f004450c3b2d09d61c0fb5120d06").then(res => setProvider(res.data));
        axios.get("https://api.themoviedb.org/3/movie/" + movieId +
            "?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US").then(res => setMovie(res.data));
    });
    return (
        <React.Fragment>
            <div className={'d-flex flex-row flex-nowrap'}>
                <Backdrop BackDropPath={movie?.backdrop_path}/>
                <MovieTitle OriginalTitle={movie?.original_title}
                            ReleaseDate={movie?.release_date}
                            Status={movie?.status}/>
                <MovieInfo HomePage={movie?.homepage}
                           Overview={movie?.overview}
                           Genre={movie?.genres}/>
            </div>
                <ProviderHeader/>
                <div className={'d-flex flex-row flex-nowrap'}>
                    <ProviderLink Provider={provider?.results.link}/>
                    <FlatRate Providers={provider?.results.US.flatrate}/>
                    <Buy Provider={provider?.results.US.buy}/>
                    <Rent Provider={provider?.results.US.rent}/>
                    <FreeWithAds Provider={provider?.results.US.ads}/>
                    <Free Provider={provider?.results.US.free}/>
                </div>
                <div className={'d-flex flex-row flex-nowrap'}>
                    <Companies companies={movie?.production_companies}/>
                    <Countries countries={movie?.production_countries}/>
                    <Languages languages={movie?.spoken_languages}/>
                </div>
        </React.Fragment>
    )
}
