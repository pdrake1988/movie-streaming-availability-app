import React, {useState} from "react"

function Offcanvas(props: any) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <button variant="secondary"></button>
        </React.Fragment>
    )
}
export default Offcanvas
