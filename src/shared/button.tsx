import React from 'react';
import {Button} from 'react-bootstrap'
interface IProps {
    btnName: string
    btnSubmit:any;
}

export default class ButtonComponent extends React.Component<IProps, any>{
    constructor(props: any) {
        super(props);
        this.handleEvent=this.handleEvent.bind(this);
    }
    handleEvent(event:any){
        event.preventDefault();
        this.props.btnSubmit();
    }
    render() {
        return (
            <Button variant="primary" className="mb-3" onClick={(event)=>this.handleEvent(event)}>
                {this.props.btnName}
            </Button>
        )
    }
}