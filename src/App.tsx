import React, {useEffect, useState} from 'react';
import './App.css';
import MovieTag from "./components/MovieTag/MovieTag";
import Offcanvas from "./components/MovieTag/Offcanvas/Offcanvas";

interface Movie {
    id: number,
    poster_path: string,
    title: number
}

function App() {
    const [movies, setMovies] = useState([]);
    function GetMovies(genreId = 0, sortBy = "popularity.desc", page = 1){
        const baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06" +
            "&language=en-US&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&sort_by=" + sortBy + "&page=" + page;
        if(genreId === 0 && sortBy === "popularity.desc" && page === 1) {
            fetch(baseUrl).then(response => {
                return response.json();
            }).then(data => {
                setMovies(data.results);
            });
        }
    }
    useEffect(() => {
        GetMovies();
    },[movies]);
    return (
        <div className={'container'}>
            <Offcanvas/>
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
