import React from 'react';
import {Button} from 'react-bootstrap';
import '../index.css'
interface IProps {
    btnName: string
    btnSubmit:any;
    className:string
}

export default class ButtonComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.handleEvent=this.handleEvent.bind(this);
    }
    handleEvent(event:any){
        event.preventDefault();
        this.props.btnSubmit(event);
    }
    render() {
        return (
            <Button variant={this.props.variant} onClick={(event)=>this.handleEvent(event)} className={this.props.className}>
                {this.props.btnName}
            </Button>
        )
    }
}