import React from 'react';
import { Modal } from 'react-bootstrap';

interface IProps {
    cartItems: any
}

interface IState {
}
export default class Cart extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="m-4">
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        {/* <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button> */}
                    </Modal.Footer>
                </Modal.Dialog>            </div>
        )
    }
}