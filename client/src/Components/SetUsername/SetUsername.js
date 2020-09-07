import React from "react";
import Modal from "@material-ui/core/Modal";

export default function SetUsername(props) {
    const [open, setOpen] = React.useState(true);
        
    setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <h1>Set Username</h1>
            </Modal>
        </div>
    )
}