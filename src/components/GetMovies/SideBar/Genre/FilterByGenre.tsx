import React, {useEffect, useState} from "react";
import axios from "axios";
import Genres from "../../interfaces/Genres";
import {Dropdown, DropdownButton} from "react-bootstrap";
import GenreButton from "./GenreButton";
import GenreTitle from "./GenreTitle";
interface FilterByGenreProps {
    genre: string | null;
    filterByGenre(genreNum: string | null): void;
}
export default function FilterByGenre(props: FilterByGenreProps) {
    const [genre, setGenre] = useState({genres: []});
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US")
            .then(res => setGenre(res.data));
    });
    return (
        <div className={'p-2'}>
            <GenreTitle id={parseInt(props.genre as string)}/>
            <DropdownButton title={'Genre'} drop={'end'}>
                <Dropdown.Item as={'button'} onClick={() => props.filterByGenre(null)}>Default</Dropdown.Item>
                {genre.genres.map((genre: Genres, index: number) => {
                    return (
                        <GenreButton key={index}
                                     id={genre.id}
                                     genre={genre.name}
                                     filterByGenre={props.filterByGenre}
                        />
                    )
                })}
            </DropdownButton>
        </div>
    )
}
