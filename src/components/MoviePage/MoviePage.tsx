import {useEffect, useState} from "react";

interface FilmData {
    original_title: string;
    backdrop_path: string;
    budget: number
    genres: number
    overview: string
    production_companies: any[]
    production_countries: any[]
    release_date: any[]
    spoken_languages: any[]
    vote_average: number
    vote_count: number
}

export default function MoviePage(props: any) {
    const [movie, setMovie] = useState({});
    function MovieData(movieId: number) {
        const movieUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US"
        fetch(movieUrl).then((response) =>{
           return response.json();
        }).then((data) => {
            setMovie(data);
        });
    }
    useEffect(() => {
        MovieData(props.key);
    },[movie, props.key]);
    return(
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-8'}>
                    <h3>{filmData.original_title}</h3>
                </div>
            </div>
        </div>
    )
}
