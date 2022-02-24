import React from "react";

interface MovieTitleProps {
    OriginalTitle: string | undefined;
    ReleaseDate: string | undefined;
    Status: string | undefined;
}
export default function MovieTitle(props: MovieTitleProps) {
    const releaseDate = props.ReleaseDate !== undefined ?
        new Date(props.ReleaseDate) : props.ReleaseDate;
    return (
        <div className={'col-4'}>
            <h3 className={'text-center'}>{props.OriginalTitle}</h3>
            <h3 className={'text-center'}>Release Date {releaseDate?.toLocaleDateString('en-US', {
                weekday: 'long', month: '2-digit', day: '2-digit', year: 'numeric'
            })}</h3>
            <h3 className={'text-center'}>Status {props.Status}</h3>
        </div>
    )
}
