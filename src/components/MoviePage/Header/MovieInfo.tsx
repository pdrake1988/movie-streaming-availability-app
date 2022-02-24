import Genres from "../movie_page_interfaces/Genres";
import React from "react";

interface MovieInfoProps {
    HomePage: string | undefined;
    Overview: string | undefined;
    Genre: [] | undefined;
}
export default function MovieInfo(props: MovieInfoProps) {
    return (
        <div className={'col-4'}>
            <a href={props.HomePage}>Movie Homepage</a>
            <p>{props.Overview}</p>
            <h3>Movie Genres</h3>
            {props.Genre?.map((genre: Genres, index: number) => {
                return(
                    <p key={index}>{genre.name}</p>
                )
            })}
        </div>
    )
}
