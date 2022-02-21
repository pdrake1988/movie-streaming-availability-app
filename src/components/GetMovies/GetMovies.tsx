import React, {useEffect, useState} from 'react';
import Sidebar from "./SideBar/Sidebar"
import PageSort from "./PageSort"
import MovieTag from './MovieTag';
import Movie from "./interfaces/Movie";
import {useParams, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import {MovieData} from "./interfaces/MovieData";
import GetMoviesParams from "./interfaces/GetMoviesParams";
import axios from "axios";


export default function GetMovies() {
    document.body.classList.add('bg-dark', 'text-white');
    let {genre = null} = useParams<GetMoviesParams>();
    let {sort = 'popularity.desc'} = useParams<GetMoviesParams>();
    let {page = '1'} = useParams<GetMoviesParams>();
    let {monetization = 'flatrate'} = useParams<GetMoviesParams>();
    let history = useHistory();
    const [movieData, setMovieData] = useState<MovieData>({
        results: [], total_pages: 0
    });
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?" +
            "api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US&include_adult=false&" +
            "include_video=false1&watch_region=US", {
            params: {
                sort_by: sort,
                with_genres: genre,
                with_watch_monetization_types: monetization,
                page: page
            }
        }).then(res => setMovieData(res.data));
    }, [sort, monetization, genre, page]);
    return (
        <div className={'container'}>
            <div className={'row'}>
                <Sidebar genre={genre} sort={sort} monetization={monetization}
                     filterByGenre={(genreNum: string) => {
                         history.push(`/${genreNum}/${monetization}/${sort}/${page}`);
                     }}
                     filterByMonetization={(monetizationType: string) => {
                         history.push(`/${genre}/${monetizationType}/${sort}/${page}`)
                     }}
                     sortBy={(sortBy: string) => {
                         history.push(`/${genre}/${monetization}/${sortBy}/${page}`);
                     }}/>
                <div className={'col-6'}>
                    <h2 className={'text-center'}>Movie Streaming Availability App</h2>
                </div>
                <div className={'col-3 text-end'}>
                    <Button variant={'secondary'} href={'https://www.pdrake.me'}>Home Page</Button>
                </div>
                {movieData.results.map((movie: Movie, index: number) => {
                    return (
                        <MovieTag key={index}
                                  movieId={movie.id}
                                  poster={movie.poster_path}
                                  title={movie.original_title}
                        />
                    )
                })}
                <PageSort pageNum={parseInt(page)}
                          total_pages={movieData.total_pages}
                          pagination={(page: number) => {
                              history.push(`/${genre}/${monetization}/${sort}/${page}`);
                          }}
                />
            </div>
        </div>
    )
}
