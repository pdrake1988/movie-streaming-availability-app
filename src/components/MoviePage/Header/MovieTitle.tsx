import React from "react";

interface MovieTitleProps {
    OriginalTitle: string | undefined;
    ReleaseDate: Date | undefined;
    Status: string | undefined;
}
export default function MovieTitle(props: MovieTitleProps) {
    return (
        <div className={'mx-auto'}>
            <h3>{props.OriginalTitle}</h3>
            <h3>Release Date {props.ReleaseDate}</h3>
            <h3>Status {props.Status}</h3>
        </div>
    )
}
