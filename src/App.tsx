import React, {useEffect, useState} from 'react';
import './App.css';
import MovieTag from "./components/GetMovies/MovieTag";
import Sidebar from "./components/GetMovies/Sidebar";

interface Movie {
    id: number,
    poster_path: string,
    title: number
}

function App() {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState(0);
    const [sort, setSort] = useState("popularity.desc");
    const [page, setPage] = useState(1);
    const [monetization, setMonetization] = useState("buy");
    function GetMovies(genreId: number, sortBy: string, monetizationType: string, page: number){
        setGenre(genreId);
        setSort(sortBy);
        setMonetization(monetizationType);
        setPage(page);
        const baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06" +
            "&language=en-US&include_adult=false&include_video=false&sort_by=";
        if(genreId === 0) {
            fetch(baseUrl + sortBy + "&with_watch_monetization_types=" + monetizationType + "&page=" + page).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
            });
        } else {
            fetch(baseUrl + sortBy + "&with_genres="  + genreId + "&with_watch_monetization_types=" + monetizationType  + "&page=" + page).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
            });
        }
    }
    useEffect(() => {
        GetMovies(genre, sort,monetization, page);
    }, [genre, page, sort, monetization, movies]);
    return (
        <div className={'container'}>
                <div className={'row'}>
                    <Sidebar genre={genre} sort={sort} monetization={monetization}
                             filterByGenre={(genre: number) => {
                                setGenre(genre);
                             }}
                             filterMonetization={(monetization: string) => {
                                 setMonetization(monetization);
                             }}
                             sortBy={(sort: string) => {
                                 setSort(sort);
                             }}
                    />
                    <h1 className={'col-9'}>Movie Streaming Availability App</h1>
                    {movies.map((movie: Movie) => {
                        return (
                            <MovieTag key={movie.id}
                                      poster={movie.poster_path}
                                      title={movie.title}
                            />
                        )
                    })}
                </div>
        </div>
    )
}
export default App;
