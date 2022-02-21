import React from "react";
import SortTitle from "./SortTitle";
import SortButton from "./SortButton";
interface SortByProps {
    sort: string;
    sortBy(sortBy: string): void;
}
export default function SortBy(props: SortByProps) {
    return (
        <div className={'p-2'}>
            <SortTitle sort={props.sort}/>
            <SortButton sortBy={props.sortBy}/>
        </div>
    )
}
