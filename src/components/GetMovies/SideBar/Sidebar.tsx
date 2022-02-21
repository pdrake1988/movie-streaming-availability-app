import React, {useState} from "react"
import { Dropdown } from "react-bootstrap";
import {Button, CloseButton, DropdownButton, Offcanvas} from "react-bootstrap";
import FilterByGenre from "./Genre/FilterByGenre";
import SortBy from "./Sort/SortBy";

interface SidebarProps {
    genre: string | null;
    sort: string;
    monetization: string;
    filterByGenre(genreNum: string | null): void;
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
                <Offcanvas.Body className={'bg-dark'}>
                    <FilterByGenre genre={props.genre} filterByGenre={props.filterByGenre}/>
                    <SortBy sort={props.sort} sortBy={props.sortBy}/>
                    <div className={'p-2'}>
                        {props.monetization === "flatrate" && <h3>Flatrate</h3>}
                        {props.monetization === "free" && <h3>Free</h3>}
                        {props.monetization === "ads" && <h3>Ads</h3>}
                        {props.monetization === "rent" && <h3>Rent</h3>}
                        {props.monetization === "buy" && <h3>Buy</h3>}
                        <DropdownButton title={'Monetization Type'} drop={'end'}>
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
