import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar"
import PageSort from "./PageSort"
import MovieTag from './MovieTag';
import Movie from "./Movie";
import {useParams, useHistory} from "react-router-dom";

interface GetMoviesParams {
    genre: string;
    sort: string;
    page: string;
}
export default function GetMovies() {
    const [movies, setMovies] = useState([]);
    let {genre = '0'} = useParams<GetMoviesParams>();
    let {sort = 'popularity.desc'} = useParams<GetMoviesParams>();
    let {page = '1'} = useParams<GetMoviesParams>();
    let history = useHistory();
    const [totalPages, setTotalPages] = useState(0);
    function loadMovies(genreId: string, sortBy: string, pageNum: string) {
        const baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06" +
            "&language=en-US&include_adult=false&include_video=true&sort_by=";
        if(genreId === '0') {
            fetch(baseUrl + sortBy + "&page=" + pageNum)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                });
        } else {
            fetch(baseUrl + sortBy + "&with_genres=" + genreId + "&page=" + pageNum)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                });
        }
    }
    useEffect(() => {
        loadMovies(genre, sort, page);
    }, [genre, page, totalPages, sort, movies]);
    return (
        <div className={'container'}>
            <div className={'row'}>
                <Sidebar genre={genre} sort={sort}
                     filterByGenre={(genreNum: string) => {
                         history.push('genre', `/${genreNum}`)
                     }}
                     sortBy={(sortBy: string) => {
                         history.push('sortBy', `/${sortBy}`);
                     }}
                />
                <h1 className={'col-9'}>Movie Streaming Availability App</h1>
                {movies.map((movie: Movie, index: number) => {
                    return (
                        <MovieTag key={index}
                                  movieId={movie.id}
                                  poster={movie.poster_path}
                                  title={movie.original_title}
                        />
                    )
                })}
                <PageSort pageNum={parseInt(page)}
                          total_pages={totalPages}
                          pagination={(pageNum: number) => {
                              history.push(`/${pageNum}`);
                          }}
                />
            </div>
        </div>
    )
}
