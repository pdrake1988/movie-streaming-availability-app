import React, {useEffect, useState} from 'react';
import './App.css';
import MovieTag from "./components/MovieTag/MovieTag";
import Sidebar from "./components/MovieTag/Sidebar";

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
    function GetMovies(genreId: number, sortBy: string, page: number){
        setGenre(genreId);
        setSort(sortBy);
        setPage(page);
        const baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06" +
            "&language=en-US&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&sort_by=";
        if(genreId === 0) {
            fetch(baseUrl  + sortBy + "&page=" + page).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
            });
        } else {
            fetch(baseUrl + sortBy + "&with_genres=" + genreId + "&page=" + page).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
            });
        }
    }
    useEffect(() => {
        GetMovies(genre, sort, page);
    }, [genre, page, sort, movies]);
    return (
        <div className={'container'}>
            <Sidebar filterByGenre={(genre: number) => {
                setGenre(genre);
            }}
                     sortBy={(sort: string) => {
                         setSort(sort);
                     }}
                     pageFilter={(page: number) => {
                         setPage(page);
                     }}
            />
                <div className={'row'}>
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
    );
}
export default App;
