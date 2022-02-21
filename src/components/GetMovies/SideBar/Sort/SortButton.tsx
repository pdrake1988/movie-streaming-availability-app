import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";

interface SortButtonProps {
    sortBy(sortBy: string): void;
}
export default function SortButton(props: SortButtonProps) {
    return (
        <DropdownButton title={'Sort By'} drop={'end'}>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("popularity.desc")}>Popularity Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("popularity.asc")}>Popularity Ascending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("release_date.desc")}>Release Date Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("release_date.asc")}>Release Date Ascending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("revenue.desc")}>Revenue Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("revenue.asc")}>Revenue Ascending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("primary_release_date.desc")}>Primary Release Date Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("primary_release_date.asc")}>Primary Release Date Ascending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("original_title.desc")}>Original Title Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("original_title.asc")}>Original Title Ascending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("vote_average.desc")}>Vote Average Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("vote_average.asc")}>Vote Average Ascending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("vote_count.desc")}>Vote Count Descending</Dropdown.Item>
            <Dropdown.Item as={'button'} onClick={() => props.sortBy("vote_count.asc")}>Vote Count Ascending</Dropdown.Item>
        </DropdownButton>
    )
}
