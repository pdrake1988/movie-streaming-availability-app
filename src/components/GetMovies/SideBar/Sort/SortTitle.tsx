import React from "react";

interface SortTitleProps {
    sort: string;
}
export default function SortTitle(props: SortTitleProps) {
    switch (props.sort) {
        case "popularity.desc":
            return (
                <h3>Popularity Descending</h3>
            );
        case "popularity.asc":
            return (
                <h3>Popularity Ascending</h3>
            );
        case "release_date.desc":
            return (
                <h3>Release Date Descending</h3>
            );
        case "release_date.asc":
            return (
                <h3>Release Date Descending</h3>
            );
        case "revenue.desc":
            return (
                <h3>Revenue Descending</h3>
            );
        case "revenue.asc":
            return (
                <h3>Revenue Ascending</h3>
            );
        case "primary_release_date.desc":
            return (
                <h3>Primary Release Date Descending</h3>
            );
        case "primary_release_date.asc":
            return (
                <h3>Primary Release Date Ascending</h3>
            );
        case "original_title.desc":
            return (
                <h3>Original Title</h3>
            );
        case "original_title.asc":
            return (
                <h3>Original Title Ascending</h3>
            );
        case "vote_average.desc":
            return (
                <h3>Vote Average Descending</h3>
            );
        case "vote_average.asc":
            return (
                <h3>Vote Average Ascending</h3>
            );
        case "vote_count.desc":
            return (
                <h3>Vote Count Descending</h3>
            );
        case "vote_count.asc":
            return (
                <h3>Vote Count Ascending</h3>
            )
        default:
            return null;
    }
}
