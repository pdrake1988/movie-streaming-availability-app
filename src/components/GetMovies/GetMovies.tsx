import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar"
import PageSort from "./PageSort"
import MovieTag from './MovieTag';

interface Movie {
    id: number,
    poster_path: string,
    title: number
}

export default function GetMovies() {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState(0);
    const [sort, setSort] = useState("popularity.desc");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    function LoadMovies(genreId: number, sortBy: string, page: number){
        setGenre(genreId);
        setSort(sortBy);
        setPage(page);
        const baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06" +
            "&language=en-US&include_adult=false&include_video=true&sort_by=";
        if(genreId === 0) {
            fetch(baseUrl + sortBy + "&page=" + page).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
                setTotalPages(data.total_pages);
            });
        } else {
            fetch(baseUrl + sortBy + "&with_genres="  + genreId + "&page=" + page).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
                setTotalPages(data.total_pages);
            });
        }
    }
    useEffect(() => {
        LoadMovies(genre, sort, page);
    }, [genre, page, totalPages, sort, movies]);
    return (
        <div className={'container'}>
            <div className={'row'}>
                <Sidebar genre={genre} sort={sort}
                         filterByGenre={(genre: number) => {
                             setGenre(genre);
                         }}
                         sortBy={(sort: string) => {
                             setSort(sort);
                         }}
                />
                <h1 className={'col-9'}>Movie Streaming Availability App</h1>
                {movies.map((movie: Movie, index) => {
                    return (
                        <MovieTag key={index}
                                  movieId={movie.id}
                                  poster={movie.poster_path}
                                  title={movie.title}
                        />
                    )
                })}
                <PageSort page={page}
                          totalPages={totalPages}
                          pagination={(pageNum: number) => {
                              if(page - pageNum ===  )
                              setPage(pageNum);
                          }}
                />
            </div>
        </div>
    )
}
