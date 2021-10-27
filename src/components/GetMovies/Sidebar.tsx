import React, {useState} from "react"
import {Button, CloseButton, Dropdown, DropdownButton, Offcanvas} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

interface SidebarProps {
    genre: string;
    sort: string;
    monetization: string;
    filterByGenre(genreNum: string): void;
    sortBy(sortBy: string): void;
    filterByMonetization(monetizationType: string): void;
}

function Sidebar(props: SidebarProps) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={'col-3'}>
            <Button variant={'secondary'} onClick={handleShow}>Filter</Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                    <CloseButton onClick={handleClose}/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={'p-2'}>
                        {props.genre === '0' && <h3>Default</h3>}
                        {props.genre === '28' && <h3>Action</h3>}
                        {props.genre === '12' && <h3>Adventure</h3>}
                        {props.genre === '16' && <h3>Animation</h3>}
                        {props.genre === '35' && <h3>Comedy</h3>}
                        {props.genre === '80' && <h3>Crime</h3>}
                        {props.genre === '99' && <h3>Documentary</h3>}
                        {props.genre === '18' && <h3>Drama</h3>}
                        {props.genre === '10751' && <h3>Family</h3>}
                        {props.genre === '14' && <h3>Fantasy</h3>}
                        {props.genre === '36' && <h3>History</h3>}
                        {props.genre === '27' && <h3>Horror</h3>}
                        {props.genre === '10402' && <h3>Music</h3>}
                        {props.genre === '9648' && <h3>Mystery</h3>}
                        {props.genre === '10749' && <h3>Romance</h3>}
                        {props.genre === '878' && <h3>Science Fiction</h3>}
                        {props.genre === '10770' && <h3>TV Movie</h3>}
                        {props.genre === '53' && <h3>Thriller</h3>}
                        {props.genre === '10752' && <h3>War</h3>}
                        {props.genre === '37' && <h3>Western</h3>}
                        <DropdownButton title={'Genre'} drop={'end'}>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('0')}>Default</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('28')}>Action</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('12')}>Adventure</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('16')}>Animation</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('35')}>Comedy</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('80')}>Crime</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('99')}>Documentary</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('18')}>Drama</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('10402')}>Family</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('14')}>Fantasy</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('36')}>History</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('27')}>Horror</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('10402')}>Music</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('9648')}>Mystery</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('10770')}>Romance</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('878')}>Science Fiction</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('10770')}>TV Movie</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('53')}>Thriller</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('10752')}>War</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByGenre('37')}>Western</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className={'p-2'}>
                        {props.sort === "popularity.desc" && <h3>Popularity Descending</h3>}
                        {props.sort === "popularity.asc" && <h3>Popularity Ascending</h3>}
                        {props.sort === "release_date.desc" && <h3>Release Date Descending</h3>}
                        {props.sort === "release_date.asc" && <h3>Release Date Ascending</h3>}
                        {props.sort === "revenue.desc" && <h3>Revenue Descending</h3>}
                        {props.sort === "revenue.asc" && <h3>Revenue Ascending</h3>}
                        {props.sort === "primary_release_date.desc" && <h3>Primary Release Date Descending</h3>}
                        {props.sort === "primary_release_date.asc" && <h3>Primary Release Date Ascending</h3>}
                        {props.sort === "original_title.desc" && <h3>Original Title Ascending</h3>}
                        {props.sort === "original_title.asc" && <h3>Original Title Ascending</h3>}
                        {props.sort === "vote_average.desc" && <h3>Vote Average Descending</h3>}
                        {props.sort === "vote_average.asc" && <h3>Vote Average Ascending</h3>}
                        {props.sort === "vote_count.desc" && <h3>Vote Count Descending</h3>}
                        {props.sort === "vote_count.asc" && <h3>Vote Count Ascending</h3>}
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
                    </div>
                    <div className={'p-2'}>
                        {props.monetization === "default" && <h3>Default</h3>}
                        {props.monetization === "flatrate" && <h3>Flatrate</h3>}
                        {props.monetization === "free" && <h3>Free</h3>}
                        {props.monetization === "ads" && <h3>Ads</h3>}
                        {props.monetization === "rent" && <h3>Rent</h3>}
                        {props.monetization === "buy" && <h3>Buy</h3>}
                        <DropdownButton title={'Monetization Type'}>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByMonetization("flatrate")}>Flatrate</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByMonetization("free")}>Free</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByMonetization("ads")}>Ads</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByMonetization("rent")}>Rent</Dropdown.Item>
                            <Dropdown.Item as={'button'} onClick={() => props.filterByMonetization("buy")}>Buy</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Sidebar;
