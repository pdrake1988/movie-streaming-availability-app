import React, {useState} from "react"
import {Button, Dropdown, DropdownButton, Offcanvas} from "react-bootstrap";

function Sidebar(props: any) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={'col-3'}>
            <Button variant={'secondary'} onClick={handleShow}>Filter</Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <DropdownButton title={'Genre'} drop={'end'}>
                        <Dropdown.Item as={'button'} onClick={() => props.filterByGenre(0)}>Default</Dropdown.Item>
                        <Dropdown.Item as={'button'} onClick={() => props.filterByGenre(28)}>Action</Dropdown.Item>
                    </DropdownButton>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Sidebar
