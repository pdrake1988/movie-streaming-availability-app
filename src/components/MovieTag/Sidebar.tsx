import React, {useState} from "react"
import {Button, Dropdown, DropdownButton, Offcanvas} from "react-bootstrap";

function Sidebar(props: any) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Button variant={'secondary'} onClick={handleShow}>Filter</Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <DropdownButton title={'Genre'} drop={'end'}>
                        <Dropdown.Item eventKey={1}><button onClick={() => props.filterByGenre(28)}>Action</button></Dropdown.Item>
                    </DropdownButton>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}
export default Sidebar
